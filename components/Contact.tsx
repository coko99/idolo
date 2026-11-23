import Image from "next/image";
import { phoneHref, SITE, whatsappHref } from "@/lib/constants";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={images.contact}
          alt=""
          fill
          className="contact-bg-image scale-110 object-cover object-center"
          sizes="100vw"
        />
        <div className="contact-blur-layer absolute inset-0" />
        <div className="contact-overlay absolute inset-0" />
        <div className="contact-vignette absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          dark
          accent="Kontakt"
          title="Kako do nas"
          description="Imaš pitanje ili želiš da poručiš? Pozovi nas ili pošalji poruku na WhatsApp."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <div className="space-y-4">
            {[
              {
                label: "Lokacija",
                value: (
                  <a
                    href={SITE.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-grad-peach"
                  >
                    {SITE.address}
                  </a>
                ),
              },
              {
                label: "Radno vreme",
                value: (
                  <>
                    {SITE.hours.weekdays}
                    <br />
                    {SITE.hours.weekend}
                    <br />
                    <span className="text-cream/45">{SITE.hours.kitchen}</span>
                  </>
                ),
              },
              {
                label: "Telefon",
                value: (
                  <a
                    href={phoneHref()}
                    className="font-heading text-2xl tracking-[0.08em] text-gradient transition-opacity hover:opacity-80"
                  >
                    {SITE.phoneDisplay}
                  </a>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="card-dark rounded-2xl p-7 md:p-8">
                <p className="font-body mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-grad-peach/85">
                  {item.label}
                </p>
                <div className="font-body text-[15px] leading-[1.75] text-cream/75">
                  {item.value}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button href={phoneHref()} className="flex-1 sm:min-w-[10rem]">
                Pozovi odmah
              </Button>
              <Button
                href={whatsappHref()}
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:min-w-[10rem]"
              >
                WhatsApp
              </Button>
              <Button
                href={SITE.googleReview}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:min-w-[10rem]"
              >
                Ostavi recenziju
              </Button>
            </div>

            <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:gap-6">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/55 transition-colors hover:text-grad-peach"
              >
                <span className="h-px w-8 bg-gradient-45-accent-line opacity-60" />
                Prati nas na Instagramu
              </a>
              <a
                href={SITE.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/55 transition-colors hover:text-grad-peach"
              >
                <span className="h-px w-8 bg-gradient-45-accent-line opacity-60" />
                Recenzija na Google-u
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-grad-peach/15 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <iframe
              title="Mapa — Idolo Bistro Bar, Kruševac"
              src={SITE.mapEmbed}
              width="100%"
              height="100%"
              className="min-h-[300px] w-full opacity-90 contrast-[1.05] saturate-[0.85] md:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center border-t border-grad-peach/15 bg-black/40 px-4 py-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-grad-peach transition-colors hover:bg-black/55"
            >
              Otvori u Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
