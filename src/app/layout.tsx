import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/seo";
import { getOrganizationSchema, getPersonSchema, getWebsiteSchema } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Dhruv Solanki (Dhruv Solankii) | Dhruv World",
    template: "%s | Dhruv Solanki",
  },
  description:
    "Official digital identity platform of Dhruv Solanki (Dhruv Solankii), founder of Dhruv World. AI, technology, business, portfolio, and media ecosystem.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Dhruv Solanki (Dhruv Solankii) | Dhruv World",
    description:
      "AI, business, technology, and creator ecosystem by Dhruv Solanki.",
    url: siteConfig.siteUrl,
    siteName: "Dhruv Solanki",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dhruv Solanki (Dhruv Solankii) | Dhruv World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Solanki (Dhruv Solankii) | Dhruv World",
    description: "AI, business, technology, and creator ecosystem by Dhruv Solanki.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href="/media/hero.png" as="image" />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
