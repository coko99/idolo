"use client";

import { useState } from "react";
import { DeliveryModal } from "@/components/DeliveryModal";

export function ContactFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="contact-fab fixed right-4 z-50 flex h-12 min-w-[5.5rem] items-center justify-center rounded-full border border-grad-peach/35 bg-espresso px-4 text-grad-peach shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all hover:border-grad-amber hover:bg-dark-brown md:bottom-6"
        aria-label={open ? "Zatvori kontakt" : "Otvori kontakt"}
        aria-expanded={open}
      >
        <span className="font-heading text-[10px] uppercase tracking-[0.14em]">
          {open ? "Zatvori" : "Kontakt"}
        </span>
      </button>

      <DeliveryModal
        open={open}
        onClose={() => setOpen(false)}
        showDirectContact
      />
    </>
  );
}
