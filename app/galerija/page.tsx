import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageMain } from "@/components/PageMain";

export const metadata: Metadata = {
  title: "Galerija | Idolo Bistro Bar — Kruševac",
  description: "Pogledaj ambijent, hranu i atmosferu u Idolo Bistro Bar u Kruševcu.",
};

export default function GalleryPage() {
  return (
    <PageMain>
      <Gallery />
    </PageMain>
  );
}
