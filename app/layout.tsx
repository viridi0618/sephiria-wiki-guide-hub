import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sephiria.wiki"),
  title: { default: "Sephiria Wiki - Builds, Guides & Tips", template: "%s | Sephiria Wiki" },
  description: "Sephiria Wiki for beginner guides, builds, weapon tips, progression strategies, and gameplay help.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Sephiria Wiki", title: "Sephiria Wiki - Builds, Guides & Tips", description: "Decision-first Sephiria builds, guides and practical tips.", images: ["/og.webp"] },
  twitter: { card: "summary_large_image", title: "Sephiria Wiki - Builds, Guides & Tips", description: "Decision-first Sephiria builds, guides and practical tips.", images: ["/og.webp"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
