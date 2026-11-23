import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageMain } from "@/components/PageMain";
import { WhyIdolo } from "@/components/WhyIdolo";

export const metadata: Metadata = {
  title: "O nama | Idolo Bistro Bar — Kruševac",
  description: "Upoznaj Idolo Bistro Bar — kafa, doručak i bistro atmosfera u centru Kruševca.",
};

export default function AboutPage() {
  return (
    <PageMain>
      <About />
      <WhyIdolo />
    </PageMain>
  );
}
