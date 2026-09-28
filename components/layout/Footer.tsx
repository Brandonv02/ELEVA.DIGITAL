import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactLink } from "@/components/ui/ContactLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/lib/content";
import { contact, site } from "@/lib/site";

const socials = [
  { link: contact.instagram, icon: "instagram" as const, label: "Instagram" },
  { link: contact.linkedin, icon: "linkedin" as const, label: "LinkedIn" },
  { link: contact.whatsapp, icon: "whatsapp" as const, label: "WhatsApp" },
].filter(({ link }) => !link.isPlaceholder && Boolean(link.href));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft bg-void">
      <Container>
        {/* Repetición del CTA para quien pasó de largo */}
        <div className="flex flex-col gap-6 border-b border-[#16181F] py-12 sm:flex-row sm:items-center sm:justify-between md:py-14">
          <h2 className="text-xl text-white md:text-2xl">
            ¿Listo para elevar tu negocio?
          </h2>
          <Button href={contact.whatsapp.href} variant="ghost" className="sm:w-auto">
            Escribir por WhatsApp
            <Icon name="whatsapp" size={16} strokeWidth={1.9} />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 border-b border-[#16181F] py-12 md:py-14 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-15">
          <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
            <Logo size={26} />
            <p className="max-w-[280px] text-[14.5px] leading-[1.7] text-muted">
              Soluciones digitales para negocios que quieren crecer. Diseño,
              desarrollo y tecnología desde {site.country}.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3.5">
              <Eyebrow className="mb-1">{column.title}</Eyebrow>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={`/${link.href}`}
                  className="text-[14.5px] text-silver transition-colors duration-150 ease-eleva hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}

          <div className="col-span-2 flex flex-col gap-3.5 lg:col-span-1">
            <Eyebrow className="mb-1">Contacto</Eyebrow>
            {!contact.phone.isPlaceholder && <ContactLink link={contact.phone} className="text-[14.5px]" />}
            {!contact.email.isPlaceholder && <ContactLink link={contact.email} className="text-[14.5px]" />}
            {!contact.city.isPlaceholder && <span className="text-[14.5px] text-muted">{contact.city.label}</span>}

            {socials.length > 0 && <ul className="mt-2 flex items-center gap-2.5">
              {socials.map(({ link, icon, label }) => (
                <li key={label}>
                  <ContactLink
                    link={link}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-control border border-line-soft bg-surface-alt text-muted transition-colors duration-150 ease-eleva hover:border-line hover:text-ink"
                  >
                    <Icon name={icon} size={17} />
                  </ContactLink>
                </li>
              ))}
            </ul>}
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11.5px] tracking-[0.08em] text-muted">
            © {year} {site.name} · {site.tagline}
          </p>
          <div className="flex items-center gap-6">
            <a href="/politica-de-privacidad" className="font-mono text-[11.5px] tracking-[0.08em] text-muted transition-colors hover:text-white">
              Política de privacidad
            </a>
            <a href="/terminos" className="font-mono text-[11.5px] tracking-[0.08em] text-muted transition-colors hover:text-white">
              Términos
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
