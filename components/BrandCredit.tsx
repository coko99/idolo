import Image from "next/image";
import { SITE } from "@/lib/constants";
import { images } from "@/lib/images";

type BrandCreditProps = {
  logoClassName?: string;
  className?: string;
  priority?: boolean;
};

export function BrandCredit({
  logoClassName = "h-14 w-14 md:h-16 md:w-16",
  className = "",
  priority = false,
}: BrandCreditProps) {
  return (
    <a
      href={SITE.poweredBy.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`brand-credit group flex flex-col items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${SITE.poweredBy.name} — cokoladni.photo`}
    >
      <div className={`powered-by-logo-wrap relative ${logoClassName}`}>
        <Image
          src={images.poweredByLogo}
          alt={SITE.poweredBy.name}
          fill
          unoptimized
          priority={priority}
          className="powered-by-logo-glow object-contain"
        />
      </div>

      <span className="brand-credit-neon font-heading text-[10px] uppercase tracking-[0.24em] md:text-[11px]">
        <span className="brand-credit-neon-glow" aria-hidden="true">
          {SITE.poweredBy.name}
        </span>
        <span className="brand-credit-neon-face">{SITE.poweredBy.name}</span>
      </span>
    </a>
  );
}
