import React, { useState } from 'react';
import { CheckIcon, CopyIcon, ExternalLinkIcon, MailIcon } from 'lucide-react';
import { copyText, emailLinks, openMailto } from '../utils/email';
import { profile } from '../data/profile';

interface EmailOptionsProps {
  subject?: string;
  body?: string;
  onChoose?: () => void;
}

const row =
'focus-ring flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white transition-colors duration-150 hover:bg-white/[0.08]';

export function EmailOptions({ subject, body, onChoose }: EmailOptionsProps) {
  const [copied, setCopied] = useState(false);
  const links = emailLinks(subject, body);

  const copy = async () => {
    const ok = await copyText(profile.email);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <ul className="space-y-0.5" role="menu" aria-label="Email options">
      <li role="none">
        <button
          type="button"
          role="menuitem"
          className={row}
          onClick={() => {
            openMailto(links.mailto);
            onChoose?.();
          }}>
          
          <MailIcon className="h-4 w-4 text-gold" aria-hidden="true" />
          <span className="flex-1">Default email app</span>
        </button>
      </li>
      <li role="none">
        <a role="menuitem" href={links.gmail} target="_blank" rel="noopener noreferrer" className={row} onClick={onChoose}>
          <span className="grid h-4 w-4 place-items-center text-[11px] font-bold text-gold" aria-hidden="true">G</span>
          <span className="flex-1">Compose in Gmail</span>
          <ExternalLinkIcon className="h-3.5 w-3.5 text-mist" aria-hidden="true" />
        </a>
      </li>
      <li role="none">
        <a role="menuitem" href={links.outlook} target="_blank" rel="noopener noreferrer" className={row} onClick={onChoose}>
          <span className="grid h-4 w-4 place-items-center text-[11px] font-bold text-gold" aria-hidden="true">O</span>
          <span className="flex-1">Compose in Outlook</span>
          <ExternalLinkIcon className="h-3.5 w-3.5 text-mist" aria-hidden="true" />
        </a>
      </li>
      <li role="none" className="border-t border-white/[0.08] pt-0.5">
        <button type="button" role="menuitem" className={row} onClick={copy}>
          {copied ? <CheckIcon className="h-4 w-4 text-jade" aria-hidden="true" /> : <CopyIcon className="h-4 w-4 text-gold" aria-hidden="true" />}
          <span className="flex-1">{copied ? 'Copied to clipboard' : profile.email}</span>
        </button>
        <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
      </li>
    </ul>);

}