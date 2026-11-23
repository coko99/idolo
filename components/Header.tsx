"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DeliveryModal } from "@/components/DeliveryModal";
import { phoneHref, SITE, whatsappHref } from "@/lib/constants";
import { images } from "@/lib/images";
import { navLinks, routes } from "@/lib/routes";

const partnerIcons = [
  { name: "DingDong", logo: "/images/partners/dingdong.png", href: SITE.delivery.dingdong },
  { name: "Wolt", logo: "/images/partners/wolt.png", href: SITE.delivery.wolt },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === routes.home;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solidHeader = !isHome || scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solidHeader ? "bg-black/92 backdrop-blur-xl" : "bg-gradient-45-header"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:gap-6 md:px-8 lg:py-5">
          <Link href={routes.home} className="group relative h-14 w-14 shrink-0 md:h-16 md:w-16">
            <Image
              src={images.logoHeader}
              alt={SITE.name}
              fill
              unoptimized
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-body text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-gold" : "text-cream/70 hover:text-gold"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex lg:gap-3">
            <a
              href={phoneHref()}
              className="rounded-full border border-grad-ochre/35 px-4 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cream transition-all hover:border-grad-peach hover:bg-grad-ochre/10 lg:px-5"
            >
              Pozovi
            </a>

            <button
              type="button"
              onClick={() => setOrderOpen(true)}
              className="flex items-center gap-2 rounded-full border border-grad-peach/30 bg-dark-brown/50 py-2 pl-2 pr-4 transition-all hover:border-grad-peach/50 hover:bg-dark-brown/80 lg:pr-5"
            >
              <span className="flex items-center -space-x-1.5">
                {partnerIcons.map((partner) => (
                  <span
                    key={partner.name}
                    className="relative h-7 w-7 overflow-hidden rounded-full border border-cream/15 bg-black"
                  >
                    <Image src={partner.logo} alt={partner.name} fill className="object-cover" />
                  </span>
                ))}
              </span>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-grad-peach">
                Poruči
              </span>
            </button>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-whatsapp px-4 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:brightness-110 lg:px-5"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-cream transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span className={`absolute h-px w-5 bg-cream transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute h-px w-5 bg-cream transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>

        <div className="header-neon-line mx-auto max-w-7xl px-5 md:px-8" aria-hidden />
      </header>

      <div
        className={`mobile-menu-overlay fixed inset-0 z-40 md:hidden ${
          open ? "mobile-menu-overlay-open" : "mobile-menu-overlay-closed"
        }`}
        aria-hidden={!open}
        inert={open ? undefined : true}
      >
        <div className="mobile-menu-scrim absolute inset-0" aria-hidden="true" />

        <nav className="mobile-menu-nav relative z-10 flex h-full flex-col overflow-y-auto px-5 pb-10 pt-24">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-heading relative z-10 border-b border-cream/8 py-5 text-[clamp(1.75rem,7vw,2.25rem)] uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-gold" : "text-cream hover:text-gold"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setOrderOpen(true);
            }}
            className="relative z-10 mt-6 flex w-full items-center justify-between rounded-2xl border border-grad-peach/25 bg-dark-brown/60 px-4 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center -space-x-1.5">
                {partnerIcons.map((partner) => (
                  <span
                    key={partner.name}
                    className="relative h-8 w-8 overflow-hidden rounded-full border border-cream/15 bg-black"
                  >
                    <Image src={partner.logo} alt={partner.name} fill className="object-cover" />
                  </span>
                ))}
              </span>
              <div className="text-left">
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-grad-peach">
                  Poruči
                </p>
                <p className="font-body text-[10px] text-cream/45">Partneri ili u lokalu</p>
              </div>
            </div>
            <span className="font-body text-lg text-cream/40">→</span>
          </button>

          <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
            <a
              href={phoneHref()}
              onClick={() => setOpen(false)}
              className="rounded-full border border-gold/30 py-3.5 text-center font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cream"
            >
              Pozovi
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-whatsapp py-3.5 text-center font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>

      <DeliveryModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
}
