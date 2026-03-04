import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Aurelius-Konservatorium für Unternehmenskunst | AKU Berlin",
  description:
    "The Aurelius-Konservatorium für Unternehmenskunst e.V. (AKU) preserves and presents corporate art, branding ephemera, and sculpture for public trust. Est. 1987, Berlin.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-[#0a0a0a]">
        <AnnouncementBar />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
