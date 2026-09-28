import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { legalPlaceholderNote, legalPlaceholders } from "@/lib/legal";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos de uso del sitio web de ELEVA.",
  ...(siteUrl ? { alternates: { canonical: "/terminos" } } : {}),
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="min-h-screen pt-28 pb-20 sm:pt-36">
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-accent-bright">Información legal</p>
            <h1 className="mb-5 text-3xl text-white sm:text-4xl">Términos de uso</h1>
            <p className="mb-10 text-sm text-muted">Vigentes desde: {legalPlaceholders.effectiveDate}</p>
            <div className="mb-10 rounded-control border border-warning/40 bg-surface px-5 py-4 text-sm leading-7 text-silver">
              {legalPlaceholderNote}
            </div>
            <div className="space-y-8 text-[15px] leading-8 text-silver">
              <section><h2 className="mb-2 text-xl text-white">1. Titular del sitio</h2><p>Este sitio es operado por {legalPlaceholders.controller}. Canal de contacto: {legalPlaceholders.contactEmail}.</p></section>
              <section><h2 className="mb-2 text-xl text-white">2. Uso del sitio</h2><p>La información se ofrece para describir los servicios de ELEVA y facilitar consultas. El contenido general del sitio no constituye una cotización ni una oferta contractual vinculante. El alcance, precio, tiempos, entregables y condiciones de cada proyecto se definirán en una propuesta o acuerdo aceptado por las partes.</p></section>
              <section><h2 className="mb-2 text-xl text-white">3. Propiedad intelectual</h2><p>Los elementos propios del sitio, incluidos textos, marca y diseño, están protegidos por las normas aplicables. No se autoriza su reproducción o uso comercial sin autorización de su titular. Las marcas y materiales de terceros conservan sus respectivos titulares.</p></section>
              <section><h2 className="mb-2 text-xl text-white">4. Disponibilidad y enlaces</h2><p>ELEVA procura mantener el sitio disponible y actualizado, pero no garantiza acceso ininterrumpido ni la exactitud permanente de información que pueda cambiar. Los enlaces externos conducen a servicios de terceros sujetos a sus propias condiciones.</p></section>
              <section><h2 className="mb-2 text-xl text-white">5. Responsabilidad</h2><p>El uso del sitio corresponde a quien lo visita. Nada en estos términos limita derechos o responsabilidades que no puedan excluirse conforme a las normas aplicables.</p></section>
              <section><h2 className="mb-2 text-xl text-white">6. Ley aplicable y contacto</h2><p>La jurisdicción y domicilio contractual deben confirmarse: {legalPlaceholders.jurisdiction}. Para consultas sobre estos términos, utiliza {legalPlaceholders.contactEmail}.</p></section>
              <section><h2 className="mb-2 text-xl text-white">7. Actualizaciones</h2><p>Estos términos pueden actualizarse. La versión vigente y su fecha se publicarán en esta página.</p></section>
            </div>
            <p className="mt-10 border-t border-line pt-6 text-sm text-muted">{site.name} · {legalPlaceholders.effectiveDate}</p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
