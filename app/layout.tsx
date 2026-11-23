import type { Metadata } from "next";
import { Barlow_Condensed, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { SITE } from "@/lib/constants";
import { HOME_DESCRIPTION, HOME_TITLE, restaurantJsonLd } from "@/lib/seo";

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
  metadataBase: new URL(SITE.url),
  title: {
    default: HOME_TITLE,
    template: "%s | IDOLO Caffe Bistro Kruševac",
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    locale: "sr_RS",
    type: "website",
    siteName: SITE.name,
    url: "/",
    images: [
      {
        url: "/images/dishes/lava-piletina.jpg",
        width: 960,
        height: 720,
        alt: "Lava piletina u IDOLO Caffe Bistro, Kruševac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/images/dishes/lava-piletina.jpg"],
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
      lang="sr-Latn"
      className={`${barlow.variable} ${montserrat.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
