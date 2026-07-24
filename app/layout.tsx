import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hevon.in"),
  title: {
    default: "HEVON — The Future of Everyday Drinks",
    template: "%s | HEVON",
  },
  description: "HEVON is developing a premium ready-to-drink protein beverage for India, targeting 18–20g protein, zero added sugar and everyday taste.",
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
    title: "HEVON — The Future of Everyday Drinks",
    description: "Premium everyday drinks. Targeting 18–20g protein and zero added sugar. Launching first with Coffee Latte.",
    url: "https://hevon.in",
    siteName: "HEVON",
    type: "website",
    images: [{ url: "/social/og-hevon.png", width: 1200, height: 630, alt: "HEVON protein drink pre-launch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEVON — The Future of Everyday Drinks",
    description: "Premium everyday drinks. Targeting 18–20g protein and zero added sugar.",
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
