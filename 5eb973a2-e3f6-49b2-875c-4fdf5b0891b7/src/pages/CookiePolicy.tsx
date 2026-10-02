import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { PolicyLayout } from '../components/PolicyLayout';
import { cookieSections } from '../data/policies';

export function CookiePolicy() {
  useSeo('Cookie Policy', 'Cookie Policy for the personal website of Muhammad Jalal Khan.');
  return (
    <PolicyLayout
      label="Legal"
      title={
      <>
          Cookie <em className="font-normal italic text-gold">Policy</em>
        </>
      }
      sections={cookieSections} />);


}