import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
