import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { carePlans } from "@/lib/content";

/**
 * ELEVA CARE — mantenimiento mensual.
 * Va dentro de Servicios pero visualmente demotado: es una tabla compacta,
 * no tres cards que compitan con los tres planes de arriba.
 */
export function Care() {
  return (
    <div id="care" className="mt-20 border-t border-line pt-16 lg:mt-24">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>ELEVA Care — mantenimiento mensual</Eyebrow>
          <h3 className="text-[22px] leading-[1.15] text-white lg:text-[28px]">
            Un sitio publicado no es un sitio terminado.
          </h3>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-[380px] text-[15.5px] leading-[1.7] text-silver">
            Opcional. La web sigue rápida, segura y actualizada sin que tengas que
            ocuparte tú.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <ul className="overflow-hidden rounded-card border border-line bg-surface">
          {carePlans.map((plan) => (
            <li
              key={plan.id}
              className="flex items-center justify-between gap-4 border-b border-line-soft px-5 py-4.5 last:border-b-0 lg:grid lg:grid-cols-[180px_1fr_150px] lg:gap-6 lg:px-7 lg:py-5.5"
            >
              <div className="flex flex-col gap-1 lg:contents">
                <h4 className="font-display text-[15.5px] font-semibold text-white lg:text-[17px]">
                  {plan.name}
                </h4>
                <p className="text-[12.5px] leading-[1.5] text-silver lg:text-[14.5px] lg:leading-[1.6]">
                  {plan.body}
                </p>
              </div>
              <p className="shrink-0 whitespace-nowrap font-display text-base font-semibold tracking-[-0.03em] text-white lg:text-right lg:text-xl">
                {plan.price}
                <span className="font-mono text-[11.5px] font-normal text-muted">
                  /mes
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
