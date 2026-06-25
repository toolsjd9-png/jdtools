import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import WhatsappFloatingIcon from "@/components/ui/floatingCTA";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JD Tools | Affordable Online Tools Subscription",
  description: "Get access to premium design and productivity tools at the best price in India. Instant activation via WhatsApp with a 6-month support warranty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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