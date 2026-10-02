import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackgroundLighting } from './BackgroundLighting';
import { profile, portraits } from '../data/profile';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    if (document.getElementById('person-jsonld')) return;
    const script = document.createElement('script');
    script.id = 'person-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      email: `mailto:${profile.email}`,
      telephone: '+92-334-9171817',
      image: portraits.hero,
      address: { '@type': 'PostalAddress', addressLocality: 'Peshawar', addressRegion: 'Khyber Pakhtunkhwa', addressCountry: 'PK' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Peshawar' },
      knowsLanguage: ['English', 'Urdu', 'Pashto']
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-ink text-white">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to content
      </a>
      <BackgroundLighting />
      <Navbar />
      <main id="main" className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>);

}