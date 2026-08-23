import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "FixPoint Garage — Trusted Auto Repair Experts",
  description:
    "Professional automotive repair, diagnostics, and servicing. Honest pricing, certified mechanics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
