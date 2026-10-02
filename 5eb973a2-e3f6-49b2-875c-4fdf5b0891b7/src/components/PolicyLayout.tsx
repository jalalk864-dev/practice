import React from 'react';
import { InfoIcon } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { policyUpdated } from '../data/policies';
import type { PolicySection } from '../types/profile';

interface PolicyLayoutProps {
  label: string;
  title: React.ReactNode;
  sections: PolicySection[];
}

export function PolicyLayout({ label, title, sections }: PolicyLayoutProps) {
  return (
    <>
      <PageHeader label={label} title={title} intro={`Last updated: ${policyUpdated}`} />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[260px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-28 space-y-2 border-l hairline pl-4 text-sm">
            {sections.map((s, i) =>
            <li key={s.heading}>
                <a href={`#section-${i}`} className="focus-ring rounded text-mist hover:text-white">{s.heading}</a>
              </li>
            )}
          </ul>
        </nav>
        <div className="max-w-3xl">
          <aside className="glass flex gap-4 rounded-2xl border-gold/30 p-5" role="note">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-white/85">
              <strong className="text-white">Please review before publishing.</strong> This page uses general wording. It should be reviewed and
              customised to reflect the website’s actual data collection, hosting, analytics, cookies, and third-party services, and checked against
              the laws that apply to you. It is not legal advice.
            </p>
          </aside>
          {sections.map((s, i) =>
          <section key={s.heading} id={`section-${i}`} className="scroll-mt-28 border-b hairline py-8 last:border-0">
              <h2 className="font-display text-2xl font-semibold">{s.heading}</h2>
              {s.paragraphs.map((p) =>
            <p key={p} className="mt-3 leading-relaxed text-white/80">{p}</p>
            )}
              {s.list &&
            <ul className="mt-3 space-y-2">
                  {s.list.map((item) =>
              <li key={item} className="flex gap-3 leading-relaxed text-white/80">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
              )}
                </ul>
            }
            </section>
          )}
        </div>
      </div>
    </>);

}