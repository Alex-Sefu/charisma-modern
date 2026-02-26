import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "../contexts/AccessibilityContext";
import AccessibilityMenu from "../components/AccessibilityMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pensiunea Charisma - Băile Herculane",
  description:
    "Pensiune de lux în Băile Herculane. Cazare elegantă cu design modern-rustic, piscină, grătar și o atmosferă de relaxare în mijlocul naturii.",
  keywords:
    "pensiune, Cerna, Băile Herculane, cazare, turism, relaxare, verde salvie",
  openGraph: {
    title: "Pensiunea Charisma",
    description: "Eleganță și confort în inima naturii",
    images: [
      {
        url: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <AccessibilityProvider>
        
            <AccessibilityMenu />
            {children}
          
        </AccessibilityProvider>
      </body>
    </html>
  );
}
