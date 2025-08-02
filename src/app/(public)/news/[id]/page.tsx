"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  fullContent: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Understanding Carbon Credits: A Complete Guide",
    excerpt:
      "Carbon credits are becoming increasingly important in the fight against climate change. Learn how they work and why they matter.",
    content:
      "Carbon credits represent a reduction in greenhouse gas emissions that can be traded on the market. One carbon credit typically equals one metric ton of CO2 equivalent.",
    category: "Education",
    date: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop&crop=center",

    fullContent: `
      <h2>What Are Carbon Credits?</h2>
      <p>Carbon credits represent a reduction in greenhouse gas emissions that can be traded on the market. One carbon credit typically equals one metric ton of CO2 equivalent. These credits are generated through various projects such as renewable energy, reforestation, and energy efficiency initiatives.</p>
      
      <h2>How Carbon Credits Work</h2>
      <p>The carbon credit market has grown significantly in recent years, with both voluntary and compliance markets playing crucial roles in global climate action. When a project reduces emissions below a baseline, it can generate carbon credits that can be sold to individuals or companies looking to offset their own emissions.</p>
      
      <h2>Types of Carbon Projects</h2>
      <ul>
        <li><strong>Renewable Energy:</strong> Wind, solar, and hydroelectric projects</li>
        <li><strong>Forestry:</strong> Reforestation and forest conservation</li>
        <li><strong>Energy Efficiency:</strong> Industrial and building efficiency improvements</li>
        <li><strong>Waste Management:</strong> Landfill gas capture and composting</li>
      </ul>
      
      <h2>Market Structure</h2>
      <p>Carbon markets are divided into two main categories: compliance markets (regulated by governments) and voluntary markets (driven by corporate social responsibility and consumer demand). The voluntary market has seen remarkable growth as companies and individuals take climate action into their own hands.</p>
      
      <h2>Quality Assurance</h2>
      <p>Quality verification is crucial in the carbon credit market. Various standards like the Verified Carbon Standard (VCS), Gold Standard, and American Carbon Registry provide frameworks for verification. These standards require rigorous monitoring, reporting, and verification processes to maintain market integrity.</p>
    `,
  },
  {
    id: 2,
    title: "The Rise of Voluntary Carbon Markets",
    excerpt:
      "Voluntary carbon markets are experiencing unprecedented growth as companies and individuals take climate action into their own hands.",
    content:
      "Voluntary carbon markets allow companies and individuals to purchase carbon credits to offset their emissions voluntarily.",
    category: "Market Trends",
    date: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",

    fullContent: `
      <h2>Market Growth and Trends</h2>
      <p>Voluntary carbon markets allow companies and individuals to purchase carbon credits to offset their emissions voluntarily. Unlike compliance markets, these are not mandated by regulations but driven by corporate social responsibility and consumer demand.</p>
      
      <h2>Key Drivers of Growth</h2>
      <ul>
        <li><strong>Corporate Net-Zero Commitments:</strong> Companies setting ambitious climate targets</li>
        <li><strong>Consumer Demand:</strong> Growing awareness of climate change impact</li>
        <li><strong>ESG Investment:</strong> Environmental, Social, and Governance considerations</li>
        <li><strong>Regulatory Pressure:</strong> Anticipation of future compliance requirements</li>
      </ul>
      
      <h2>Market Dynamics</h2>
      <p>The market has seen remarkable growth, with prices reaching new highs and more diverse project types entering the market. Technology innovations and improved transparency are making the market more accessible to smaller participants.</p>
      
      <h2>Future Outlook</h2>
      <p>As climate action intensifies, carbon markets are evolving rapidly. The integration of nature-based solutions, technological innovations, and improved market infrastructure is creating new opportunities for carbon credit generation and trading.</p>
    `,
  },
  {
    id: 3,
    title: "Carbon Credit Verification: Ensuring Quality and Integrity",
    excerpt:
      "Quality verification is crucial in the carbon credit market. Discover how projects are verified and what standards ensure their integrity.",
    content:
      "Carbon credit verification is essential to ensure that claimed emission reductions are real, measurable, and additional.",
    category: "Standards & Verification",
    date: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=center",

    fullContent: `
      <h2>Verification Standards</h2>
      <p>Carbon credit verification is essential to ensure that claimed emission reductions are real, measurable, and additional. Various standards like the Verified Carbon Standard (VCS), Gold Standard, and American Carbon Registry provide frameworks for verification.</p>
      
      <h2>Key Verification Principles</h2>
      <ul>
        <li><strong>Additionality:</strong> Projects must result in emissions reductions beyond business-as-usual</li>
        <li><strong>Permanence:</strong> Carbon reductions must be long-term and not easily reversible</li>
        <li><strong>Leakage:</strong> Projects must not cause emissions increases elsewhere</li>
        <li><strong>Monitoring:</strong> Continuous measurement and reporting of project performance</li>
      </ul>
      
      <h2>Verification Process</h2>
      <p>These standards require rigorous monitoring, reporting, and verification processes to maintain market integrity. Independent third-party auditors review project documentation, conduct site visits, and verify emission reduction calculations.</p>
      
      <h2>Technology in Verification</h2>
      <p>Emerging technologies like satellite monitoring, blockchain, and artificial intelligence are improving verification accuracy and reducing costs. These innovations help ensure that carbon credits represent real, measurable climate impact.</p>
    `,
  },
  {
    id: 4,
    title: "Community-Based Carbon Projects: Local Impact, Global Benefits",
    excerpt:
      "Community-driven carbon projects are creating both environmental and social benefits while generating carbon credits.",
    content:
      "Community-based carbon projects often focus on reforestation, sustainable agriculture, and renewable energy initiatives.",
    category: "Community Impact",
    date: "2024-01-05",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center",

    fullContent: `
      <h2>Community Project Types</h2>
      <p>Community-based carbon projects often focus on reforestation, sustainable agriculture, and renewable energy initiatives. These projects not only generate carbon credits but also provide local communities with economic opportunities, improved livelihoods, and enhanced ecosystem services.</p>
      
      <h2>Social Benefits</h2>
      <ul>
        <li><strong>Economic Development:</strong> Job creation and income generation</li>
        <li><strong>Education:</strong> Training in sustainable practices</li>
        <li><strong>Health:</strong> Improved air quality and reduced pollution</li>
        <li><strong>Empowerment:</strong> Community ownership and decision-making</li>
      </ul>
      
      <h2>Environmental Impact</h2>
      <p>The dual benefits make these projects particularly valuable in the carbon market. Beyond carbon sequestration, these projects often provide additional ecosystem services like biodiversity conservation, water quality improvement, and soil health enhancement.</p>
      
      <h2>Success Stories</h2>
      <p>From indigenous forest conservation in the Amazon to renewable energy cooperatives in rural communities, community-based projects demonstrate how climate action can drive positive social change while delivering measurable environmental benefits.</p>
    `,
  },
  {
    id: 5,
    title: "Technology Innovations in Carbon Credit Tracking",
    excerpt:
      "Blockchain and AI are revolutionizing how carbon credits are tracked, verified, and traded in the digital age.",
    content:
      "Emerging technologies like blockchain, artificial intelligence, and satellite monitoring are transforming the carbon credit industry.",
    category: "Technology",
    date: "2024-01-03",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center",

    fullContent: `
      <h2>Blockchain Technology</h2>
      <p>Emerging technologies like blockchain, artificial intelligence, and satellite monitoring are transforming the carbon credit industry. These innovations improve transparency, reduce fraud, and make the market more accessible to smaller participants.</p>
      
      <h2>Key Technological Innovations</h2>
      <ul>
        <li><strong>Blockchain:</strong> Immutable record-keeping and transparent trading</li>
        <li><strong>AI & Machine Learning:</strong> Automated verification and fraud detection</li>
        <li><strong>Satellite Monitoring:</strong> Real-time forest cover and land use tracking</li>
        <li><strong>IoT Sensors:</strong> Continuous environmental data collection</li>
      </ul>
      
      <h2>Digital Platforms</h2>
      <p>Digital platforms are also making it easier for individuals and companies to participate in carbon offsetting. User-friendly interfaces, mobile apps, and automated reporting systems are democratizing access to carbon markets.</p>
      
      <h2>Future Innovations</h2>
      <p>Looking ahead, we can expect further integration of technologies like quantum computing for complex climate modeling, advanced robotics for precision agriculture, and augmented reality for immersive environmental education.</p>
    `,
  },
  {
    id: 6,
    title: "The Future of Carbon Pricing and Market Evolution",
    excerpt:
      "As climate action intensifies, carbon markets are evolving rapidly. Explore what the future holds for carbon pricing and trading.",
    content:
      "Carbon markets are expected to grow significantly as more countries implement carbon pricing mechanisms and companies set ambitious net-zero targets.",
    category: "Future Outlook",
    date: "2024-01-01",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center",

    fullContent: `
      <h2>Market Growth Projections</h2>
      <p>Carbon markets are expected to grow significantly as more countries implement carbon pricing mechanisms and companies set ambitious net-zero targets. The integration of nature-based solutions, technological innovations, and improved market infrastructure is creating new opportunities for carbon credit generation and trading.</p>
      
      <h2>Policy Developments</h2>
      <ul>
        <li><strong>Carbon Border Adjustments:</strong> Import taxes on carbon-intensive goods</li>
        <li><strong>Mandatory Reporting:</strong> Corporate climate disclosure requirements</li>
        <li><strong>Net-Zero Regulations:</strong> Government-mandated emission reduction targets</li>
        <li><strong>International Cooperation:</strong> Global carbon market linkage initiatives</li>
      </ul>
      
      <h2>Emerging Trends</h2>
      <p>We're seeing the emergence of new carbon credit types, including blue carbon (ocean-based), soil carbon, and biodiversity credits. These innovations are expanding the scope of climate action beyond traditional emission reductions.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>While the market faces challenges like standardization and price volatility, the opportunities for climate impact and financial returns are substantial. The key to success will be maintaining high quality standards while scaling market participation.</p>
    `,
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const articleId = parseInt(params.id as string);
  const article = newsArticles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Icon
            icon="mdi:newspaper-off"
            className="mx-auto mb-4 h-16 w-16 text-gray-400"
          />
          <h1 className="mb-2 text-2xl font-bold text-gray-600">
            Article Not Found
          </h1>
          <p className="mb-8 text-gray-500">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-emerald-700"
          >
            <Icon icon="mdi:arrow-left" className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-emerald-600 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/news"
              className="inline-flex items-center text-white/80 transition-colors duration-300 hover:text-white"
            >
              <Icon icon="mdi:arrow-left" className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </div>

          <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Icon icon="mdi:newspaper" className="mr-2 h-4 w-4" />
            {article.category}
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-black text-white sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <div className="flex items-center">
              <Icon icon="mdi:calendar" className="mr-2 h-4 w-4" />
              {article.date}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div
              className="leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.fullContent }}
            />
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-wrap items-center justify-end gap-4">
              <div className="flex space-x-2">
                <button className="flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-700">
                  <Icon icon="mdi:share" className="mr-2 h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-gray-900">
            Related Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles
              .filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <Badge
                      variant="secondary"
                      className="w-fit bg-emerald-100 text-emerald-700"
                    >
                      {relatedArticle.category}
                    </Badge>
                    <CardTitle className="line-clamp-2 text-lg font-bold text-gray-900">
                      {relatedArticle.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm text-gray-600">
                      {relatedArticle.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link
                      href={`/news/${relatedArticle.id}`}
                      className="text-sm font-bold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
