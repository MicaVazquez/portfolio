import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { AuroraBackground } from "@/components/aurora-background";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Micaela Vázquez | Full Stack Developer",
  description:
    "Desarrolladora Full Stack en Buenos Aires. TypeScript, Next.js, Node.js, Clean Architecture, TDD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} antialiased bg-brand-bg text-brand-cream relative`}
      >
        <AuroraBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
