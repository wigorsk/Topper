import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutriclick",
  description: "Gerenciador de macronutrientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
