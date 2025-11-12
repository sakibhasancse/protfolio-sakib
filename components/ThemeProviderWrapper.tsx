"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
