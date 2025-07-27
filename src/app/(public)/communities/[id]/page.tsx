"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth";
import Image from "next/image";

// Mock community data
const mockCommunity = {
  id: "COM001",
  name: "Bumi Hijau Indonesia",
  description:
    "Organisasi lingkungan terkemuka yang berfokus pada konservasi dan restorasi hutan di seluruh Indonesia.",
  fullDescription: `Bumi Hijau Indonesia adalah organisasi lingkungan perintis yang didirikan pada tahun 2018 dengan misi untuk memerangi perubahan iklim melalui inisiatif konservasi dan restorasi hutan berbasis komunitas. Organisasi kami menghimpun ilmuwan lingkungan, komunitas lokal, dan penggemar konservasi untuk menciptakan dampak positif yang berkelanjutan pada ekosistem Indonesia.

Pendekatan kami menggabungkan penelitian ilmiah dengan pengetahuan ekologi tradisional untuk mengembangkan solusi berkelanjutan untuk degradasi hutan, hilangnya keanekaragaman hayati, dan perubahan iklim. Kami bekerja erat dengan komunitas lokal untuk memastikan bahwa upaya konservasi memberikan manfaat lingkungan dan peluang ekonomi bagi penduduk.

Sejak pendirian kami, kami telah berhasil memulihkan lebih dari 2.000 hektar lahan hutan yang terdegradasi, menanam lebih dari 500.000 pohon asli, dan melibatkan ribuan anggota komunitas dalam kegiatan konservasi. Proyek kami mengikuti standar internasional untuk verifikasi kredit karbon dan berkontribusi signifikan terhadap tujuan iklim Indonesia.

Kami percaya bahwa konservasi yang efektif memerlukan kolaborasi antara komunitas, pemerintah, dan mitra sektor swasta. Melalui jaringan 50+ kemitraan komunitas kami, kami terus memperluas dampak dan menciptakan model berkelanjutan untuk restorasi lingkungan yang dapat direplikasi di seluruh Asia Tenggara.`,
  image:
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop&crop=center",
  coverImage:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop&crop=center",
  location: "Jakarta, Indonesia",
  projectCount: 23,
  totalCarbonOffset: 15600,
  established: "2018-03-15",
  verified: true,
  email: "info@greenearthindonesia.org",
  phone: "+62-21-1234-5678",
  projects: [
    {
      id: "PRJ001",
      name: "Inisiatif Restorasi Hutan",
      status: "Aktif",
      carbonOffset: 1200,
      volunteers: 45,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: "PRJ005",
      name: "Proyek Konservasi Mangrove",
      status: "Aktif",
      carbonOffset: 800,
      volunteers: 32,
      image:
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: "PRJ008",
      name: "Program Pendidikan Komunitas",
      status: "Perencanaan",
      carbonOffset: 400,
      volunteers: 28,
      image:
        "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=300&h=200&fit=crop&crop=center",
    },
  ],
};

export default function CommunityDetailPage() {
  const { user } = useAuthStore();
  const [community] = useState(mockCommunity);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is following this community
    if (user) {
      // This would be an API call in real app
      setIsFollowing(false);
    }
  }, [user]);

  const handleFollowCommunity = async () => {
    if (!user) {
      // Redirect to login
      return;
    }

    setIsLoading(true);
    try {
      // API call to follow community
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsFollowing(true);
    } catch (error) {
      console.error("Failed to follow community:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnfollowCommunity = async () => {
    setIsLoading(true);
    try {
      // API call to unfollow community
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsFollowing(false);
    } catch (error) {
      console.error("Failed to unfollow community:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Perencanaan":
        return "bg-yellow-100 text-yellow-800";
      case "Selesai":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={community.coverImage}
          alt={community.name}
          className="h-64 w-full object-cover md:h-80"
          width={480}
          height={480}
        />
        <div className="bg-opacity-40 absolute inset-0 bg-black"></div>
        <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4 text-white">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    Beranda
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <Link href="/communities" className="hover:text-gray-300">
                    Komunitas
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <span className="font-medium">{community.name}</span>
                </li>
              </ol>
            </nav>

            <div className="flex flex-col items-start space-y-4 md:flex-row md:items-end md:space-y-0 md:space-x-6">
              <Image
                src={community.image}
                alt={community.name}
                className="h-24 w-24 rounded-lg border-4 border-white md:h-32 md:w-32"
                width={480}
                height={480}
              />
              <div className="flex-1">
                <div className="mb-2 flex items-center space-x-3">
                  <h1 className="text-3xl font-bold text-white md:text-4xl">
                    {community.name}
                  </h1>
                  {community.verified && (
                    <svg
                      className="h-6 w-6 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <p className="mb-2 text-xl text-gray-200">
                  {community.description}
                </p>
                <div className="flex items-center space-x-4 text-gray-300">
                  <span>{community.projectCount} proyek</span>
                  <span>•</span>
                  <span>
                    {community.totalCarbonOffset.toLocaleString()} ton CO₂
                    offset
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-green-600">
                  Organisasi Terverifikasi
                </span>
              </div>
              <span className="text-sm text-gray-600">
                Didirikan {formatDate(community.established)}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {user ? (
                <div>
                  {!isFollowing ? (
                    <button
                      onClick={handleFollowCommunity}
                      disabled={isLoading}
                      className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isLoading ? "Mengikuti..." : "Ikuti Komunitas"}
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span className="rounded-lg bg-green-100 px-4 py-2 font-semibold text-green-800">
                        ✓ Mengikuti
                      </span>
                      <button
                        onClick={handleUnfollowCommunity}
                        disabled={isLoading}
                        className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isLoading
                          ? "Berhenti Mengikuti..."
                          : "Berhenti Mengikuti"}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    href="/login"
                    className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Masuk
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: "overview", label: "Ringkasan" },
              { id: "projects", label: "Proyek" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 px-1 py-4 text-sm font-medium ${
                  activeTab === tab.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Tentang {community.name}
                </h2>
                <div className="prose max-w-none text-gray-600">
                  {community.fullDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Statistik Komunitas
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Proyek Aktif</span>
                    <span className="font-semibold">
                      {community.projectCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Offset Karbon</span>
                    <span className="font-semibold">
                      {community.totalCarbonOffset.toLocaleString()} ton CO₂
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Didirikan</span>
                    <span className="font-semibold">
                      {new Date(community.established).getFullYear()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Informasi Kontak
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-gray-600">{community.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 4.26c.67.36 1.47.36 2.14 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href={`mailto:${community.email}`}
                      className="text-green-600 hover:text-green-700"
                    >
                      {community.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">{community.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Proyek Komunitas
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {community.projects.map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-lg bg-white shadow-sm"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={240}
                    height={240}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={`rounded px-2.5 py-0.5 text-xs font-medium ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-500">
                        {project.id}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <div className="mb-4 space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Offset Karbon:</span>
                        <span className="font-medium">
                          {project.carbonOffset} ton CO₂
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Relawan:</span>
                        <span className="font-medium">
                          {project.volunteers}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="block w-full rounded-md bg-green-600 py-2 text-center text-white transition-colors hover:bg-green-700"
                    >
                      Lihat Proyek
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
