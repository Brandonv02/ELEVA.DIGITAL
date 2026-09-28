import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * Cabecera de sección: eyebrow + H2 a 40px + párrafo de entrada a la derecha.
 * El H2 de sección es 40px, nunca el tamaño del H1 — así se mantiene la
 * distancia entre "título de página" y "título de sección".
 */
export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  tone = "dark",
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "dark" | "paper";
  className?: string;
}) {
  const isPaper = tone === "paper";

  return (
    <div
      className={cn(
        "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <Reveal className="flex max-w-[620px] flex-col gap-4 lg:gap-5">
        <Eyebrow tone={isPaper ? "paper" : "dark"}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className={cn(
            "text-[30px] leading-[1.12] sm:text-4xl xl:text-[40px] xl:leading-[1.1]",
            isPaper ? "text-paper-ink" : "text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal
          delay={80}
          className={cn(
            "max-w-[400px] text-base leading-[1.75] lg:text-[17px]",
            isPaper ? "text-paper-muted" : "text-silver",
          )}
        >
          <p>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
