type SectionHeaderProps = {
  accent: string;
  title: string;
  description?: string;
  note?: string;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  accent,
  title,
  description,
  note,
  dark = false,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`section-header mb-14 md:mb-16 ${alignClass} ${align === "center" ? "max-w-2xl" : "max-w-xl"} ${className}`}>
      <p className="font-accent mb-3 text-3xl text-gradient-brand-v md:text-4xl">
        {accent}
      </p>
      <h2 className="font-heading text-gradient-brand-v mb-5 text-3xl uppercase leading-[1.05] tracking-[0.12em] md:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      <div className={`gold-line mb-6 ${align === "center" ? "mx-auto w-20" : "w-16"}`} />
      {description && (
        <p className={`font-body text-[15px] leading-[1.75] md:text-base ${dark ? "text-cream/65" : "text-warm-brown/85"}`}>
          {description}
        </p>
      )}
      {note && (
        <p className={`font-body mt-4 text-xs uppercase tracking-[0.14em] ${dark ? "text-cream/35" : "text-warm-brown/55"}`}>
          {note}
        </p>
      )}
    </div>
  );
}
