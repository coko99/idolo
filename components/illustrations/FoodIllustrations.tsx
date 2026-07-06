"use client";

import { useId } from "react";

type IllustrationProps = {
  className?: string;
};

function GoldDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFCC8E" />
        <stop offset="45%" stopColor="#D98000" />
        <stop offset="100%" stopColor="#C68E3E" />
      </linearGradient>
    </defs>
  );
}

export function CoffeeIllustration({ className = "h-full w-full" }: IllustrationProps) {
  const grad = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <GoldDefs id={grad} />
      <path
        d="M14 22h32c0 10-6 18-16 18s-16-8-16-18z"
        stroke={`url(#${grad})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M46 26h4a6 6 0 010 12h-4" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 14v4M28 12v6M36 14v4" stroke={`url(#${grad})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M22 44c2 3 6 5 10 5" stroke={`url(#${grad})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function ForkKnifeIllustration({ className = "h-full w-full" }: IllustrationProps) {
  const grad = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <GoldDefs id={grad} />
      <path d="M22 8v16a5 5 0 01-10 0V8" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 24v32" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M44 8l-8 18v30" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 26h16" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function WineIllustration({ className = "h-full w-full" }: IllustrationProps) {
  const grad = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <GoldDefs id={grad} />
      <path
        d="M18 12h28l-6 22a10 10 0 01-16 0L18 12z"
        stroke={`url(#${grad})`}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M32 34v16M24 54h16" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M26 20c2 4 10 4 12 0" stroke={`url(#${grad})`} strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

export function CroissantIllustration({ className = "h-full w-full" }: IllustrationProps) {
  const grad = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <GoldDefs id={grad} />
      <path
        d="M12 38c8-18 32-18 40 0-8 10-32 10-40 0z"
        stroke={`url(#${grad})`}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M18 36c6-8 22-8 28 0M22 32c4-5 16-5 20 0" stroke={`url(#${grad})`} strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

export function PlateIllustration({ className = "h-full w-full" }: IllustrationProps) {
  const grad = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <GoldDefs id={grad} />
      <circle cx="32" cy="34" r="18" stroke={`url(#${grad})`} strokeWidth="2.2" />
      <circle cx="32" cy="34" r="10" stroke={`url(#${grad})`} strokeWidth="1.8" opacity="0.7" />
      <path d="M26 14c2-4 10-4 12 0M24 10c4-6 16-6 20 0" stroke={`url(#${grad})`} strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function CocktailIllustration({ className = "h-full w-full" }: IllustrationProps) {
  const grad = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <GoldDefs id={grad} />
      <path d="M16 16l16 24 16-24H16z" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M32 40v12M24 54h16" stroke={`url(#${grad})`} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="42" cy="22" r="3" stroke={`url(#${grad})`} strokeWidth="1.6" />
    </svg>
  );
}
