import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";

export const metadata = {
  title: "Sakib Hasan | Senior Software Engineer",
  description:
    "Software Engineer with 5+ years of experience building scalable, secure backend systems using NestJS, Node.js, and modern frameworks. Open to relocation (Mexico • Bangladesh) and remote roles.",
  keywords:
    "Sakib Hasan, Software Engineer, Backend Software Engineer, Full stack Developer, NestJS, Node.js, Bangladesh Developer, Relocation Ready, Remote Backend Engineer",
  openGraph: {
    title: "Sakib Hasan | Senior Software Engineer",
    description:
      "Software Engineer with 5+ years of experience building scalable, secure backend systems using NestJS, Node.js, and modern frameworks. Open to relocation (Mexico • Bangladesh) and remote roles.",
    url: "https://github.com/sakibhasancse",
    siteName: "Sakib Hasan Portfolio",
    images: [
      {
        url: "https://github.com/sakibhasancse/protfolio-sakib/blob/master/public/sakib.jpeg",
        width: 1200,
        height: 630,
        alt: "Sakib Hasan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
