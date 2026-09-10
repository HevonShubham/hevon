import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hevon.in"),
  title: {
    default: "HEVON PROFFEE — Protein Coffee",
    template: "%s | HEVON",
  },
  description: "HEVON Protein Coffee combines real coffee character with 22g protein and zero added sugar. Fuel Your Day.",
  keywords: ["HEVON", "protein drink India", "ready to drink protein", "protein coffee", "zero added sugar"],
  applicationName: "HEVON",
  authors: [{ name: "HEVON" }],
  creator: "HEVON",
  publisher: "HEVON",
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo/hevon-icon.svg",
    shortcut: "/logo/hevon-icon.svg",
    apple: "/logo/hevon-icon.svg",
  },
  openGraph: {
    title: "HEVON PROFFEE — Protein Coffee",
    description: "HEVON Protein Coffee with 22g protein and zero added sugar. Fuel Your Day.",
    url: "https://hevon.in",
    siteName: "HEVON",
    type: "website",
    images: [{ url: "/social/og-hevon.png", width: 1200, height: 630, alt: "HEVON PROFFEE Protein Coffee — Fuel Your Day" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEVON PROFFEE — Protein Coffee",
    description: "HEVON Protein Coffee with 22g protein and zero added sugar. Fuel Your Day.",
    images: ["/social/og-hevon.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HEVON",
  url: "https://hevon.in",
  logo: "https://hevon.in/logo/hevon-icon.svg",
  email: "hello@hevon.in",
  sameAs: ["https://instagram.com/hevonofficial"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
