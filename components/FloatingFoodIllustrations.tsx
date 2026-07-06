"use client";

import type { ComponentType } from "react";
import {
  CocktailIllustration,
  CoffeeIllustration,
  CroissantIllustration,
  ForkKnifeIllustration,
  PlateIllustration,
  WineIllustration,
} from "@/components/illustrations/FoodIllustrations";

type DecorItem = {
  id: string;
  Illustration: ComponentType<{ className?: string }>;
  className: string;
  size: number;
};

const decorItems: DecorItem[] = [
  {
    id: "coffee-1",
    Illustration: CoffeeIllustration,
    className: "left-[4%] top-[10%]",
    size: 52,
  },
  {
    id: "fork-1",
    Illustration: ForkKnifeIllustration,
    className: "right-[5%] top-[22%]",
    size: 48,
  },
  {
    id: "wine-1",
    Illustration: WineIllustration,
    className: "left-[7%] top-[55%]",
    size: 44,
  },
  {
    id: "croissant-1",
    Illustration: CroissantIllustration,
    className: "right-[8%] bottom-[18%]",
    size: 50,
  },
  {
    id: "plate-1",
    Illustration: PlateIllustration,
    className: "left-[2%] bottom-[28%]",
    size: 46,
  },
  {
    id: "cocktail-1",
    Illustration: CocktailIllustration,
    className: "right-[3%] top-[48%]",
    size: 42,
  },
  {
    id: "coffee-2",
    Illustration: CoffeeIllustration,
    className: "right-[12%] bottom-[8%]",
    size: 40,
  },
];

export function FloatingFoodIllustrations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {decorItems.map((item) => (
        <div
          key={item.id}
          className={`fixed-illustration absolute ${item.className}`}
          style={{
            width: item.size,
            height: item.size,
          }}
        >
          <item.Illustration className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
