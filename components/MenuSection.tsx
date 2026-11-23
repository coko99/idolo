"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DeliveryModal } from "@/components/DeliveryModal";
import { getDishImage } from "@/lib/dish-images";
import {
  formatItemPrice,
  formatPrice,
  itemWantsPhoto,
  menuCategories,
  type MenuCategory,
  type MenuItem,
} from "@/lib/menu-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

function menuSections(category: MenuCategory): { group?: string; items: MenuItem[] }[] {
  const sections: { group?: string; items: MenuItem[] }[] = [];
  for (const item of category.items) {
    const last = sections[sections.length - 1];
    if (last && last.group === item.group) last.items.push(item);
    else sections.push({ group: item.group, items: [item] });
  }
  return sections;
}

const tagLabels = {
  popularno: "Popularno",
  preporuka: "Preporuka",
  novo: "Novo",
} as const;

function categoryDomId(id: string) {
  return `meni-${id}`;
}

function MenuItemCard({
  category,
  item,
  onOrder,
}: {
  category: MenuCategory;
  item: MenuItem;
  onOrder: (name: string) => void;
}) {
  const price = formatItemPrice(item);
  const image = getDishImage(item.name) ?? item.image;
  const showPhoto = Boolean(image) || itemWantsPhoto(category, item);

  return (
    <article className="card-dark group overflow-hidden rounded-2xl transition-all duration-500 hover:border-gold/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {showPhoto && (
        <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
          {image ? (
            <Image
              src={image}
                            alt={`${item.name}, ${category.label} u IDOLO Caffe Bistro, Kruševac`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center border border-dashed border-cream/15 bg-[radial-gradient(circle_at_center,rgba(232,196,160,0.08),transparent_62%)]">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-cream/35">
                Mesto za fotografiju
              </p>
            </div>
          )}
          {image && <div className="image-overlay absolute inset-0 opacity-80" />}
        </div>
      )}

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="font-heading text-base uppercase tracking-[0.1em] text-soft-white md:text-lg">
            {item.name}
          </h3>
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

        {item.description && (
          <p className="font-body mb-2 text-sm leading-[1.7] text-cream/55">{item.description}</p>
        )}

        {item.addons && item.addons.length > 0 && (
          <div className="mb-3 mt-3 border-t border-cream/10 pt-3">
            <p className="font-body mb-2 text-[10px] uppercase tracking-[0.18em] text-gold/70">
              Može da se doda
            </p>
            <ul className="space-y-1.5">
              {item.addons.map((addon) => (
                <li
                  key={addon.name}
                  className="flex items-baseline justify-between gap-3 font-body text-sm leading-snug text-cream/55"
                >
                  <span>{addon.name}</span>
                  <span className="shrink-0 text-grad-peach/90">{formatPrice(addon.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.note && <p className="font-body mb-4 text-xs italic text-cream/35">{item.note}</p>}

        <button
          type="button"
          onClick={() => onOrder(item.name)}
          className="-mx-2 inline-flex min-h-[44px] items-center gap-3 px-2 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-grad-peach transition-colors hover:text-grad-amber"
        >
          <span className="h-px w-6 bg-gradient-45-accent-line opacity-70" />
          Poruči
        </button>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const [orderItem, setOrderItem] = useState<string | null>(null);
  const [chrome, setChrome] = useState({ header: 88, tabs: 68 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsWrapRef = useRef<HTMLDivElement>(null);
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  useLayoutEffect(() => {
    const measure = () => {
      const header = document.querySelector("header")?.getBoundingClientRect().height ?? 88;
      const tabs = tabsWrapRef.current?.getBoundingClientRect().height ?? 68;
      setChrome((prev) =>
        prev.header === header && prev.tabs === tabs ? prev : { header, tabs },
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const scroller = tabsRef.current;
    const tab = scroller?.querySelector<HTMLElement>(`[data-tab="${activeId}"]`);
    if (!scroller || !tab) return;
    const left = tab.offsetLeft - scroller.clientWidth / 2 + tab.clientWidth / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }, [activeId]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = chrome.header + chrome.tabs + 8;
      let current = menuCategories[0].id;

      for (const category of menuCategories) {
        const el = document.getElementById(categoryDomId(category.id));
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = category.id;
      }

      if (current !== activeIdRef.current) setActiveId(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [chrome.header, chrome.tabs]);

  const selectCategory = (id: string) => {
    setActiveId(id);
    document.getElementById(categoryDomId(id))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stickOffset = chrome.header + chrome.tabs;

  return (
    <>
      <section id="meni" className="section-dark pb-[42vh] pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            dark
            heading="h1"
            accent="Digitalni meni"
            title="Jelovnik"
            description="Doručak, pice, paste, tortilje, burgeri, meso, salate, dezerti, kafe i kokteli. Listaš ceo cenovnik, a kategorije ostaju gore."
          />
        </div>

        <div
          ref={tabsWrapRef}
          className="sticky z-30 border-b border-gold/15 bg-espresso/95 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          style={{ top: chrome.header }}
        >
          <nav aria-label="Kategorije menija" className="mx-auto max-w-7xl px-5 md:px-8">
            <div ref={tabsRef} className="scrollbar-hide flex gap-2 overflow-x-auto py-3">
              {menuCategories.map((category) => {
                const active = activeId === category.id;
                return (
                  <a
                    key={category.id}
                    href={`#${categoryDomId(category.id)}`}
                    data-tab={category.id}
                    aria-current={active ? "true" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      selectCategory(category.id);
                    }}
                    className={`shrink-0 rounded-full border px-5 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                      active
                        ? "border-grad-peach/50 bg-gradient-45-brand-soft text-grad-peach"
                        : "border-cream/10 text-cream/45 hover:border-grad-ochre/30 hover:text-cream/75"
                    }`}
                  >
                    {category.label}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="mx-auto max-w-7xl space-y-16 px-5 pt-10 md:px-8 md:pt-14">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              id={categoryDomId(category.id)}
              className="pt-4"
              style={{ scrollMarginTop: stickOffset }}
            >
              <div className="mb-8 flex items-end gap-5">
                <div>
                  <p className="font-body mb-2 text-[10px] uppercase tracking-[0.22em] text-gold/70">
                    Kategorija · {category.items.length} stavki
                  </p>
                  <h2 className="font-heading text-2xl uppercase tracking-[0.12em] text-soft-white md:text-4xl">
                    {category.label}
                  </h2>
                </div>
                <div className="gold-line mb-2 hidden flex-1 md:block" />
              </div>

              <div className="space-y-10">
                {menuSections(category).map((section, sectionIndex) => (
                  <div key={`${category.id}-${sectionIndex}-${section.group ?? "main"}`}>
                    {section.group && (
                      <div className="mb-4">
                        <p className="font-body text-[10px] uppercase tracking-[0.22em] text-gold/70">
                          {section.group}
                        </p>
                        <div className="gold-line mt-3 max-w-xs" />
                      </div>
                    )}
                    <div className="grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {section.items.map((item) => (
                        <MenuItemCard
                          key={`${category.id}-${section.group ?? ""}-${item.name}`}
                          category={category}
                          item={item}
                          onOrder={setOrderItem}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
