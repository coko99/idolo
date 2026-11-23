import type { Metadata } from "next";
import { PageMain } from "@/components/PageMain";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: { absolute: "Stranica nije pronađena | IDOLO Caffe Bistro" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageMain>
      <section className="section-dark px-5 py-28 md:py-36">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-heading text-4xl uppercase tracking-[0.12em] text-soft-white">
            Stranica nije pronađena
          </h1>
          <p className="font-body mt-5 text-cream/65">
            Ovaj link ne vodi na stranicu IDOLO Caffe Bistro.
          </p>
          <a
            href={routes.home}
            className="font-body mt-8 inline-flex text-[11px] font-semibold uppercase tracking-[0.16em] text-grad-peach"
          >
            Nazad na početnu
          </a>
        </div>
      </section>
    </PageMain>
  );
}
