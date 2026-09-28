import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "accent" | "neutral" | "success";

const variants: Record<Variant, string> = {
  solid: "bg-accent-solid text-white border-transparent",
  accent: "bg-accent/10 text-accent-ice border-accent/25",
  neutral: "bg-elevated text-silver border-line",
  success: "bg-success/10 text-success border-success/25",
};

/** Badge / chip: pill, 11px, mayúsculas con tracking. */
export function Badge({
  variant = "neutral",
  mono = false,
  className,
  children,
}: {
  variant?: Variant;
  /** Usa la mono del sistema (plazos, rondas). */
  mono?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1.5",
        mono
          ? "font-mono text-[11px] tracking-[0.06em]"
          : "text-[10.5px] font-semibold uppercase tracking-[0.1em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
