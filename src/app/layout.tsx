import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const WEBSITE_URL = 'https://www.collingwoodregaltaxi.ca'; // Replace with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: 'Collingwood Regal Taxi | Taxi Service in Collingwood & Wasaga Beach – Local & Airport Cabs',
  description: "Looking for a taxi in Collingwood or Wasaga Beach? Call +1 705-351-0000 to book fast, affordable rides with Collingwood Regal Taxi. Local, airport & outstation taxis available for Collingwood, Wasaga Beach, and surrounding areas.",
  keywords: ['taxi Collingwood', 'taxi Wasaga Beach', 'cab in Collingwood', 'cab in Wasaga Beach', 'airport taxi Collingwood', 'airport taxi Wasaga Beach', 'Collingwood Regal Taxi', 'Wasaga Beach taxi service', 'taxi near me Wasaga Beach', 'taxi near me Collingwood'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Collingwood Regal Taxi | Taxi Service in Collingwood & Wasaga Beach',
    description: 'Fast, reliable, and affordable taxi services in Collingwood, Wasaga Beach, and surrounding Ontario areas. Airport transfers, local rides, and more. Call +1 705-351-0000.',
    url: WEBSITE_URL,
    siteName: 'Collingwood Regal Taxi',
    images: [
      {
        url: `${WEBSITE_URL}/og-image.png`, // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Collingwood Regal Taxi Service for Collingwood and Wasaga Beach',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collingwood Regal Taxi | Taxi Service in Collingwood & Wasaga Beach',
    description: 'Fast, reliable, and affordable taxi services in Collingwood, Wasaga Beach, and surrounding Ontario areas. Airport transfers, local rides, and more. Call +1 705-351-0000.',
    // siteId: 'YOUR_TWITTER_SITE_ID', // Optional
    // creator: '@YOUR_TWITTER_HANDLE', // Optional
    // creatorId: 'YOUR_TWITTER_CREATOR_ID', // Optional
    images: [`${WEBSITE_URL}/twitter-image.png`], // Replace with actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#003366', // Deep Blue
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Collingwood Regal Taxi",
  "description": "Your trusted taxi service in Collingwood, Wasaga Beach, and surrounding Ontario areas. We offer local rides, airport transfers, and corporate travel. Call +1 705-351-0000.",
  "telephone": "+17053510000",
  "url": WEBSITE_URL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Serving Collingwood, Wasaga Beach and surrounding areas", 
    "addressLocality": "Collingwood",
    "addressRegion": "ON",
    "postalCode": "L9Y", // General postal code for Collingwood
    "addressCountry": "CA"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Collingwood"
    },
    {
      "@type": "City",
      "name": "Wasaga Beach"
    },
    {
      "@type": "Place",
      "name": "Blue Mountains"
    },
    {
      "@type": "Airport",
      "name": "Toronto Pearson International Airport"
    },
    {
      "@type": "Place",
      "name": "Simcoe County"
    },
    {
      "@type": "Place",
      "name": "Grey County"
    }
  ],
  "provider": {
    "@type": "Organization",
    "name": "Collingwood Regal Taxi",
    // "logo": `${WEBSITE_URL}/logo.png` // Optional: Add logo URL
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "telephone": "+17053510000",
      "contactType": "customer support" 
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top" className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
