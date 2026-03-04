import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Das Aurelius-Konservatorium für Unternehmenskunst e.V. | AKU Berlin",
  description:
    "Das Aurelius-Konservatorium für Unternehmenskunst e.V. (AKU) bewahrt und vermittelt korporative Kulturgüter — Skulptur, Gemälde, Fotografie und Ephemera aus der Geschichte der globalen Unternehmenskultur. Seit 1987. Berlin.",
  keywords: ["Museum", "Unternehmenskunst", "Berlin", "Skulptur", "Korporativ", "Kunst"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-[#0a0a0a]">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
