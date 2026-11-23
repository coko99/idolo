"use client";

import { usePathname } from "next/navigation";
import { ContactFab } from "@/components/ContactFab";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Preloader } from "@/components/Preloader";
import { StickyMobileBar } from "@/components/StickyMobileBar";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  if (pathname === "/ulaz") return children;

  return (
    <>
      <Preloader />
      <Header />
      {children}
      <Footer />
      <StickyMobileBar />
      <ContactFab />
    </>
  );
}
