import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Etiqueta de sección: mono 11px, +0.18em, mayúsculas. */
export function Eyebrow({
  tone = "dark",
  className,
  children,
}: {
  tone?: "dark" | "paper" | "accent";
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
        tone === "dark" && "text-muted",
        tone === "paper" && "text-paper-muted",
        tone === "accent" && "text-accent-ice",
        className,
      )}
    >
      {children}
    </p>
  );
}
