import React, { useState } from 'react';
import { ArrowUpRightIcon, CheckCircle2Icon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { EmailButton } from '../components/EmailButton';
import { EmailOptions } from '../components/EmailOptions';
import { portraits, profile } from '../data/profile';
import { emailLinks, isTouchDevice, openMailto } from '../utils/email';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const emptyForm = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  useSeo('Contact', 'Contact Muhammad Jalal Khan by WhatsApp, email (jalalk864@gmail.com) or phone (+92-334-9171817).');
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState<{subject: string;body: string;} | null>(null);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Please write a message of at least 10 characters.';
    setErrors(next);
    if (Object.keys(next).length) return;
    const subject = form.subject.trim() || `Website enquiry from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`;
    setDraft({ subject, body });
    if (isTouchDevice()) openMailto(emailLinks(subject, body).mailto);
  };

  const rowClass =
  'focus-ring glass sheen group flex w-full items-center gap-5 rounded-2xl p-5 text-left transition-colors duration-150 hover:bg-white/[0.07]';

  const rowContent = (Icon: typeof MailIcon, label: string, value: string) =>
  <>
      <span className="glass-strong grid h-12 w-12 shrink-0 place-items-center rounded-xl" aria-hidden="true">
        <Icon className="h-5 w-5 text-gold" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-mist">{label}</span>
        <span className="block truncate text-lg font-medium text-white">{value}</span>
      </span>
      <ArrowUpRightIcon
      className="h-5 w-5 text-mist transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
      aria-hidden="true" />
    
    </>;


  const field =
  'focus-ring mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 transition-colors duration-150 focus:border-gold/60';

  return (
    <>
      <PageHeader
        label="Contact"
        title={
        <>
            Let’s start a <em className="font-normal italic text-gold">conversation.</em>
          </>
        }
        intro="For roles, partnerships or professional enquiries — WhatsApp and email are the fastest ways to reach me." />
      
      <section className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <ul className="space-y-3">
            <li>
              <a href={profile.whatsappHref} target="_blank" rel="noopener noreferrer" className={rowClass}>
                {rowContent(MessageCircleIcon, 'WhatsApp', profile.phoneDisplay)}
              </a>
            </li>
            <li>
              <EmailButton className={rowClass} wrapperClassName="z-20">
                {rowContent(MailIcon, 'Email', profile.email)}
              </EmailButton>
            </li>
            <li>
              <a href={profile.phoneHref} className={rowClass}>
                {rowContent(PhoneIcon, 'Phone', profile.phoneDisplay)}
              </a>
            </li>
            <li className="flex items-center gap-5 rounded-2xl border border-white/[0.06] p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.04]" aria-hidden="true">
                <MapPinIcon className="h-5 w-5 text-gold" />
              </span>
              <span>
                <span className="block text-sm text-mist">Location</span>
                <span className="block text-lg font-medium text-white">{profile.location}</span>
              </span>
            </li>
          </ul>
          <div className="relative mt-6 hidden overflow-hidden rounded-3xl lg:block">
            <img src={portraits.contact} alt="Muhammad Jalal Khan seated in his office" loading="lazy" className="h-72 w-full object-cover object-[50%_25%]" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-strong rounded-[28px] p-7 sm:p-10">
            {draft ?
            <div className="flex min-h-[420px] flex-col items-start justify-center" role="status">
                <CheckCircle2Icon className="h-10 w-10 text-gold" aria-hidden="true" />
                <h2 className="mt-5 font-display text-3xl font-semibold">Your message is ready.</h2>
                <p className="mt-3 text-mist">Choose how you’d like to send it — your message will be prefilled.</p>
                <div className="mt-6 w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
                  <EmailOptions subject={draft.subject} body={draft.body} />
                </div>
                <button
                type="button"
                onClick={() => {
                  setDraft(null);
                  setForm(emptyForm);
                }}
                className="focus-ring mt-8 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors duration-150 hover:bg-white/10">
                
                  Write another message
                </button>
              </div> :

            <form onSubmit={submit} noValidate>
                <h2 className="font-display text-3xl font-semibold">
                  Send a <em className="font-normal italic text-gold">message</em>
                </h2>
                <p className="mt-2 text-sm text-mist">Send via your email app, Gmail or Outlook — your message is prefilled.</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm text-white/90">Name</label>
                    <input id="name" value={form.name} onChange={update('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} className={field} />
                    {errors.name && <p id="name-err" className="mt-1.5 text-sm text-red-300">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-white/90">Your email</label>
                    <input id="email" type="email" value={form.email} onChange={update('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} className={field} />
                    {errors.email && <p id="email-err" className="mt-1.5 text-sm text-red-300">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="text-sm text-white/90">Subject <span className="text-mist">(optional)</span></label>
                    <input id="subject" value={form.subject} onChange={update('subject')} className={field} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm text-white/90">Message</label>
                    <textarea id="message" rows={6} value={form.message} onChange={update('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} className={`${field} resize-y`} />
                    {errors.message && <p id="message-err" className="mt-1.5 text-sm text-red-300">{errors.message}</p>}
                  </div>
                </div>
                <button
                type="submit"
                className="focus-ring sheen mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-ink transition-[background-color,transform] duration-150 hover:bg-gold-soft active:scale-[0.98] sm:w-auto">
                
                  <MailIcon className="h-4 w-4" aria-hidden="true" />
                  Compose email
                </button>
              </form>
            }
          </div>
        </Reveal>
      </section>
    </>);

}