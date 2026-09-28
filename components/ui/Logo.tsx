import { cn } from "@/lib/utils";

/**
 * Marca ELEVA — símbolo oficial.
 * Tres barras abstractas ascendentes, separadas (sin asta que las una y
 * sin círculo de contención). La barra superior lleva el azul de marca;
 * las dos inferiores van en blanco. Representa ascenso y crecimiento.
 * No rediseñar: es la identidad visual definitiva de marca.
 */

type MarkProps = {
  size?: number;
  className?: string;
  /** `true` = las tres barras en un mismo color (grabado, una tinta, sobre foto). */
  monochrome?: boolean;
  /** Color de las barras inferiores (y de todas, en monocromo). */
  tone?: string;
};

export function ElevaMark({
  size = 28,
  className,
  monochrome = false,
  tone = "#FFFFFF",
}: MarkProps) {
  const accent = monochrome ? tone : "#5B6BFF";

  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M6 4h21l-4 6H6Z" fill={accent} />
      <path d="M6 13h18l-4 6H6Z" fill={tone} />
      <path d="M6 22h15l-4 6H6Z" fill={tone} />
    </svg>
  );
}

type LogoProps = {
  /** Tamaño del símbolo en px. El wordmark escala con él. */
  size?: number;
  className?: string;
  /** Oculta el wordmark y deja solo el símbolo. */
  markOnly?: boolean;
  tone?: string;
  monochrome?: boolean;
};

export function Logo({
  size = 28,
  className,
  markOnly = false,
  tone = "#FFFFFF",
  monochrome = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-[0.4em]", className)}>
      <ElevaMark size={size} tone={tone} monochrome={monochrome} />
      {markOnly ? (
        <span className="sr-only">ELEVA</span>
      ) : (
        <span
          className="font-display font-semibold tracking-[0.17em]"
          style={{ fontSize: size * 0.64, color: tone }}
        >
          ELEVA
        </span>
      )}
    </span>
  );
}
