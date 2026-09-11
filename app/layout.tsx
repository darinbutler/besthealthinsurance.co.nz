import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";

export const metadata: Metadata = {
  title: "Best Health Insurance NZ | Compare Plans and Get a Quote | BestHealthInsurance.co.nz",
  description: "Compare the best health insurance in New Zealand. Southern Cross, nib, AIA, UniMed & Partners Life — find the right policy and connect with a specialist NZ adviser within 24 hours.",
  keywords: "best health insurance NZ, health insurance New Zealand, compare health insurance, Southern Cross, nib, AIA, UniMed, Partners Life",
  authors: [{ name: "BestHealthInsurance.co.nz Editorial Team", url: "https://besthealthinsurance.co.nz/about/" }],
  creator: "BestHealthInsurance.co.nz",
  publisher: "Cover4You Group",
  metadataBase: new URL("https://besthealthinsurance.co.nz"),
  alternates: { canonical: "https://besthealthinsurance.co.nz/" },
  openGraph: {
    title: "Best Health Insurance NZ | Compare & Find the Best Cover",
    description: "Compare the best health insurance in New Zealand. Connect with a specialist NZ adviser who compares all major providers for your situation.",
    url: "https://besthealthinsurance.co.nz",
    siteName: "BestHealthInsurance.co.nz",
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "BestHealthInsurance.co.nz — Compare NZ Health Insurance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Health Insurance NZ | Compare & Find the Best Cover",
    description: "Compare Southern Cross, nib, AIA, UniMed & Partners Life. Specialist NZ adviser within 24 hours.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://besthealthinsurance.co.nz/#organization",
  name: "BestHealthInsurance.co.nz",
  alternateName: "Cover4You Group",
  url: "https://besthealthinsurance.co.nz",
  logo: {
    "@type": "ImageObject",
    url: "https://besthealthinsurance.co.nz/favicon.ico",
    width: 48,
    height: 48,
  },
  description: "Independent health insurance comparison and adviser referral service for New Zealanders. We connect you with specialist NZ advisers who compare all major providers — Southern Cross, nib, AIA, UniMed and Partners Life.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@cover4you.co.nz",
    availableLanguage: "English",
    areaServed: "NZ",
  },
  areaServed: {
    "@type": "Country",
    name: "New Zealand",
  },
  knowsAbout: ["Health Insurance", "Private Health Insurance New Zealand", "Southern Cross Health Insurance", "nib Health Insurance", "AIA Health Insurance", "UniMed Health Insurance", "Partners Life Insurance"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://besthealthinsurance.co.nz/#website",
  url: "https://besthealthinsurance.co.nz",
  name: "BestHealthInsurance.co.nz",
  description: "Compare the best health insurance in New Zealand — independent, expert recommendations for Kiwis.",
  publisher: { "@id": "https://besthealthinsurance.co.nz/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://besthealthinsurance.co.nz/blog/?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-NZ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
