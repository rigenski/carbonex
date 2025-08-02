"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-emerald-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"></div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-screen items-center">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Badge */}
                <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  <Icon icon="mdi:leaf" className="mr-2 h-4 w-4" />
                  Save the Planet, One Click at a Time
                </div>

                {/* Main Heading */}
                <h1 className="mb-6 text-4xl leading-tight font-black text-white sm:text-5xl lg:text-6xl">
                  Make Your Carbon <br />
                  Footprint Matter
                </h1>

                {/* Description */}
                <p className="mb-8 text-lg leading-relaxed text-white/90 sm:text-xl">
                  Join the climate revolution!{" "}
                  <Icon icon="mdi:rocket-launch" className="inline h-5 w-5" />{" "}
                  Access verified carbon offset projects that actually make a
                  difference. No boring corporate stuff - just real impact for
                  our future.
                </p>

                {/* CTA Buttons */}
                <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/projects"
                    className="group relative overflow-hidden rounded-2xl bg-white px-6 py-3 text-center font-bold text-emerald-600 transition-all duration-300 hover:shadow-2xl sm:px-8 sm:py-4"
                  >
                    <Icon
                      icon="mdi:rocket-launch"
                      className="mr-2 inline h-5 w-5"
                    />
                    Start Contributing
                  </Link>
                  <Link
                    href="/communities"
                    className="rounded-2xl border-2 border-white/30 px-6 py-3 text-center font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:px-8 sm:py-4"
                  >
                    <Icon
                      icon="mdi:account-group"
                      className="mr-2 inline h-5 w-5"
                    />
                    Explore Communities
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white sm:text-3xl">
                      1,234+
                    </div>
                    <div className="text-xs text-white/70 sm:text-sm">
                      <Icon
                        icon="mdi:fire"
                        className="mr-1 inline h-3 w-3 sm:h-4 sm:w-4"
                      />
                      Verified Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-white sm:text-3xl">
                      56,789
                    </div>
                    <div className="text-xs text-white/70 sm:text-sm">
                      <Icon
                        icon="mdi:earth"
                        className="mr-1 inline h-3 w-3 sm:h-4 sm:w-4"
                      />
                      Tons CO₂ Removed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-white sm:text-3xl">
                      890+
                    </div>
                    <div className="text-xs text-white/70 sm:text-sm">
                      <Icon
                        icon="mdi:arm-flex"
                        className="mr-1 inline h-3 w-3 sm:h-4 sm:w-4"
                      />
                      Successful Partners
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Image */}
              <div
                className={`transition-all delay-300 duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl backdrop-blur-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center"
                      alt="Environmental sustainability"
                      className="h-64 w-full rounded-2xl object-cover transition-transform duration-500 sm:h-80"
                      width={480}
                      height={480}
                    />
                  </div>

                  {/* Floating Card */}
                  <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:-bottom-6 sm:-left-6 sm:p-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 sm:h-14 sm:w-14">
                        <Icon
                          icon="mdi:check-circle"
                          className="h-6 w-6 text-white sm:h-8 sm:w-8"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 sm:text-base">
                          100% Verified
                        </div>
                        <div className="text-xs text-gray-600 sm:text-sm">
                          Transparent AF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              <Icon icon="mdi:target" className="mr-2 h-4 w-4" />
              Why 890+ Organizations Choose CarbonEx
            </div>
            <h2 className="mb-6 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
              The Only Platform You Need for
              <span className="block text-emerald-600">
                Premium Carbon Credits
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Get guaranteed ROI on your sustainability investment. No BS, just
              real results.{" "}
              <Icon
                icon="mdi:check-circle"
                className="inline h-5 w-5 text-emerald-600"
              />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {/* Feature Card 1 */}
            <div className="group rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 sm:h-20 sm:w-20">
                <Icon
                  icon="mdi:check-circle"
                  className="h-8 w-8 text-white sm:h-10 sm:w-10"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                Triple-Verified Quality
              </h3>
              <p className="leading-relaxed text-gray-600">
                Every project meets international standards with third-party
                verification. Your investment is protected with 100%
                transparency and measurable results.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 sm:h-20 sm:w-20">
                <Icon
                  icon="mdi:lightning-bolt"
                  className="h-8 w-8 text-white sm:h-10 sm:w-10"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                Scale & Instant Impact
              </h3>
              <p className="leading-relaxed text-gray-600">
                Launch your carbon program in minutes, not months. Connect with
                verified communities and see real environmental impact with
                real-time tracking.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500 sm:h-20 sm:w-20">
                <Icon
                  icon="mdi:trending-up"
                  className="h-8 w-8 text-white sm:h-10 sm:w-10"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                Proven ROI Results
              </h3>
              <p className="leading-relaxed text-gray-600">
                Boost brand value, meet compliance requirements, and attract
                eco-conscious customers. Our clients report 40% improvement in
                sustainability metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="bg-gray-900 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">
              <Icon icon="mdi:star" className="mr-2 h-4 w-4" />
              Join Industry Leaders Making Real Change
            </div>
            <h2 className="mb-6 text-3xl font-black sm:text-4xl lg:text-5xl">
              From Fortune 500 to Fast-Growing Startups
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 sm:text-xl">
              See how organizations worldwide achieve their sustainability goals
              faster with CarbonEx.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              {
                name: "EcoTech Solutions",
                icon: "mdi:laptop",
                desc: "Tech Leader",
              },
              {
                name: "Green Industries",
                icon: "mdi:factory",
                desc: "Manufacturing",
              },
              {
                name: "Sustainable Corp",
                icon: "mdi:currency-usd",
                desc: "Financial Services",
              },
              {
                name: "Clean Energy Co",
                icon: "mdi:lightning-bolt",
                desc: "Energy Sector",
              },
              {
                name: "Global Logistics",
                icon: "mdi:truck",
                desc: "Transportation",
              },
              {
                name: "Future Retail",
                icon: "mdi:shopping",
                desc: "Retail Chain",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 sm:h-20 sm:w-20">
                  <Icon
                    icon={client.icon}
                    className="h-8 w-8 text-white sm:h-10 sm:w-10"
                  />
                </div>
                <h3 className="mb-1 text-xs font-bold sm:text-sm">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-400 sm:text-xs">
                  {client.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm sm:p-8">
              <div className="mb-2 text-3xl font-black text-emerald-400 sm:text-4xl">
                500+
              </div>
              <div className="text-sm text-gray-300 sm:text-base">
                Corporate Partners
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm sm:p-8">
              <div className="mb-2 text-3xl font-black text-emerald-400 sm:text-4xl">
                95%
              </div>
              <div className="text-sm text-gray-300 sm:text-base">
                Client Satisfaction
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm sm:p-8">
              <div className="mb-2 text-3xl font-black text-emerald-400 sm:text-4xl">
                150M
              </div>
              <div className="text-sm text-gray-300 sm:text-base">
                Tons CO₂ Offset Together
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-emerald-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              <Icon icon="mdi:rocket-launch" className="mr-2 h-4 w-4" />
              How It Works
            </div>
            <h2 className="mb-6 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
              Simple Steps to Make a Difference
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Easy peasy steps to start fighting climate change like a boss!{" "}
              <Icon
                icon="mdi:arm-flex"
                className="inline h-5 w-5 text-emerald-600"
              />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Register as community or individual to start your carbon offset journey.",
                icon: "mdi:account-plus",
              },
              {
                step: "2",
                title: "Explore Projects",
                desc: "Browse verified carbon credit projects in your area or create your own.",
                icon: "mdi:magnify",
              },
              {
                step: "3",
                title: "Get Involved",
                desc: "Join projects as volunteer or contribute to community initiatives.",
                icon: "mdi:handshake",
              },
              {
                step: "4",
                title: "Track Impact",
                desc: "Monitor your carbon offset contributions and see real impact.",
                icon: "mdi:chart-line",
              },
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500 shadow-lg transition-all duration-300 group-hover:shadow-2xl sm:h-24 sm:w-24">
                    <Icon
                      icon={item.icon}
                      className="h-10 w-10 text-white sm:h-12 sm:w-12"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-emerald-600 shadow-md sm:h-8 sm:w-8 sm:text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                <Icon icon="mdi:lightning-bolt" className="mr-2 h-4 w-4" />
                Powerful Features
              </div>
              <h2 className="mb-8 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
                Strong Features for Climate Action
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-600 sm:h-12 sm:w-12">
                    <Icon
                      icon="mdi:check-circle"
                      className="h-5 w-5 text-white sm:h-6 sm:w-6"
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                      Project Verification
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      Independent verification ensures all projects meet
                      international carbon credit standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600 sm:h-12 sm:w-12">
                    <Icon
                      icon="mdi:chart-line"
                      className="h-5 w-5 text-white sm:h-6 sm:w-6"
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                      Real-time Monitoring
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      Track project progress and carbon reduction in real-time
                      with detailed analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-600 sm:h-12 sm:w-12">
                    <Icon
                      icon="mdi:account-group"
                      className="h-5 w-5 text-white sm:h-6 sm:w-6"
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                      Community Connection
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      Connect with like-minded communities and individuals for
                      greater impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-emerald-600 p-2">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center"
                  alt="Get started"
                  className="h-64 w-full rounded-2xl object-cover transition-transform duration-500 sm:h-80"
                  width={480}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              <Icon icon="mdi:fire" className="mr-2 h-4 w-4" />
              Latest Projects
            </div>
            <h2 className="mb-6 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
              Discover Fresh Carbon Credit Projects
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Find the latest carbon credit projects making a difference
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center"
                    alt={`Project ${project}`}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <Badge className="absolute top-4 right-4 bg-emerald-500 text-white">
                    Active
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-black text-gray-900">
                    Forest Restoration Initiative
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Jakarta, Indonesia • 1,200 tons CO₂ estimated
                  </p>

                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-gray-900">1,200 tons</div>
                      <div className="text-gray-500">CO₂ Offset</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">45</div>
                      <div className="text-gray-500">Volunteers</div>
                    </div>
                  </div>

                  <div className="mb-4 text-sm text-gray-500">
                    <div className="font-medium">Ecological Balance Corp</div>
                    <div>Dec 2024 - Jun 2025</div>
                  </div>

                  <Link
                    href={`/projects/${project}`}
                    className="block w-full rounded-lg bg-emerald-600 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl"
                  >
                    <Icon icon="mdi:eye" className="mr-2 inline h-4 w-4" />
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-2xl bg-emerald-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-2xl sm:px-8 sm:py-4"
            >
              <Icon icon="mdi:rocket-launch" className="mr-2 h-5 w-5" />
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Validators Section */}
      <section className="bg-gray-900 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">
              <Icon icon="mdi:earth" className="mr-2 h-4 w-4" />
              Global Quality Assurance
            </div>
            <h2 className="mb-6 text-3xl font-black sm:text-4xl lg:text-5xl">
              Quality Guarantee Recognized Worldwide
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 sm:text-xl">
              Your carbon investment is backed by the world&apos;s most trusted
              certification bodies. Every credit meets international standards
              for maximum impact and credibility.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center gap-6 sm:gap-8 md:grid-cols-4">
            {[
              { name: "Verra", icon: "mdi:check-circle" },
              { name: "Gold Standard", icon: "mdi:trophy" },
              { name: "Climate Action Reserve", icon: "mdi:leaf" },
              { name: "American Carbon Registry", icon: "mdi:flag" },
            ].map((validator, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 sm:h-20 sm:w-20">
                  <Icon
                    icon={validator.icon}
                    className="h-8 w-8 text-white sm:h-10 sm:w-10"
                  />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white sm:text-base">
                  {validator.name}
                </h3>
                <p className="text-xs text-gray-400 sm:text-sm">
                  Premium Certification
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
            <Icon icon="mdi:rocket-launch" className="mr-2 h-4 w-4" />
            Start Your Carbon Impact Journey Today
          </div>
          <h2 className="mb-6 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Join 890+ Organizations Making Real Change
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-white/90 sm:text-xl">
            Get instant access to premium carbon credits and see measurable
            results in weeks, not years. No corporate BS, just real impact!{" "}
            <Icon icon="mdi:check-circle" className="inline h-5 w-5" />
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/register"
              className="group relative overflow-hidden rounded-2xl bg-white px-6 py-3 font-bold text-emerald-600 transition-all duration-300 hover:shadow-2xl sm:px-8 sm:py-4"
            >
              <Icon icon="mdi:party-popper" className="mr-2 inline h-5 w-5" />
              Start Free Today
            </Link>
            <Link
              href="/projects"
              className="rounded-2xl border-2 border-white/30 px-6 py-3 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:px-8 sm:py-4"
            >
              <Icon icon="mdi:fire" className="mr-2 inline h-5 w-5" />
              Explore Premium Projects
            </Link>
            <Link
              href="/news"
              className="rounded-2xl border-2 border-white/30 px-6 py-3 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:px-8 sm:py-4"
            >
              <Icon icon="mdi:newspaper" className="mr-2 inline h-5 w-5" />
              Read Latest News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
