import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';
import { BankLogo } from './BankLogo';
import { experience, sectors } from '../data/experience';
import type { SectorId } from '../types/profile';

type Filter = 'all' | SectorId;

export function ExperienceTimeline() {
  const [filter, setFilter] = useState<Filter>('all');
  const roles = useMemo(() => filter === 'all' ? experience : experience.filter((r) => r.sector === filter), [filter]);
  const filters: {id: Filter;label: string;}[] = [
  { id: 'all', label: `All roles (${experience.length})` },
  ...(Object.keys(sectors) as SectorId[]).map((id) => ({ id, label: sectors[id].label }))];


  return (
    <div>
      <div role="tablist" aria-label="Filter by sector" className="flex flex-wrap gap-2">
        {filters.map((f) =>
        <button
          key={f.id}
          role="tab"
          aria-selected={filter === f.id}
          onClick={() => setFilter(f.id)}
          className={`focus-ring whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors duration-150 ${
          filter === f.id ? 'bg-white text-ink' : 'glass text-mist hover:text-white'}`
          }>
          
            {f.label}
          </button>
        )}
      </div>

      <ol className="relative mt-10 border-l hairline pl-6 sm:pl-10">
        <AnimatePresence mode="popLayout" initial={false}>
          {roles.map((r, i) => {
            const sector = sectors[r.sector];
            const Icon = sector.icon;
            return (
              <motion.li
                key={r.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1], delay: Math.min(i * 0.04, 0.2) }}
                className="relative pb-8 last:pb-0">
                
                <span
                  className="glass-strong absolute -left-[42px] top-6 grid h-9 w-9 place-items-center rounded-full sm:-left-[58px]"
                  aria-hidden="true">
                  
                  <Icon className="h-4 w-4" style={{ color: sector.color }} />
                </span>
                <article className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{ color: sector.color }}>{sector.label}</p>
                      <h3 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{r.role}</h3>
                      <p className="mt-1 text-base text-white/85">
                        {r.company}
                        {r.partnership && <em className="font-display italic text-mist"> — {r.partnership}</em>}
                      </p>
                    </div>
                    <div className="shrink-0 lg:text-right">
                      <p className="text-sm font-medium tabular-nums text-white">{r.period}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-mist lg:justify-end">
                        <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {r.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto]">
                    <ul className="space-y-3">
                      {r.bullets.map((b) =>
                      <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {b}
                        </li>
                      )}
                    </ul>
                    {r.metrics.length > 0 &&
                    <dl className="flex gap-6 border-t hairline pt-5 lg:w-44 lg:flex-col lg:gap-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                        {r.metrics.map((m) =>
                      <div key={m.label}>
                            <dt className="text-xs text-mist">{m.label}</dt>
                            <dd className="font-display text-2xl font-semibold italic text-gold">{m.value}</dd>
                          </div>
                      )}
                      </dl>
                    }
                  </div>

                  {r.partners &&
                  <div className="mt-6 flex flex-wrap gap-2 border-t hairline pt-5">
                      {r.partners.map((p) =>
                    <span key={p} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-white/85">
                          <BankLogo name={p} size="sm" />
                          {p}
                        </span>
                    )}
                    </div>
                  }
                </article>
              </motion.li>);

          })}
        </AnimatePresence>
      </ol>
    </div>);

}