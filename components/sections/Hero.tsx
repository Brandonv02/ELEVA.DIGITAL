import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { DeliverableMockup } from "./DeliverableMockup";
import { heroTrust } from "@/lib/content";
import { contact, site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden border-b border-line-soft pb-20 pt-28 md:pb-28 md:pt-32 xl:pb-32 xl:pt-44"
    >
      <div className="grid-bg absolute inset-0 opacity-55" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -right-40 -top-60 h-[820px] w-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(91,107,255,0.24)_0%,rgba(91,107,255,0.06)_42%,rgba(13,15,20,0)_68%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[560px_580px] xl:gap-15">
          <div className="flex flex-col gap-6 xl:gap-7">
            <Reveal className="self-start">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 py-2 pl-2.5 pr-3.5">
                <span className="size-1.5 rounded-full bg-accent-bright" />
                <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-accent-ice sm:text-[11px]">
                  {site.tagline}
                </span>
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1
                id="hero-titulo"
                className="text-[44px] leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl xl:text-[76px] xl:tracking-[-0.042em]"
              >
                Elevamos negocios con tecnología.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="max-w-[520px] text-[16.5px] leading-[1.65] text-silver xl:text-[19px]">
                Diseñamos y desarrollamos soluciones digitales que ayudan a los
                negocios a verse mejor, conectar con sus clientes y crecer.
              </p>
            </Reveal>

            <Reveal delay={180} className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={contact.whatsapp.href} size="lg">
                Hablemos de tu proyecto
                <Icon name="arrowRight" size={18} strokeWidth={2} />
              </Button>
              <Button href="#proyectos" variant="ghost" size="lg">
                Ver nuestro trabajo
              </Button>
            </Reveal>

            <Reveal delay={220} className="flex items-center gap-2.5">
              <span className="size-1.5 shrink-0 rounded-full bg-success" />
              <p className="text-[13.5px] leading-[1.5] text-silver sm:text-sm">
                Tomando los primeros proyectos con condiciones de lanzamiento.
              </p>
            </Reveal>

            <Reveal delay={260} className="mt-2 border-t border-line-soft pt-6">
              <ul className="flex flex-wrap gap-2">
                {heroTrust.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line-soft bg-surface-deep px-3.5 py-2 text-xs text-muted xl:text-[13px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:justify-self-end">
            <DeliverableMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
