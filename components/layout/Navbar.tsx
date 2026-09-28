"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/content";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Navbar fija. Transparente sobre el hero; al hacer scroll baja de 88 a 68px,
 * se pinta con blur y aparece el borde inferior.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Bloquea el scroll del documento mientras el menú móvil está abierto.
  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[250ms] ease-eleva",
        scrolled
          ? "border-b border-line-soft bg-carbon/82 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Principal"
          className={cn(
            "flex items-center justify-between transition-[height] duration-[250ms] ease-eleva",
            scrolled ? "h-[68px]" : "h-[72px] lg:h-22",
          )}
        >
          <a
            href="/#inicio"
            className="rounded-chip"
            aria-label="ELEVA — inicio"
          >
            <Logo size={scrolled ? 24 : 26} />
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`/${link.href}`}
                className="text-[14.5px] font-medium text-silver transition-colors duration-150 ease-eleva hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* El envoltorio controla la visibilidad: `hidden` sobre el propio
                botón perdería frente al `inline-flex` de su clase base. */}
            <span className="hidden sm:block">
              <Button href={contact.whatsapp.href} size="sm">
                Hablemos
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              className="flex size-12 items-center justify-center rounded-control border border-line text-ink transition-colors duration-150 ease-eleva hover:border-line-strong hover:text-white lg:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!menuOpen}
        className="border-t border-line-soft bg-carbon/98 backdrop-blur-xl lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center rounded-control px-2 font-display text-xl font-semibold text-ink transition-colors duration-150 ease-eleva hover:bg-surface hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={contact.whatsapp.href}
            fullWidth
            className="mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Hablemos de tu proyecto
            <Icon name="arrowRight" size={17} />
          </Button>
        </Container>
      </div>
    </header>
  );
}
