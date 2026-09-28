import { missingEnvKeys } from "@/lib/site";

/**
 * Aviso SOLO en desarrollo con las variables de contacto que faltan.
 * No se renderiza en producción.
 */
export function EnvNotice() {
  if (process.env.NODE_ENV === "production") return null;

  const missing = missingEnvKeys();
  if (missing.length === 0) return null;

  return (
    <aside
      aria-label="Aviso de desarrollo"
      className="fixed bottom-4 left-4 z-[60] hidden max-w-xs rounded-control border border-warning/40 bg-carbon/95 px-4 py-3 backdrop-blur-xl lg:block"
    >
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-warning">
        Datos de contacto pendientes
      </p>
      <ul className="flex flex-col gap-1">
        {missing.map((key) => (
          <li key={key} className="font-mono text-[11px] leading-[1.5] text-silver">
            {key}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11px] leading-[1.5] text-muted">
        Defínelas en <code className="font-mono text-ink">.env.local</code>. Ver{" "}
        <code className="font-mono text-ink">.env.example</code>.
      </p>
    </aside>
  );
}
