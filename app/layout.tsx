import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import ShareMenu from "@/components/layout/ShareMenu";

export const metadata: Metadata = {
  title: "AB Travels — Best Travel Agency in Tankal, Navsari, Gujarat",
  description:
    "AB Travels is a trusted travel agency based in At-Tankal, Navsari, Gujarat. We offer domestic tours, international packages, Umrah and Hajj packages at the best prices.",
  keywords:
    "travel agency navsari, AB travels, umrah packages gujarat, hajj packages navsari, domestic tours india, international tours gujarat",
  openGraph: {
    title: "AB Travels — Tankal, Navsari, Gujarat",
    description:
      "Your trusted travel partner from Tankal, Navsari, Gujarat. Domestic, International, Umrah & Hajj packages.",
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
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="aJXmixUvo14zA2jK3Igq9QgnXEu0FZAKiLbZ9K_-CrQ"
        />
        {/* Google Tag Manager - gtag.js loader */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9KE6NQTCX"
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

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-58B3ZXV4');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58B3ZXV4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <ShareMenu />
        <Footer />
        <WhatsAppButton number="9909957177" variant="floating" />
        <Analytics /> {/* Vercel Analytics component */}
      </body>
    </html>
  );
}
