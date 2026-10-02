import React from 'react';
import {
  BarChart3Icon,
  BoxesIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  LayoutGridIcon,
  MailIcon,
  PresentationIcon,
  UsersRoundIcon } from
'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { ClosingCta } from '../components/ClosingCta';
import { competencyGroups, languages, technicalSkills } from '../data/profile';

const icons = {
  excel: FileSpreadsheetIcon,
  word: FileTextIcon,
  powerpoint: PresentationIcon,
  outlook: MailIcon,
  powerbi: BarChart3Icon,
  crm: UsersRoundIcon,
  google: LayoutGridIcon,
  sap: BoxesIcon
};

export function Skills() {
  useSeo(
    'Skills',
    'Skills of Muhammad Jalal Khan: sales & business development, team leadership, client relationship management, bancassurance operations, Excel (Advanced), Power BI, Salesforce, HubSpot, MS Dynamics and SAP.'
  );

  return (
    <>
      <PageHeader
        label="Skills"
        title={
        <>
            Core competencies & <em className="font-normal italic text-gold">technical tools.</em>
          </>
        } />
      

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {competencyGroups.map((g, i) =>
          <Reveal key={g.title} delay={i * 0.05}>
              <div className="glass flex h-full flex-col rounded-3xl p-7 sm:p-8">
                <h2 className="font-display text-3xl font-semibold italic text-gold">{g.title}</h2>
                <ul className="mt-6 divide-y divide-white/[0.08]">
                  {g.items.map((item) =>
                <li key={item} className="py-3.5 text-lg text-white">{item}</li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-24">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Technical <em className="font-normal italic text-gold">toolkit</em>
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technicalSkills.map((t, i) => {
            const Icon = icons[t.icon];
            return (
              <Reveal as="li" key={t.name} delay={Math.min(i * 0.04, 0.24)} className="glass flex h-full items-start gap-4 rounded-2xl p-5">
                  <span className="glass-strong grid h-11 w-11 shrink-0 place-items-center rounded-xl" aria-hidden="true">
                    <Icon className="h-5 w-5 text-ice" />
                  </span>
                  <div>
                    <p className="font-medium text-white">{t.name}</p>
                    {'note' in t && t.note && <p className="mt-0.5 text-sm text-mist">{t.note}</p>}
                  </div>
              </Reveal>);

          })}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-24">
        <Reveal className="flex flex-col gap-6 border-t hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-semibold">
            <em className="font-normal italic text-gold">Languages</em>
          </h2>
          <ul className="flex flex-wrap gap-3">
            {languages.map((l) =>
            <li key={l} className="glass rounded-full px-5 py-2.5">{l}</li>
            )}
          </ul>
        </Reveal>
      </section>

      <ClosingCta />
    </>);

}