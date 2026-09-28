import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Founder } from "@/components/sections/Founder";
import { Cta } from "@/components/sections/Cta";
import { EnvNotice } from "@/components/dev/EnvNotice";
import { JsonLd } from "./json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="contenido">
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Projects />
        <Founder />
        <Cta />
      </main>
      <Footer />
      <MobileStickyCta />
      <EnvNotice />
    </>
  );
}
