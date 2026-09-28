import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <Section id="problema" labelledBy="problema-titulo" bordered>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-20 xl:gap-25">
          <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>El problema</Eyebrow>
            <h2
              id="problema-titulo"
              className="text-[30px] leading-[1.12] text-white sm:text-4xl xl:text-[40px] xl:leading-[1.1]"
            >
              Tu negocio existe. En internet, casi no.
            </h2>
            <p className="text-base leading-[1.75] text-silver lg:text-[17px]">
              Tus clientes te buscan en Google, te encuentran en Instagram y
              terminan preguntando el precio por WhatsApp. Si no hay nada sólido
              detrás, la venta se enfría.
            </p>
            <p className="mt-3 border-l-2 border-accent bg-[linear-gradient(90deg,rgba(91,107,255,0.08)_0%,rgba(91,107,255,0)_100%)] px-5 py-5 text-[15.5px] leading-[1.6] text-ink xl:text-base">
              ELEVA construye la base digital que tu negocio ya debería tener.
            </p>
          </Reveal>

          <ul className="flex flex-col">
            {problems.map((problem, index) => (
              <Reveal
                as="li"
                key={problem.title}
                delay={index * 80}
                className="flex gap-4 border-b border-line-soft py-6 last:border-b-0 sm:gap-5 lg:py-7"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-[12px] border border-line bg-surface text-accent-bright"
                >
                  <Icon name={problem.icon} size={20} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[17.5px] text-white lg:text-xl">
                    {problem.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-silver lg:text-[15.5px]">
                    {problem.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
