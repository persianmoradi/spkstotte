import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { site } from "@/lib/site";
import { organizationJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  generator: "Next.js",
  keywords: [
    "socialpædagogisk støtte",
    "Barnets Lov",
    "støttekontaktperson",
    "støttet samvær",
    "overvåget samvær",
    "støtteperson §75",
    "ungestøtte",
    "kommune samarbejde",
    "familieafdeling",
    "Danmark",
  ],
  category: "Socialfaglige indsatser",
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2D52",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={inter.variable}>
      <body className="min-h-dvh bg-background font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <SiteHeader />
        <main id="main" className="pb-16 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  );
}
