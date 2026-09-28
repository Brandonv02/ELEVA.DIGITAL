/**
 * Une clases condicionales sin dependencias externas.
 * Suficiente para este proyecto: no hay merge de clases Tailwind en conflicto
 * porque los componentes exponen variantes cerradas en vez de className libre.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
