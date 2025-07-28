"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock data for community projects
const mockProjects = [
  {
    id: "PRJ001",
    projectName: "Restorasi Hutan Jakarta",
    projectType: "Reforestasi",
    country: "Indonesia",
    estimatedTrees: 5000,
    registDate: "2024-01-15",
    startProject: "2024-02-01",
    endProject: "2024-12-31",
    projectOwner: "Green Earth Indonesia",
    coverImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    galleryImages: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    ],
    shortDesc:
      "Proyek restorasi hutan skala besar di Jakarta untuk meningkatkan tutupan hijau kota.",
    fullDesc:
      "Proyek restorasi hutan ini bertujuan untuk mengembalikan ekosistem hutan yang telah rusak di area Jakarta. Melalui penanaman 5000 pohon berbagai jenis, kami berharap dapat meningkatkan tutupan hijau kota, mengurangi polusi udara, dan menciptakan habitat yang lebih baik untuk satwa liar lokal.",
    lookingForVolunteers: true,
    totalVolunteersNeeded: 50,
    location: {
      regional: "Jawa Barat",
      province: "DKI Jakarta",
      city: "Jakarta Selatan",
      district: "Kebayoran Baru",
      postalCode: "12120",
    },
    status: "Dalam Pengembangan",
  },
  {
    id: "PRJ002",
    projectName: "Proyek Panel Surya Komunitas",
    projectType: "Energi Terbarukan",
    country: "Indonesia",
    estimatedTrees: 0,
    registDate: "2024-01-20",
    startProject: "2024-03-01",
    endProject: "2024-08-31",
    projectOwner: "Solar Future Collective",
    coverImage:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    galleryImages: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop&crop=center",
    ],
    shortDesc:
      "Instalasi panel surya di komunitas pedesaan untuk mengurangi ketergantungan pada energi fosil.",
    fullDesc:
      "Proyek ini fokus pada instalasi panel surya di komunitas pedesaan yang masih bergantung pada energi fosil. Dengan beralih ke energi surya, komunitas dapat mengurangi emisi karbon dan biaya energi bulanan mereka.",
    lookingForVolunteers: true,
    totalVolunteersNeeded: 30,
    location: {
      regional: "Jawa Barat",
      province: "Jawa Barat",
      city: "Bandung",
      district: "Cidadap",
      postalCode: "40162",
    },
    status: "Diajukan untuk Registrasi",
  },
  {
    id: "PRJ003",
    projectName: "Program Pengelolaan Sampah",
    projectType: "Pengelolaan Sampah",
    country: "Indonesia",
    estimatedTrees: 1000,
    registDate: "2024-01-10",
    startProject: "2024-01-15",
    endProject: "2024-06-30",
    projectOwner: "Clean City Initiative",
    coverImage:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center",
    galleryImages: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=400&h=250&fit=crop&crop=center",
    ],
    shortDesc:
      "Program pengelolaan sampah terpadu untuk mengurangi polusi dan meningkatkan daur ulang.",
    fullDesc:
      "Program ini mengimplementasikan sistem pengelolaan sampah terpadu yang mencakup pemilahan, pengumpulan, dan daur ulang sampah. Selain itu, program ini juga melibatkan penanaman 1000 pohon untuk menyerap karbon dari proses pengelolaan sampah.",
    lookingForVolunteers: false,
    totalVolunteersNeeded: 0,
    location: {
      regional: "Jawa Timur",
      province: "Jawa Timur",
      city: "Surabaya",
      district: "Gubeng",
      postalCode: "60281",
    },
    status: "Dalam Pengembangan",
  },
];

export default function CommunityProjectsPage() {
  const [projects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Dalam Pengembangan":
        return "bg-yellow-100 text-yellow-800";
      case "Diajukan untuk Registrasi":
        return "bg-blue-100 text-blue-800";
      case "Aktif":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "Dalam Pengembangan":
        return "Dalam Pengembangan";
      case "Diajukan untuk Registrasi":
        return "Diajukan untuk Registrasi";
      case "Aktif":
        return "Aktif";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daftar Proyek</h1>
          <p className="mt-1 text-sm text-gray-600">
            Kelola semua proyek karbon Anda
          </p>
        </div>
        <Link
          href="/dashboard/projects/create"
          className="bg-primary hover:bg-primary/90 mt-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white sm:mt-0"
        >
          <span className="mr-2">➕</span>
          Buat Proyek Baru
        </Link>
      </div>

      {/* Filters */}
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Cari Proyek
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari berdasarkan nama, tipe, atau lokasi..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="All">Semua Status</option>
              <option value="Under Development">Dalam Pengembangan</option>
              <option value="Submitted for Registration">
                Diajukan untuk Registrasi
              </option>
              <option value="Aktif">Aktif</option>
            </select>
          </div>
          <div className="flex items-end">
            <span className="text-sm text-gray-600">
              Menampilkan {filteredProjects.length} dari {projects.length}{" "}
              proyek
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="relative h-48">
              <Image
                src={project.coverImage}
                alt={project.projectName}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(project.status)}`}
                >
                  {getStatusText(project.status)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    {project.projectName}
                  </h3>
                  <p className="text-sm text-gray-600">{project.projectType}</p>
                </div>
                <span className="text-xs text-gray-500">#{project.id}</span>
              </div>

              <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                {project.shortDesc}
              </p>

              <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Negara:</span>
                  <p className="text-gray-600">{project.country}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">
                    Target Pohon:
                  </span>
                  <p className="text-gray-600">
                    {project.estimatedTrees.toLocaleString()}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">
                    Tanggal Registrasi:
                  </span>
                  <p className="text-gray-600">
                    {new Date(project.registDate).toLocaleDateString("id-ID")}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">
                    Durasi Proyek:
                  </span>
                  <p className="text-gray-600">
                    {new Date(project.startProject).toLocaleDateString("id-ID")}{" "}
                    - {new Date(project.endProject).toLocaleDateString("id-ID")}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Lokasi:
                </span>
                <p className="text-sm text-gray-600">
                  {project.location.district}, {project.location.city},{" "}
                  {project.location.province} {project.location.postalCode}
                </p>
              </div>

              {project.lookingForVolunteers && (
                <div className="mb-4 rounded-lg bg-blue-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-800">
                      Butuh Relawan
                    </span>
                    <span className="text-sm text-blue-600">
                      {project.totalVolunteersNeeded} relawan
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  oleh {project.projectOwner}
                </span>
                <Link
                  href={`/dashboard/projects/${project.id}`}
                  className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-white"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <div className="mx-auto mb-4 h-12 w-12 text-gray-400">
            <span className="text-4xl">🌱</span>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900">
            Tidak ada proyek ditemukan
          </h3>
          <p className="mb-6 text-gray-600">
            Coba sesuaikan filter pencarian Anda atau buat proyek baru.
          </p>
          <Link
            href="/dashboard/projects/create"
                                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Buat Proyek Pertama
          </Link>
        </div>
      )}
    </div>
  );
}
