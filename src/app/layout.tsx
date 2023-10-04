import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const GTM_KEY = process.env.GTM_KEY;

  return (
    <html lang="en">
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${process.env.GTM_KEY}');
  `,
        }}
      ></Script>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_KEY}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
