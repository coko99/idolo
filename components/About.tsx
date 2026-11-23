import { AboutSlider } from "@/components/AboutSlider";
import { FloatingFoodIllustrations } from "@/components/FloatingFoodIllustrations";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="o-nama" className="section-dark relative overflow-hidden py-16 md:py-32">
      <FloatingFoodIllustrations />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <AboutSlider />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              dark
              className="mb-8 md:mb-10"
              accent="O nama"
              title="Gradska oaza za svaki deo dana"
              description="Idolo Bistro Bar je mesto za svaki deo dana — od prve jutarnje kafe, preko doručka i kvalitetnog obroka, do večernjeg pića i opuštenog druženja."
            />

            <p className="font-body text-[15px] leading-[1.85] text-cream/70 md:text-base">
              Nalazimo se u centru Kruševca i spajamo prijatan ambijent, dobru
              kuhinju i urbanu energiju grada. Ujutru za kafu i doručak, tokom
              dana za obrok, uveče za piće i druženje.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-cream/10 pt-8">
              {[
                { label: "Kafa", sub: "jutro" },
                { label: "Hrana", sub: "dan" },
                { label: "Piće", sub: "veče" },
              ].map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <p className="font-heading text-lg uppercase tracking-[0.14em] text-gradient md:text-xl">
                    {item.label}
                  </p>
                  <p className="font-body mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/50">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
