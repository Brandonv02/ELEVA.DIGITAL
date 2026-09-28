import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact } from "@/lib/site";

/**
 * Catálogo de proyectos publicados. Se mantiene como una lista vacía hasta
 * que existan casos reales; agregar un caso no cambia el layout compartido.
 */
export type Project = {
  name: string;
  sector: string;
  year: string;
  summary: string;
  url?: string;
};

const projects: Project[] = [];

export function Projects() {
  return (
    <Section id="proyectos" labelledBy="proyectos-titulo" bordered>
      <Container>
        <SectionHeader
          id="proyectos-titulo"
          eyebrow="Proyectos"
          title="Lo que estamos construyendo."
          lead="Aquí compartiremos proyectos reales cuando estén listos para publicarse."
          className="mb-10 lg:mb-14"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            {projects.length ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                  <article key={`${project.name}-${project.year}`} className="rounded-card border border-line bg-surface p-6">
                    <Eyebrow>{project.sector} · {project.year}</Eyebrow>
                    <h3 className="mt-3 text-lg text-white sm:text-[22px]">{project.name}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-silver">{project.summary}</p>
                    {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center font-semibold text-accent-bright hover:text-accent-ice">Ver proyecto <span className="sr-only">: {project.name}</span></a> : null}
                  </article>
                ))}
              </div>
            ) : (
              <div className="grid-bg flex min-h-64 items-center justify-center rounded-card border border-line bg-surface-deep px-6 text-center sm:min-h-80 lg:min-h-[340px]">
                <p className="max-w-md text-[15px] leading-7 text-silver">Aún no hay proyectos publicados. Este espacio mostrará trabajos reales de ELEVA cuando estén disponibles.</p>
              </div>
            )}
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-card border border-dashed border-line-strong p-9 text-center sm:gap-5 sm:p-12">
              <span
                aria-hidden="true"
                className="flex size-13 items-center justify-center rounded-[15px] border border-accent/25 bg-accent/10 text-accent-bright"
              >
                <Icon name="plus" size={22} />
              </span>
              <h3 className="text-[19px] text-white sm:text-[22px]">
                ¿Y si el próximo es el tuyo?
              </h3>
              <p className="text-[14.5px] leading-[1.65] text-silver sm:text-[15px]">
                Cuéntanos qué necesitas y revisaremos juntos el alcance.
              </p>
              {contact.whatsapp.href ? (
                <a
                  href={contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent-bright transition-colors duration-[250ms] ease-eleva hover:text-accent-ice"
                >
                  Hablemos
                  <span className="transition-transform duration-[250ms] ease-eleva group-hover:translate-x-1">
                    <Icon name="arrowRight" size={16} strokeWidth={2} />
                  </span>
                </a>
              ) : (
                <span
                  data-eleva-placeholder={contact.whatsapp.envKey}
                  className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-muted"
                >
                  Hablemos
                  <Icon name="arrowRight" size={16} strokeWidth={2} />
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
