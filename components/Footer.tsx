import Image from "next/image";
import { BrandCredit } from "@/components/BrandCredit";
import { phoneHref, SITE, whatsappHref } from "@/lib/constants";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex max-w-sm flex-col items-center gap-5 md:items-start">
            <div className="relative h-16 w-16">
              <Image
                src={images.logoHeader}
                alt={SITE.name}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <p className="font-accent text-3xl text-gradient-brand-v md:text-4xl">caffe idolo bistro</p>
            <p className="font-body text-sm leading-relaxed text-cream/45">
              Kafa, doručak, hrana i piće u srcu Kruševca.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gold/60">Adresa</p>
            <p className="font-body text-sm text-cream/65">{SITE.address}</p>
            <a
              href={phoneHref()}
              className="mt-3 inline-block font-heading text-xl tracking-[0.08em] text-cream transition-colors hover:text-gold"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="gold-line my-10 opacity-25" />

        <div className="mb-10 flex flex-col items-center gap-3">
          <p className="font-body text-[10px] uppercase tracking-[0.24em] text-cream/30">Powered by</p>
          <BrandCredit />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="font-body text-[11px] uppercase tracking-[0.14em] text-cream/35">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8">
            <a href={phoneHref()} className="font-body text-[11px] uppercase tracking-[0.16em] text-cream/40 transition-colors hover:text-gold">
              Pozovi
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] uppercase tracking-[0.16em] text-cream/40 transition-colors hover:text-gold"
            >
              WhatsApp
            </a>
            <a
              href={SITE.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] uppercase tracking-[0.16em] text-cream/40 transition-colors hover:text-gold"
            >
              Google recenzija
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] uppercase tracking-[0.16em] text-cream/40 transition-colors hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
