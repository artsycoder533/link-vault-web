import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    images: '/opengraph-image.png',
    type: 'website',
    siteName: 'My Link Vault',
    locale: 'en_US'
  },
  title: "My Link Vault",
  description:
    "Link Vault is a powerful Chrome extension designed to streamline your web browsing experience and help you declutter your browser.",
  authors: [
    { name: "Natasha Johnson", url: "https://www.natashajohnson.dev/" },
  ],
  creator: "Natasha Johnson",
  referrer: "origin-when-cross-origin",
  category: "workflow & planning",
  verification: { google: "Oo3HrK4uDyvizqZBxy1I0cIUpNqUjm45kg0xLOtEMa4" },
  twitter: {
    title: "My Link Vault",
    site: "https://my-link-vault.vercel.app/",
    card: "summary_large_image",
    creator: '@artsycoder533',
    images: '/opengraph-image.png',
    description: "Link Vault is a powerful Chrome extension designed to streamline your web browsing experience and help you declutter your browser.",
  },
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
