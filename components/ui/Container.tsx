import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Contenedor del sistema: 1200px de contenido en escritorio.
 * Gutter 24 en móvil, 32 en tablet, 36 desde lg.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1272px] px-6 sm:px-8 lg:px-9", className)}>
      {children}
    </Tag>
  );
}
