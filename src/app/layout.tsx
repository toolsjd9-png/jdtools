import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import WhatsappFloatingIcon from "@/components/ui/floatingCTA";
import Footer from "@/components/layout/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JD Tools | Affordable Online Tools Subscription",
  description: "Get access to premium design and productivity tools at the best price in India. Instant activation via WhatsApp with a 6-month support warranty.",
  openGraph: {
    title: "JD Tools | Premium Tools at Best Prices",
    description: "Get Canva Premium, Office 365, and more at the best prices in India. Instant activation & support.",
    url: "https://jdtools.in",
    siteName: "JD Tools",
    images: [{
      url: "https://jdtools.in/og-image.jpg", // Ensure this image exists in /public
      width: 1200,
      height: 630,
      alt: "JD Tools Premium Subscriptions",
    }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Business Verification
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JD Tools",
    "url": "https://jdtools.in",
    "description": "Affordable Online Tools Subscription",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#06070B]">
        <Navbar />
        <main className="flex-1 pt-[73px] md:pt-[89px]">
          {children}
        </main>
        <Footer />
        <WhatsappFloatingIcon />
      </body>
    </html>
  );
}