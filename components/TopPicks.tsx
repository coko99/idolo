"use client";

import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { useMemo, useState } from "react";
import { DeliveryModal } from "@/components/DeliveryModal";
import { getDishImage } from "@/lib/dish-images";
import { formatItemPrice, menuCategories, type MenuItem } from "@/lib/menu-data";
import { topPicks } from "@/lib/top-picks";
import { SectionHeader } from "@/components/ui/SectionHeader";

type ResolvedPick = MenuItem & {
  rank: number;
  hook: string;
  category: string;
  image?: string;
};

function findMenuItem(name: string): { item: MenuItem; category: string } | null {
  for (const category of menuCategories) {
    const item = category.items.find((entry) => entry.name === name);
    if (item) return { item, category: category.label };
  }
  return null;
}

export function TopPicks() {
  const [orderItem, setOrderItem] = useState<string | null>(null);

  const picks = useMemo(() => {
    return topPicks
      .map((pick, index) => {
        const found = findMenuItem(pick.name);
        if (!found) return null;

        return {
          ...found.item,
          rank: index + 1,
          hook: pick.hook,
          category: found.category,
          image: pick.image ?? getDishImage(found.item.name) ?? found.item.image,
        } satisfies ResolvedPick;
      })
      .filter(Boolean) as ResolvedPick[];
  }, []);

  return (
    <>
      <section id="top-preporuke" className="section-dark relative overflow-hidden py-16 md:py-28">
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            dark
            accent="Top izbor"
            title="Šta preporučujemo da probaš kod nas"
            description="Naš tim bira jela i pića koja gosti najviše vole — od jutarnje kafe do večernjeg deserta."
            className="mb-10 md:mb-14"
          />

          <div className="scrollbar-hide -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible lg:grid-cols-4 md:px-0">
            {picks.map((item) => {
              const price = formatItemPrice(item);

              return (
                <article
                  key={item.name}
                  className="card-dark group w-[82vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-2xl md:w-auto md:max-w-none"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                    {item.image ? (
                      <>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 82vw, 25vw"
                        />
                        <div className="image-overlay absolute inset-0 opacity-75" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-45-brand-muted" />
                    )}
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-grad-peach/35 bg-black/70 font-heading text-xs tracking-[0.08em] text-grad-peach">
                      {String(item.rank).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-5 md:p-6">
                    <p className="font-body mb-2 text-[10px] uppercase tracking-[0.18em] text-cream/40">
                      {item.category}
                    </p>
                    <h3 className="font-heading mb-2 text-lg uppercase tracking-[0.1em] text-soft-white md:text-xl">
                      {item.name}
                    </h3>
                    <p className="font-body mb-3 text-sm leading-relaxed text-grad-peach/85">{item.hook}</p>
                    {price && (
                      <p className="font-heading mb-4 text-lg tracking-[0.06em] text-grad-peach">{price}</p>
                    )}
                    <p className="font-body mb-5 line-clamp-2 text-sm leading-[1.65] text-cream/50">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setOrderItem(item.name)}
                      className="-mx-1 inline-flex min-h-[44px] items-center gap-3 px-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-grad-peach transition-colors hover:text-grad-amber"
                    >
                      <span className="h-px w-6 bg-gradient-45-accent-line opacity-70" />
                      Poruči
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center md:mt-12">
            <Link
              href={routes.menu}
              className="inline-flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/55 transition-colors hover:text-grad-peach"
            >
              <span className="h-px w-10 bg-gradient-45-accent-line opacity-60" />
              Pogledaj ceo meni
              <span className="h-px w-10 bg-gradient-45-accent-line opacity-60" />
            </Link>
          </div>
        </div>
      </section>

      <DeliveryModal
        open={orderItem !== null}
        onClose={() => setOrderItem(null)}
        itemName={orderItem ?? undefined}
      />
    </>
  );
}
