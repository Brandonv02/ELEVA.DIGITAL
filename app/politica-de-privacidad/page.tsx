import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { legalPlaceholderNote, legalPlaceholders } from "@/lib/legal";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Información sobre el tratamiento de datos personales en el sitio web de ELEVA.",
  ...(siteUrl ? { alternates: { canonical: "/politica-de-privacidad" } } : {}),
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="min-h-screen pt-28 pb-20 sm:pt-36">
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-accent-bright">Información legal</p>
            <h1 className="mb-5 text-3xl text-white sm:text-4xl">Política de privacidad</h1>
            <p className="mb-10 text-sm text-muted">Vigente desde: {legalPlaceholders.effectiveDate}</p>
            <div className="mb-10 rounded-control border border-warning/40 bg-surface px-5 py-4 text-sm leading-7 text-silver">
              {legalPlaceholderNote}
            </div>
            <div className="space-y-8 text-[15px] leading-8 text-silver">
              <section><h2 className="mb-2 text-xl text-white">1. Responsable</h2><p>El responsable del tratamiento de los datos personales recogidos mediante este sitio es {legalPlaceholders.controller} (en adelante, “ELEVA”).</p></section>
              <section><h2 className="mb-2 text-xl text-white">2. Información que puede recibirse</h2><p>Si una persona decide contactar a ELEVA mediante los canales que se habiliten en el sitio, podrá comunicar datos de contacto y la información que incluya en su consulta. El sitio no solicita datos sensibles mediante sus páginas públicas.</p></section>
              <section><h2 className="mb-2 text-xl text-white">3. Finalidades</h2><p>La información compartida se utilizará para atender consultas, preparar o dar seguimiento a solicitudes de servicios y mantener comunicaciones relacionadas con ellas. Cualquier finalidad adicional deberá informarse y contar con la autorización que corresponda.</p></section>
              <section><h2 className="mb-2 text-xl text-white">4. Conservación y terceros</h2><p>La información se conservará durante el tiempo necesario para atender la solicitud y cumplir las obligaciones aplicables. Si se incorporan formularios, analítica, cookies no esenciales u otros proveedores, esta política deberá actualizarse para identificarlos y explicar su uso antes de activarlos.</p></section>
              <section><h2 className="mb-2 text-xl text-white">5. Derechos y consultas</h2><p>Como titular puedes solicitar acceso, actualización o corrección de tus datos, pedir prueba de la autorización cuando corresponda, conocer el uso que se les ha dado y solicitar su supresión o la revocatoria de la autorización en los casos previstos por la ley. Para presentar una consulta o reclamo, escribe a {legalPlaceholders.contactEmail}. El responsable debe completar aquí el procedimiento y los plazos aplicables, y comunicar la autoridad de protección de datos competente.</p></section>
              <section><h2 className="mb-2 text-xl text-white">6. Cambios</h2><p>Esta política podrá actualizarse cuando cambien los tratamientos de información o las obligaciones aplicables. La fecha de actualización deberá reflejarse en esta página.</p></section>
            </div>
            <p className="mt-10 border-t border-line pt-6 text-sm text-muted">{site.name} · {legalPlaceholders.effectiveDate}</p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
