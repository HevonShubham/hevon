import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hevon.in"),
  title: {
    default: "HEVON PROFFEE — Protein Coffee",
    template: "%s | HEVON",
  },
  description: "HEVON. A little more, every day. Discover PROFFEE, explore the first drop and join the waitlist.",
  keywords: ["HEVON", "protein drink India", "ready to drink protein", "protein coffee"],
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
    description: "A little more, every day. Discover HEVON PROFFEE and join the waitlist for the first drop.",
    url: "https://hevon.in",
    siteName: "HEVON",
    type: "website",
    images: [{ url: "/social/og-hevon.png", width: 1200, height: 630, alt: "HEVON PROFFEE Protein Coffee — Fuel Your Day" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEVON PROFFEE — Protein Coffee",
    description: "A little more, every day. Discover HEVON PROFFEE and join the waitlist for the first drop.",
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
  sameAs: ["https://www.instagram.com/hevon.official?stkn=MTNoczB6NHE2aXlqcg=="],
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
