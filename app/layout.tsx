import type { Metadata } from "next";
import { Barlow_Condensed, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Idolo Bistro Bar | Kafa, doručak, hrana i piće — Kruševac",
  description:
    "Idolo Bistro Bar u Kruševcu — kafa, doručak, pizza, burgeri, paste, roštilj i piće u centru grada. Pozovi ili piši na WhatsApp za porudžbinu.",
  keywords: [
    "Idolo Kruševac",
    "Caffe Bistro Idolo",
    "Idolo Bistro Bar",
    "restoran Kruševac",
    "doručak Kruševac",
    "pizza Kruševac",
    "dostava hrane Kruševac",
    "kafić Kruševac",
    "bistro Kruševac",
  ],
  openGraph: {
    title: "Idolo Bistro Bar — Kruševac",
    description: "Kafa, doručak, hrana i piće u srcu Kruševca.",
    locale: "sr_RS",
    type: "website",
  },
  icons: {
    icon: [{ url: "/images/logo-header.png", type: "image/png" }],
    apple: "/images/logo-header.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#050403",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${barlow.variable} ${montserrat.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
