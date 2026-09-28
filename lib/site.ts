/**
 * Configuración del sitio y datos de contacto.
 *
 * REGLA: aquí no se inventa ningún dato de contacto. Si la variable de
 * entorno está vacía, el valor queda marcado como pendiente y el enlace
 * no se genera. Cada componente puede ocultar el dato o mostrar un estado
 * inactivo según el contexto.
 * Ver `.env.example` y `components/dev/EnvNotice.tsx`.
 */

const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "",
  whatsappMessage: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ?? "",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY?.trim() ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "",
  city: process.env.NEXT_PUBLIC_CITY?.trim() ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ?? "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ?? "",
};

/** URL ausente hasta que se configure el dominio real. */
function normalizeSiteUrl(value: string): string | undefined {
  if (!value) return undefined;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return undefined;
    return parsed.origin.replace(/\/+$/, "");
  } catch {
    return undefined;
  }
}

export const siteUrl = normalizeSiteUrl(env.siteUrl);
export const siteUrlIsPlaceholder = !siteUrl;

export const site = {
  name: "ELEVA",
  legalName: "ELEVA",
  tagline: "Digital solutions for businesses",
  title: "ELEVA — Elevamos negocios con tecnología",
  description:
    "Diseñamos y desarrollamos soluciones digitales que ayudan a los negocios a verse mejor, conectar con sus clientes y crecer. Landing pages, sitios completos y desarrollos a medida desde $890.000 COP.",
  founder: "Brandon Vides",
  founderRole: "Founder & Developer",
  country: "Colombia",
  locale: "es_CO",
  googleVerification: env.googleVerification || undefined,
} as const;

/** Enlace resuelto, o dato pendiente cuando falta la variable. */
export type ResolvedLink = {
  /** `null` cuando el dato todavía no está configurado. */
  href: string | null;
  /** Texto configurado o etiqueta neutral que no suplanta el dato real. */
  label: string;
  isPlaceholder: boolean;
  /** Nombre de la variable de entorno que lo resuelve. */
  envKey: string;
};

function resolved(href: string, label: string, envKey: string): ResolvedLink {
  return { href, label, isPlaceholder: false, envKey };
}

function placeholder(label: string, envKey: string): ResolvedLink {
  return { href: null, label, isPlaceholder: true, envKey };
}

const whatsappDigits = env.whatsappNumber.replace(/\D/g, "");

const whatsappHref = whatsappDigits
  ? `https://wa.me/${whatsappDigits}${
      env.whatsappMessage ? `?text=${encodeURIComponent(env.whatsappMessage)}` : ""
    }`
  : null;

export const contact = {
  whatsapp: whatsappHref
    ? resolved(whatsappHref, "Escribir por WhatsApp", "NEXT_PUBLIC_WHATSAPP_NUMBER")
    : placeholder("Escribir por WhatsApp", "NEXT_PUBLIC_WHATSAPP_NUMBER"),

  phone: env.phoneDisplay
    ? resolved(
        whatsappHref ?? `tel:+${whatsappDigits}`,
        env.phoneDisplay,
        "NEXT_PUBLIC_PHONE_DISPLAY",
      )
    : placeholder("Teléfono", "NEXT_PUBLIC_PHONE_DISPLAY"),

  email: env.email
    ? resolved(`mailto:${env.email}`, env.email, "NEXT_PUBLIC_CONTACT_EMAIL")
    : placeholder("Correo", "NEXT_PUBLIC_CONTACT_EMAIL"),

  city: env.city
    ? resolved("", `${env.city}, ${site.country}`, "NEXT_PUBLIC_CITY")
    : placeholder("Ubicación", "NEXT_PUBLIC_CITY"),

  instagram: env.instagram
    ? resolved(env.instagram, "Instagram", "NEXT_PUBLIC_INSTAGRAM_URL")
    : placeholder("Instagram", "NEXT_PUBLIC_INSTAGRAM_URL"),

  linkedin: env.linkedin
    ? resolved(env.linkedin, "LinkedIn", "NEXT_PUBLIC_LINKEDIN_URL")
    : placeholder("LinkedIn", "NEXT_PUBLIC_LINKEDIN_URL"),
} as const;

/** Primera acción de contacto disponible: WhatsApp y, si no, correo. */
export const primaryContactHref: string | null =
  contact.whatsapp.href ?? contact.email.href;

/** Variables pendientes — el aviso de desarrollo las lista. */
export function missingEnvKeys(): string[] {
  const missing: string[] = [];
  if (siteUrlIsPlaceholder) missing.push("NEXT_PUBLIC_SITE_URL");
  for (const link of Object.values(contact)) {
    if (link.isPlaceholder) missing.push(link.envKey);
  }
  return [...new Set(missing)];
}

export const socialProfiles = [contact.instagram, contact.linkedin]
  .filter((link) => !link.isPlaceholder && link.href)
  .map((link) => link.href as string);
