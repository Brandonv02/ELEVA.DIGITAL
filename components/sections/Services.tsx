import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Care } from "./Care";
import { services, type Service } from "@/lib/content";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

function ServiceCard({ service }: { service: Service }) {
  const { featured } = service;

  return (
    <Card
      featured={featured}
      className={cn(
        "flex h-full flex-col gap-6 p-8 sm:p-9",
        // El plan destacado rompe la fila arriba y abajo en escritorio.
        featured && "relative z-[2] lg:-my-4.5 lg:py-12",
      )}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3">
          <Eyebrow tone={featured ? "accent" : "dark"}>{service.eyebrow}</Eyebrow>
          {featured && <Badge variant="solid">Más elegido</Badge>}
        </div>
        <h3 className="text-2xl text-white">{service.name}</h3>
        <p className="text-[14.5px] leading-[1.6] text-silver">{service.summary}</p>
      </div>

      <div className="flex flex-col gap-2 border-y border-line-soft py-5">
        <p className="flex items-baseline gap-2">
          {service.pricePrefix && (
            <span className="font-mono text-xs text-muted">{service.pricePrefix}</span>
          )}
          <span className="font-display text-[34px] font-semibold tracking-[-0.035em] text-white">
            {service.price}
          </span>
          {service.priceSuffix && (
            <span className="font-mono text-xs text-muted">{service.priceSuffix}</span>
          )}
        </p>
        <p
          className={cn(
            "font-mono text-[11px] tracking-[0.04em]",
            featured ? "text-accent-ice" : "text-muted",
          )}
        >
          {service.payment}
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {service.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className={cn(
                "mt-1 shrink-0",
                featured ? "text-accent-bright" : "text-accent",
              )}
            >
              <Icon
                name={feature.kind === "extra" ? "plus" : "check"}
                size={15}
                strokeWidth={2.6}
              />
            </span>
            <span className="text-[14.5px] leading-[1.55] text-ink">
              {feature.text}
              <span className="sr-only">
                {feature.kind === "extra" ? " (adicional de este plan)" : ""}
              </span>
            </span>
          </li>
        ))}
      </ul>

      {service.note && (
        <p className="rounded-control border border-line-soft bg-surface-alt px-4 py-3.5 text-[12.5px] leading-[1.6] text-muted">
          {service.note}
        </p>
      )}

      <ul className="flex flex-wrap gap-2">
        {service.meta.map((item) => (
          <li key={item}>
            <Badge mono variant={featured ? "accent" : "neutral"}>
              {item}
            </Badge>
          </li>
        ))}
      </ul>

      <Button
        href={contact.whatsapp.href}
        variant={featured ? "primary" : "ghost"}
        fullWidth
        className="mt-auto"
      >
        {service.cta}
      </Button>
    </Card>
  );
}

export function Services() {
  return (
    <Section
      id="servicios"
      labelledBy="servicios-titulo"
      rhythm="roomy"
      tone="darker"
      bordered
    >
      <Container>
        <SectionHeader
          id="servicios-titulo"
          eyebrow="Servicios"
          title="Tres formas de empezar."
          lead="Todos los planes incluyen dominio y hosting del primer año, certificado SSL y publicación. Los precios son de partida y se confirman al conocer el alcance."
          className="mb-12 lg:mb-16"
        />

        <ul className="mx-auto grid max-w-[560px] items-stretch gap-6 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={index * 80} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>

        <Care />
      </Container>
    </Section>
  );
}
