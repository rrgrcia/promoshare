import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Promoshare - Turn Superfans Into Brand Ambassadors',
  description: 'Fan-activation SaaS platform that transforms superfans into social-media ambassadors to drive ticket, merchandise, and event sales.',
  openGraph: {
    title: 'Promoshare - Turn Superfans Into Brand Ambassadors',
    description: 'Fan-activation SaaS platform that transforms superfans into social-media ambassadors to drive ticket, merchandise, and event sales.',
    url: 'https://promoshare.com',
    siteName: 'Promoshare',
    images: [
      {
        url: 'https://static.getmocha.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promoshare - Turn Superfans Into Brand Ambassadors',
    description: 'Fan-activation SaaS platform that transforms superfans into social-media ambassadors to drive ticket, merchandise, and event sales.',
    images: ['https://static.getmocha.com/og.png'],
  },
  icons: {
    icon: 'https://static.getmocha.com/favicon.ico',
    apple: 'https://static.getmocha.com/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

