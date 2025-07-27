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
  title: "CarbonEx - Premium Carbon Credits & Environmental Impact",
  description:
    "Transform your carbon footprint into real environmental impact. Access triple-verified carbon credits from 890+ successful projects. Start offsetting today.",
  keywords:
    "carbon credits, carbon offset, environmental impact, sustainability, climate change, carbon neutral, verified projects",
  authors: [{ name: "CarbonEx Team" }],
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
    locale: "en_US",
    url: "https://carbonex.com",
    title: "CarbonEx - Premium Carbon Credits & Environmental Impact",
    description:
      "Transform your carbon footprint into real environmental impact. Access triple-verified carbon credits from 890+ successful projects.",
    siteName: "CarbonEx",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CarbonEx - Premium Carbon Credits Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarbonEx - Premium Carbon Credits & Environmental Impact",
    description:
      "Transform your carbon footprint into real environmental impact. Access triple-verified carbon credits from 890+ successful projects.",
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
