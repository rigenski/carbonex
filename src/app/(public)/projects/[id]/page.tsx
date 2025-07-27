"use client";

import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Mock project data (in real app, this would come from API)
const mockProject = {
  id: "PRJ001",
  name: "Inisiatif Restorasi Hutan",
  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop&crop=center",
  ],
  address: {
    full: "Jakarta, Indonesia",
    regional: "Java",
    province: "DKI Jakarta",
    city: "Jakarta",
    district: "Central Jakarta",
    postalCode: "10110",
  },
  estimateCarbon: 1200,
  totalVolunteers: 45,
  currentVolunteers: 32,
  estimateDate: {
    start: "2024-12-01",
    end: "2025-06-30",
  },
  status: "Aktif",
  projectType: "Reforestasi",
  treeStatus: "35.000 pohon ditanam",
  shortDescription:
    "Proyek restorasi hutan skala besar untuk memerangi deforestasi dan menciptakan penyerap karbon.",
  fullDescription: `Inisiatif restorasi hutan komprehensif ini bertujuan untuk memulihkan 500 hektar lahan hutan yang terdegradasi di area metropolitan Jakarta. Proyek ini berfokus pada reforestasi spesies asli, rehabilitasi tanah, dan keterlibatan komunitas untuk menciptakan solusi penyerapan karbon yang berkelanjutan.

Pendekatan kami menggabungkan penelitian ilmiah dengan pengetahuan ekologi tradisional untuk memastikan tingkat keberhasilan tertinggi untuk kelangsungan hidup pohon dan restorasi ekosistem. Proyek ini mencakup pengembangan pembibitan, program pelatihan komunitas, dan sistem pemantauan jangka panjang.

Tujuan utama meliputi:
- Memulihkan 500 hektar hutan yang terdegradasi
- Menanam 100.000 pohon asli
- Melibatkan 1.000+ anggota komunitas
- Menciptakan 50 peluang kerja lokal
- Menetapkan sistem pemantauan karbon yang berkelanjutan

Proyek ini mengikuti standar kredit karbon internasional dan akan diverifikasi oleh organisasi pihak ketiga independen sepanjang implementasinya.`,
  community: {
    name: "Bumi Hijau Indonesia",
    verified: true,
    description:
      "Organisasi lingkungan terkemuka yang berfokus pada konservasi dan restorasi hutan di seluruh Indonesia.",
    projects: 23,
  },
  volunteers: [
    {
      name: "Budi Santoso",
      role: "Ketua Tim",
      joinDate: "2024-10-15",
      hours: 120,
    },
    {
      name: "Siti Nurhaliza",
      role: "Relawan",
      joinDate: "2024-11-01",
      hours: 45,
    },
    {
      name: "Ahmad Rahman",
      role: "Koordinator Lokal",
      joinDate: "2024-10-01",
      hours: 200,
    },
  ],
};

export default function ProjectDetailPage() {
  const { user } = useAuthStore();
  const [project] = useState(mockProject);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already joined this project
    if (user && user.role === "individual") {
      // This would be an API call in real app
      setIsJoined(false);
    }
  }, [user]);

  const handleJoinProject = async () => {
    if (!user) {
      // Redirect to login
      return;
    }

    setIsLoading(true);
    try {
      // API call to join project
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsJoined(true);
    } catch (error) {
      console.error("Failed to join project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeaveProject = async () => {
    setIsLoading(true);
    try {
      // API call to leave project
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsJoined(false);
    } catch (error) {
      console.error("Failed to leave project:", error);
    } finally {
      setIsLoading(false);
    }
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Beranda
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Proyek
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  {project.name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Images */}
            <div>
              <div className="relative">
                <Image
                  src={project.images[activeImageIndex]}
                  alt={project.name}
                  className="h-96 w-full rounded-lg object-cover"
                  height={480}
                  width={480}
                />
              </div>
              <div className="mt-4 flex space-x-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-20 w-20 overflow-hidden rounded-lg border-2 ${
                      activeImageIndex === index
                        ? "border-green-500"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                      height={480}
                      width={480}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </span>
                <span className="text-sm text-gray-500">{project.id}</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                {project.name}
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                {project.shortDescription}
              </p>

              {/* Key Stats */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-green-50 p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {project.estimateCarbon.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Target Ton CO₂</div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {project.currentVolunteers}/{project.totalVolunteers}
                  </div>
                  <div className="text-sm text-gray-600">Relawan</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {project.projectType}
                  </div>
                  <div className="text-sm text-gray-600">Jenis Proyek</div>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <div className="text-2xl font-bold text-orange-600">
                    {project.treeStatus}
                  </div>
                  <div className="text-sm text-gray-600">Pohon Ditanam</div>
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">Lokasi</h3>
                <p className="text-gray-600">{project.address.full}</p>
                <p className="text-sm text-gray-500">
                  {project.address.district}, {project.address.city},{" "}
                  {project.address.province}
                </p>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Durasi Proyek
                </h3>
                <p className="text-gray-600">
                  {formatDate(project.estimateDate.start)} -{" "}
                  {formatDate(project.estimateDate.end)}
                </p>
              </div>

              {/* Community */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Diselenggarakan Oleh
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="font-semibold text-green-600">
                      {project.community.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">
                        {project.community.name}
                      </span>
                      {project.community.verified && (
                        <svg
                          className="ml-1 h-4 w-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {project.community.projects} proyek
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {user?.role === "individual" && (
                  <div>
                    {!isJoined ? (
                      <button
                        onClick={handleJoinProject}
                        disabled={isLoading}
                        className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isLoading
                          ? "Bergabung..."
                          : "Bergabung dengan Proyek Ini"}
                      </button>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-full rounded-lg bg-green-100 px-6 py-3 text-center font-semibold text-green-800">
                          ✓ Anda Telah Bergabung dengan Proyek Ini
                        </div>
                        <button
                          onClick={handleLeaveProject}
                          disabled={isLoading}
                          className="w-full rounded-lg border border-red-300 px-6 py-2 font-medium text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isLoading ? "Keluar..." : "Keluar dari Proyek"}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {user?.role === "community" && (
                  <div className="space-y-2">
                    <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                      Kelola Proyek
                    </button>
                    <button className="w-full rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                      Lihat Analitik
                    </button>
                  </div>
                )}

                {!user && (
                  <div className="space-y-2">
                    <Link
                      href="/register"
                      className="block w-full rounded-lg bg-green-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-green-700"
                    >
                      Daftar untuk Bergabung
                    </Link>
                    <Link
                      href="/login"
                      className="block w-full rounded-lg border border-gray-300 px-6 py-2 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Masuk
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: "overview", label: "Ringkasan" },
              { id: "volunteers", label: "Relawan" },
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
          <div className="prose max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ringkasan Proyek
            </h2>
            <div className="whitespace-pre-line text-gray-600">
              {project.fullDescription}
            </div>
          </div>
        )}

        {activeTab === "volunteers" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Relawan Proyek
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Relawan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Tanggal Bergabung
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {project.volunteers.map((volunteer, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                            <span className="text-sm font-medium text-gray-600">
                              {volunteer.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {volunteer.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {formatDate(volunteer.joinDate)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
