"use client";

import Link from "next/link";
import { phoneHref, whatsappHref } from "@/lib/constants";
import { routes } from "@/lib/routes";

export function StickyMobileBar() {
  return (
    <div className="mobile-bottom-bar fixed inset-x-0 bottom-0 z-40 border-t border-gold/15 bg-black/92 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={phoneHref()}
          className="flex min-h-[52px] flex-col items-center justify-center gap-1 border-r border-cream/8 py-3 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/85"
        >
          Pozovi
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-col items-center justify-center gap-1 border-r border-cream/8 py-3 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-whatsapp"
        >
          WhatsApp
        </a>
        <Link
          href={routes.menu}
          className="flex min-h-[52px] flex-col items-center justify-center gap-1 py-3 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-grad-peach"
        >
          Meni
        </Link>
      </div>
    </div>
  );
}
