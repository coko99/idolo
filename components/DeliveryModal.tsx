"use client";

import Image from "next/image";
import { phoneHref, SITE, whatsappHref } from "@/lib/constants";

const deliveryPartners = [
  {
    name: "DingDong",
    href: SITE.delivery.dingdong,
    logo: "/images/partners/dingdong.png",
    description: "Poruči preko DingDong aplikacije",
  },
  {
    name: "Wolt",
    href: SITE.delivery.wolt,
    logo: "/images/partners/wolt.png",
    description: "Poruči preko Wolt aplikacije",
  },
];

type DeliveryModalProps = {
  open: boolean;
  onClose: () => void;
  itemName?: string;
  showDirectContact?: boolean;
};

export function DeliveryModal({
  open,
  onClose,
  itemName,
  showDirectContact = false,
}: DeliveryModalProps) {
  if (!open) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Zatvori"
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delivery-modal-title"
        className="delivery-modal fixed inset-x-4 bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] top-auto z-[70] mx-auto max-h-[min(72dvh,calc(100dvh-10rem))] w-[calc(100vw-2rem)] max-w-sm translate-y-0 overflow-y-auto rounded-2xl border border-grad-ochre/20 bg-espresso shadow-2xl md:inset-x-auto md:right-6 md:bottom-24 md:max-h-[85vh]"
      >
        <div className="border-b border-grad-ochre/10 px-5 py-4">
          <p id="delivery-modal-title" className="font-heading text-sm uppercase tracking-[0.14em] text-cream">
            {itemName ? `Poruči — ${itemName}` : "Poruči"}
          </p>
          <p className="font-body mt-1 text-xs text-cream/45">
            {showDirectContact
              ? "Dostava, WhatsApp ili direktan poziv"
              : itemName
                ? "Dostava ili pozovi za narudžbu u lokalu"
                : "Poruči preko partnera ili pozovi za kod nas u lokalu"}
          </p>
        </div>

        <div className="space-y-2 p-4">
          <p className="font-body px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-grad-peach/80">
            Dostava — partneri
          </p>

          {deliveryPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-4 rounded-xl border border-cream/8 bg-dark-brown/50 p-3 transition-all hover:border-grad-ochre/30 hover:bg-dark-brown/80"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-black">
                <Image src={partner.logo} alt={partner.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-heading text-sm uppercase tracking-[0.1em] text-soft-white">
                  {partner.name}
                </p>
                <p className="font-body text-xs text-cream/50">{partner.description}</p>
              </div>
            </a>
          ))}
        </div>

        {!showDirectContact && (
          <div className="space-y-2 border-t border-grad-ochre/10 px-4 pb-4 pt-3">
            <p className="font-body px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-grad-peach/80">
              U lokalu
            </p>
            <a
              href={phoneHref()}
              onClick={onClose}
              className="flex items-center gap-4 rounded-xl border border-grad-peach/25 bg-gradient-45-brand-muted p-3 transition-all hover:border-grad-peach/45"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-grad-peach/30 bg-dark-brown/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-grad-peach"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-heading text-sm uppercase tracking-[0.1em] text-soft-white">
                  Pozovi — {SITE.phoneDisplay}
                </p>
                <p className="font-body text-xs text-cream/50">
                  Naruči za sedenje u lokalu
                </p>
              </div>
            </a>
          </div>
        )}

        {showDirectContact && (
          <div className="grid grid-cols-2 gap-2 border-t border-grad-ochre/10 p-4">
            <a
              href={whatsappHref(itemName ? `Zdravo, želeo/la bih da poručim: ${itemName}` : undefined)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-1 rounded-xl bg-whatsapp py-3.5 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:brightness-110"
            >
              WhatsApp
              <span className="text-[9px] font-normal normal-case tracking-normal opacity-80">
                Piši poruku
              </span>
            </a>
            <a
              href={phoneHref()}
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-1 rounded-xl border border-cream/12 bg-dark-brown/60 py-3.5 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-cream transition-all hover:border-grad-peach/40"
            >
              Pozovi
              <span className="text-[9px] font-normal normal-case tracking-normal text-cream/50">
                {SITE.phoneDisplay}
              </span>
            </a>
          </div>
        )}

        <div className="border-t border-grad-ochre/10 p-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full border border-cream/12 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/60 transition-colors hover:border-grad-peach/30 hover:text-cream"
          >
            Zatvori
          </button>
        </div>
      </div>
    </>
  );
}
