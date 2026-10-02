import React from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

interface Chip {
  value: string;
  label: string;
  className: string;
}

interface TiltPortraitProps {
  src: string;
  alt: string;
  chips?: Chip[];
  aspect?: string;
  priority?: boolean;
}

export function TiltPortrait({ src, alt, chips = [], aspect = 'aspect-[4/5]', priority }: TiltPortraitProps) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 20 };
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), spring);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), spring);
  const sheenX = useSpring(useTransform(mx, [0, 1], ['-40%', '40%']), spring);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass-strong relative rounded-[30px] p-2.5">
        
        <div className={`relative overflow-hidden rounded-[22px] bg-ink-800 ${aspect}`}>
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover object-[50%_22%]" />
          
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-ink/40" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            style={{ x: sheenX }}
            className="pointer-events-none absolute inset-[-20%] bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.16)_50%,transparent_60%)]" />
          
          <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/10" aria-hidden="true" />
        </div>
        {chips.map((chip, i) =>
        <motion.div
          key={chip.label}
          className={`glass-strong absolute rounded-2xl px-4 py-3 ${chip.className}`}
          style={{ transform: 'translateZ(50px)' }}
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}>
          
            <p className="font-display text-2xl font-semibold italic text-gold">{chip.value}</p>
            <p className="mt-0.5 whitespace-nowrap text-xs text-white/80">{chip.label}</p>
          </motion.div>
        )}
      </motion.div>
    </div>);

}