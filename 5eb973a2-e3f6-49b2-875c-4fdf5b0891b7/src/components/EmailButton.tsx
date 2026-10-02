import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EmailOptions } from './EmailOptions';
import { emailLinks, isTouchDevice, openMailto } from '../utils/email';

interface EmailButtonProps {
  className: string;
  children: React.ReactNode;
  wrapperClassName?: string;
  align?: 'left' | 'right';
  side?: 'bottom' | 'top';
}

/**
 * Mobile: opens the default mail app directly.
 * Desktop: many computers have no default mail app configured, so a small menu
 * offers the default app, Gmail, Outlook on the web, or copying the address.
 */
export function EmailButton({ className, children, wrapperClassName = '', align = 'left', side = 'bottom' }: EmailButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const onClick = () => {
    if (isTouchDevice()) {
      openMailto(emailLinks().mailto);
      return;
    }
    setOpen((v) => !v);
  };

  return (
    <div ref={ref} className={`relative ${wrapperClassName}`}>
      <button type="button" onClick={onClick} aria-haspopup="menu" aria-expanded={open} className={className}>
        {children}
      </button>
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.97 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className={`absolute z-40 w-72 max-w-[calc(100vw-3rem)] rounded-2xl border border-white/10 bg-ink-800/95 p-1.5 shadow-2xl backdrop-blur-xl ${
          side === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} ${
          align === 'right' ? 'right-0' : 'left-0'}`}>
          
            <EmailOptions onChoose={() => setOpen(false)} />
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}