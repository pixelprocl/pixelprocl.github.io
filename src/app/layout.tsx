import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pixel Pro — Soluciones digitales a la medida de tu negocio",
    template: "%s | Pixel Pro",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: siteConfig.name,
    title: "Pixel Pro — Soluciones digitales a la medida de tu negocio",
    description: siteConfig.description,
    images: [{ url: "/images/projects/casa-agurto.png", alt: "Sitio web de Casa Agurto, concepto de empresa chilena de palos de golf" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Pro — Soluciones digitales a la medida de tu negocio",
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#071426",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pixel Pro",
  description: siteConfig.description,
  url: siteConfig.url,
  areaServed: { "@type": "Country", name: "Chile" },
  email: siteConfig.contactEmail,
  telephone: "+56920568354",
  knowsAbout: [
    "Diseño y desarrollo web",
    "Sistemas de agendamiento",
    "Aplicaciones Android",
    "Desarrollo de software personalizado",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
