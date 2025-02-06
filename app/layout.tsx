import type { Metadata } from "next";
import { Lexend } from "next/font/google"
import "./globals.css";
import { Providers } from './providers'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  display: 'swap',
  variable: '--font-lexend'
})

export const metadata: Metadata = {
  title: "StrikeClimate. - Reducing hazard impact with technology...",
  description: "hazard, geospatial, data, processing, analyses, services, technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
