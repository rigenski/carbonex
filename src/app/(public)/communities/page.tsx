"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth";

// Mock data for communities
const mockCommunities = [
  {
    id: "COM001",
    name: "Green Earth Indonesia",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop&crop=center",
    location: "Jakarta, Indonesia",
    projectCount: 23,
    verified: true,
    carbonOffset: 15420,
    establishedYear: 2019,
    description:
      "Leading environmental organization focused on forest restoration and carbon sequestration projects across Indonesia.",
  },
  {
    id: "COM002",
    name: "Solar Future Collective",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop&crop=center",
    location: "Bandung, Indonesia",
    projectCount: 15,
    verified: true,
    carbonOffset: 9800,
    establishedYear: 2020,
    description:
      "Community-driven initiative promoting renewable energy adoption through solar panel installations.",
  },
  {
    id: "COM003",
    name: "Clean City Initiative",
    image:
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=400&h=250&fit=crop&crop=center",
    location: "Surabaya, Indonesia",
    projectCount: 31,
    verified: true,
    carbonOffset: 12650,
    establishedYear: 2018,
    description:
      "Urban sustainability organization focusing on waste management and circular economy solutions.",
  },
  {
    id: "COM004",
    name: "Ocean Guardians Bali",
    image:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=250&fit=crop&crop=center",
    location: "Bali, Indonesia",
    projectCount: 12,
    verified: true,
    carbonOffset: 3400,
    establishedYear: 2021,
    description:
      "Marine conservation group dedicated to protecting coastal ecosystems and reducing ocean plastic.",
  },
  {
    id: "COM005",
    name: "Wind Power Alliance",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=250&fit=crop&crop=center",
    location: "Makassar, Indonesia",
    projectCount: 8,
    verified: true,
    carbonOffset: 18900,
    establishedYear: 2017,
    description:
      "Regional coalition promoting wind energy development and sustainable power generation.",
  },
  {
    id: "COM006",
    name: "Green City Movement",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
    location: "Yogyakarta, Indonesia",
    projectCount: 27,
    verified: true,
    carbonOffset: 7200,
    establishedYear: 2019,
    description:
      "Urban sustainability movement creating green spaces and promoting environmental awareness in cities.",
  },
];

export default function CommunitiesPage() {
  const { user } = useAuthStore();
  const [communities] = useState(mockCommunities);
  const [filteredCommunities, setFilteredCommunities] =
    useState(mockCommunities);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    let filtered = communities;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (community) =>
          community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          community.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          community.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    // Sort communities
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "projects":
          return b.projectCount - a.projectCount;
        case "carbon":
          return b.carbonOffset - a.carbonOffset;
        case "established":
          return (
            new Date(a.establishedYear).getTime() -
            new Date(b.establishedYear).getTime()
          );
        default:
          return 0;
      }
    });

    setFilteredCommunities(filtered);
  }, [communities, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Komunitas Sukses
            </h1>
            <p className="mx-auto mt-2 max-w-3xl text-gray-600">
              Terhubung dengan organisasi terverifikasi yang sudah mencapai
              hasil dampak karbon yang luar biasa. Bergabunglah dengan 890+
              komunitas yang telah secara kolektif mengoffset lebih dari 56,789
              ton CO₂ melalui inisiatif keberlanjutan yang terbukti.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters and Search */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Cari Komunitas
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Cari berdasarkan nama, deskripsi, atau lokasi..."
              />
            </div>

            {/* Sort */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Urutkan Berdasarkan
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="name">Nama</option>
                <option value="projects">Proyek</option>
                <option value="carbon">Offset Karbon</option>
                <option value="established">Tanggal Berdiri</option>
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="mt-6 flex flex-col items-start justify-between border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="verified-only"
                checked={true} // All communities are verified
                onChange={() => {}}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label
                htmlFor="verified-only"
                className="ml-2 text-sm text-gray-700"
              >
                Tampilkan hanya komunitas terverifikasi
              </label>
            </div>
            <div className="mt-4 sm:mt-0">
              <span className="text-sm text-gray-600">
                Menampilkan {filteredCommunities.length} dari{" "}
                {communities.length} komunitas
              </span>
            </div>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCommunities.map((community) => (
            <div
              key={community.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={community.image}
                alt={community.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Komunitas
                  </span>
                  {community.verified && (
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-1 text-xs text-green-600">
                        Terverifikasi
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {community.name}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {community.description}
                </p>

                <div className="mb-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {community.location}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                    Est. {community.establishedYear}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {community.projectCount} proyek
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                    {community.carbonOffset.toLocaleString()} ton CO₂ offset
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Est. {community.establishedYear}
                  </span>
                  <Link
                    href={`/communities/${community.id}`}
                    className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCommunities.length === 0 && (
          <div className="py-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h4a3 3 0 013 3v2a3 3 0 01-3 3zM8 9a3 3 0 116 0 3 3 0 01-6 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Tidak ada komunitas ditemukan
            </h3>
            <p className="mt-2 text-gray-600">
              Coba sesuaikan kriteria pencarian atau filter untuk menemukan komunitas.
            </p>
          </div>
        )}

        {/* Join Community CTA */}
        {!user && (
          <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Siap Meluncurkan Komunitas Dampak Anda?
            </h3>
            <p className="mb-6 text-gray-600">
              Bergabunglah dengan 890+ organisasi sukses yang membuat perubahan
              lingkungan yang terukur. Mulai komunitas Anda hari ini dan
              terhubung dengan ribuan pendukung yang sadar lingkungan siap
              mendanai proyek keberlanjutan Anda.
            </p>
            <div className="space-x-4">
              <Link
                href="/register"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                Luncurkan Komunitas Gratis
              </Link>
              <Link
                href="/login"
                className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-600 transition-colors hover:bg-green-50"
              >
                Masuk
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
