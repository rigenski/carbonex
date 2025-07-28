"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/stores/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Mock project data
const mockProject = {
  id: "PRJ001",
  name: "Inisiatif Restorasi Hutan",
  shortDescription:
    "Proyek restorasi hutan skala besar untuk memerangi deforestasi dan menciptakan penyerap karbon yang signifikan.",
  longDescription:
    "Proyek ini bertujuan untuk merestorasi 1000 hektar hutan yang telah mengalami deforestasi. Melalui penanaman pohon asli dan pemeliharaan ekosistem, kami berharap dapat menyerap 50.000 ton CO₂ dalam 10 tahun ke depan. Proyek ini juga melibatkan masyarakat lokal dalam upaya konservasi dan memberikan manfaat ekonomi berkelanjutan.",
  status: "Aktif",
  type: "Reforestasi",
  treeStatus: "Dalam Penanaman",
  estimateCarbon: 50000,
  treesPlanted: 25000,
  targetTrees: 100000,
  location: "Kalimantan Tengah, Indonesia",
  startDate: "2024-01-15",
  endDate: "2034-01-15",
  community: "Green Earth Indonesia",
  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center",
  ],
  volunteers: [
    {
      name: "Ahmad Rizki",
      role: "Koordinator Lapangan",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Sarah Putri",
      role: "Ahli Konservasi",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Budi Santoso",
      role: "Relawan Senior",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Dewi Sari",
      role: "Koordinator Komunitas",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ],
  keyStats: [
    {
      label: "Target Ton CO₂",
      value: "50.000",
      description: "Estimasi penyerapan karbon",
    },
    {
      label: "Pohon Tertanam",
      value: "25.000",
      description: "Dari target 100.000 pohon",
    },
    {
      label: "Luas Area",
      value: "1.000 ha",
      description: "Area restorasi hutan",
    },
    {
      label: "Relawan Aktif",
      value: "45",
      description: "Anggota tim lapangan",
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
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-20 w-20 overflow-hidden rounded-lg border-2 p-0 ${
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
                  </Button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <Badge
                  variant={project.status === "Aktif" ? "default" : "secondary"}
                >
                  {project.status}
                </Badge>
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
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">
                      {project.estimateCarbon.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Target Ton CO₂</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">
                      {project.treesPlanted.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Pohon Tertanam</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">
                      {project.targetTrees.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Target Pohon</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">
                      {project.volunteers.length}
                    </div>
                    <div className="text-sm text-gray-600">Relawan</div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                {user ? (
                  isJoined ? (
                    <Button
                      variant="outline"
                      onClick={handleLeaveProject}
                      disabled={isLoading}
                    >
                      {isLoading ? "Meninggalkan..." : "Tinggalkan Proyek"}
                    </Button>
                  ) : (
                    <Button onClick={handleJoinProject} disabled={isLoading}>
                      {isLoading ? "Bergabung..." : "Bergabung dengan Proyek"}
                    </Button>
                  )
                ) : (
                  <Button asChild>
                    <Link href="/login">Masuk untuk Bergabung</Link>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link href={`/projects/${project.id}/donate`}>Donasi</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`border-b-2 py-2 text-sm font-medium ${
                    activeTab === "overview"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Gambaran Umum
                </button>
                <button
                  onClick={() => setActiveTab("volunteers")}
                  className={`border-b-2 py-2 text-sm font-medium ${
                    activeTab === "volunteers"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Tim Relawan
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tentang Proyek</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{project.longDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Detail Proyek</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Jenis Proyek
                        </span>
                        <p className="text-gray-900">{project.type}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Status Pohon
                        </span>
                        <p className="text-gray-900">{project.treeStatus}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Lokasi
                        </span>
                        <p className="text-gray-900">{project.location}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Komunitas
                        </span>
                        <p className="text-gray-900">{project.community}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Tanggal Mulai
                        </span>
                        <p className="text-gray-900">
                          {formatDate(project.startDate)}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Tanggal Selesai
                        </span>
                        <p className="text-gray-900">
                          {formatDate(project.endDate)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "volunteers" && (
              <Card>
                <CardHeader>
                  <CardTitle>Tim Relawan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.volunteers.map((volunteer, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 rounded-lg border p-4"
                      >
                        <Image
                          src={volunteer.avatar}
                          alt={volunteer.name}
                          className="h-12 w-12 rounded-full object-cover"
                          width={48}
                          height={48}
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {volunteer.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {volunteer.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Statistik Kunci</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.keyStats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-green-600">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bagikan Proyek</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Link berhasil disalin!");
                    }}
                  >
                    Salin Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
