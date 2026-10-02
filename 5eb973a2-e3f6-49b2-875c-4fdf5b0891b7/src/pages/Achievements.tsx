import React from 'react';
import { motion } from 'framer-motion';
import { useSeo } from '../hooks/useSeo';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { ClosingCta } from '../components/ClosingCta';
import { highlights } from '../data/profile';

export function Achievements() {
  useSeo(
    'Achievements',
    'Career achievements of Muhammad Jalal Khan, including 35–40% year-over-year revenue growth, managing 120 agents, 25–30% cost reduction and consistent achievement of sales targets.'
  );

  return (
    <>
      <PageHeader
        label="Achievements"
        title={
        <>
            Results that <em className="font-normal italic text-gold">speak for themselves.</em>
          </>
        }
        intro="Measurable outcomes delivered across pharmaceutical sales, call centre operations and bancassurance roles." />
      
      <section className="mx-auto max-w-7xl px-6">
        <ul className="border-t hairline">
          {highlights.map((h, i) =>
          <Reveal
            as="li"
            key={`${h.label}-${i}`}
            delay={Math.min(i * 0.04, 0.2)}
            className="grid items-center gap-4 border-b hairline py-7 md:grid-cols-[220px_1fr_260px] md:gap-10">
            
                <p className="font-display text-5xl font-semibold italic text-gold">{h.value}</p>
                <div>
                  <p className="text-xl font-medium text-white">{h.label}</p>
                  <p className="mt-1 text-sm text-mist">{h.context}</p>
                </div>
                {h.fill !== undefined ?
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                    <motion.div
                className="h-full origin-left rounded-full bg-gold"
                style={{ width: `${h.fill}%` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.1 }} />
              
                  </div> :

            <span className="hidden md:block" />
            }
            </Reveal>
          )}
        </ul>
      </section>
      <ClosingCta />
    </>);

}