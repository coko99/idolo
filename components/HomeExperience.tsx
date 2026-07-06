import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { phoneHref, SITE, whatsappHref } from "@/lib/constants";
import { images } from "@/lib/images";
import { routes } from "@/lib/routes";

const moments = [
  {
    title: "Jutro",
    accent: "08:00",
    description: "Prva kafa, doručak i lagan start dana u opuštenoj bistro atmosferi.",
    image: "/images/hero-coffee.png",
    alt: "Jutarnja kafa u Idolo",
  },
  {
    title: "Dan",
    accent: "12:00",
    description: "Pizza, paste, roštilj i salate — za ručak sa ekipom ili brzi obrok u gradu.",
    image: "/images/menu-pizza.png",
    alt: "Hrana u Idolo",
  },
  {
    title: "Veče",
    accent: "20:00",
    description: "Kokteli, piće i druženje — Idolo kada grad veče i živi.",
    image: "/images/gallery-cocktail.png",
    alt: "Večernje piće u Idolo",
  },
] as const;

const galleryPreview = images.gallery.slice(0, 4);

export function HomeExperience() {
  return (
    <>
      <section className="section-dark relative overflow-hidden py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            dark
            accent="Doživljaj"
            title="Idolo u tri tempa"
            description="Jedno mesto — različit ritam od jutarnje kafe do večernjeg pića. Svaki deo dana ima svoj Idolo trenutak."
            className="mb-10 md:mb-14"
          />

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {moments.map((moment) => (
              <article
                key={moment.title}
                className="card-dark group overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="image-overlay absolute inset-0 opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-45-fade-dark px-5 pb-5 pt-16">
                    <p className="font-body mb-1 text-[10px] uppercase tracking-[0.22em] text-grad-peach/80">
                      od {moment.accent}
                    </p>
                    <h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-soft-white">
                      {moment.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="font-body text-sm leading-[1.75] text-cream/65">{moment.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-12">
            <Button href={routes.menu}>Istraži meni</Button>
            <Button href={routes.about} variant="outline">
              Upoznaj Idolo
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              dark
              align="left"
              accent="Ambijent"
              title="Atmosfera u kadru"
              description="Enterijer, hrana i trenutci koji definišu Idolo — pogledaj više u galeriji."
              className="mb-0"
            />
            <Link
              href={routes.gallery}
              className="inline-flex shrink-0 items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/55 transition-colors hover:text-grad-peach"
            >
              <span className="h-px w-10 bg-gradient-45-accent-line opacity-60" />
              Sva galerija
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryPreview.map((item) => (
              <Link
                key={item.src}
                href={routes.gallery}
                className="group relative aspect-square overflow-hidden rounded-xl border border-grad-peach/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-gold/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeader
                dark
                align="left"
                accent="Poseta"
                title="Dođi u centar Kruševca"
                description="Kajmakčalanska 2 — lako se dolazi pješke ili kolima. Rezerviši sto pozivom ili piši na WhatsApp."
                className="mb-8 md:mb-10"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-dark rounded-2xl p-6">
                  <p className="font-body mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-grad-peach/85">
                    Radno vreme
                  </p>
                  <p className="font-body text-sm leading-[1.75] text-cream/75">
                    {SITE.hours.weekdays}
                    <br />
                    {SITE.hours.weekend}
                    <br />
                    <span className="text-cream/45">{SITE.hours.kitchen}</span>
                  </p>
                </div>
                <div className="card-dark rounded-2xl p-6">
                  <p className="font-body mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-grad-peach/85">
                    Lokacija
                  </p>
                  <a
                    href={SITE.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm leading-[1.75] text-cream/75 transition-colors hover:text-grad-peach"
                  >
                    {SITE.address}
                  </a>
                  <p className="font-heading mt-4 text-xl tracking-[0.08em] text-gradient">{SITE.phoneDisplay}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button href={phoneHref()} className="w-full">
                Pozovi za sto
              </Button>
              <Button href={whatsappHref()} variant="whatsapp" target="_blank" rel="noopener noreferrer" className="w-full">
                Piši na WhatsApp
              </Button>
              <Button href={routes.contact} variant="outline" className="w-full">
                Kako do nas
              </Button>
              <Button
                href={SITE.googleReview}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Ostavi recenziju
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
