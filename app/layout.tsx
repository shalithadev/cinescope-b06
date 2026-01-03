import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { inter, roboto_mono } from "./font";

// Metadata for the cinescope app
export const metadata: Metadata = {
  title: "CineScope Dashboard",
  description: "Your gateway to cinematic insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.variable} ${roboto_mono.variable} antialiased font-inter`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
