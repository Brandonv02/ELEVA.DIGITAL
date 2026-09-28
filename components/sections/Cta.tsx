import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactLink } from "@/components/ui/ContactLink";
import { Icon } from "@/components/ui/Icon";
import { ElevaMark } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact } from "@/lib/site";

/**
 * CTA final. Contenido en un panel con borde: al final de una página larga,
 * un bloque contenido se lee como destino; un halo a sangre se lee como fondo.
 * Una sola acción primaria — el correo baja a enlace de texto.
 */
export function Cta() {
  return (
    <Section id="contacto" labelledBy="cta-titulo" rhythm="wide">
      <Container>
        <div className="relative overflow-hidden rounded-block border border-line bg-surface-alt px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgba(91,107,255,0.26)_0%,rgba(91,107,255,0.05)_45%,rgba(13,15,20,0)_70%)]"
          />

          <Reveal className="relative flex flex-col items-center gap-6 text-center">
            <ElevaMark size={40} />

            <h2
              id="cta-titulo"
              className="max-w-[820px] text-[34px] leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl xl:text-[60px] xl:leading-[1.04]"
            >
              ¿Hablamos de tu proyecto?
            </h2>

            <p className="max-w-[620px] text-base leading-[1.7] text-silver xl:text-[19px]">
              Cuéntanos qué hace tu negocio y te decimos exactamente qué
              necesitas, cuánto cuesta y en cuánto tiempo lo tienes. Sin
              compromiso.
            </p>

            <Button href={contact.whatsapp.href} size="lg" className="mt-2 w-full sm:w-auto">
              Escribir por WhatsApp
              <Icon name="arrowRight" size={18} strokeWidth={2} />
            </Button>

            {!contact.email.isPlaceholder && <p className="flex flex-col items-center gap-1 text-[15px] text-silver sm:flex-row sm:gap-2">
              <span>o escríbenos a</span>
              <ContactLink link={contact.email} className="font-semibold text-accent-bright hover:text-accent-ice" />
            </p>}

            <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted sm:text-[11.5px]">
              Respondemos el mismo día hábil
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
