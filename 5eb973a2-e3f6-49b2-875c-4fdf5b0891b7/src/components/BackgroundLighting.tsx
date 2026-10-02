import React from 'react';

export function BackgroundLighting() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)'
        }} />
      
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2"
        style={{ background: 'radial-gradient(closest-side, rgba(217,188,130,0.10), transparent)' }} />
      
      <div
        className="absolute right-[-200px] top-[40%] h-[500px] w-[600px]"
        style={{ background: 'radial-gradient(closest-side, rgba(169,203,234,0.06), transparent)' }} />
      
    </div>);

}