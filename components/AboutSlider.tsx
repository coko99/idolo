"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { aboutSlides } from "@/lib/about-slides";

const INTERVAL_MS = 5000;

export function AboutSlider() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % aboutSlides.length);
        setVisible(true);
      }, 400);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === index) return;
    setVisible(false);
    window.setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, 300);
  };

  const slide = aboutSlides[index];

  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-none">
      <div className="pointer-events-none absolute -inset-1 rounded-[1.85rem] bg-gradient-45-frame md:-inset-2" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-grad-peach/15 bg-espresso shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
        {aboutSlides.map((item, i) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index && visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={i === 0}
              className={`about-slide-image object-cover object-center ${
                i === index && visible ? "about-slide-active" : ""
              }`}
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
          </div>
        ))}

        <div className="about-slide-caption absolute inset-x-0 bottom-0 bg-gradient-45-fade-dark px-5 pb-5 pt-14" />

        <div
          className={`absolute inset-x-0 bottom-0 px-5 pb-5 transition-all duration-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <p className="font-heading mb-3 text-xs uppercase tracking-[0.22em] text-gradient">
            {slide.label}
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {aboutSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slika ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-8 bg-gradient-45-brand"
                      : "w-2 bg-cream/25 hover:bg-cream/50"
                  }`}
                />
              ))}
            </div>
            <p className="font-body text-[10px] uppercase tracking-[0.16em] text-cream/45">
              {index + 1} / {aboutSlides.length}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 -right-1 z-10 hidden rounded-full border border-grad-peach/30 bg-espresso/95 px-6 py-3 shadow-lg backdrop-blur-sm md:block">
        <p className="font-accent text-2xl text-gradient">since bistro</p>
      </div>
    </div>
  );
}
