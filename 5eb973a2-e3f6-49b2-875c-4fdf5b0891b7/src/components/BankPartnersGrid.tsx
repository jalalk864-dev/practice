import React from 'react';
import { BankLogo } from './BankLogo';
import { Reveal } from './Reveal';
import { banks } from '../data/banks';
import { experience } from '../data/experience';

export function BankPartnersGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {banks.map((b, i) => {
        const roles = experience.filter((r) => r.partners?.includes(b.name));
        return (
          <Reveal key={b.name} as="li" delay={Math.min(i * 0.04, 0.24)}>
            <div className="glass flex h-full items-center gap-4 rounded-2xl p-5">
              <BankLogo name={b.name} size="lg" />
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-semibold text-white">{b.name}</p>
                {roles.map((r) =>
                <p key={r.id} className="truncate text-sm text-mist">
                    {r.company} · {r.start[0]}
                  </p>
                )}
              </div>
            </div>
          </Reveal>);

      })}
    </ul>);

}