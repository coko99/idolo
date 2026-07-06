"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { DeliveryModal } from "@/components/DeliveryModal";
import { getDishImage } from "@/lib/dish-images";
import { formatItemPrice, menuCategories, menuTabIds } from "@/lib/menu-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const tagLabels = {
  popularno: "Popularno",
  preporuka: "Preporuka",
  novo: "Novo",
} as const;

export function MenuSection() {
  const [activeId, setActiveId] = useState<string>(menuTabIds[0]);
  const [orderItem, setOrderItem] = useState<string | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  const selectCategory = (id: string) => {
    setActiveId(id);
    const el = tabsRef.current?.querySelector(`[data-tab="${id}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <>
      <section id="meni" className="section-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            dark
            accent="Digitalni meni"
            title="Istraži naš ukus"
            description="Od doručka i pizza do burgera, pasti, salata, deserata i pića — brzo, pregledno i prilagođeno telefonu."
          />

          <div className="relative mb-12">
            <div
              ref={tabsRef}
              className="scrollbar-hide flex gap-2 overflow-x-auto px-1 pb-1"
            >
              {menuCategories.map((category) => {
                const active = activeId === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    data-tab={category.id}
                    onClick={() => selectCategory(category.id)}
                    className={`shrink-0 rounded-full border px-5 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                      active
                        ? "border-grad-peach/50 bg-gradient-45-brand-soft text-grad-peach"
                        : "border-cream/10 text-cream/45 hover:border-grad-ochre/30 hover:text-cream/75"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-10 flex items-end gap-5">
            <div>
              <p className="font-body mb-2 text-[10px] uppercase tracking-[0.22em] text-gold/70">
                Kategorija · {activeCategory.items.length} stavki
              </p>
              <h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-soft-white md:text-4xl">
                {activeCategory.label}
              </h3>
            </div>
            <div className="gold-line mb-2 hidden flex-1 md:block" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activeCategory.items.map((item) => {
              const price = formatItemPrice(item);
              const image = getDishImage(item.name) ?? item.image;

              return (
                <article
                  key={`${activeCategory.id}-${item.name}`}
                  className="card-dark group overflow-hidden rounded-2xl transition-all duration-500 hover:border-gold/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  {image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                      <Image
                        src={image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="image-overlay absolute inset-0 opacity-80" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h4 className="font-heading text-base uppercase tracking-[0.1em] text-soft-white md:text-lg">
                        {item.name}
                      </h4>
                      {item.tag && (
                        <span className="shrink-0 rounded-full border border-grad-peach/40 bg-grad-amber/10 px-2.5 py-1 font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-grad-peach">
                          {tagLabels[item.tag]}
                        </span>
                      )}
                    </div>

                    {price && (
                      <p className="font-heading mb-3 text-lg tracking-[0.06em] text-grad-peach md:text-xl">
                        {price}
                      </p>
                    )}

                    <p className="font-body mb-2 text-sm leading-[1.7] text-cream/55">
                      {item.description}
                    </p>

                    {item.note && (
                      <p className="font-body mb-4 text-xs italic text-cream/35">{item.note}</p>
                    )}

                    <button
                      type="button"
                      onClick={() => setOrderItem(item.name)}
                      className="-mx-2 inline-flex min-h-[44px] items-center gap-3 px-2 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-grad-peach transition-colors hover:text-grad-amber"
                    >
                      <span className="h-px w-6 bg-gradient-45-accent-line opacity-70" />
                      Poruči
                    </button>
                  </div>
                </article>
              );
            })}
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
