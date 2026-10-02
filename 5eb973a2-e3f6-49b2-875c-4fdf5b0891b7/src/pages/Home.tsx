import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { ContactButtons } from '../components/ContactButtons';
import { TiltPortrait } from '../components/TiltPortrait';
import { Reveal } from '../components/Reveal';
import { CareerGantt } from '../components/CareerGantt';
import { ClosingCta } from '../components/ClosingCta';
import { BankLogo } from '../components/BankLogo';
import { competencyGroups, portraits, profile } from '../data/profile';
import { banks } from '../data/banks';

const ease = [0.23, 1, 0.32, 1] as const;

export function Home() {
  useSeo(
    'Sales & Business Development Manager',
    'Muhammad Jalal Khan — Sales & Business Development Manager with 8+ years across pharmaceutical, insurance and bancassurance sectors in Pakistan. Team leadership, revenue growth and operations.'
  );

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pt-40">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="flex items-center gap-2 text-sm text-mist">
            
            <MapPinIcon className="h-4 w-4 text-gold" aria-hidden="true" />
            Peshawar, Pakistan · Open to opportunities in New Brunswick, Canada
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.06 }}
            className="mt-6 font-display text-[3.25rem] font-semibold leading-[0.95] tracking-tight sm:text-7xl xl:text-[5.75rem]">
            
            Muhammad
            <br />
            <em className="font-normal italic text-gold">Jalal Khan</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.12 }}
            className="mt-6 text-xl font-medium text-white sm:text-2xl">
            
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.16 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-mist">
            
            Results-driven professional with <strong className="font-semibold text-white">over eight years</strong> of progressive experience across
            the <em className="font-display italic text-white">pharmaceutical, insurance and bancassurance</em> sectors — leading sales and service
            teams and exceeding revenue and performance targets.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease, delay: 0.2 }}>
            <ContactButtons className="mt-8" />
            <Link
              to="/experience"
              className="focus-ring group mt-6 inline-flex items-center gap-2 rounded text-sm font-medium text-white/90 hover:text-gold">
              
              Explore the full career
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease, delay: 0.1 }}
          className="mx-auto w-full max-w-md px-6 sm:px-10 lg:max-w-none lg:px-6">
          
          <TiltPortrait
            src={portraits.hero}
            alt="Professional portrait of Muhammad Jalal Khan, Sales & Business Development Manager"
            priority
            chips={[
            { value: '8+ yrs', label: 'Progressive experience', className: '-left-6 top-10 sm:-left-10' },
            { value: '120', label: 'Agents managed', className: '-right-4 top-1/2 sm:-right-8' },
            { value: '35–40%', label: 'YoY revenue growth', className: '-left-4 bottom-10 sm:-left-8' }]
            } />
          
        </motion.div>
      </section>

      {/* Partners marquee */}
      <section aria-label="Banking partners" className="border-y hairline py-6">
        <p className="sr-only">Banking partners across bancassurance roles: {banks.map((b) => b.name).join(', ')}</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
            {[...banks, ...banks].map((b, i) =>
            <span key={i} className="glass flex items-center gap-3 whitespace-nowrap rounded-full py-1.5 pl-1.5 pr-5">
                <BankLogo name={b.name} size="md" />
                <span className="font-display text-lg italic text-white/80">{b.name}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-6 pt-24">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Impact, <em className="font-normal italic text-gold">measured</em> in results.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="glass-strong sheen flex h-full flex-col rounded-[28px] p-8 sm:p-10">
              <p className="text-sm text-mist">Current role · Pharma Bez Pvt Ltd</p>
              <p className="mt-6 font-display text-7xl font-semibold italic text-gold sm:text-8xl">35–40%</p>
              <p className="mt-3 text-xl font-medium">Year-over-year revenue growth</p>
              <p className="mt-auto pt-8 text-sm leading-relaxed text-mist">
                Leading sales operations across the Khyber Pakhtunkhwa territory with a team of 20 representatives, consistently achieving 100% of
                annual sales targets.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.05}>
            <ul className="glass grid h-full grid-cols-1 rounded-[28px] sm:grid-cols-2">
              {[
              { v: '120', l: 'Call centre agents managed', c: 'BEEHUB Call Center' },
              { v: '25–30%', l: 'Operating cost reduction', c: 'BEEHUB Call Center' },
              { v: '6', l: 'Islamic banking partners supported', c: 'Pak-Qatar Takaful' },
              { v: 'Up to 50%', l: 'Uplift in training, sales & hiring outcomes', c: 'BEEHUB Call Center' }].
              map((s, i) =>
              <li
                key={s.l}
                className={`p-7 sm:p-8 ${i < 2 ? 'border-b hairline' : i === 2 ? 'border-b hairline sm:border-b-0' : ''} ${i % 2 === 0 ? 'sm:border-r' : ''} hairline`}>
                
                  <p className="font-display text-4xl font-semibold text-white">{s.v}</p>
                  <p className="mt-2 text-base text-white/85">{s.l}</p>
                  <p className="mt-1 text-sm text-mist">{s.c}</p>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
        <Reveal className="mt-6">
          <Link to="/achievements" className="focus-ring group inline-flex items-center gap-2 rounded text-sm font-medium text-white/90 hover:text-gold">
            See all achievements
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* Expertise */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Key <em className="font-normal italic text-gold">expertise</em>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">{profile.strengths}</p>
          <Link to="/skills" className="focus-ring group mt-6 inline-flex items-center gap-2 rounded text-sm font-medium text-white/90 hover:text-gold">
            Skills & tools
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="border-t hairline">
            {competencyGroups.flatMap((g) =>
            g.items.map((item) =>
            <li key={item} className="flex items-baseline justify-between gap-6 border-b hairline py-4">
                  <span className="text-lg text-white">{item}</span>
                  <span className="shrink-0 font-display text-sm italic text-mist">{g.title}</span>
                </li>
            )
            )}
          </ul>
        </Reveal>
      </section>

      {/* Career */}
      <section className="mx-auto max-w-7xl px-6 pt-28">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A decade-long <em className="font-normal italic text-gold">trajectory</em>
          </h2>
          <Link to="/experience" className="focus-ring group inline-flex items-center gap-2 rounded text-sm font-medium text-white/90 hover:text-gold">
            Full experience
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
        <Reveal className="mt-10">
          <CareerGantt />
        </Reveal>
      </section>

      <ClosingCta />
    </>);

}