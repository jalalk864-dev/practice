import React from 'react';
import { Reveal } from './Reveal';
import { ContactButtons } from './ContactButtons';
import { portraits, profile } from '../data/profile';

export function ClosingCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-24">
      <Reveal>
        <div className="glass-strong grid rounded-[32px] lg:grid-cols-[1.3fr_1fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Let’s talk about your <em className="font-normal italic text-gold">next growth chapter.</em>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-mist">{profile.goal}</p>
            <ContactButtons className="mt-8" />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-b-[32px] lg:rounded-bl-none lg:rounded-r-[32px]">
            <img
              src={portraits.closing}
              alt="Muhammad Jalal Khan in a professional office setting"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[50%_25%]" />
            
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden="true" />
          </div>
        </div>
      </Reveal>
    </section>);

}