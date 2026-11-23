import type { Metadata } from "next";
import { MenuSection } from "@/components/MenuSection";
import { PageMain } from "@/components/PageMain";

export const metadata: Metadata = {
  title: "Meni | Idolo Bistro Bar — Kruševac",
  description: "Pogledaj meni Idolo Bistro Bar — doručak, pizza, paste, burgeri, roštilj i piće.",
};

export default function MenuPage() {
  return (
    <PageMain>
      <MenuSection />
    </PageMain>
  );
}
