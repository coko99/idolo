import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { images } from "@/lib/images";
import { safeNextPath, SITE_GATE_COOKIE, SITE_GATE_PASSWORD, SITE_GATE_TOKEN } from "@/lib/site-gate";

export const metadata: Metadata = {
  title: { absolute: "Ulaz | IDOLO Caffe Bistro" },
  robots: { index: false, follow: false },
};

async function enter(formData: FormData) {
  "use server";

  const password = String(formData.get("sifra") ?? "");
  const next = safeNextPath(String(formData.get("next") ?? "/"));

  if (password !== SITE_GATE_PASSWORD) {
    const back = next === "/" ? "/ulaz?greska=1" : `/ulaz?greska=1&next=${encodeURIComponent(next)}`;
    redirect(back);
  }

  const jar = await cookies();
  jar.set(SITE_GATE_COOKIE, SITE_GATE_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  redirect(next);
}

export default async function UlazPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; greska?: string }>;
}) {
  const params = await searchParams;
  const next = safeNextPath(params.next);
  const wrong = params.greska === "1";

  return (
    <section className="section-dark flex min-h-[100svh] items-center px-5 py-16">
      <div className="card-dark mx-auto w-full max-w-sm rounded-2xl px-6 py-8 text-center">
        <div className="relative mx-auto mb-6 h-16 w-16">
          <Image src={images.logoHeader} alt="IDOLO Caffe Bistro" fill unoptimized className="object-contain" />
        </div>
        <h1 className="font-heading text-3xl uppercase tracking-[0.14em] text-soft-white">Idolo</h1>
        <p className="font-body mt-3 text-sm leading-relaxed text-cream/55">Unesi šifru za ulazak na sajt.</p>
        <form action={enter} className="mt-6 space-y-3">
          <input type="hidden" name="next" value={next} />
          <input
            name="sifra"
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            required
            aria-label="Šifra"
            placeholder="Šifra"
            className="font-body w-full rounded-full border border-cream/15 bg-black/30 px-5 py-3 text-center text-base tracking-[0.3em] text-soft-white outline-none focus:border-grad-peach"
          />
          {wrong && <p className="font-body text-sm text-grad-peach">Pogrešna šifra.</p>}
          <button
            type="submit"
            className="btn-gradient font-body inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.16em]"
          >
            Uđi
          </button>
        </form>
      </div>
    </section>
  );
}
