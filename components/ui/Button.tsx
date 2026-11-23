import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary: "btn-gradient",
  outline:
    "border border-cream/25 text-cream hover:border-grad-peach hover:text-grad-peach bg-transparent",
  ghost:
    "border border-espresso/10 text-espresso hover:border-grad-amber hover:text-burgundy bg-soft-white/60",
  whatsapp:
    "bg-whatsapp text-white hover:brightness-110 border border-whatsapp",
};

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-body text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300";

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
