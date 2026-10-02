import React from 'react';
import { Link } from 'react-router-dom';
import { legalItems, navItems } from '../data/navigation';
import { profile } from '../data/profile';
import { EmailButton } from './EmailButton';

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t hairline">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">
            Muhammad <em className="font-normal italic text-gold">Jalal Khan</em>
          </p>
          <p className="mt-2 text-sm text-mist">{profile.title}</p>
          <p className="mt-1 text-sm text-mist">{profile.location}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-white">Pages</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) =>
            <li key={item.to}>
                <Link to={item.to} className="focus-ring rounded text-mist transition-colors duration-150 hover:text-white">
                  {item.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={profile.phoneHref} className="focus-ring rounded text-mist hover:text-white">{profile.phoneDisplay}</a>
            </li>
            <li>
              <EmailButton side="top" className="focus-ring rounded text-mist transition-colors duration-150 hover:text-white">
                {profile.email}
              </EmailButton>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Muhammad Jalal Khan. All rights reserved.</p>
          <ul className="flex gap-5">
            {legalItems.map((item) =>
            <li key={item.to}>
                <Link to={item.to} className="focus-ring rounded hover:text-white">{item.label}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}