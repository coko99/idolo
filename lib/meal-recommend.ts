import { getDishImage } from "@/lib/dish-images";
import { formatItemPrice, formatPrice, menuCategories, type MenuItem } from "@/lib/menu-data";

export type MealTime = "dorucak" | "rucak" | "vecera";

export type MealIdea = {
  name: string;
  why: string;
  /** Used in the table total when the menu price is a size range. */
  charge?: number;
  role: "piletina" | "burger" | "pasta" | "pizza" | "rostilj" | "salata" | "dorucak" | "tortilja" | "pohovano";
};

export type GuestSuggestion = {
  guest: number;
  name: string;
  why: string;
  priceText: string;
  amount: number;
  image?: string;
  ranged: boolean;
};

const ideas: MealIdea[] = [
  {
    name: "Lava piletina",
    why: "Zapečena piletina sa njokama i sirom, za gosta koji hoće pun tanjir.",
    role: "piletina",
  },
  {
    name: "Twins burgeri",
    why: "Dve lepinje i karamelizovani luk, za nekog baš gladnog.",
    role: "burger",
  },
  {
    name: "Classic burger",
    why: "Klasičan burger sa pomfritom, siguran izbor za sto.",
    role: "burger",
  },
  {
    name: "Carbonara",
    why: "Kremasta pasta, za gosta koji neće roštilj.",
    role: "pasta",
  },
  {
    name: "Bolognese",
    why: "Taljatele u mesnom sosu, obrok koji svi prepoznaju.",
    role: "pasta",
  },
  {
    name: "Idolo pica",
    why: "Naša puna pica. U zbiru računamo veću, od 32 cm.",
    charge: 1150,
    role: "pizza",
  },
  {
    name: "Pica pršuta",
    why: "Pršuta i rukola, lakša pica od Idolo pice.",
    charge: 1040,
    role: "pizza",
  },
  {
    name: "Ramstek",
    why: "Juneći ramstek, za gosta koji bira meso.",
    role: "rostilj",
  },
  {
    name: "Ćevapi",
    why: "Roštilj sa lepinjom, za nekog ko hoće domaći ukus.",
    role: "rostilj",
  },
  {
    name: "Pljeskavica",
    why: "Pljeskavica i pomfrit, jednostavan i jak obrok.",
    role: "rostilj",
  },
  {
    name: "Bečka šnicla",
    why: "Pohovana šnicla na pireu, za gosta koji voli pohovano.",
    role: "pohovano",
  },
  {
    name: "Cezar salata",
    why: "Piletina i ajsberg, lakši obrok za nekog za stolom.",
    role: "salata",
  },
  {
    name: "Burito",
    why: "Velika tortilja, za gosta koji hoće sve u jednom zalogaju.",
    role: "tortilja",
  },
  {
    name: "Giros tortilja",
    why: "Svinjski file i tzatziki, drugačije od burgere.",
    role: "tortilja",
  },
  {
    name: "Pileći medaljoni",
    why: "Piletina, pančeta i mocarela, bogat tanjir sa testeninom.",
    role: "piletina",
  },
];

const breakfastIdeas: MealIdea[] = [
  { name: "Jaja po želji", why: "Tri jaja, paradajz, krastavac i hleb.", role: "dorucak" },
  { name: "Omlet u tortilji", why: "Omlet sa šunkom, kačkavaljem i pavlakom.", role: "dorucak" },
  { name: "Engleski doručak", why: "Jaja, kobasice i slanina za pun početak.", role: "dorucak" },
  { name: "Punjene prženice", why: "Tost, šunka i kačkavalj.", role: "dorucak" },
  { name: "Slani uštipci", why: "Slani uštipci sa pršutom i ajvarom.", role: "dorucak" },
  { name: "Slatki uštipci", why: "Slatki uštipci sa eurokremom.", role: "dorucak" },
  { name: "Kačamak", why: "Kačamak sa sirom, mocarelom i pančetom.", role: "dorucak" },
  { name: "Doručak za dvoje", why: "Veliki doručak, ako je neko baš gladan.", role: "dorucak" },
  { name: "Pohovana palačinka", why: "Pohovana palačinka sa šunkom i kačkavaljem.", role: "dorucak" },
  { name: "Domaćinski doručak", why: "Jaja, fokača, pršuta i ajvar.", role: "dorucak" },
  { name: "Idolo paketić", why: "Paketić sa šunkom, kačkavaljem i kulenom.", role: "dorucak" },
];

function findItem(name: string): MenuItem | undefined {
  for (const category of menuCategories) {
    const item = category.items.find((entry) => entry.name === name);
    if (item) return item;
  }
  return undefined;
}

function shuffle<T>(list: T[], random: () => number): T[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function recommendMeals(
  count: number,
  meal: MealTime = "rucak",
  random: () => number = Math.random,
): GuestSuggestion[] {
  const safeCount = Math.min(8, Math.max(1, Math.round(count)));
  const pool = meal === "dorucak" ? breakfastIdeas : ideas;
  const available = pool.filter((idea) => findItem(idea.name));
  const byRole = new Map<string, MealIdea[]>();
  for (const idea of available) {
    const group = byRole.get(idea.role) ?? [];
    group.push(idea);
    byRole.set(idea.role, group);
  }

  const picked: MealIdea[] = [];
  const used = new Set<string>();
  const roles = shuffle([...byRole.keys()], random);

  for (const role of roles) {
    if (picked.length >= safeCount) break;
    const options = shuffle(byRole.get(role) ?? [], random).filter((idea) => !used.has(idea.name));
    const choice = options[0];
    if (!choice) continue;
    picked.push(choice);
    used.add(choice.name);
  }

  const leftovers = shuffle(
    available.filter((idea) => !used.has(idea.name)),
    random,
  );
  for (const idea of leftovers) {
    if (picked.length >= safeCount) break;
    picked.push(idea);
    used.add(idea.name);
  }

  while (picked.length < safeCount) {
    picked.push(available[Math.floor(random() * available.length)]);
  }

  return picked.slice(0, safeCount).map((idea, index) => {
    const item = findItem(idea.name);
    const amount = item?.price ?? idea.charge ?? 0;
    return {
      guest: index + 1,
      name: idea.name,
      why: idea.why,
      priceText: item ? formatItemPrice(item) : formatPrice(amount),
      amount,
      image: getDishImage(idea.name),
      ranged: Boolean(item?.priceLabel),
    };
  });
}

export function suggestionTotal(suggestions: GuestSuggestion[]): number {
  return suggestions.reduce((sum, item) => sum + item.amount, 0);
}
