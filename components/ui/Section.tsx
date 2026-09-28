import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sección de página con el ritmo vertical del sistema.
 * El ritmo NO es uniforme a propósito: cada sección tiene su densidad.
 */

type Rhythm = "compact" | "base" | "roomy" | "wide";

const rhythms: Record<Rhythm, string> = {
  compact: "py-16 md:py-24 xl:py-30", // Proceso — es un diagrama, funciona denso
  base: "py-18 md:py-28 xl:py-32", // Problema, Proyectos
  roomy: "py-22 md:py-32 xl:py-36", // Servicios, Founder
  wide: "py-22 md:py-36 xl:py-44", // CTA final — la mayor respiración
};

type Tone = "dark" | "darker" | "paper";

const tones: Record<Tone, string> = {
  dark: "bg-carbon text-ink",
  darker: "bg-surface-alt text-ink",
  paper: "bg-paper text-paper-ink",
};

export function Section({
  id,
  rhythm = "base",
  tone = "dark",
  bordered = false,
  labelledBy,
  className,
  children,
}: {
  id?: string;
  rhythm?: Rhythm;
  tone?: Tone;
  /** Línea divisoria inferior de 1px. */
  bordered?: boolean;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        rhythms[rhythm],
        tones[tone],
        bordered && "border-b border-line-soft",
        className,
      )}
    >
      {children}
    </section>
  );
}
