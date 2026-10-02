import React, { useState } from 'react';
import { banks } from '../data/banks';

interface BankLogoProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { box: 'h-6 w-6 rounded-md', img: 'h-4 w-4', text: 'text-[8px]' },
  md: { box: 'h-9 w-9 rounded-lg', img: 'h-6 w-6', text: 'text-[10px]' },
  lg: { box: 'h-14 w-14 rounded-2xl', img: 'h-9 w-9', text: 'text-xs' }
};

export function BankLogo({ name, size = 'md' }: BankLogoProps) {
  const bank = banks.find((b) => b.name === name);
  const [failed, setFailed] = useState(false);
  const s = sizes[size];

  return (
    <span className={`grid shrink-0 place-items-center bg-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)] ${s.box}`} aria-hidden="true">
      {bank && !failed ?
      <img
        src={`https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128`}
        alt=""
        loading="lazy"
        width={36}
        height={36}
        onError={() => setFailed(true)}
        className={`${s.img} object-contain`} /> :


      <span className={`font-bold tracking-tight text-ink ${s.text}`}>{bank?.initials ?? name.slice(0, 2).toUpperCase()}</span>
      }
    </span>);

}