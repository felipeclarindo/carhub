import type { Metadata } from "next";

import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Car Hub is a car rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
