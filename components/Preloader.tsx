"use client";

import { BrandCredit } from "@/components/BrandCredit";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/constants";
import { images } from "@/lib/images";

const RING_SIZE = 128;
const RING_STROKE = 3;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const LOAD_DURATION_MS = 2000;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Preloader() {
  const pathname = usePathname();
  const runId = useRef(0);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentRun = ++runId.current;

    setVisible(true);
    setProgress(0);

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      if (runId.current !== currentRun) return;

      const elapsed = Math.min(1, (now - start) / LOAD_DURATION_MS);
      setProgress(easeOutCubic(elapsed) * 100);

      if (elapsed < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    const hideTimer = window.setTimeout(() => {
      if (runId.current !== currentRun) return;
      setProgress(100);
      setVisible(false);
    }, LOAD_DURATION_MS + 280);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const ringOffset = RING_CIRCUMFERENCE * (1 - progress / 100);
  const displayPercent = Math.min(100, Math.round(progress));

  return (
    <div
      className={`preloader ${visible ? "preloader-visible" : "preloader-hidden"}`}
      aria-hidden={!visible}
      aria-live="polite"
      aria-busy={visible}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={displayPercent}
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-5">
        <div className="preloader-idolo" style={{ width: RING_SIZE, height: RING_SIZE }}>
          <svg
            className="preloader-ring absolute inset-0 -rotate-90"
            viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="preloader-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffcc8e" />
                <stop offset="35%" stopColor="#d98000" />
                <stop offset="65%" stopColor="#c68e3e" />
                <stop offset="100%" stopColor="#ffcc8e" />
              </linearGradient>
            </defs>
            <circle
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RING_RADIUS}
              fill="none"
              stroke="rgba(255, 204, 142, 0.12)"
              strokeWidth={RING_STROKE}
            />
            <circle
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RING_RADIUS}
              fill="none"
              stroke="url(#preloader-ring-gradient)"
              strokeWidth={RING_STROKE}
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={ringOffset}
              className="preloader-ring-progress"
            />
          </svg>

          <div className="relative z-10 h-[4.5rem] w-[4.5rem]">
            <Image
              src={images.logoHeader}
              alt={SITE.name}
              fill
              unoptimized
              priority
              className="object-contain"
            />
          </div>
        </div>

        <p className="preloader-percent font-heading text-sm tracking-[0.22em] text-grad-peach md:text-base">
          {displayPercent}%
        </p>
      </div>

      <div key={pathname} className="preloader-brand pb-10">
        <BrandCredit logoClassName="h-12 w-12" priority />
      </div>
    </div>
  );
}
