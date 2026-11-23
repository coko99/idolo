import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const HOME_TITLE = "IDOLO Caffe Bistro | Restoran u Kruševcu";
export const HOME_DESCRIPTION =
  "IDOLO Caffe Bistro je restoran u Kruševcu za doručak, hranu i koktele. Idolo Kruševac: jelovnik, Kajmakčalanska 2 i telefon 069/173-88-00.";

export const MENU_TITLE = "Jelovnik | IDOLO Caffe Bistro Kruševac";
export const MENU_DESCRIPTION =
  "Jelovnik IDOLO Caffe Bistro u Kruševcu: doručak, pice, paste, tortilje, burgeri, meso, salate, dezerti, kafe i kokteli, sa nazivima i cenama.";

export const CONTACT_TITLE = "Kontakt | IDOLO Caffe Bistro Kruševac";
export const CONTACT_DESCRIPTION =
  "IDOLO Caffe Bistro, Kajmakčalanska 2, Kruševac. Telefon 069/173-88-00, radno vreme i mapa do restorana.";

export const ABOUT_TITLE = "O nama | IDOLO Caffe Bistro Kruševac";
export const ABOUT_DESCRIPTION =
  "IDOLO Caffe Bistro u centru Kruševca spaja doručak, hranu i koktele u bistro ambijentu na Kajmakčalanskoj 2.";

export const GALLERY_TITLE = "Galerija | IDOLO Caffe Bistro Kruševac";
export const GALLERY_DESCRIPTION =
  "Fotografije hrane, doručka, koktela i enterijera IDOLO Caffe Bistro u Kruševcu.";

const shareImage = {
  url: "/images/dishes/lava-piletina.jpg",
  width: 960,
  height: 720,
  alt: "Lava piletina u IDOLO Caffe Bistro, Kruševac",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "sr_RS",
      type: "website",
      siteName: SITE.name,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE.url}/#restaurant`,
    name: SITE.name,
    url: SITE.url,
    image: [
      `${SITE.url}/images/dishes/lava-piletina.jpg`,
      `${SITE.url}/images/gallery-interior.png`,
      `${SITE.url}/images/menu-breakfast.png`,
    ],
    telephone: "+381691738800",
    hasMenu: `${SITE.url}/meni`,
    servesCuisine: [
      "Doručak",
      "Pice",
      "Paste",
      "Tortilje",
      "Burgeri",
      "Jela od mesa",
      "Salate",
      "Dezerti",
      "Kafe",
      "Kokteli",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kajmakčalanska 2",
      addressLocality: "Kruševac",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.mapCoords.lat,
      longitude: SITE.mapCoords.lng,
    },
    hasMap: SITE.mapLink,
    sameAs: [SITE.instagram],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "08:00",
        closes: "01:00",
      },
    ],
  };
}
