import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    num: "01",
    title: "Odlična kafa",
    description: "Jutarnja i dnevna kafa u opuštenoj bistro atmosferi.",
  },
  {
    num: "02",
    title: "Doručak",
    description: "Započni dan na pravi način — doručak koji se ne preskače.",
  },
  {
    num: "03",
    title: "Veliki izbor hrane",
    description: "Pizze, paste, roštilj, salate, burgeri, palačinke i više.",
  },
  {
    num: "04",
    title: "Prijatan ambijent",
    description: "Moderno, toplo mesto za sedenje, kafu i druženje.",
  },
  {
    num: "05",
    title: "Centar Kruševca",
    description: "Kajmakčalanska 2 — lako dostupna lokacija u gradu.",
  },
  {
    num: "06",
    title: "Brz kontakt",
    description: "Poruči odmah putem poziva ili WhatsApp poruke.",
  },
];

export function WhyIdolo() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          dark
          accent="Zašto Idolo?"
          title="Bistro atmosfera koja prija"
          description="Spoj kafića, restorana i urbanog mesta za izlazak — za svaki deo dana."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-cream/8 bg-cream/8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-espresso/95 p-8 transition-colors duration-500 hover:bg-dark-brown/90 md:p-10"
            >
              <p className="font-heading mb-6 text-sm tracking-[0.2em] text-gold/50 transition-colors group-hover:text-gold">
                {feature.num}
              </p>
              <h3 className="font-heading mb-3 text-xl uppercase tracking-[0.1em] text-soft-white">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-[1.75] text-cream/55">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
