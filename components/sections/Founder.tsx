import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactLink } from "@/components/ui/ContactLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/lib/site";

const socials = [
  { link: contact.instagram, icon: "instagram" as const, label: "Instagram de ELEVA" },
  { link: contact.linkedin, icon: "linkedin" as const, label: "LinkedIn de ELEVA" },
].filter(({ link }) => !link.isPlaceholder && Boolean(link.href));

export function Founder() {
  return (
    <Section
      id="nosotros"
      labelledBy="founder-titulo"
      rhythm="roomy"
      tone="darker"
      bordered
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-18">
          {/* Retrato 4:5 — el formato del que va a salir la foto */}
          <Reveal>
            <div className="grid-bg relative flex aspect-4/5 items-end justify-center overflow-hidden rounded-[20px] border border-line bg-surface p-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(91,107,255,0.14)_0%,rgba(13,15,20,0)_60%)]"
              />
              <span className="relative font-mono text-[11px] tracking-[0.14em] text-muted sm:text-xs">
                [ FOTO DE BRANDON — 4:5 ]
              </span>
            </div>
          </Reveal>

          <Reveal delay={80} className="flex flex-col gap-5 lg:gap-6">
            <Eyebrow>Founder</Eyebrow>
            <h2
              id="founder-titulo"
              className="text-[30px] leading-[1.12] text-white sm:text-4xl xl:text-[40px] xl:leading-[1.1]"
            >
              Detrás de ELEVA hay una persona que responde.
            </h2>
            <p className="max-w-[520px] text-base leading-[1.8] text-silver lg:text-[17px]">
              Soy {site.founder}. Fundé ELEVA para ayudar a los negocios a
              construir una presencia digital que los represente.
            </p>
            <p className="max-w-[520px] text-base leading-[1.8] text-silver lg:text-[17px]">
              ELEVA existe para cerrar esa distancia: tecnología bien hecha, al
              alcance de un negocio real. Hablas directamente con quien diseña y
              programa tu proyecto.
            </p>

            <div className="mt-2 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-display text-[17px] font-semibold text-white">
                  {site.founder}
                </p>
                <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted">
                  {site.founderRole}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-9 w-px bg-line sm:block"
              />

              <Button href={contact.whatsapp.href} variant="ghost" size="sm">
                Escríbeme directo
                <Icon name="whatsapp" size={16} strokeWidth={1.9} />
              </Button>

              {socials.length > 0 && <ul className="flex items-center gap-2.5">
                {socials.map(({ link, icon, label }) => (
                  <li key={label}>
                    <ContactLink
                      link={link}
                      aria-label={label}
                      className="flex size-11 items-center justify-center rounded-control border border-line bg-surface text-silver transition-colors duration-150 ease-eleva hover:border-line-strong hover:text-white"
                    >
                      <Icon name={icon} size={18} />
                    </ContactLink>
                  </li>
                ))}
              </ul>}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
