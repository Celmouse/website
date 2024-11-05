import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Celmouse",
  description: "You have all the control in your hands",
  openGraph: {
    title: 'Celmouse',
    description: 'You have all the control in your hands',
    url: 'https://celmouse.com',
    siteName: 'Celmouse',
    images: [
      {
        url: 'https://celmouse.com/celmouse_card.png',
        width: 1280,
        height: 1080,
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
      <GoogleAnalytics gaId="AW-16600683276" />
    </html>
  );
}
