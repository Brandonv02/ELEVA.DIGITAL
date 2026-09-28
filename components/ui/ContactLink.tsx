import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ResolvedLink } from "@/lib/site";

/**
 * Renderiza un dato de contacto.
 * Si el dato todavía no está configurado, muestra una etiqueta neutral sin
 * enlace; sus consumidores pueden ocultar por completo los datos opcionales.
 */
export function ContactLink({
  link,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  link: ResolvedLink;
  className?: string;
  children?: ReactNode;
  "aria-label"?: string;
}) {
  const content = children ?? link.label;

  if (link.isPlaceholder || !link.href) {
    return (
      <span
        data-eleva-placeholder={link.envKey}
        title={`Pendiente de configurar: ${link.envKey}`}
        className={cn("text-muted", className)}
      >
        {content}
      </span>
    );
  }

  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      aria-label={ariaLabel}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "text-silver transition-colors duration-150 ease-eleva hover:text-white",
        className,
      )}
    >
      {content}
    </a>
  );
}
