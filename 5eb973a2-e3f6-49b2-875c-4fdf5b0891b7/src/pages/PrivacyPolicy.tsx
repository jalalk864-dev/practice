import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { PolicyLayout } from '../components/PolicyLayout';
import { privacySections } from '../data/policies';

export function PrivacyPolicy() {
  useSeo('Privacy Policy', 'Privacy Policy for the personal website of Muhammad Jalal Khan.');
  return (
    <PolicyLayout
      label="Legal"
      title={
      <>
          Privacy <em className="font-normal italic text-gold">Policy</em>
        </>
      }
      sections={privacySections} />);


}