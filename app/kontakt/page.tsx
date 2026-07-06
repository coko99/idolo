import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageMain } from "@/components/PageMain";

export const metadata: Metadata = {
  title: "Kontakt | Idolo Bistro Bar — Kruševac",
  description: "Kontaktiraj Idolo Bistro Bar — adresa, telefon, WhatsApp i mapa u Kruševcu.",
};

export default function ContactPage() {
  return (
    <PageMain>
      <Contact />
    </PageMain>
  );
}
