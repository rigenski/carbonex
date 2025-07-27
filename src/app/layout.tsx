import Providers from "@/components/providers";
import Chatbot from "@/components/chatbot";
import { TConfig } from "@/stores/config";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarbonEx - Kredit Karbon Premium & Dampak Lingkungan",
  description:
    "Ubah jejak karbon Anda menjadi dampak lingkungan nyata. Akses kredit karbon triple-verified dari 890+ proyek sukses. Mulai offset hari ini.",
  keywords:
    "kredit karbon, offset karbon, dampak lingkungan, keberlanjutan, perubahan iklim, netral karbon, proyek terverifikasi",
  authors: [{ name: "Tim CarbonEx" }],
  creator: "CarbonEx",
  publisher: "CarbonEx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://carbonex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://carbonex.com",
    title: "CarbonEx - Kredit Karbon Premium & Dampak Lingkungan",
    description:
      "Ubah jejak karbon Anda menjadi dampak lingkungan nyata. Akses kredit karbon triple-verified dari 890+ proyek sukses.",
    siteName: "CarbonEx",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CarbonEx - Platform Kredit Karbon Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarbonEx - Kredit Karbon Premium & Dampak Lingkungan",
    description:
      "Ubah jejak karbon Anda menjadi dampak lingkungan nyata. Akses kredit karbon triple-verified dari 890+ proyek sukses.",
    images: ["/og-image.jpg"],
    creator: "@carbonex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = {
    title: metadata?.title,
    description: metadata?.description,
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Providers config={config as TConfig}>{children}</Providers>
        <Chatbot />
      </body>
    </html>
  );
}
