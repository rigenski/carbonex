import Providers from "@/components/providers";
import Chatbot from "@/components/chatbot";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
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
        alt: "CarbonEx - Premium Carbon Credit Platform",
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = {
    title: "CarbonEx - Premium Carbon Credits & Environmental Impact",
    description:
      "Transform your carbon footprint into real environmental impact. Access triple-verified carbon credits from 890+ successful projects. Start offsetting today.",
  };

  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        <Providers config={config}>
          {children}
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
