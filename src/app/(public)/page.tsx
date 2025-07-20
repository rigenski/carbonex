import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold text-gray-900">
                Transform Your Carbon Footprint Into{" "}
                <span className="text-green-600">Real Impact</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Access premium verified carbon offset projects that deliver
                measurable environmental results. Join 890+ organizations
                already making a difference through our proven platform.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/projects"
                  className="rounded-lg bg-green-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-green-700"
                >
                  Start Offsetting Today
                </Link>
                <Link
                  href="/communities"
                  className="rounded-lg border border-green-600 px-8 py-3 text-center font-semibold text-green-600 transition-colors hover:bg-green-50"
                >
                  View Success Stories
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    1,234+
                  </div>
                  <div className="text-gray-600">Verified Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    56,789
                  </div>
                  <div className="text-gray-600">Tons CO₂ Removed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">890+</div>
                  <div className="text-gray-600">Success Partners</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-green-200 p-8">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center"
                  alt="Environmental sustainability"
                  className="h-80 w-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Verified Projects</div>
                    <div className="text-sm text-gray-600">
                      100% Transparent
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Why 890+ Organizations Choose CarbonEx
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              The only platform you need for premium carbon credits with
              guaranteed ROI on your sustainability investments.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Triple-Verified Quality
              </h3>
              <p className="text-gray-600">
                Every project meets international standards with third-party
                verification. Your investment is protected with 100%
                transparency and measurable results.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h4a3 3 0 013 3v2a3 3 0 01-3 3zM8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Instant Scale & Impact
              </h3>
              <p className="text-gray-600">
                Launch your carbon program in minutes, not months. Connect with
                vetted communities and see immediate environmental impact with
                real-time tracking.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-8 w-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Proven ROI Results</h3>
              <p className="text-gray-600">
                Enhance brand value, meet compliance requirements, and attract
                eco-conscious customers. Our clients report 40% increase in
                sustainability metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Join Industry Leaders Making Real Change
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              From Fortune 500 companies to emerging startups - see how
              organizations worldwide achieve their sustainability goals faster
              with CarbonEx.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              {
                name: "EcoTech Solutions",
                image:
                  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
                description: "Technology Leader",
              },
              {
                name: "Green Industries",
                image:
                  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=100&fit=crop&crop=center",
                description: "Manufacturing",
              },
              {
                name: "Sustainable Corp",
                image:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop&crop=center",
                description: "Financial Services",
              },
              {
                name: "Clean Energy Co",
                image:
                  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&h=100&fit=crop&crop=center",
                description: "Energy Sector",
              },
              {
                name: "Global Logistics",
                image:
                  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&crop=center",
                description: "Transportation",
              },
              {
                name: "Future Retail",
                image:
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop&crop=center",
                description: "Retail Chain",
              },
            ].map((client, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="mb-4 overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-16 w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <h3 className="mb-1 text-center text-sm font-semibold text-gray-900">
                  {client.name}
                </h3>
                <p className="text-center text-xs text-gray-500">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-green-600">
                  500+
                </div>
                <div className="text-gray-600">Corporate Partners</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-green-600">
                  95%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-green-600">
                  150M
                </div>
                <div className="text-gray-600">Tons CO₂ Offset Together</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Simple steps to start making a difference in the fight against
              climate change.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-3 text-lg font-semibold">Register</h3>
              <p className="text-gray-600">
                Sign up as a community or individual to start your carbon offset
                journey.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-3 text-lg font-semibold">Explore Projects</h3>
              <p className="text-gray-600">
                Browse verified carbon credit projects in your area or create
                your own.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-3 text-lg font-semibold">Participate</h3>
              <p className="text-gray-600">
                Join projects as a volunteer or contribute to community
                initiatives.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="mb-3 text-lg font-semibold">Track Impact</h3>
              <p className="text-gray-600">
                Monitor your carbon offset contributions and see the real
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Powerful Features for Climate Action
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      Project Verification
                    </h3>
                    <p className="text-gray-600">
                      Independent verification ensures all projects meet
                      international carbon credit standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      Real-time Monitoring
                    </h3>
                    <p className="text-gray-600">
                      Track project progress and carbon reduction in real-time
                      with detailed analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      Community Connection
                    </h3>
                    <p className="text-gray-600">
                      Connect with like-minded communities and individuals for
                      greater impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center"
                alt="Get started"
                className="h-64 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Latest Projects
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Discover the newest carbon credit projects making a difference
              around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-lg bg-white shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center"
                  alt={`Project ${project}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                    <span className="text-sm text-gray-500">
                      Project #{project}23
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Forest Restoration Initiative
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    Jakarta, Indonesia • 1,200 tons CO₂ estimated
                  </p>
                  <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                    <span>45 volunteers</span>
                    <span>Dec 2024 - Jun 2025</span>
                  </div>
                  <Link
                    href={`/projects/${project}`}
                    className="block w-full rounded-md bg-green-600 py-2 text-center text-white transition-colors hover:bg-green-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Validators Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Globally Recognized Quality Assurance
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Your carbon investments are backed by the world's most trusted
              certification bodies. Every credit meets international standards
              for maximum impact and credibility.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
            {[
              "Verra",
              "Gold Standard",
              "Climate Action Reserve",
              "American Carbon Registry",
            ].map((validator, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-lg bg-gray-100 p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded bg-gray-300">
                    <span className="text-sm font-semibold text-gray-600">
                      {validator.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{validator}</h3>
                <p className="text-sm text-gray-600">Premium Certification</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Start Your Carbon Impact Journey Today
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-green-100">
            Join 890+ organizations already achieving their sustainability
            goals. Get instant access to premium carbon credits and see
            measurable results in weeks, not years.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
            >
              Start Free Today
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              Browse Premium Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
