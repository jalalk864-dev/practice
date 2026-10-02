import React from 'react';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { EmailButton } from './EmailButton';
import { profile } from '../data/profile';

interface ContactButtonsProps {
  className?: string;
}

const base =
'focus-ring sheen inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition-[background-color,border-color,transform] duration-150 active:scale-[0.97]';

export function ContactButtons({ className = '' }: ContactButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={profile.whatsappHref} target="_blank" rel="noopener noreferrer" className={`${base} bg-gold text-ink hover:bg-gold-soft`}>
        <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
      <EmailButton className={`${base} glass-strong text-white hover:bg-white/10`}>
        <MailIcon className="h-4 w-4" aria-hidden="true" />
        Email
      </EmailButton>
      <a href={profile.phoneHref} className={`${base} glass text-white hover:bg-white/10`}>
        <PhoneIcon className="h-4 w-4" aria-hidden="true" />
        Call {profile.phoneDisplay}
      </a>
    </div>);

}