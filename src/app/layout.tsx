import type{Metadata}from"next";
import Script from"next/script";
import"./globals.css";
import{absoluteUrl,siteConfig}from"@/lib/site-config";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-3S7FP0B669";

export const metadata:Metadata={
  metadataBase:new URL(siteConfig.url),
  title:{default:"Sephiria Wiki - Builds, Guides & Tips",template:"%s | Sephiria Wiki"},
  description:siteConfig.description,
  applicationName:siteConfig.name,
  alternates:{canonical:"/"},
  verification:{google:"o2ZUtsvf_4lz_cNq4kcuBsS0QBHbOtDNFpdBLi-1ztA"},
  openGraph:{type:"website",siteName:siteConfig.name,url:"/",images:[siteConfig.defaultSocialImage]},
  twitter:{card:"summary_large_image",images:[siteConfig.defaultSocialImage]},
  icons:{icon:[{url:"/favicon.ico",sizes:"any"},{url:"/favicon.png",type:"image/png",sizes:"512x512"}],apple:[{url:"/favicon.png",sizes:"512x512"}]},
  authors:[{name:siteConfig.author,url:absoluteUrl("/")}]
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}