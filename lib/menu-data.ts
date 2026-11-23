export type MenuItem = {
  name: string;
  description: string;
  price?: number;
  priceLabel?: string;
  image?: string;
  tag?: "popularno" | "preporuka" | "novo";
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

function rsd(amount: number): string {
  return `${amount.toLocaleString("sr-RS")} RSD`;
}

function pizza(price24: number, price32: number): string {
  return `24 cm ${price24.toLocaleString("sr-RS")} · 32 cm ${price32.toLocaleString("sr-RS")} RSD`;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "dorucak",
    label: "Doručak",
    items: [
      { name: "Omlet", price: 390, description: "3 jaja po želji / oko, kajgana ili omlet, paradajz, krastavac, hleb." },
      { name: "Omlet sa sirom", price: 450, description: "3 jaja, paradajz, krastavac, sir kriška, hleb." },
      { name: "Omlet sa šunkom", price: 470, description: "3 jaja, šunka, paradajz, krastavac, hleb." },
      { name: "Omlet pančeta", price: 490, description: "3 jaja, pančeta, paradajz, krastavac, hleb." },
      { name: "Omlet povrće", price: 450, description: "3 jaja, tikvica, pečurke, sveža paprika, paradajz, krastavac, hleb.", image: "/images/menu-breakfast.png", tag: "preporuka" },
      { name: "Omlet u tortilji", price: 570, description: "3 jaja, šunka, kačkavalj, pavlaka." },
      { name: "Engleski doručak", price: 570, description: "3 jaja, kobasice, slanina, pavlaka, senf, hleb.", tag: "popularno" },
      { name: "Punjene prženice", price: 540, description: "Tost hleb, šunka, kačkavalj, tartar, pavlaka." },
      { name: "Slani uštipci", price: 640, description: "Pavlaka, ajvar, dimljeni vrat, pršuta." },
      { name: "Slatki uštipci", price: 490, description: "Eurokrem." },
      { name: "Kačamak", price: 590, description: "Sir, mocarela, pančeta." },
      { name: "Doručak za dvoje", price: 990, description: "Omlet od 3 jaja, pohovani kačkavalj, punjene prženice, šopska salata, pomfrit.", tag: "preporuka" },
      { name: "Pohovana palačinka", price: 590, description: "Šunka, kačkavalj, pavlaka, pomfrit, kečap i majonez." },
    ],
  },
  {
    id: "sendvici",
    label: "Sendviči",
    items: [
      { name: "Piletina sendvič", price: 750, description: "Pileći file, kačkavalj, čedar kačkavalj, šampinjoni, ajsberg, pavlaka.", image: "/images/menu-sandwich.png", tag: "popularno" },
      { name: "Domaćica sendvič", price: 590, description: "Dimljeni vrat, kačkavalj, paradajz, krastavac, pavlaka." },
    ],
  },
  {
    id: "tortilje",
    label: "Tortilje",
    items: [
      { name: "Cezar tortilja", price: 870, description: "Pileći file, pomfrit, pančeta, ajsberg, kačkavalj, tartar, pavlaka." },
      { name: "Giros tortilja", price: 890, description: "Svinjski file, pomfrit, tzatziki sos, pavlaka, paradajz." },
      { name: "Burito", price: 980, description: "Juneće meso, pomfrit, crveni pasulj, kukuruz šećerac, luk, paradajz, pavlaka, burger sos.", tag: "preporuka" },
    ],
  },
  {
    id: "paste",
    label: "Paste",
    items: [
      { name: "Carbonara", price: 890, description: "Taljatele, pančeta, parmezan, neutralna pavlaka.", image: "/images/menu-pasta.png", tag: "popularno" },
      { name: "Pesto Rosso", price: 920, description: "Taljatele, piletina, pečurke, parmezan, neutralna pavlaka, pesto rosso sos." },
      { name: "Bolognese", price: 890, description: "Taljatele, juneće mleveno meso, crni luk, šargarepa, paradajz sos." },
    ],
  },
  {
    id: "brusketi",
    label: "Brusketi",
    items: [
      { name: "Mrsni brusketi", price: 700, description: "Pršuta, paradajz, mocarela, tost hleb, parmezan." },
      { name: "Posni brusketi", price: 550, description: "Posni kačkavalj, tunjevina, paradajz, tost hleb." },
      { name: "Daska", price: 1500, description: "Dimljeni vrat, pršuta, pančeta, čedar, kačkavalj, mocarela, grand bavarese, masline, čeri paradajz.", tag: "preporuka" },
    ],
  },
  {
    id: "burgeri",
    label: "Burgeri",
    items: [
      { name: "Classic burger", price: 940, description: "Juneće meso, ajsberg, čedar kačkavalj, kiseli krastavac, paradajz, burger sos, BBQ sos, pohovani luk.", tag: "popularno" },
      { name: "Chicken burger", price: 850, description: "Pileći file, ajsberg, tartar, paradajz, pomfrit, BBQ sos, pohovani luk." },
    ],
  },
  {
    id: "rizoto",
    label: "Rižoto",
    items: [
      { name: "Rižoto sa piletinom", price: 870, description: "Pileći file, pečurke, tikvice, parmezan, paprika, pirinač." },
      { name: "Rižoto sa povrćem", price: 720, description: "Pirinač, pečurke, tikvica, paprika, paradajz sos." },
    ],
  },
  {
    id: "potaz-corbe",
    label: "Potaž i čorbe",
    items: [
      { name: "Potaž od povrća", price: 350, description: "Pečurke, luk, šargarepa, tikvica, paprika, neutralna pavlaka, piletina." },
      { name: "Teleća čorba", price: 400, description: "Teleća čorba." },
    ],
  },
  {
    id: "meso",
    label: "Meso",
    items: [
      { name: "Pohovani pileći štapići", price: 780, description: "Piletina, prezle, susam, pomfrit, tartar sos.", image: "/images/menu-schnitzel.png" },
      { name: "Fitnes piletina", price: 910, description: "Pileći file, tikvica, šampinjoni, pirinač, paprika." },
      { name: "Pileći medaljoni", price: 1170, description: "Pileći file, pančeta, mocarela, taljatele, spanać, bešamel sos.", tag: "preporuka" },
      { name: "Slatko-ljuta piletina", price: 890, description: "Pileći file, tikvica, šampinjoni, paprika, pirinač, slatko-ljuti sos.", tag: "popularno" },
      { name: "Ramstek", price: 1700, description: "Juneće meso, vedžis krompir, pirinač.", note: "Priprema 20–25 minuta." },
      { name: "Ramstek u sosu od pečuraka", price: 1850, description: "Juneće meso, vedžis krompir, sos od pečuraka, pirinač.", note: "Priprema 20–25 minuta." },
      { name: "Piletina u sosu od pečuraka", price: 870, description: "Pileći file, pirinač, pančeta, sos od pečuraka, parmezan." },
      { name: "Pljeskavica", price: 1050, description: "Juneće meso, pomfrit, lepinja, paradajz, luk.", image: "/images/menu-grill.png" },
      { name: "Ćevapi", price: 1050, description: "Juneće meso, pomfrit, lepinja, paradajz, luk." },
      { name: "Bečka šnicla", price: 950, description: "Svinjski file, pomfrit, parmezan." },
      { name: "Piletina u kremastom sosu od indijskog oraha i spanaća", price: 940, description: "Pileći file, spanać, indijski orah, pirinač, parmezan." },
      { name: "Uštipci od roštilj mesa", price: 1100, description: "Juneće roštilj meso, dimljeni vrat, kačkavalj, kajmak sos, vedžis." },
      { name: "Daska za 2 osobe", price: 2100, description: "Ćevapi 200 g, pileći file 200 g, kobasica 200 g, 2 lepinje, pomfrit, luk.", tag: "preporuka" },
    ],
  },
  {
    id: "pice",
    label: "Pice",
    items: [
      { name: "Capricciosa", priceLabel: pizza(750, 850), description: "Kačkavalj, šunka, pica sos, pečurke.", image: "/images/menu-pizza.png" },
      { name: "Quattro Stagioni", priceLabel: pizza(790, 890), description: "Kačkavalj, pica sos, šunka, dimljeni vrat, kulen, pečurke, pavlaka, 1 jaje." },
      { name: "Vegetarijana", priceLabel: pizza(620, 750), description: "Posni kačkavalj, pečurke, tikvica, paprika, masline, čeri paradajz, pica sos." },
      { name: "Peperoni", priceLabel: pizza(790, 880), description: "Kačkavalj, pica sos, kulen, feferoni." },
      { name: "San Giovanni", priceLabel: pizza(790, 890), description: "Kačkavalj, pica sos, pečurke, dimljeni vrat, masline.", tag: "popularno" },
      { name: "Tuna", priceLabel: pizza(720, 850), description: "Tuna komadi, kukuruz šećerac, posni kačkavalj, pečurke, tikvica, paprika, masline, čeri paradajz, pica sos." },
      { name: "Vesuvio", priceLabel: pizza(710, 810), description: "Kačkavalj, šunka, pica sos." },
      { name: "Margarita", priceLabel: pizza(620, 720), description: "Kačkavalj, pica sos." },
      { name: "Idolo pica", priceLabel: pizza(950, 1050), description: "Kačkavalj, čedar, pica sos, šunka, pančeta, pečurke.", tag: "preporuka" },
      { name: "Pica 4 vrste sira", priceLabel: pizza(820, 940), description: "Kačkavalj, čedar, grand bavarese, parmezan, pica sos." },
      { name: "Pica pršuta", priceLabel: pizza(890, 990), description: "Pica sos, kačkavalj, pršuta, parmezan, rukola." },
      { name: "Calcona", price: 940, description: "Kačkavalj, pica sos, šunka, pečurke, pavlaka, kečap." },
    ],
  },
  {
    id: "obrok-salate",
    label: "Obrok salate",
    items: [
      { name: "Cezar salata", price: 890, description: "Pileći file, ajsberg, pančeta, čeri paradajz, tost hleb, parmezan, tartar sos.", image: "/images/hero-steak-salad.png", tag: "popularno" },
      { name: "Tuna salata", price: 820, description: "Tunjevina, ajsberg, kukuruz šećerac, crveni pasulj, čeri paradajz, tost hleb, aceto balsamico." },
      { name: "Ramstek salata", price: 1050, description: "Juneće meso, ajsberg, čeri paradajz, parmezan, masline, med, senf, tost hleb.", tag: "preporuka" },
    ],
  },
  {
    id: "salate",
    label: "Salate",
    items: [
      { name: "Šopska salata", price: 400, description: "Krastavac, paradajz, sir." },
      { name: "Vitaminska salata", price: 350, description: "Crveni kupus, kupus, cvekla, šargarepa, susam." },
      { name: "Crveni kupus", price: 350, description: "Crveni kupus, pavlaka, beli luk." },
      { name: "Paradajz salata sa sirom", price: 350, description: "Paradajz salata sa sirom." },
    ],
  },
  {
    id: "dodaci",
    label: "Dodaci",
    items: [
      { name: "Lepinja", price: 90, description: "Lepinja." },
      { name: "Pomfrit 300 g", price: 330, description: "Pomfrit 300 g." },
      { name: "Vedžis 300 g", price: 380, description: "Vedžis 300 g." },
      { name: "Pohovani luk 300 g", price: 350, description: "Pohovani luk 300 g." },
      { name: "Pohovani kačkavalj 250 g", price: 500, description: "Pohovani kačkavalj 250 g." },
      { name: "Grilovano povrće", price: 380, description: "Grilovano povrće." },
      { name: "Ajvar", price: 150, description: "Ajvar." },
      { name: "Sir", price: 120, description: "Sir." },
      { name: "Šunka", price: 100, description: "Šunka." },
      { name: "Limun", price: 20, description: "Limun." },
      { name: "Pančeta", price: 170, description: "Pančeta." },
    ],
  },
  {
    id: "slatkisi",
    label: "Slatkiši",
    items: [
      { name: "Cheese cake", price: 520, description: "Cheese cake.", image: "/images/gallery-cheesecake.png", tag: "popularno" },
      { name: "Idolo torta", price: 510, description: "Idolo torta." },
      { name: "Čokoladni tart sa kremom od pistaća i sladoledom od vanile", price: 560, description: "Čokoladni tart, pistać krem, sladoled od vanile." },
      { name: "Slatke palačinke", price: 520, description: "Nutela, plazma.", image: "/images/menu-crepes.png" },
      { name: "Belvi kup", price: 490, description: "3 kugle sladoleda, čokoladni liker, lešnik, orah, suvo grožđe, šlag." },
      { name: "Palačinke sa sladoledom", price: 650, description: "Palačinke sa sladoledom." },
      { name: "Palačinke sa pistać kremom i nutelom", price: 620, description: "Palačinke, pistać krem, nutela." },
      { name: "Frikom premium sladoled kugla", price: 130, description: "Frikom premium sladoled — kugla." },
    ],
  },
  {
    id: "kafe-cajevi",
    label: "Kafe i čajevi",
    items: [
      { name: "Čaj Milford", price: 190, description: "Čaj Milford." },
      { name: "Domaća kafa", price: 150, description: "Domaća kafa.", tag: "popularno" },
      { name: "Capuccino", price: 200, description: "Capuccino." },
      { name: "Espresso", price: 170, description: "Espresso.", image: "/images/hero-coffee.png" },
      { name: "Espresso sa mlekom", price: 195, description: "Espresso sa mlekom." },
      { name: "Espresso sa šlagom", price: 215, description: "Espresso sa šlagom." },
      { name: "Nesscafe", price: 210, description: "Nesscafe." },
      { name: "Idolo kafa", price: 270, description: "Kugla sladoleda, doza kafe, mleko.", tag: "preporuka" },
      { name: "White moca", price: 230, description: "White moca." },
      { name: "Ice Moca", price: 260, description: "Ice Moca." },
      { name: "Spekulas", price: 290, description: "Spekulas." },
      { name: "Kuvano vino", price: 290, description: "Kuvano vino." },
      { name: "Punč", price: 430, description: "Limunada, kugla sladoleda." },
      { name: "Topla čokolada", price: 290, description: "Topla čokolada." },
      { name: "Plazma šejk", price: 350, description: "Plazma šejk." },
    ],
  },
  {
    id: "energetska-pica",
    label: "Energetska pića",
    items: [
      { name: "Guarana 0,25 l", price: 270, description: "Guarana 0,25 l." },
      { name: "Red Bull 0,25 l", price: 400, description: "Red Bull 0,25 l." },
    ],
  },
  {
    id: "cideri",
    label: "Cideri",
    items: [
      { name: "Somersby Jabuka", price: 350, description: "Somersby Jabuka." },
      { name: "Somersby Jagoda bez alkohola", price: 350, description: "Somersby Jagoda bez alkohola." },
      { name: "Somersby Kruška", price: 350, description: "Somersby Kruška." },
      { name: "Somersby Mango", price: 350, description: "Somersby Mango." },
    ],
  },
  {
    id: "alkoholna-pica",
    label: "Alkoholna pića",
    items: [
      { name: "Loza 13. juli 0,03 l", price: 200, description: "Loza 13. juli 0,03 l." },
      { name: "Stara sokolova 12 0,03 l", price: 700, description: "Stara sokolova 12 0,03 l." },
      { name: "Stara sokolova dunja 5 0,03 l", price: 330, description: "Stara sokolova dunja 5 0,03 l." },
      { name: "Stara sokolova kajsija 0,03 l", price: 330, description: "Stara sokolova kajsija 0,03 l." },
      { name: "Stara sokolova šljiva 5 0,03 l", price: 330, description: "Stara sokolova šljiva 5 0,03 l." },
      { name: "Trivunova dunja 0,03 l", price: 240, description: "Trivunova dunja 0,03 l." },
      { name: "Trivunova kajsija 0,03 l", price: 240, description: "Trivunova kajsija 0,03 l." },
      { name: "Trivunova loza 0,03 l", price: 240, description: "Trivunova loza 0,03 l." },
      { name: "Trivunova šljiva 0,03 l", price: 240, description: "Trivunova šljiva 0,03 l." },
      { name: "Trivunova viljamovka 0,03 l", price: 250, description: "Trivunova viljamovka 0,03 l." },
      { name: "Liker meduška 0,03 l", price: 229, description: "Liker meduška 0,03 l." },
      { name: "Viljamovka Takovo 0,03 l", price: 250, description: "Viljamovka Takovo 0,03 l." },
      { name: "Smirnoff Vodka 0,03 l", price: 250, description: "Smirnoff Vodka 0,03 l." },
      { name: "Absolut Vodka 0,03 l", price: 250, description: "Absolut Vodka 0,03 l." },
      { name: "Baileys 0,03 l", price: 260, description: "Baileys 0,03 l." },
      { name: "Ballantines 0,03 l", price: 280, description: "Ballantines 0,03 l." },
      { name: "Beefeater Gin 0,03 l", price: 220, description: "Beefeater Gin 0,03 l." },
      { name: "Campari 0,03 l", price: 240, description: "Campari 0,03 l." },
      { name: "Chivas Regal 12yo 0,03 l", price: 450, description: "Chivas Regal 12yo 0,03 l." },
      { name: "Džin tonik", price: 250, description: "Džin tonik." },
      { name: "Gorki list 0,03 l", price: 230, description: "Gorki list 0,03 l." },
      { name: "Jack Daniels 0,03 l", price: 360, description: "Jack Daniels 0,03 l." },
      { name: "Jagermeister 0,03 l", price: 280, description: "Jagermeister 0,03 l." },
      { name: "Jameson 0,03 l", price: 350, description: "Jameson 0,03 l." },
      { name: "Johnnie Walker Black 0,03 l", price: 450, description: "Johnnie Walker Black 0,03 l." },
      { name: "Johnnie Walker Red", price: 290, description: "Johnnie Walker Red." },
      { name: "Martini Bianco 0,05 l", price: 200, description: "Martini Bianco 0,05 l." },
      { name: "Jameson Black Barrel", price: 450, description: "Jameson Black Barrel." },
      { name: "Two Fingers 0,03 l", price: 250, description: "Two Fingers 0,03 l." },
      { name: "Vermut 0,05 l", price: 250, description: "Vermut 0,05 l." },
      { name: "Vinjak XO 0,03 l", price: 420, description: "Vinjak XO 0,03 l." },
      { name: "Vinjak 0,03 l", price: 180, description: "Vinjak 0,03 l." },
      { name: "Vinjak 5 0,03 l", price: 250, description: "Vinjak 5 0,03 l." },
      { name: "Moet", price: 18000, description: "Moet." },
      { name: "Belvedere", price: 18000, description: "Belvedere." },
      { name: "Gray Goose", price: 18000, description: "Gray Goose." },
    ],
  },
  {
    id: "piva",
    label: "Piva",
    items: [
      { name: "Lav Premium 0,33 l", price: 320, description: "Lav Premium 0,33 l." },
      { name: "Točeno Lav Premium", price: 300, description: "Točeno Lav Premium." },
      { name: "Tuborg Green 0,33 l", price: 320, description: "Tuborg Green 0,33 l." },
      { name: "Budweiser Budvar 0,33 l", price: 390, description: "Budweiser Budvar 0,33 l." },
      { name: "Blanc 0,33 l", price: 340, description: "Blanc 0,33 l." },
      { name: "Carlsberg 0,25 l", price: 350, description: "Carlsberg 0,25 l." },
      { name: "San Miguel Fresca 0,33 l", price: 600, description: "San Miguel Fresca 0,33 l." },
      { name: "Erdinger 0,33 l", price: 580, description: "Erdinger 0,33 l." },
      { name: "Grimbergen Blonde 0,33 l", price: 350, description: "Grimbergen Blonde 0,33 l." },
    ],
  },
  {
    id: "kokteli",
    label: "Kokteli",
    items: [
      { name: "Aperol Spritz", price: 550, description: "Aperol Spritz.", image: "/images/gallery-cocktail.png" },
      { name: "Blue Frog", price: 630, description: "Blue Frog." },
      { name: "Cosmopolitan", price: 550, description: "Cosmopolitan." },
      { name: "Long Island", price: 630, description: "Long Island." },
      { name: "Mai Tai", price: 630, description: "Mai Tai." },
      { name: "Margarita", price: 500, description: "Margarita." },
      { name: "Sex on the Beach", price: 520, description: "Sex on the Beach." },
      { name: "Stoper", price: 600, description: "Stoper." },
      { name: "Tequila Sunrise", price: 550, description: "Tequila Sunrise." },
      { name: "Mojito", price: 600, description: "Mojito.", tag: "popularno" },
    ],
  },
  {
    id: "bezalkoholna-pica",
    label: "Bezalkoholna pića",
    items: [
      { name: "Aqua Panna negazirana 0,25 l", price: 210, description: "Aqua Panna negazirana 0,25 l." },
      { name: "Aqua Viva 0,25 l", price: 160, description: "Aqua Viva 0,25 l." },
      { name: "Aqua Viva 0,75 l", price: 230, description: "Aqua Viva 0,75 l." },
      { name: "Knjaz Miloš mineralna voda 0,25 l", price: 170, description: "Knjaz Miloš mineralna voda 0,25 l." },
      { name: "Knjaz Miloš mineralna voda 0,75 l", price: 270, description: "Knjaz Miloš mineralna voda 0,75 l." },
      { name: "Knjaz Miloš limun 0,33 l", price: 190, description: "Knjaz Miloš limun 0,33 l." },
      { name: "Knjaz Miloš mandarina 0,33 l", price: 190, description: "Knjaz Miloš mandarina 0,33 l." },
      { name: "Ceđena narandža", price: 340, description: "Ceđena narandža." },
      { name: "Ceđena narandža mix", price: 430, description: "Ceđena narandža mix." },
      { name: "Limunada", price: 300, description: "Limunada." },
      { name: "Limunada sa ukusima", price: 400, description: "Ukusi: višnja, breskva, jagoda, lubenica, malina." },
      { name: "Cockta", price: 250, description: "Cockta." },
      { name: "Evervess Bitter Lemon 0,25 l", price: 250, description: "Evervess Bitter Lemon 0,25 l." },
      { name: "Fuze Tea breskva 0,33 l", price: 260, description: "Fuze Tea breskva 0,33 l." },
      { name: "Mirinda", price: 250, description: "Mirinda." },
      { name: "Pepsi Cola 0,25 l", price: 250, description: "Pepsi Cola 0,25 l." },
      { name: "Pepsi Max", price: 250, description: "Pepsi Max." },
      { name: "Pepsi Twist", price: 250, description: "Pepsi Twist." },
      { name: "7 UP", price: 250, description: "7 UP." },
      { name: "Evervess Tonic Water 0,25 l", price: 250, description: "Evervess Tonic Water 0,25 l." },
      { name: "Nectar borovnica 0,2 l", price: 260, description: "Nectar borovnica 0,2 l." },
      { name: "Nectar breskva 0,2 l", price: 260, description: "Nectar breskva 0,2 l." },
      { name: "Nectar jabuka 0,2 l", price: 260, description: "Nectar jabuka 0,2 l." },
      { name: "Nectar jagoda 0,2 l", price: 260, description: "Nectar jagoda 0,2 l." },
      { name: "Nectar oranž 0,2 l", price: 260, description: "Nectar oranž 0,2 l." },
      { name: "Cedevita", price: 210, description: "Cedevita." },
    ],
  },
  {
    id: "karta-vina",
    label: "Karta vina",
    items: [
      { name: "Amante Carmen 0,75 l", price: 3000, description: "Rubin — Amante Carmen 0,75 l." },
      { name: "Amante Rina belo 0,75 l", price: 3000, description: "Rubin — Amante Rina belo 0,75 l." },
      { name: "Amante Aurora 0,75 l", price: 3000, description: "Rubin — Amante Aurora 0,75 l." },
      { name: "Chardonnay Rubin", price: 1200, description: "Rubin — Chardonnay." },
      { name: "Rubin Muskat 0,7 l", price: 1300, description: "Rubin — Muskat 0,7 l." },
      { name: "Double Barrique Cabernet Rubin", price: 4000, description: "Rubin — Double Barrique Cabernet." },
      { name: "Double Barrique Sauvignon Rubin", price: 4000, description: "Rubin — Double Barrique Sauvignon." },
      { name: "Cabernet Rubin 0,75 l", price: 1200, description: "Rubin — Cabernet 0,75 l." },
      { name: "Varijanta Aleksandrović 0,75 l", price: 2500, description: "Aleksandrović — Varijanta 0,75 l." },
      { name: "Harizma Aleksandrović 0,75 l", price: 3000, description: "Aleksandrović — Harizma 0,75 l." },
      { name: "Regent Aleksandrović 0,75 l", price: 3500, description: "Aleksandrović — Regent 0,75 l." },
      { name: "Tamjanika 0,75 l", price: 2300, description: "Đorđević — Tamjanika 0,75 l." },
      { name: "Sauvignon Blanc 0,75 l", price: 2300, description: "Đorđević — Sauvignon Blanc 0,75 l." },
      { name: "Chardonnay", price: 2300, description: "Đorđević — Chardonnay." },
      { name: "Merlot Cabernet 0,75 l", price: 2300, description: "Đorđević — Merlot Cabernet 0,75 l." },
      { name: "Jović Sauvignon 0,75 l", price: 1800, description: "Jović — Sauvignon 0,75 l." },
      { name: "Jović Rose 0,75 l", price: 1800, description: "Jović — Rose 0,75 l." },
      { name: "Jović Chardonnay", price: 2000, description: "Jović — Chardonnay." },
      { name: "Jović Cabernet", price: 2500, description: "Jović — Cabernet." },
      { name: "Kovačević Chardonnay 0,75 l", price: 2500, description: "Kovačević — Chardonnay 0,75 l." },
      { name: "Radovanović Cabernet Sauvignon", price: 2500, description: "Radovanović — Cabernet Sauvignon." },
      { name: "Spasić Tamjanika 0,75 l", price: 2300, description: "Spasić — Tamjanika 0,75 l." },
    ],
  },
];

export function formatItemPrice(item: MenuItem): string {
  if (item.priceLabel) return item.priceLabel;
  if (item.price !== undefined) return rsd(item.price);
  return "";
}

export const menuTabIds = [
  "dorucak",
  "pice",
  "meso",
  "burgeri",
  "paste",
  "obrok-salate",
  "slatkisi",
  "kafe-cajevi",
  "kokteli",
  "piva",
] as const;
