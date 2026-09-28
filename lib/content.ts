/**
 * Contenido aprobado de la Home.
 *
 * Precios, plazos, rondas y copy vienen del brief y de la iteración
 * aprobada en `design/Main.dc.html`. No modificar sin aprobación.
 */

import type { IconName } from "@/components/ui/Icon";

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
] as const;

export const heroTrust = [
  "Entrega en 5–12 días hábiles",
  "Dominio y hosting del primer año incluidos",
  "Hablas con quien programa",
] as const;

export type Problem = {
  icon: IconName;
  title: string;
  body: string;
};

export const problems: Problem[] = [
  {
    icon: "search",
    title: "No apareces en Google",
    body: "Quien todavía no te conoce, simplemente no te encuentra. Y termina llamando al de al lado.",
  },
  {
    icon: "instagram",
    title: "Tu Instagram no cierra ventas",
    body: "Un feed no explica precios, servicios ni condiciones. Y no genera la confianza de un sitio propio.",
  },
  {
    icon: "monitor",
    title: "Tu web se ve de hace diez años",
    body: "Lenta, imposible de usar desde el celular y sin certificado de seguridad. Resta más de lo que suma.",
  },
  {
    icon: "whatsapp",
    title: "Todo pasa por ti",
    body: "Respondes las mismas cinco preguntas diez veces al día en lugar de dedicar ese tiempo a vender.",
  },
];

export type ServiceFeature = {
  text: string;
  /** `included` = ya venía en el plan anterior. `extra` = incremento de este plan. */
  kind: "included" | "extra";
};

export type Service = {
  id: string;
  eyebrow: string;
  name: string;
  summary: string;
  /** Precio ya formateado en COP. */
  price: string;
  pricePrefix?: string;
  priceSuffix?: string;
  /** Valor numérico en COP para el JSON-LD. */
  priceValue: number;
  payment: string;
  features: ServiceFeature[];
  meta: string[];
  cta: string;
  featured: boolean;
  note?: string;
};

export const paymentTerms = "60% para iniciar · 40% antes de publicar";

export const services: Service[] = [
  {
    id: "start",
    eyebrow: "ELEVA Start",
    name: "Landing page profesional",
    summary:
      "Una sola página que lo dice todo. El primer paso para negocios que aún no tienen nada.",
    price: "$890.000",
    priceSuffix: "COP",
    priceValue: 890000,
    payment: paymentTerms,
    features: [
      { text: "Hero, servicios, galería y testimonios", kind: "included" },
      { text: "Diseño personalizado y responsive", kind: "included" },
      { text: "WhatsApp, Google Maps, redes y formulario", kind: "included" },
      { text: "SEO básico y optimización de velocidad", kind: "included" },
      { text: "Dominio y hosting del primer año", kind: "included" },
    ],
    meta: ["2 rondas", "5–7 días hábiles"],
    cta: "Empezar con START",
    featured: false,
  },
  {
    id: "business",
    eyebrow: "ELEVA Business",
    name: "El sitio completo del negocio",
    summary:
      "Varias secciones, catálogo y medición. Es el producto principal de ELEVA.",
    price: "$1.890.000",
    priceSuffix: "COP",
    priceValue: 1890000,
    payment: paymentTerms,
    features: [
      { text: "Todo lo de START", kind: "included" },
      { text: "Hasta 5 páginas con arquitectura de navegación", kind: "extra" },
      { text: "Catálogo básico y portafolio", kind: "extra" },
      { text: "SEO on-page y Google Analytics", kind: "extra" },
      { text: "Configuración de indexación en buscadores", kind: "extra" },
    ],
    meta: ["3 rondas", "7–12 días hábiles"],
    cta: "Empezar con BUSINESS",
    featured: true,
  },
  {
    id: "pro",
    eyebrow: "ELEVA Pro",
    name: "Soluciones a medida",
    summary:
      "Cuando el negocio necesita que la web haga trabajo, no solo que se vea bien.",
    price: "$3.490.000",
    pricePrefix: "DESDE",
    priceValue: 3490000,
    payment: paymentTerms,
    features: [
      { text: "Todo lo de BUSINESS", kind: "included" },
      { text: "Catálogo avanzado, filtros y reservas", kind: "extra" },
      { text: "Integraciones y automatizaciones", kind: "extra" },
      { text: "SEO técnico y eventos de analítica", kind: "extra" },
      { text: "Panel administrativo cuando el proyecto lo pide", kind: "extra" },
    ],
    meta: ["Alcance a medida", "15–25 días"],
    cta: "Cotizar un PRO",
    featured: false,
    note: "E-commerce completo, pasarelas de pago, aplicaciones, SaaS y sistemas administrativos se cotizan aparte.",
  },
];

export type CarePlan = {
  id: string;
  name: string;
  body: string;
  price: string;
  priceValue: number;
};

export const carePlans: CarePlan[] = [
  {
    id: "essential",
    name: "Essential",
    body: "Hosting, SSL, backups, monitoreo y soporte técnico. Hasta 30 minutos de cambios al mes.",
    price: "$99.000",
    priceValue: 99000,
  },
  {
    id: "business",
    name: "Business",
    body: "Todo lo anterior, una hora de cambios, actualización de textos y precios, revisión mensual y soporte prioritario.",
    price: "$199.000",
    priceValue: 199000,
  },
  {
    id: "growth",
    name: "Growth",
    body: "Dos horas de cambios, optimización continua, SEO local, Google Business Profile y reporte mensual.",
    price: "$399.000",
    priceValue: 399000,
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descubrimos",
    body: "Entendemos el negocio y qué debe lograr la web.",
  },
  {
    number: "02",
    title: "Diseñamos",
    body: "Convertimos la idea en un diseño que apruebas antes de programar.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    body: "Construimos con Next.js sobre componentes ya probados.",
  },
  {
    number: "04",
    title: "Lanzamos",
    body: "Probamos, optimizamos la velocidad y publicamos.",
  },
  {
    number: "05",
    title: "Elevamos",
    body: "Medimos, ajustamos y seguimos mejorando.",
  },
];

export const footerColumns = [
  {
    title: "Servicios",
    links: [
      { label: "ELEVA START", href: "#servicios" },
      { label: "ELEVA BUSINESS", href: "#servicios" },
      { label: "ELEVA PRO", href: "#servicios" },
      { label: "ELEVA CARE", href: "#care" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Proceso", href: "#proceso" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
] as const;
