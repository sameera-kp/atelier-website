import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Design | Architecture & Interior Studio",
  description: "Minimalist interior design and architectural space portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f2eb] text-stone-900 antialiased min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <div>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}