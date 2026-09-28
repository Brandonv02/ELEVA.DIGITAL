import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Proceso — banda clara.
 * La regla superior de cada paso crece 20 → 40 → 60 → 80 → 100%:
 * es el único sitio donde la metáfora del ascenso se hace literal.
 */
export function Process() {
  return (
    <Section id="proceso" labelledBy="proceso-titulo" rhythm="compact" tone="paper">
      <Container>
        <SectionHeader
          id="proceso-titulo"
          tone="paper"
          eyebrow="Proceso"
          title="Cómo trabajamos."
          lead="Cinco etapas, siempre las mismas. Sabes en qué punto está tu proyecto en cualquier momento."
          className="mb-10 lg:mb-14"
        />

        <ol className="grid gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-5 xl:gap-6">
          {processSteps.map((step, index) => {
            const progress = ((index + 1) / processSteps.length) * 100;
            const isFirst = index === 0;

            return (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 80}
                className="flex flex-col gap-4"
              >
                <div
                  aria-hidden="true"
                  className="relative h-0.5 w-full bg-paper-line"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-accent"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p
                  className={cn(
                    "pt-1 font-mono text-xs font-medium tracking-[0.1em]",
                    isFirst ? "text-accent" : "text-paper-muted",
                  )}
                >
                  {step.number}
                </p>
                <h3 className="text-[17.5px] text-paper-ink xl:text-[21px]">
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.7] text-paper-muted xl:text-[14.5px]">
                  {step.body}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
