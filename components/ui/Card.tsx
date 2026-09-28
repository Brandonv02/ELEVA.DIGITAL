import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card del sistema: radio 16, borde 1px, hover eleva 2px.
 * `featured` es la variante azul con halo (plan destacado).
 */
export function Card({
  featured = false,
  interactive = true,
  className,
  children,
}: {
  featured?: boolean;
  /** Desactiva el hover en cards que no son accionables. */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border transition-[transform,border-color,background-color,box-shadow] duration-[250ms] ease-eleva",
        featured
          ? "border-accent/50 bg-surface shadow-[0_40px_90px_-34px_rgba(91,107,255,0.75)]"
          : "border-line bg-surface",
        interactive &&
          !featured &&
          "hover:-translate-y-0.5 hover:border-line-strong hover:bg-elevated-hover hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.85)]",
        interactive && featured && "hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
