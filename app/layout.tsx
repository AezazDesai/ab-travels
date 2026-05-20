import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "AB Travels — Travel Agency in Navsari, Gujarat",
  description:
    "AB Travels is a trusted travel agency based in At-Tankal, Navsari, Gujarat. We offer domestic tours, international packages, Umrah and Hajj packages at the best prices.",
  keywords:
    "travel agency navsari, AB travels, umrah packages gujarat, hajj packages navsari, domestic tours india, international tours gujarat",
  openGraph: {
    title: "AB Travels — Navsari, Gujarat",
    description:
      "Your trusted travel partner from Navsari, Gujarat. Domestic, International, Umrah & Hajj packages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script>
          {/* Google Search Console */}
          <meta
            name="google-site-verification"
            content="aJXmixUvo14zA2jK3Igq9QgnXEu0FZAKiLbZ9K_-CrQ"
          />
          {/* Google Tag Manager - gtag.js loader */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-MV099XD54D"
          />
          {/* Google Analytics Script */}
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y9KE6NQTCX');
            `,
            }}
          />
        </Script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton number="9909957177" variant="floating" />
        <Analytics /> {/* Vercel Analytics component */}
      </body>
    </html>
  );
}
