"use client";

import Image from "next/image";
import Link from "next/link";
import { menuCategoryHref, routes } from "@/lib/routes";
import { useEffect, useMemo, useRef, useState } from "react";
import { DeliveryModal } from "@/components/DeliveryModal";
import { getDishImage } from "@/lib/dish-images";
import { formatItemPrice, menuCategories, type MenuItem } from "@/lib/menu-data";
import { topPicks } from "@/lib/top-picks";
import { SectionHeader } from "@/components/ui/SectionHeader";

type ResolvedPick = MenuItem & {
  hook: string;
  category: string;
  categoryId: string;
  image?: string;
};

function findMenuItem(name: string): { item: MenuItem; category: string; categoryId: string } | null {
  for (const category of menuCategories) {
    const item = category.items.find((entry) => entry.name === name);
    if (item) return { item, category: category.label, categoryId: category.id };
  }
  return null;
}

export function TopPicks() {
  const [orderItem, setOrderItem] = useState<string | null>(null);

  const picks = useMemo(() => {
    return topPicks
      .map((pick) => {
        const found = findMenuItem(pick.name);
        if (!found) return null;

        return {
          ...found.item,
          hook: pick.hook,
          category: found.category,
          categoryId: found.categoryId,
          image: pick.image ?? getDishImage(found.item.name) ?? found.item.image,
        } satisfies ResolvedPick;
      })
      .filter(Boolean) as ResolvedPick[];
  }, []);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const draggedRef = useRef(false);
  const dragRef = useRef<{
    x: number;
    y: number;
    offset: number;
    pointerId: number;
    axis: "x" | "y" | null;
  } | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduce = motion.matches;
    const onMotion = () => {
      reduce = motion.matches;
    };
    motion.addEventListener("change", onMotion);

    const loopWidth = () => (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;

    const wrap = (value: number) => {
      const loop = loopWidth();
      if (loop <= 0) return 0;
      let next = value % loop;
      if (next > 0) next -= loop;
      return next;
    };

    const apply = () => {
      track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
    };

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce && !pausedRef.current) {
        const loop = loopWidth();
        if (loop > 0) {
          offsetRef.current = wrap(offsetRef.current - (loop / 42) * dt);
          apply();
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    apply();
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      motion.removeEventListener("change", onMotion);
    };
  }, [picks.length]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    pausedRef.current = true;
    draggedRef.current = false;
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      offset: offsetRef.current,
      pointerId: event.pointerId,
      axis: null,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (!drag || !track || drag.pointerId !== event.pointerId) return;

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    if (!drag.axis) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      drag.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (drag.axis === "y") return;
      draggedRef.current = true;
      viewportRef.current?.setPointerCapture(event.pointerId);
    }

    if (drag.axis !== "x") return;

    const loop = (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
    let next = drag.offset + dx;
    if (loop > 0) {
      next %= loop;
      if (next > 0) next -= loop;
    }
    offsetRef.current = next;
    track.style.transform = `translate3d(${next}px,0,0)`;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    pausedRef.current = false;
    if (draggedRef.current) {
      window.setTimeout(() => {
        draggedRef.current = false;
      }, 0);
    }
  };

  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!draggedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    draggedRef.current = false;
  };

  return (
    <>
      <section id="top-preporuke" className="section-dark relative overflow-hidden py-16 md:py-28">
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            dark
            accent="Top izbor"
            title="Šta preporučujemo da probaš kod nas"
            description={
              <>
                Glavna jela koja vredi naručiti — od doručka i burgera do pice i preporuke šefa. U jelovniku su{" "}
                <Link href={menuCategoryHref("dorucak")} className="text-grad-peach hover:text-grad-amber">
                  Domaćinski doručak
                </Link>
                ,{" "}
                <Link href={menuCategoryHref("burgeri")} className="text-grad-peach hover:text-grad-amber">
                  Twins burgeri
                </Link>
                ,{" "}
                <Link href={menuCategoryHref("preporuka-sefa")} className="text-grad-peach hover:text-grad-amber">
                  Lava piletina
                </Link>
                ,{" "}
                <Link href={menuCategoryHref("meso")} className="text-grad-peach hover:text-grad-amber">
                  Bečka šnicla
                </Link>{" "}
                i{" "}
                <Link href={menuCategoryHref("preporuka-sefa")} className="text-grad-peach hover:text-grad-amber">
                  Preporuka šefa
                </Link>
                .
              </>
            }
            className="mb-10 md:mb-14"
          />

          <div
            ref={viewportRef}
            className="marquee-viewport -mx-5 overflow-hidden md:-mx-8"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={onClickCapture}
          >
            <div ref={trackRef} className="marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex gap-4 pr-4"
                  aria-hidden={copy === 1 ? true : undefined}
                  inert={copy === 1 ? true : undefined}
                >
                  {picks.map((item) => {
                    const price = formatItemPrice(item);

                    return (
                      <article
                        key={`${copy}-${item.name}`}
                        className="card-dark group w-[280px] shrink-0 overflow-hidden rounded-2xl sm:w-[320px]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                          {item.image ? (
                            <>
                              <Image
                                src={item.image}
                                alt={copy === 0 ? `${item.name}, ${item.category} u IDOLO Caffe Bistro, Kruševac` : ""}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                sizes="320px"
                              />
                              <div className="image-overlay absolute inset-0 opacity-75" />
                            </>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center border border-dashed border-cream/15 bg-gradient-45-brand-muted">
                              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-cream/35">
                                Mesto za fotografiju
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="p-5">
                          <p className="font-body mb-2 text-[10px] uppercase tracking-[0.18em] text-cream/40">
                            {item.category}
                          </p>
                          <h3 className="font-heading mb-2 text-lg uppercase tracking-[0.1em] text-soft-white">
                            <Link href={menuCategoryHref(item.categoryId)} className="transition-colors hover:text-grad-peach">
                              {item.name}
                            </Link>
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
              ))}
            </div>
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
