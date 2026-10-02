import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  label: string;
  title: React.ReactNode;
  intro?: string;
  aside?: React.ReactNode;
}

export function PageHeader({ label, title, intro, aside }: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-36 lg:pt-44">
      <div className={`grid items-end gap-10 ${aside ? 'lg:grid-cols-[1.4fr_1fr]' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
          
          <p className="font-display text-lg italic text-gold">{label}</p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{intro}</p>}
        </motion.div>
        {aside}
      </div>
    </section>);

}