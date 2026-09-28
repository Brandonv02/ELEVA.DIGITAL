/**
 * Maqueta del entregable de ELEVA: navegador de escritorio + teléfono.
 *
 * Es una DEMO del producto, no un cliente real: la identidad va entre
 * corchetes a propósito (`[ TU NEGOCIO ]`, `[ Sector ]`).
 *
 * Se dibuja a tamaño intrínseco 620×430 y se escala con `transform` dentro
 * de un contenedor de altura fija por breakpoint, así nunca se rompe ni
 * provoca scroll horizontal.
 */

function MiniSite() {
  return (
    <div className="flex flex-col bg-carbon">
      {/* Nav del sitio del cliente */}
      <div className="flex h-9 items-center justify-between border-b border-[#16181F] px-5">
        <div className="flex items-center gap-1.5">
          <span className="size-3.5 rounded-[4px] bg-accent" />
          <span className="font-mono text-[8.5px] tracking-[0.16em] text-ink">
            [ TU NEGOCIO ]
          </span>
        </div>
        <div className="flex items-center gap-4">
              <span className="text-[8.5px] text-muted">Servicios</span>
              <span className="text-[8.5px] text-muted">Galería</span>
              <span className="text-[8.5px] text-muted">Contacto</span>

          <span className="rounded-[5px] bg-accent-solid px-2.5 py-[5px] text-[8.5px] font-semibold text-white">
            Reservar
          </span>
        </div>
      </div>

      {/* Hero del sitio del cliente */}
      <div className="grid grid-cols-[1fr_176px] gap-4 px-5 pb-5 pt-6">
        <div className="flex flex-col gap-[9px] pt-1.5">
          <span className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-muted">
            [ Sector ] · [ Ciudad ]
          </span>
          <p className="font-display text-[21px] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
            Reserva tu cita en 30 segundos.
          </p>
          <p className="max-w-[200px] text-[9.5px] leading-[1.6] text-silver">
            Sin llamadas ni esperas. Elige el servicio, el día y la hora desde tu
            celular.
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="rounded-[6px] bg-accent-solid px-3.5 py-2 text-[9px] font-semibold text-white">
              Reservar ahora
            </span>
            <span className="rounded-[6px] border border-line-strong px-3.5 py-2 text-[9px] font-semibold text-ink">
              Ver servicios
            </span>
          </div>
        </div>

        <div className="grid-bg relative h-[152px] overflow-hidden rounded-[10px] border border-line bg-surface">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(91,107,255,0.16)_0%,rgba(13,15,20,0)_62%)]" />
          <span className="absolute bottom-2.5 left-3 font-mono text-[7.5px] tracking-[0.14em] text-muted">
            [ FOTO ]
          </span>
        </div>
      </div>

      {/* Servicios del sitio del cliente */}
      <div className="grid grid-cols-3 gap-3 px-5 pb-4">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="flex flex-col gap-[7px] rounded-[9px] border border-line-soft bg-surface-deep px-3 py-3"
          >
            <span className="size-5 rounded-[6px] border border-accent/25 bg-accent/12" />
            <span className="font-display text-[10px] font-semibold text-white">
              [ Servicio 0{n} ]
            </span>
            <span className="text-[8.5px] leading-[1.5] text-muted">
              Una línea de descripción
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DeliverableMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[250px] w-full sm:h-[330px] md:h-[400px] lg:h-[360px] xl:h-[460px]"
    >
      <div
        className={[
          "absolute top-0 w-[620px] origin-top",
          "left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 lg:origin-top-right",
          "scale-[0.52] sm:scale-[0.7] md:scale-[0.86] lg:scale-[0.72] xl:scale-100",
        ].join(" ")}
      >
        {/* Navegador */}
        <div className="ml-[120px] w-[500px] overflow-hidden rounded-[14px] border border-line bg-surface-deep shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
          <div className="flex h-9 items-center gap-3.5 border-b border-line bg-surface px-3.5">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
            </div>
            <div className="flex grow justify-center">
              <div className="flex h-[22px] items-center gap-[7px] rounded-[6px] border border-line-soft bg-carbon px-3.5">
                <svg
                  viewBox="0 0 24 24"
                  width={10}
                  height={10}
                  fill="none"
                  stroke="#7C87FF"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <span className="font-mono text-[10px] text-muted">
                  [ tunegocio.com ]
                </span>
              </div>
            </div>
            <div className="w-10" />
          </div>
          <MiniSite />
        </div>

        {/* Teléfono superpuesto */}
        <div className="absolute -bottom-4 left-0 h-[280px] w-[136px] rounded-[24px] bg-elevated p-1.5 shadow-[0_34px_70px_-22px_rgba(0,0,0,1)]">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[21px] border border-line bg-carbon">
            <div className="flex h-[30px] items-center justify-between border-b border-[#16181F] px-3">
              <div className="flex items-center gap-1.5">
                <span className="size-[11px] rounded-[3px] bg-accent" />
                <span className="font-mono text-[6.5px] tracking-[0.14em] text-ink">
                  [ TU NEGOCIO ]
                </span>
              </div>
              <svg
                viewBox="0 0 24 24"
                width={11}
                height={11}
                fill="none"
                stroke="#7A7F8C"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 px-3 py-4">
              <span className="font-mono text-[6px] uppercase tracking-[0.2em] text-muted">
                [ Sector ]
              </span>
              <p className="font-display text-[15px] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
                Reserva tu cita en 30 segundos.
              </p>
              <span className="text-[8px] leading-[1.55] text-silver">
                Sin llamadas ni esperas.
              </span>
              <span className="mt-1 rounded-[6px] bg-accent-solid py-2.5 text-center text-[8.5px] font-semibold text-white">
                Reservar ahora
              </span>
            </div>
            <div className="grid-bg relative mx-3 mb-3 grow overflow-hidden rounded-[9px] border border-line bg-surface">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(91,107,255,0.16)_0%,rgba(13,15,20,0)_65%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
