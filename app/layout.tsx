import "./globals.css";
import type { Metadata } from "next";
import { inter, roboto_mono } from "@/app/fonts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

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
        className={cn(inter.variable, roboto_mono.variable, inter.className)}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
