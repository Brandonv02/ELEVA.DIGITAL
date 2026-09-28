"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Barra fija de móvil.
 * Aparece cuando el hero sale de pantalla y se oculta cuando el CTA final
 * entra en vista, para no taparlo.
 */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const cta = document.getElementById("contacto");
    if (!hero || !("IntersectionObserver" in window)) return;

    let heroOut = false;
    let ctaIn = false;

    const sync = () => setVisible(heroOut && !ctaIn);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroOut = !!entry && !entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    heroObserver.observe(hero);

    let ctaObserver: IntersectionObserver | undefined;
    if (cta) {
      ctaObserver = new IntersectionObserver(
        ([entry]) => {
          ctaIn = !!entry && entry.isIntersecting;
          sync();
        },
        { threshold: 0 },
      );
      ctaObserver.observe(cta);
    }

    return () => {
      heroObserver.disconnect();
      ctaObserver?.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-4 bottom-4 z-40 flex items-center justify-between gap-3 rounded-[14px] border border-line-strong bg-surface/95 py-2 pl-5 pr-2.5 backdrop-blur-xl",
        "shadow-[0_18px_44px_-16px_rgba(0,0,0,0.95)]",
        "transition-[opacity,transform] duration-[250ms] ease-eleva lg:hidden",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-[13.5px] font-semibold text-white">
          ¿Tienes un negocio?
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted">
          Cotiza en 2 minutos
        </span>
      </div>
      <Button href={contact.whatsapp.href} size="sm" tabIndex={visible ? 0 : -1}>
        WhatsApp
      </Button>
    </div>
  );
}
