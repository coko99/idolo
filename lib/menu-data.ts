export type MenuItem = {
  name: string;
  description: string;
  price?: number;
  priceLabel?: string;
  image?: string;
  /** Reserved photo frame. `false` opts out when the category expects photos. */
  imageSlot?: boolean;
  group?: string;
  tag?: "popularno" | "preporuka" | "novo";
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  /** Food categories keep an empty photo frame until a picture is added. */
  photos?: boolean;
  items: MenuItem[];
};

export function itemWantsPhoto(category: MenuCategory, item: MenuItem): boolean {
  if (item.imageSlot !== undefined) return item.imageSlot;
  return Boolean(category.photos);
}

function rsd(amount: number): string {
  return `${amount.toLocaleString("sr-RS")} RSD`;
}

function pizza(price24: number, price32: number): string {
  return `24 cm ${price24.toLocaleString("sr-RS")} · 32 cm ${price32.toLocaleString("sr-RS")} RSD`;
}

const breakfastAddons = "Dodaci po izboru";

export const menuCategories: MenuCategory[] = [
  {
    id: "dorucak",
    label: "Doručak",
    photos: true,
    items: [
      {
        name: "Jaja po želji",
        price: 390,
        description: "Tri jaja (omlet, kajgana ili na oko), paradajz, krastavac i hleb.",
      },
      { name: "Sir", price: 130, description: "", group: breakfastAddons, imageSlot: false },
      { name: "Šunka", price: 130, description: "", group: breakfastAddons, imageSlot: false },
      { name: "Pančeta", price: 230, description: "", group: breakfastAddons, imageSlot: false },
      {
        name: "Povrće (tikvica, pečurke i sveža paprika)",
        price: 100,
        description: "",
        group: breakfastAddons,
        imageSlot: false,
      },
      { name: "Ajvar", price: 170, description: "", group: breakfastAddons, imageSlot: false },
      {
        name: "Omlet u tortilji",
        price: 580,
        description: "Tri jaja, šunka, kačkavalj, pavlaka.",
      },
      {
        name: "Engleski doručak",
        price: 640,
        description: "Tri jaja, kobasice, slanina, pavlaka, senf, hleb.",
      },
      {
        name: "Punjene prženice",
        price: 540,
        description: "Tost hleb, šunka, kačkavalj, tartar, pavlaka.",
      },
      {
        name: "Slani uštipci",
        price: 640,
        description: "Pavlaka, ajvar, dimljeni vrat, pršuta.",
      },
      { name: "Slatki uštipci", price: 490, description: "Eurokrem." },
      { name: "Kačamak", price: 620, description: "Sir, mocarela, pančeta." },
      {
        name: "Doručak za dvoje",
        price: 1080,
        description: "Omlet od tri jaja, pohovani kačkavalj, punjene prženice, šopska salata, pomfrit.",
      },
      {
        name: "Pohovana palačinka",
        price: 650,
        description: "Šunka, kačkavalj, pavlaka, pomfrit, kečap, majonez.",
      },
      {
        name: "Domaćinski doručak",
        price: 490,
        description: "Dva jaja, fokača, pršuta, ajvar, pavlaka, rukola, čeri paradajz.",
        tag: "novo",
      },
      {
        name: "Idolo paketić",
        price: 610,
        description: "Sos od pečuraka, suvi vrat, šunka, kačkavalj, kulen.",
        tag: "novo",
      },
    ],
  },
  {
    id: "tortilje",
    label: "Tortilje",
    photos: true,
    items: [
      {
        name: "Cezar tortilja",
        price: 870,
        description: "Pileći file, pomfrit, pančeta, ajsberg, kačkavalj, tartar, pavlaka.",
      },
      {
        name: "Giros tortilja",
        price: 890,
        description: "Svinjski file, pomfrit, tzatziki sos, pavlaka, paradajz.",
      },
      {
        name: "Burito",
        price: 980,
        description: "Juneće meso, pomfrit, crveni pasulj, kukuruz šećerac, luk, paradajz, pavlaka, burger sos.",
      },
      {
        name: "Index tortilja",
        price: 750,
        description: "Pavlaka, suvi vrat, kačkavalj, paradajz, vedžis krompir.",
        tag: "novo",
      },
    ],
  },
  {
    id: "paste",
    label: "Paste",
    photos: true,
    items: [
      {
        name: "Carbonara",
        price: 940,
        description: "Taljatele, pančeta, parmezan, neutralna pavlaka.",
      },
      {
        name: "Bolognese",
        price: 940,
        description: "Taljatele, mleveno juneće meso, crni luk, šargarepa, paradajz sos, parmezan.",
      },
    ],
  },
  {
    id: "rizoto",
    label: "Rižoto",
    photos: true,
    items: [
      {
        name: "Rižoto sa piletinom",
        price: 870,
        description: "Pileći file, pečurke, tikvice, parmezan, paprika, pirinač.",
      },
    ],
  },
  {
    id: "burgeri",
    label: "Burgeri",
    photos: true,
    items: [
      {
        name: "Classic burger",
        price: 990,
        description: "Juneće meso, ajsberg, čedar, kiseli krastavac, paradajz, burger sos, BBQ sos, pohovani luk, pomfrit.",
      },
      {
        name: "Twins burgeri",
        price: 1150,
        description: "100% juneće roštilj meso, paprika u pavlaci, lepinje, karamelizovani luk.",
        tag: "preporuka",
      },
    ],
  },
  {
    id: "posno",
    label: "Posno",
    photos: true,
    items: [
      {
        name: "Rižoto sa povrćem",
        price: 780,
        description: "Pirinač, pečurke, tikvica, paprika, paradajz sos.",
        note: "Može se pripremiti na vodi.",
      },
      {
        name: "Tuna salata",
        price: 870,
        description: "Tunjevina, ajsberg, kukuruz šećerac, crveni pasulj, čeri paradajz, tost hleb, aceto balsamico.",
      },
      {
        name: "Posni brusketi",
        price: 600,
        description: "Posni kačkavalj, tunjevina, paradajz, tost hleb.",
      },
    ],
  },
  {
    id: "meso",
    label: "Meso",
    photos: true,
    items: [
      {
        name: "Pohovani pileći štapići",
        price: 840,
        description: "Pileći file, prezle, susam, pomfrit, tartar sos.",
      },
      {
        name: "Fitnes piletina",
        price: 940,
        description: "Pileći file, tikvica, šampinjoni, pirinač, paprika.",
      },
      {
        name: "Pileći medaljoni",
        price: 1320,
        description: "Pileći file, pančeta, mocarela, taljatele, spanać, bešamel sos.",
      },
      {
        name: "Slatkoljuta piletina",
        price: 890,
        description: "Pileći file, tikvica, šampinjoni, paprika, pirinač, slatkoljuti sos.",
      },
      {
        name: "Ramstek",
        price: 1700,
        description: "Juneće meso, vedžis krompir, pirinač.",
      },
      {
        name: "Piletina u sosu od pečuraka",
        price: 940,
        description: "Pileći file, pirinač, pančeta, sos od pečuraka, parmezan.",
      },
      {
        name: "Pljeskavica",
        price: 1050,
        description: "Juneće meso, pomfrit, lepinja, paradajz, luk.",
      },
      {
        name: "Ćevapi",
        price: 1050,
        description: "Juneće meso, pomfrit, lepinja, paradajz, luk.",
      },
      {
        name: "Bečka šnicla",
        price: 950,
        description: "Svinjski file, pire.",
      },
      {
        name: "Piletina u kremastom sosu od indijskog oraha i spanaća",
        price: 940,
        description: "Pileći file, spanać, indijski orah, pirinač, bešamel.",
      },
      {
        name: "Uštipci od roštilj mesa",
        price: 1240,
        description: "Juneće roštilj meso, dimljeni vrat, kačkavalj, kajmak sos, vedžis.",
      },
      {
        name: "Daska za 2 osobe",
        price: 2100,
        description: "Ćevapi 200 g, pileći file 200 g, kobasica 200 g, dve lepinje, pomfrit, luk.",
      },
    ],
  },
  {
    id: "preporuka-sefa",
    label: "Preporuka šefa kuhinje",
    photos: true,
    items: [
      {
        name: "Ramstek u sosu od pečuraka",
        price: 1850,
        description: "Juneće meso, vedžis krompir, sos od pečuraka, pirinač.",
        tag: "preporuka",
      },
      {
        name: "Svinjski file na pireu u sosu od pečuraka i belog vina",
        price: 1110,
        description: "Svinjski file, pire, sos od pečuraka, belo vino.",
        tag: "preporuka",
      },
      {
        name: "Lava piletina",
        price: 1170,
        description: "Njoke, pileći file, ajvar, mocarela, punomasni sir, neutralna pavlaka.",
        tag: "preporuka",
      },
      {
        name: "Twins burgeri",
        price: 1150,
        description: "100% juneće roštilj meso, paprika u pavlaci, lepinje, karamelizovani luk.",
        tag: "preporuka",
      },
    ],
  },
  {
    id: "pice",
    label: "Pice",
    photos: true,
    items: [
      {
        name: "Capricciosa",
        priceLabel: pizza(820, 940),
        description: "Kačkavalj, šunka, pica sos, pečurke.",
      },
      {
        name: "Quattro Stagioni",
        priceLabel: pizza(840, 970),
        description: "Kačkavalj, pica sos, šunka, dimljeni vrat, kulen, pečurke, pavlaka, jaje.",
      },
      {
        name: "Vegetarijana",
        priceLabel: pizza(750, 850),
        description: "Posni kačkavalj, pečurke, tikvica, paprika, masline, čeri paradajz, pica sos.",
      },
      {
        name: "Peperoni",
        priceLabel: pizza(840, 960),
        description: "Kačkavalj, pica sos, kulen, feferoni.",
      },
      {
        name: "San Giovanni",
        priceLabel: pizza(850, 980),
        description: "Kačkavalj, pica sos, pečurke, dimljeni vrat, masline.",
      },
      {
        name: "Tuna",
        priceLabel: pizza(820, 920),
        description: "Tuna, kukuruz šećerac, posni kačkavalj, pečurke, tikvica, paprika, masline, čeri paradajz, pica sos.",
      },
      {
        name: "Vesuvio",
        priceLabel: pizza(780, 880),
        description: "Kačkavalj, šunka, pica sos.",
      },
      {
        name: "Margherita",
        priceLabel: pizza(730, 830),
        description: "Kačkavalj, pica sos.",
      },
      {
        name: "Idolo pica",
        priceLabel: pizza(1050, 1150),
        description: "Kačkavalj, čedar, pica sos, šunka, pančeta, pečurke.",
      },
      {
        name: "Pica 4 vrste sira",
        priceLabel: pizza(870, 990),
        description: "Kačkavalj, čedar, grand bavarese, parmezan, pica sos.",
      },
      {
        name: "Pica pršuta",
        priceLabel: pizza(990, 1040),
        description: "Pica sos, kačkavalj, pršuta, parmezan, rukola.",
      },
    ],
  },
  {
    id: "obrok-salate",
    label: "Obrok salate",
    photos: true,
    items: [
      {
        name: "Cezar salata",
        price: 890,
        description: "Pileći file, ajsberg, pančeta, čeri paradajz, tost hleb, parmezan, tartar sos.",
      },
      {
        name: "Ramstek salata",
        price: 1050,
        description: "Juneće meso, ajsberg, čeri paradajz, parmezan, masline, med, senf, tost hleb.",
      },
    ],
  },
  {
    id: "salate",
    label: "Salate",
    photos: true,
    items: [
      { name: "Šopska salata", price: 400, description: "Krastavac, paradajz, sir." },
      {
        name: "Vitaminska salata",
        price: 350,
        description: "Crveni kupus, kupus, cvekla, šargarepa, susam.",
      },
      {
        name: "Grčka salata",
        price: 450,
        description: "Masline, paradajz, krastavac, origano, ljubičasti luk, sir.",
        tag: "novo",
      },
      { name: "Paradajz salata sa sirom", price: 350, description: "" },
    ],
  },
  {
    id: "dodaci",
    label: "Dodaci",
    items: [
      { name: "Lepinja", price: 120, description: "" },
      { name: "Pomfrit 300 g", price: 400, description: "", imageSlot: true },
      { name: "Vedžis 300 g", price: 450, description: "", imageSlot: true },
      { name: "Pohovani luk 300 g", price: 400, description: "", imageSlot: true },
      { name: "Pohovani kačkavalj 250 g", price: 600, description: "", imageSlot: true },
      { name: "Grilovano povrće", price: 480, description: "", imageSlot: true },
      { name: "Ajvar", price: 170, description: "" },
      { name: "Sir", price: 130, description: "" },
      { name: "Šunka", price: 130, description: "" },
      { name: "Pančeta", price: 230, description: "" },
    ],
  },
  {
    id: "dezerti",
    label: "Dezerti",
    photos: true,
    items: [
      { name: "Cheesecake", price: 520, description: "" },
      { name: "Idolo torta", price: 510, description: "" },
      { name: "Slatke palačinke", price: 520, description: "Nutella, Plazma." },
      { name: "Palačinke sa sladoledom", price: 650, description: "" },
      {
        name: "Palačinke sa kremom od pistaća i Nutellom",
        price: 620,
        description: "",
      },
      { name: "Frikom premium sladoled, kugla", price: 130, description: "" },
    ],
  },
  {
    id: "kafe",
    label: "Kafe i topli napici",
    items: [
      { name: "Espresso", price: 180, description: "" },
      { name: "Espresso sa mlekom", price: 200, description: "" },
      { name: "Domaća kafa", price: 150, description: "" },
      { name: "Nes kafa", price: 210, description: "" },
      { name: "Cappuccino", price: 210, description: "" },
      { name: "Caffè latte", price: 250, description: "" },
      {
        name: "Caffè latte sa ukusom",
        price: 290,
        description: "",
        note: "Lešnik ili karamela.",
      },
      { name: "Espreso sa sojinim mlekom", price: 230, description: "" },
      { name: "Nes sa sojinim mlekom", price: 260, description: "" },
      {
        name: "Ice Coffee",
        price: 360,
        description: "Espresso, led, kugla sladoleda, mleko, preliv, šlag.",
      },
      {
        name: "Idolo kafa",
        price: 450,
        description: "Espresso, led, kugla sladoleda, Baileys, šlag.",
      },
      {
        name: "Irska kafa",
        price: 500,
        description: "Jameson, smeđi šećer, espresso, šlag.",
      },
      { name: "Čaj Milford", price: 190, description: "" },
      { name: "Topla čokolada", price: 330, description: "", note: "Crna ili bela." },
      {
        name: "Čoko Plazma",
        price: 380,
        description: "Crna ili bela topla čokolada sa Plazmom.",
      },
      { name: "Plazma šejk", price: 420, description: "" },
      { name: "Šlag", price: 50, description: "", group: "Dodaci za pića" },
      { name: "Limun", price: 120, description: "", group: "Dodaci za pića" },
    ],
  },
  {
    id: "bezalkoholna-pica",
    label: "Bezalkoholna pića",
    items: [
      { name: "Aqua Panna negazirana 0,25 l", price: 230, description: "", group: "Vode" },
      { name: "Aqua Viva 0,25 l", price: 170, description: "", group: "Vode" },
      { name: "Aqua Viva 0,75 l", price: 250, description: "", group: "Vode" },
      { name: "Knjaz Miloš mineralna voda 0,25 l", price: 180, description: "", group: "Vode" },
      { name: "Knjaz Miloš mineralna voda 0,75 l", price: 280, description: "", group: "Vode" },
      { name: "Ceđena narandža", price: 380, description: "", group: "Ceđeni sokovi" },
      { name: "Limunada", price: 300, description: "", group: "Ceđeni sokovi" },
      {
        name: "Limunada sa ukusima",
        price: 400,
        description: "",
        note: "Višnja, breskva, jagoda, lubenica, malina.",
        group: "Ceđeni sokovi",
      },
      { name: "Ceđeni grejp", price: 400, description: "", group: "Ceđeni sokovi" },
      {
        name: "Ceđeni miks",
        price: 440,
        description: "",
        note: "Narandža, limun i grejp.",
        group: "Ceđeni sokovi",
      },
      { name: "Knjaz Miloš limun 0,33 l", price: 210, description: "", group: "Gazirani sokovi" },
      { name: "Knjaz Miloš mandarina 0,33 l", price: 210, description: "", group: "Gazirani sokovi" },
      { name: "Cockta", price: 260, description: "", group: "Gazirani sokovi" },
      { name: "Evervess Bitter Lemon 0,25 l", price: 260, description: "", group: "Gazirani sokovi" },
      { name: "Mirinda", price: 260, description: "", group: "Gazirani sokovi" },
      { name: "Pepsi Cola 0,25 l", price: 260, description: "", group: "Gazirani sokovi" },
      { name: "Pepsi Max", price: 260, description: "", group: "Gazirani sokovi" },
      { name: "Pepsi Twist", price: 260, description: "", group: "Gazirani sokovi" },
      { name: "7 UP", price: 260, description: "", group: "Gazirani sokovi" },
      { name: "Evervess Tonic Water 0,25 l", price: 270, description: "", group: "Gazirani sokovi" },
      { name: "Fuze Tea breskva 0,33 l", price: 270, description: "", group: "Negazirani sokovi i napici" },
      { name: "Nectar borovnica 0,2 l", price: 270, description: "", group: "Negazirani sokovi i napici" },
      { name: "Nectar breskva 0,2 l", price: 270, description: "", group: "Negazirani sokovi i napici" },
      { name: "Nectar jabuka 0,2 l", price: 270, description: "", group: "Negazirani sokovi i napici" },
      { name: "Nectar jagoda 0,2 l", price: 270, description: "", group: "Negazirani sokovi i napici" },
      { name: "Nectar narandža 0,2 l", price: 270, description: "", group: "Negazirani sokovi i napici" },
      { name: "Cedevita", price: 220, description: "", group: "Negazirani sokovi i napici" },
      { name: "Guarana 0,25 l", price: 280, description: "", group: "Energetska pića" },
      { name: "Red Bull 0,25 l", price: 420, description: "", group: "Energetska pića" },
    ],
  },
  {
    id: "cideri",
    label: "Cideri",
    items: [
      { name: "Somersby jabuka", price: 370, description: "" },
      { name: "Somersby jagoda bez alkohola", price: 370, description: "" },
      { name: "Somersby kruška", price: 370, description: "" },
      { name: "Somersby mango", price: 370, description: "" },
      { name: "Somersby breskva", price: 370, description: "" },
    ],
  },
  {
    id: "piva",
    label: "Piva",
    items: [
      { name: "Lav Premium 0,33 l", price: 320, description: "" },
      { name: "Točeno Lav Premium", price: 300, description: "" },
      { name: "Tuborg Green 0,33 l", price: 320, description: "" },
      { name: "Tuborg Zero", price: 320, description: "" },
      { name: "Budweiser Budvar 0,33 l", price: 390, description: "" },
      { name: "Blanc 0,33 l", price: 340, description: "" },
      { name: "Blanc Rosé", price: 340, description: "" },
      { name: "Carlsberg 0,25 l", price: 350, description: "" },
      { name: "San Miguel Fresca 0,33 l", price: 600, description: "" },
      { name: "Erdinger 0,33 l", price: 580, description: "" },
    ],
  },
  {
    id: "kokteli",
    label: "Kokteli",
    items: [
      { name: "Aperol Spritz", price: 570, description: "" },
      { name: "Blue Frog", price: 650, description: "" },
      { name: "Cosmopolitan", price: 570, description: "" },
      { name: "Long Island", price: 650, description: "" },
      { name: "Mai Tai", price: 650, description: "" },
      { name: "Margarita", price: 520, description: "" },
      { name: "Sex on the Beach", price: 540, description: "" },
      { name: "Stoper", price: 620, description: "" },
      { name: "Tequila Sunrise", price: 570, description: "" },
      { name: "Mojito", price: 620, description: "" },
    ],
  },
  {
    id: "alkoholna-pica",
    label: "Alkoholna pića",
    items: [
      { name: "Loza 13. juli 0,03 l", price: 200, description: "" },
      { name: "Stara Sokolova 12 0,03 l", price: 700, description: "" },
      { name: "Stara Sokolova dunja 5 0,03 l", price: 330, description: "" },
      { name: "Stara Sokolova šljiva 5 0,03 l", price: 330, description: "" },
      { name: "Trivunova dunja 0,03 l", price: 280, description: "" },
      { name: "Trivunova kajsija 0,03 l", price: 280, description: "" },
      { name: "Trivunova loza 0,03 l", price: 280, description: "" },
      { name: "Trivunova šljiva 0,03 l", price: 280, description: "" },
      { name: "Trivunova viljamovka 0,03 l", price: 280, description: "" },
      { name: "Liker Meduška 0,03 l", price: 250, description: "" },
      { name: "Viljamovka Takovo 0,03 l", price: 250, description: "" },
      { name: "Smirnoff Vodka 0,03 l", price: 270, description: "" },
      { name: "Absolut Vodka 0,03 l", price: 270, description: "" },
      { name: "Baileys 0,03 l", price: 350, description: "" },
      { name: "Ballantine’s 0,03 l", price: 280, description: "" },
      { name: "Beefeater Gin 0,03 l", price: 260, description: "" },
      { name: "Campari 0,03 l", price: 350, description: "" },
      { name: "Agavita", price: 300, description: "" },
      { name: "Chivas Regal 12 0,03 l", price: 450, description: "" },
      { name: "Džin-tonik", price: 350, description: "" },
      { name: "Gorki list 0,03 l", price: 230, description: "" },
      { name: "Jack Daniel’s 0,03 l", price: 360, description: "" },
      { name: "Jägermeister 0,03 l", price: 280, description: "" },
      { name: "Jameson 0,03 l", price: 350, description: "" },
      { name: "Johnnie Walker Black 0,03 l", price: 450, description: "" },
      { name: "Johnnie Walker Red", price: 290, description: "" },
      { name: "Martini Bianco 0,05 l", price: 320, description: "" },
      { name: "Jameson Black Barrel", price: 450, description: "" },
      { name: "Vermut 0,05 l", price: 250, description: "" },
      { name: "Vinjak 0,03 l", price: 220, description: "" },
      { name: "Vinjak 5 0,03 l", price: 250, description: "" },
      { name: "Moët", price: 18000, description: "" },
      { name: "Belvedere", price: 18000, description: "" },
      { name: "Grey Goose", price: 18000, description: "" },
    ],
  },
  {
    id: "karta-vina",
    label: "Karta vina",
    items: [
      { name: "Kuvano vino", price: 380, description: "" },
      { name: "Vino na čašu", price: 370, description: "" },
      { name: "Amante Carmen 0,75 l", price: 3000, description: "", group: "Rubin" },
      { name: "Amante Rina belo 0,75 l", price: 3000, description: "", group: "Rubin" },
      { name: "Amante Aurora 0,75 l", price: 3000, description: "", group: "Rubin" },
      { name: "Chardonnay Rubin", price: 1200, description: "", group: "Rubin" },
      { name: "Rubin Muskat 0,7 l", price: 1300, description: "", group: "Rubin" },
      { name: "Double Barrique Cabernet Rubin", price: 4000, description: "", group: "Rubin" },
      { name: "Double Barrique Sauvignon Rubin", price: 4000, description: "", group: "Rubin" },
      { name: "Cabernet Rubin 0,75 l", price: 1200, description: "", group: "Rubin" },
      { name: "Varijanta 0,75 l", price: 2500, description: "", group: "Aleksandrović" },
      { name: "Harizma 0,75 l", price: 3000, description: "", group: "Aleksandrović" },
      { name: "Regent 0,75 l", price: 3500, description: "", group: "Aleksandrović" },
      { name: "Tamjanika 0,75 l", price: 2300, description: "", group: "Đorđević" },
      { name: "Sauvignon Blanc 0,75 l", price: 2300, description: "", group: "Đorđević" },
      { name: "Chardonnay", price: 2300, description: "", group: "Đorđević" },
      { name: "Merlot Cabernet 0,75 l", price: 2300, description: "", group: "Đorđević" },
      { name: "Sauvignon 0,75 l", price: 1800, description: "", group: "Jović" },
      { name: "Rosé 0,75 l", price: 1800, description: "", group: "Jović" },
      { name: "Chardonnay", price: 2000, description: "", group: "Jović" },
      { name: "Cabernet", price: 2500, description: "", group: "Jović" },
      { name: "Kovačević Chardonnay 0,75 l", price: 2500, description: "", group: "Ostale vinarije" },
      { name: "Radovanović Cabernet Sauvignon", price: 2500, description: "", group: "Ostale vinarije" },
      { name: "Spasić Tamjanika 0,75 l", price: 2300, description: "", group: "Ostale vinarije" },
    ],
  },
];

export function formatItemPrice(item: MenuItem): string {
  if (item.priceLabel) return item.priceLabel;
  if (item.price !== undefined) return rsd(item.price);
  return "";
}

export const menuTabIds = menuCategories.map((category) => category.id);
