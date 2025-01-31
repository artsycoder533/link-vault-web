import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://my-link-vault.vercel.app'),
  openGraph: {
    title: 'My Link Vault',
    description:
      'Link Vault is a powerful Chrome extension designed to streamline your web browsing experience and help you declutter your browser.',
    locale: 'en US',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Free QR Code Generator',
      },
    ],
    siteName: 'My Link Vault',
  },
  authors: [
    { name: 'Natasha Johnson', url: 'https://www.natashajohnson.dev' },
    { name: 'Ten-23 Agency, LLC', url: 'https://ten23.agency' },
  ],
  creator: 'Natasha Johnson',
  referrer: 'origin-when-cross-origin',
  category: 'workflow & planning',
  verification: { google: 'Oo3HrK4uDyvizqZBxy1I0cIUpNqUjm45kg0xLOtEMa4' },
  twitter: {
    title: 'My Link Vault',
    site: 'https://my-link-vault.vercel.app',
    card: 'summary_large_image',
    creator: '@artsycoder533',
    images: [
      {
        url: '/twitter-image.png',
        alt: 'FREE QR Code Generator',
      },
    ],
    description:
      'Link Vault is a powerful Chrome extension designed to streamline your web browsing experience and help you declutter your browser.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'link vault',
    'chrome extension',
    'browser extension',
    'link saver',
    'link organizer',
    'link manager',
    'tab manager',
    'tab saver',
    'tab organizer',
    'tab manager',
    'tab manager extension',
    'tab organizer extension',
    'tab saver extension',
    'link manager extension',
    'link organizer extension',
    'link saver extension',
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
