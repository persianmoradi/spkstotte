import type { Metadata } from "next";
import { site } from "./site";

/**
 * Hjælper til konsistent metadata pr. side, inkl. OpenGraph og Twitter.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    path === "/" ? `${site.name} – ${site.tagline}` : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [
        {
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${site.name} – ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** JSON-LD structured data for organisationen (lokalt SEO-fokus, Danmark). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: `+45${site.phone.replace(/\s/g, "")}`,
    email: site.email,
    vatID: `DK${site.cvr}`,
    taxID: site.cvr,
    areaServed: { "@type": "Country", name: "Danmark" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "DK",
    },
    knowsLanguage: ["da"],
    slogan: site.tagline,
    openingHours: "Mo-Fr 08:00-16:00",
  };
}

/** Breadcrumb JSON-LD til undersider. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

/** Service-katalog JSON-LD til ydelsessiden. */
export function servicesJsonLd(
  services: { title: string; shortDescription: string; slug: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.shortDescription,
        provider: { "@type": "Organization", name: site.name },
        areaServed: { "@type": "Country", name: "Danmark" },
        url: `${site.url}/ydelser#${s.slug}`,
      },
    })),
  };
}
