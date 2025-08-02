"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Understanding Carbon Credits: A Complete Guide",
    excerpt:
      "Carbon credits are becoming increasingly important in the fight against climate change. Learn how they work and why they matter.",
    content:
      "Carbon credits represent a reduction in greenhouse gas emissions that can be traded on the market. One carbon credit typically equals one metric ton of CO2 equivalent. These credits are generated through various projects such as renewable energy, reforestation, and energy efficiency initiatives. The carbon credit market has grown significantly in recent years, with both voluntary and compliance markets playing crucial roles in global climate action.",
    category: "Education",
    date: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "The Rise of Voluntary Carbon Markets",
    excerpt:
      "Voluntary carbon markets are experiencing unprecedented growth as companies and individuals take climate action into their own hands.",
    content:
      "Voluntary carbon markets allow companies and individuals to purchase carbon credits to offset their emissions voluntarily. Unlike compliance markets, these are not mandated by regulations but driven by corporate social responsibility and consumer demand. The market has seen remarkable growth, with prices reaching new highs and more diverse project types entering the market.",
    category: "Market Trends",
    date: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Carbon Credit Verification: Ensuring Quality and Integrity",
    excerpt:
      "Quality verification is crucial in the carbon credit market. Discover how projects are verified and what standards ensure their integrity.",
    content:
      "Carbon credit verification is essential to ensure that claimed emission reductions are real, measurable, and additional. Various standards like the Verified Carbon Standard (VCS), Gold Standard, and American Carbon Registry provide frameworks for verification. These standards require rigorous monitoring, reporting, and verification processes to maintain market integrity.",
    category: "Standards & Verification",
    date: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "Community-Based Carbon Projects: Local Impact, Global Benefits",
    excerpt:
      "Community-driven carbon projects are creating both environmental and social benefits while generating carbon credits.",
    content:
      "Community-based carbon projects often focus on reforestation, sustainable agriculture, and renewable energy initiatives. These projects not only generate carbon credits but also provide local communities with economic opportunities, improved livelihoods, and enhanced ecosystem services. The dual benefits make these projects particularly valuable in the carbon market.",
    category: "Community Impact",
    date: "2024-01-05",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "Technology Innovations in Carbon Credit Tracking",
    excerpt:
      "Blockchain and AI are revolutionizing how carbon credits are tracked, verified, and traded in the digital age.",
    content:
      "Emerging technologies like blockchain, artificial intelligence, and satellite monitoring are transforming the carbon credit industry. These innovations improve transparency, reduce fraud, and make the market more accessible to smaller participants. Digital platforms are also making it easier for individuals and companies to participate in carbon offsetting.",
    category: "Technology",
    date: "2024-01-03",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "The Future of Carbon Pricing and Market Evolution",
    excerpt:
      "As climate action intensifies, carbon markets are evolving rapidly. Explore what the future holds for carbon pricing and trading.",
    content:
      "Carbon markets are expected to grow significantly as more countries implement carbon pricing mechanisms and companies set ambitious net-zero targets. The integration of nature-based solutions, technological innovations, and improved market infrastructure is creating new opportunities for carbon credit generation and trading.",
    category: "Future Outlook",
    date: "2024-01-01",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
  },
];

const categories = [
  "All",
  "Education",
  "Market Trends",
  "Standards & Verification",
  "Community Impact",
  "Technology",
  "Future Outlook",
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-emerald-600 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Icon icon="mdi:newspaper" className="mr-2 h-4 w-4" />
              Latest Updates
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-black text-white sm:text-5xl lg:text-6xl">
              Carbon Credit News
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Stay informed about the latest developments in carbon markets,
              climate action, and sustainable solutions that are shaping our
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="group overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <CardHeader className="pb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-700"
                    >
                      {article.category}
                    </Badge>
                  </div>

                  <CardTitle className="line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-emerald-600">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="line-clamp-3 text-sm text-gray-600">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={`/news/${article.id}`}
                      className="text-sm font-bold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-12 text-center">
              <Icon
                icon="mdi:newspaper-off"
                className="mx-auto mb-4 h-16 w-16 text-gray-400"
              />
              <h3 className="mb-2 text-lg font-bold text-gray-600">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category or check back later for new
                content.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
