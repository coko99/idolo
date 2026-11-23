"use client";

import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "@/lib/menu-data";
import { recommendMeals, suggestionTotal, type GuestSuggestion, type MealTime } from "@/lib/meal-recommend";

const MIN_GUESTS = 1;
const MAX_GUESTS = 8;

const mealTimes: { id: MealTime; label: string }[] = [
  { id: "dorucak", label: "Doručak" },
  { id: "rucak", label: "Ručak" },
  { id: "vecera", label: "Večera" },
];

function guestLabel(count: number): string {
  if (count === 1) return "1 osoba";
  if (count >= 2 && count <= 4) return `${count} osobe`;
  return `${count} osoba`;
}

export function MealRecommend() {
  const [meal, setMeal] = useState<MealTime>("rucak");
  const [guests, setGuests] = useState(2);
  const [suggestions, setSuggestions] = useState<GuestSuggestion[] | null>(null);

  const recommend = (count = guests, time = meal) => {
    setSuggestions(recommendMeals(count, time));
  };

  const changeGuests = (next: number) => {
    const value = Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, next));
    setGuests(value);
    setSuggestions(null);
  };

  const changeMeal = (next: MealTime) => {
    setMeal(next);
    setSuggestions(null);
  };

  const total = suggestions ? suggestionTotal(suggestions) : 0;
  const hasRange = suggestions?.some((item) => item.ranged) ?? false;

  return (
    <section id="preporuka" className="section-dark scroll-mt-24 border-t border-gold/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-accent mb-3 text-3xl text-gradient-brand-v md:text-4xl">Za sto</p>
          <h2 className="font-heading text-gradient-brand-v mb-5 text-3xl uppercase leading-[1.05] tracking-[0.12em] md:text-5xl">
            Neka mi složimo tanjire
          </h2>
          <div className="gold-line mx-auto mb-6 w-20" />
          <p className="font-body text-[15px] leading-[1.75] text-cream/65 md:text-base">
            Prvo izaberi obrok. Doručak nudi samo doručak, a ručak i večera ostala jela.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
            <div className="card-dark rounded-2xl p-5 md:p-8">
              <div className="mb-6">
                <p className="font-body mb-3 text-center text-[10px] uppercase tracking-[0.2em] text-gold/70 md:text-left">
                  Šta jedete
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {mealTimes.map((option) => {
                    const active = meal === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => changeMeal(option.id)}
                        className={`min-h-[44px] rounded-full border px-5 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                          active
                            ? "border-grad-peach/50 bg-gradient-45-brand-soft text-grad-peach"
                            : "border-cream/15 text-cream/55 hover:border-grad-ochre/30 hover:text-cream/80"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 border-t border-cream/10 pt-6 md:flex-row md:justify-between">
                <div className="text-center md:text-left">
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gold/70">Koliko osoba</p>
                  <p className="font-heading mt-2 text-2xl uppercase tracking-[0.08em] text-soft-white">
                    {guestLabel(guests)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Manje osoba"
                    onClick={() => changeGuests(guests - 1)}
                    disabled={guests <= MIN_GUESTS}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 font-heading text-xl text-cream transition-colors hover:border-grad-peach hover:text-grad-peach disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    −
                  </button>
                  <span className="font-heading w-10 text-center text-3xl text-grad-peach">{guests}</span>
                  <button
                    type="button"
                    aria-label="Više osoba"
                    onClick={() => changeGuests(guests + 1)}
                    disabled={guests >= MAX_GUESTS}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 font-heading text-xl text-cream transition-colors hover:border-grad-peach hover:text-grad-peach disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => recommend(guests)}
                  className="btn-gradient inline-flex min-h-[48px] items-center justify-center rounded-full px-7 py-3 text-center font-body text-[11px] font-semibold uppercase tracking-[0.16em]"
                >
                  Klikni da ti preporučimo jelo
                </button>
              </div>
            </div>

            {suggestions && (
              <div className="mt-6" aria-live="polite">
                <ul className="grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-4">
                  {suggestions.map((item) => (
                    <li key={`${item.guest}-${item.name}`} className="card-dark overflow-hidden rounded-2xl">
                      <div className="relative aspect-[4/3] bg-black/40">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1280px) 50vw, 25vw"
                          />
                        ) : null}
                      </div>
                      <div className="p-3 sm:p-5">
                        <p className="font-body text-[10px] uppercase tracking-[0.16em] text-gold/70">
                          Osoba {item.guest}
                        </p>
                        <h3 className="font-heading mt-1.5 text-sm uppercase leading-tight tracking-[0.06em] text-soft-white sm:mt-2 sm:text-lg sm:tracking-[0.08em]">
                          {item.name}
                        </h3>
                        <p className="font-heading mt-1.5 text-sm leading-snug tracking-[0.04em] text-grad-peach sm:mt-2 sm:text-lg">
                          {item.priceText}
                        </p>
                        <p className="font-body mt-2 text-xs leading-[1.55] text-cream/55 sm:mt-3 sm:text-sm sm:leading-[1.65]">
                          {item.why}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-grad-peach/15 bg-black/20 px-5 py-5 text-center md:flex-row md:text-left">
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.18em] text-cream/40">Ukupno za sto</p>
                    <p className="font-heading mt-1 text-2xl tracking-[0.06em] text-grad-peach">{formatPrice(total)}</p>
                    {hasRange && (
                      <p className="font-body mt-2 text-xs leading-relaxed text-cream/40">
                        Pica u zbiru ide kao 32 cm.
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => recommend(guests)}
                    className="inline-flex min-h-[44px] items-center gap-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-grad-peach transition-colors hover:text-grad-amber"
                  >
                    <span className="h-px w-6 bg-gradient-45-accent-line opacity-70" />
                    Druga preporuka
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
