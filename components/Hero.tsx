"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { phoneHref, whatsappHref } from "@/lib/constants";
import { routes } from "@/lib/routes";
import { heroSlides } from "@/lib/hero-slides";
import { Button } from "@/components/ui/Button";

const INTERVAL_MS = 5500;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (i: number) => {
    if (i !== index) setIndex(i);
  };

  return (
    <section id="pocetna" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((item, i) => (
          <div
            key={item.image}
            className={`hero-slide-layer absolute inset-0 ${
              i === index ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={i === 0}
              className={`hero-slide-image object-cover object-center brightness-[0.52] ${
                i === index ? "hero-ken-burns-active" : ""
              }`}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="hero-blur-layer absolute inset-0 z-[2]" />
        <div className="hero-overlay absolute inset-0 z-[2]" />
        <div className="hero-vignette absolute inset-0 z-[2]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="mx-auto w-full max-w-7xl px-5 pb-36 pt-28 md:px-8 md:pb-40 md:pt-36 lg:pb-44">
          <div className="max-w-3xl">
            <div className="relative mb-4 grid [&>*]:col-start-1 [&>*]:row-start-1">
              {heroSlides.map((item, i) => (
                <p
                  key={`accent-${item.image}`}
                  className={`hero-copy-block font-accent text-[2rem] leading-none text-gradient-brand-v md:text-[2.75rem] ${
                    i === index ? "hero-copy-block-active" : "hero-copy-block-inactive"
                  }`}
                  aria-hidden={i !== index}
                >
                  {item.accent}
                </p>
              ))}
            </div>

            <h1 className="font-heading mb-3 text-[clamp(2.75rem,11vw,7.5rem)] uppercase leading-[0.9] tracking-[0.12em] text-soft-white md:tracking-[0.14em]">
              Idolo
            </h1>

            <p className="font-heading mb-8 text-sm uppercase tracking-[0.35em] text-cream/75 md:text-base">
              Bistro Bar · Kruševac
            </p>

            <div className="gold-line mb-8 w-24" />

            <div className="relative mb-10 grid [&>*]:col-start-1 [&>*]:row-start-1">
              {heroSlides.map((item, i) => (
                <p
                  key={`desc-${item.image}`}
                  className={`hero-copy-block font-body max-w-md text-[15px] leading-[1.8] text-cream/80 md:text-lg ${
                    i === index ? "hero-copy-block-active" : "hero-copy-block-inactive"
                  }`}
                  aria-hidden={i !== index}
                >
                  {item.description}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={routes.menu}>Pogledaj meni</Button>
              <Button href={phoneHref()} variant="outline">
                Pozovi odmah
              </Button>
              <Button href={whatsappHref()} variant="whatsapp" target="_blank" rel="noopener noreferrer">
                Piši na WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-1 md:mt-10 md:gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slajd ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goToSlide(i)}
                className="flex h-11 w-11 items-center justify-center md:h-auto md:w-auto md:p-0"
              >
                <span
                  className={`block rounded-full transition-all duration-500 ease-out ${
                    i === index
                      ? "h-1.5 w-8 bg-gradient-45-brand md:h-1 md:w-8"
                      : "h-1.5 w-3 bg-cream/25 hover:bg-cream/45 md:h-1 md:w-3"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
