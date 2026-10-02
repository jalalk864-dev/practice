import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { CareerGantt } from '../components/CareerGantt';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { ClosingCta } from '../components/ClosingCta';
import { BankPartnersGrid } from '../components/BankPartnersGrid';

export function Experience() {
  useSeo(
    'Professional Experience',
    'Professional experience of Muhammad Jalal Khan: Sales Manager at Pharma Bez, Manager of Call Center Operations at BEEHUB, and roles at Pak-Qatar Takaful, EFU Life Assurance and Jubilee Life Insurance.'
  );

  return (
    <>
      <PageHeader
        label="Professional experience"
        title={
        <>
            Six roles. <em className="font-normal italic text-gold">One direction</em> — growth.
          </>
        }
        intro="From insurance and bancassurance coordination to managing 120-agent operations and leading pharmaceutical sales across Khyber Pakhtunkhwa." />
      
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <CareerGantt />
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Banking <em className="font-normal italic text-gold">partnerships</em>
          </h2>
          <p className="mt-3 max-w-2xl text-mist">Banks worked with across insurance, takaful and bancassurance roles.</p>
        </Reveal>
        <div className="mt-8">
          <BankPartnersGrid />
        </div>
        <p className="mt-4 text-xs text-mist">Logos are trademarks of their respective owners and are shown for identification only.</p>
      </section>
      <section className="mx-auto max-w-5xl px-6 pt-20">
        <Reveal>
          <h2 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">
            Role <em className="font-normal italic text-gold">by role</em>
          </h2>
        </Reveal>
        <ExperienceTimeline />
      </section>
      <ClosingCta />
    </>);

}