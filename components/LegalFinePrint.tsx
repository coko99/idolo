"use client";

import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";
import { routes } from "@/lib/routes";

export function LegalFinePrint() {
  const pathname = usePathname();
  if (pathname !== routes.contact) return null;

  return (
    <p className="mx-auto mt-8 max-w-2xl text-center font-body text-[11px] leading-relaxed text-cream/35">
      {SITE.legalName}
      <span className="mt-1 block">
        PIB {SITE.pib} · MB {SITE.mb}
      </span>
    </p>
  );
}
