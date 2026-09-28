import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { site, siteUrl, siteUrlIsPlaceholder } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  publisher: site.name,
  keywords: [
    "diseño web Colombia",
    "desarrollo web para negocios",
    "landing page profesional",
    "páginas web para pymes",
    "agencia digital Colombia",
    "Next.js",
    "ELEVA",
  ],
  category: "technology",
  ...(!siteUrl ? {} : { alternates: { canonical: "/" } }),
  openGraph: {
    type: "website",
    locale: site.locale,
    ...(siteUrl ? { url: "/" } : {}),
    siteName: site.name,
    title: site.title,
    description: site.description,
    ...(siteUrl ? { images: ["/opengraph-image"] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    ...(siteUrl ? { images: ["/opengraph-image"] } : {}),
  },
  robots: siteUrlIsPlaceholder
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  ...(site.googleVerification
    ? { verification: { google: site.googleVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0D0F14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* Marca que hay JavaScript antes del primer pintado. Las entradas
            al scroll solo se ocultan si esta clase existe, así que sin JS
            la página se ve completa. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="bg-carbon text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-control focus:bg-accent-solid focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
