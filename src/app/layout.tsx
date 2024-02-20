import sharedConfig from "@/constants/config";
import { coreFont } from "@/constants/font";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(sharedConfig.baseUrl),
  title: {
    default: "Dunniabs",
    template: "%s | Dunniabs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased transition-colors", coreFont.className)}>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
