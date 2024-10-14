import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/contexts/authContext";

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
      <body className={`antialiased overflow-x-hidden`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
