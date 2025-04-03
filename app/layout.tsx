import type { Metadata } from "next";
import { Lexend } from "next/font/google"
import "./globals.css";
import { Providers } from './providers'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  display: 'swap',
  variable: '--font-lexend'
})

export const metadata: Metadata = {
  title: "StrikeClimate. - Reducing hazard impact with technology...",
  description: "hazard, geospatial, data, processing, analyses, services, technology",
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "StrikeClimate",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${lexend.variable}`} data-qb-extension-installed="true" data-qb-installed="true"
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}