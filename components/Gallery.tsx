"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/images";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galerija" className="bg-deep-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          dark
          accent="Galerija"
          title="Ukus, ambijent, atmosfera"
          description="Hrana, kafa, piće, enterijer i detalji serviranja — toplo, prirodno i moderno."
        />

        <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {images.gallery.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative mb-3 block w-full overflow-hidden rounded-xl break-inside-avoid md:mb-4"
            >
              <div className={`relative w-full ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-45-fade-dark p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-body text-left text-[11px] uppercase tracking-[0.12em] text-cream/75">
                    {img.alt}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/96 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 font-body text-[11px] uppercase tracking-[0.18em] text-cream/50 transition-colors hover:text-cream"
          >
            Zatvori
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + images.gallery.length) % images.gallery.length);
            }}
            className="absolute left-4 z-10 hidden rounded-full border border-gold/20 px-4 py-3 font-body text-sm text-cream md:block"
            aria-label="Prethodna"
          >
            ←
          </button>
          <div className="relative h-[75vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images.gallery[lightbox].src}
              alt={images.gallery[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.gallery.length);
            }}
            className="absolute right-4 z-10 hidden rounded-full border border-gold/20 px-4 py-3 font-body text-sm text-cream md:block"
            aria-label="Sledeća"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
