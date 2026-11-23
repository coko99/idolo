/**
 * Dish photos, keyed by the exact menu item name.
 * Frames stay empty until new photos are dropped in here.
 */
export const dishImages: Record<string, string> = {};

export function getDishImage(name: string): string | undefined {
  return dishImages[name];
}
