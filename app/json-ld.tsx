import { services, carePlans } from "@/lib/content";
import { contact, site, siteUrl, socialProfiles } from "@/lib/site";

/**
 * Datos estructurados.
 *
 * Solo se emite lo que es real: nombre, descripción, fundador, país y la
 * oferta de servicios con sus precios aprobados. Teléfono, dirección y
 * correo se omiten mientras sean placeholders — no se publica un dato
 * de contacto inventado en el schema.
 */
export function JsonLd() {
  if (!siteUrl) return null;
  const offers = [
    ...services.map((service) => ({
      "@type": "Offer",
      name: `ELEVA ${service.eyebrow.replace("ELEVA ", "").toUpperCase()}`,
      description: service.summary,
      price: service.priceValue,
      priceCurrency: "COP",
      ...(service.pricePrefix ? { priceSpecification: { "@type": "PriceSpecification", minPrice: service.priceValue, priceCurrency: "COP" } } : {}),
    })),
    ...carePlans.map((plan) => ({
      "@type": "Offer",
      name: `ELEVA CARE ${plan.name.toUpperCase()}`,
      description: plan.body,
      price: plan.priceValue,
      priceCurrency: "COP",
    })),
  ];

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organizacion`,
    name: site.name,
    legalName: site.legalName,
    url: siteUrl,
    slogan: site.tagline,
    description: site.description,
    inLanguage: "es",
    areaServed: { "@type": "Country", name: site.country },
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: site.founderRole,
    },
    knowsAbout: [
      "Desarrollo web",
      "Diseño de interfaces",
      "E-commerce",
      "Automatización de procesos",
      "SEO técnico",
    ],
    priceRange: "$$",
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
    ...(contact.email.href
      ? { email: contact.email.label }
      : {}),
    ...(contact.phone.isPlaceholder ? {} : { telephone: contact.phone.label }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de ELEVA",
      itemListElement: offers,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#sitio`,
    url: siteUrl,
    name: site.name,
    inLanguage: "es",
    publisher: { "@id": `${siteUrl}/#organizacion` },
  };

  return (
    <script
      type="application/ld+json"
      // El contenido es estático y controlado por nosotros.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website]),
      }}
    />
  );
}
