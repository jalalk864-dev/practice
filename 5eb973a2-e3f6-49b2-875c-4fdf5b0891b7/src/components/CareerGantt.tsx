import React from 'react';
import { motion } from 'framer-motion';
import { experience, sectors } from '../data/experience';

const toIndex = ([y, m]: [number, number]) => y * 12 + (m - 1);

export function CareerGantt() {
  const now = new Date();
  const nowIdx = toIndex([now.getFullYear(), now.getMonth() + 1]);
  const min = toIndex([2016, 1]);
  const max = (now.getFullYear() + 1) * 12;
  const span = max - min;
  const ticks: number[] = [];
  for (let y = 2016; y <= now.getFullYear() + 1; y += 2) ticks.push(y);
  const rows = [...experience].reverse();

  return (
    <figure className="glass rounded-3xl p-5 sm:p-8">
      <figcaption className="sr-only">
        Career timeline from February 2016 to the present across insurance, takaful, call centre operations and pharmaceutical sales.
      </figcaption>
      <div className="relative md:pl-56">
        <div className="relative mb-4 hidden h-5 md:block" aria-hidden="true">
          {ticks.map((y) =>
          <span
            key={y}
            className="absolute -translate-x-1/2 text-xs tabular-nums text-mist"
            style={{ left: `${(y * 12 - min) / span * 100}%` }}>
            
              {y}
            </span>
          )}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden md:left-56 md:block" aria-hidden="true">
          {ticks.map((y) =>
          <span key={y} className="absolute top-8 bottom-0 w-px bg-white/[0.06]" style={{ left: `${(y * 12 - min) / span * 100}%` }} />
          )}
        </div>
        <ul className="relative space-y-4">
          {rows.map((r, i) => {
            const s = toIndex(r.start);
            const e = r.end ? toIndex(r.end) + 1 : nowIdx + 1;
            const color = sectors[r.sector].color;
            return (
              <li key={r.id} className="md:relative">
                <div className="mb-1.5 md:absolute md:-left-56 md:top-1/2 md:mb-0 md:w-52 md:-translate-y-1/2">
                  <p className="truncate text-sm font-medium text-white">{r.role}</p>
                  <p className="truncate text-xs text-mist">{r.company}</p>
                </div>
                <div className="relative h-7 rounded-full bg-white/[0.04]">
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: i * 0.05 }}
                    className="absolute inset-y-0 origin-left rounded-full"
                    style={{
                      left: `${(s - min) / span * 100}%`,
                      width: `${(e - s) / span * 100}%`,
                      backgroundColor: color,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.5), 0 0 0 1px rgba(255,255,255,0.1)`
                    }} />
                  
                  <span className="absolute inset-y-0 right-3 flex items-center text-[11px] text-mist md:hidden">{r.period}</span>
                </div>
              </li>);

          })}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t hairline pt-5 md:ml-56">
        {Object.entries(sectors).map(([id, s]) =>
        <span key={id} className="flex items-center gap-2 text-xs text-mist">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} aria-hidden="true" />
            {s.label}
          </span>
        )}
      </div>
    </figure>);

}