import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/constants";

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14 shrink-0" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.7-6.6 7.2l6.3 5.3C37.4 38.4 44 33 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

export function GoogleReviews() {
  return (
    <section className="section-dark border-t border-gold/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          dark
          accent="Gosti"
          title="Google recenzije"
          description="Utisci o kafi, hrani i atmosferi stoje na Google-u. Pročitaj šta su drugi napisali ili ostavi svoj posle posete."
          className="mb-10 md:mb-12"
        />

        <div className="card-dark mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl px-6 py-8 text-center md:flex-row md:justify-between md:px-10 md:py-10 md:text-left">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-soft-white">
              <GoogleMark />
            </div>
            <div>
              <p className="font-heading text-2xl uppercase tracking-[0.14em] text-soft-white md:text-3xl">
                Idolo na Google-u
              </p>
              <p className="font-body mt-2 max-w-md text-sm leading-[1.7] text-cream/55">
                Otvori profil lokala, pročitaj recenzije gostiju i dodaj svoju.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
            <Button href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              Pročitaj recenzije
            </Button>
            <Button
              href={SITE.googleReview}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              Ostavi recenziju
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
