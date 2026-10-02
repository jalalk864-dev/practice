import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { TiltPortrait } from '../components/TiltPortrait';
import { ClosingCta } from '../components/ClosingCta';
import { languages, portraits, profile } from '../data/profile';

const chapters = [
{
  period: '2016 – 2019',
  title: 'Foundations in insurance & bancassurance',
  body: 'Began as Executive Coordinator at EFU Life Assurance within The Bank of Punjab and United Bank Limited, then led a team of 20 as Team Leader at Jubilee Life Insurance with Bank Alfalah, before returning to EFU Life in partnership with Faysal Bank.'
},
{
  period: '2019 – 2020',
  title: 'Islamic banking partnerships',
  body: 'As Sales Support Officer at Pak-Qatar Takaful, supported bancassurance operations across six Islamic banking partners and consistently achieved 90–95% of assigned sales targets.'
},
{
  period: '2020 – 2024',
  title: 'Operations leadership at scale',
  body: 'Managed end-to-end call centre operations for 120 agents at BEEHUB Call Center in Lahore, meeting 100% of quality benchmarks and reducing costs by 25–30%.'
},
{
  period: '2024 – Present',
  title: 'Driving pharmaceutical sales growth',
  body: 'As Sales Manager at Pharma Bez, leads sales across the Khyber Pakhtunkhwa territory, growing year-over-year revenue by 35–40% with a team of 20 representatives.'
}];


export function About() {
  useSeo(
    'About',
    'About Muhammad Jalal Khan — a sales and business development professional with over eight years across pharmaceutical, insurance and bancassurance sectors.'
  );

  return (
    <>
      <PageHeader
        label="About me"
        title={
        <>
            Leading teams, <em className="font-normal italic text-gold">building relationships,</em> delivering growth.
          </>
        } />
      

      <section className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
          <TiltPortrait src={portraits.about} alt="Muhammad Jalal Khan standing in a modern office" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
            <em className="italic">{profile.summary.split('. ')[0]}.</em>
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              He has a proven track record of leading sales and service teams, exceeding revenue and performance targets, and building strong working
              relationships with <strong className="font-semibold text-white">financial institutions, healthcare partners, and clients</strong>.
            </p>
            <p>{profile.strengths}</p>
            <p>{profile.goal}</p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.08] sm:grid-cols-4">
            {[
            { k: 'Based in', v: 'Peshawar, PK' },
            { k: 'Experience', v: '8+ years' },
            { k: 'Largest team', v: '120 agents' },
            { k: 'Languages', v: languages.join(', ') }].
            map((d) =>
            <div key={d.k} className="bg-ink-900 p-5">
                <dt className="text-xs text-mist">{d.k}</dt>
                <dd className="mt-1 font-medium text-white">{d.v}</dd>
              </div>
            )}
          </dl>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-28">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            The <em className="font-normal italic text-gold">career journey</em>
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {chapters.map((c, i) =>
          <Reveal as="li" key={c.period} delay={i * 0.05} className="flex h-full flex-col border-t border-gold/40 pt-6">
                <p className="text-sm tabular-nums text-gold">{c.period}</p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">{c.body}</p>
            </Reveal>
          )}
        </ol>
      </section>

      <ClosingCta />
    </>);

}