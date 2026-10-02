import React from 'react';
import { GraduationCapIcon, LanguagesIcon } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { TiltPortrait } from '../components/TiltPortrait';
import { ClosingCta } from '../components/ClosingCta';
import { education, languages, portraits } from '../data/profile';

export function Education() {
  useSeo('Education', 'Education of Muhammad Jalal Khan: Master of Arts and Bachelor of Arts from the University of Peshawar, Pakistan.');

  return (
    <>
      <PageHeader
        label="Education"
        title={
        <>
            Grounded at the <em className="font-normal italic text-gold">University of Peshawar.</em>
          </>
        } />
      
      <section className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <ol className="relative space-y-6 border-l hairline pl-8">
            {education.map((e, i) =>
            <Reveal as="li" key={e.degree} delay={i * 0.05} className="relative">
                  <span className="glass-strong absolute -left-[50px] top-7 grid h-9 w-9 place-items-center rounded-full" aria-hidden="true">
                    <GraduationCapIcon className="h-4 w-4 text-gold" />
                  </span>
                  <article className="glass rounded-3xl p-7 sm:p-9">
                    <p className="text-sm tabular-nums text-gold">{e.period}</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{e.degree}</h2>
                    <p className="mt-2 font-display text-lg italic text-white/80">{e.institution}</p>
                  </article>
              </Reveal>
            )}
          </ol>

          <Reveal className="mt-14">
            <div className="flex items-center gap-3">
              <LanguagesIcon className="h-5 w-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-2xl font-semibold">Languages</h2>
            </div>
            <ul className="mt-5 flex flex-wrap gap-3">
              {languages.map((l) =>
              <li key={l} className="glass rounded-full px-5 py-2.5 text-base">{l}</li>
              )}
            </ul>
            <p className="mt-4 text-sm text-mist">Strong written and spoken English.</p>
          </Reveal>
        </div>
        <Reveal delay={0.05} className="mx-auto w-full max-w-sm lg:max-w-none">
          <TiltPortrait src={portraits.education} alt="Muhammad Jalal Khan seated in an executive office" />
        </Reveal>
      </section>
      <ClosingCta />
    </>);

}