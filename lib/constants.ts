export const SITE = {
  name: "Idolo Bistro Bar",
  tagline: "Caffe Bistro Idolo",
  phone: "0691738800",
  phoneDisplay: "069/173-88-00",
  address: "Kajmakčalanska 2, Kruševac",
  mapLink: "https://maps.app.goo.gl/HSjvHayERbZzjxws8",
  mapCoords: {
    lat: 43.5818819,
    lng: 21.3286391,
  },
  mapEmbed:
    "https://maps.google.com/maps?q=43.5818819,21.3286391&hl=sr&z=17&output=embed",
  instagram: "https://www.instagram.com/caffebistro_idolo/",
  googleReview: "https://share.google/1RfXc6T8ysPBzKNaG",
  whatsappMessage: "Zdravo, želeo/la bih da poručim iz Idola.",
  hours: {
    weekdays: "Nedelja–četvrtak: 08:00–24:00",
    weekend: "Petak–subota: 08:00–01:00",
    kitchen: "Kuhinja: 08:00–23:00",
  },
  delivery: {
    dingdong: "https://dingdong.rs/",
    wolt: "https://wolt.com/sr/srb/krusevac/restaurant/idolo",
  },
  poweredBy: {
    name: "Čokoladni AJ TI",
    url: "https://cokoladni.photo",
  },
} as const;

export function phoneHref() {
  return `tel:+381${SITE.phone.replace(/^0/, "")}`;
}

export function whatsappHref(message: string = SITE.whatsappMessage) {
  return `https://wa.me/381${SITE.phone.replace(/^0/, "")}?text=${encodeURIComponent(message)}`;
}

export function whatsappOrderHref(itemName: string) {
  return whatsappHref(`Zdravo, želeo/la bih da poručim: ${itemName}`);
}
