import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { navItems } from '../data/navigation';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-[background-color,box-shadow,border-color] duration-200 sm:px-5 ${
        scrolled ? 'glass-strong' : 'border border-transparent'}`
        }>
        
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="Muhammad Jalal Khan — Home">
          <span className="glass-strong grid h-9 w-9 place-items-center rounded-full font-display text-sm font-semibold italic text-gold">
            JK
          </span>
          <span className="hidden whitespace-nowrap font-display text-base font-semibold sm:block">
            Muhammad <em className="font-normal italic text-gold">Jalal Khan</em>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.slice(0, -1).map((item) =>
          <li key={item.to}>
              <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
              `focus-ring relative whitespace-nowrap rounded-full px-3.5 py-2 text-sm transition-colors duration-150 ${
              isActive ? 'bg-white/[0.07] text-white' : 'text-mist hover:text-white'}`

              }>
              
                {item.label}
              </NavLink>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="focus-ring sheen hidden whitespace-nowrap rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-gold-soft sm:inline-flex">
            
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="focus-ring glass grid h-10 w-10 place-items-center rounded-full xl:hidden">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="glass-strong mx-auto mt-2 max-w-7xl rounded-3xl p-3 xl:hidden">
          
            <ul className="grid gap-1 sm:grid-cols-2">
              {navItems.map((item) =>
            <li key={item.to}>
                  <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                `focus-ring block rounded-2xl px-4 py-3 text-base ${isActive ? 'bg-white/[0.08] text-white' : 'text-mist hover:text-white'}`
                }>
                
                    {item.label}
                  </NavLink>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}