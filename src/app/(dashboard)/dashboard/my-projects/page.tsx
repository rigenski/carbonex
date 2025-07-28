"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock data for individual's joined projects
const mockJoinedProjects = [
  {
    id: "PRJ001",
    projectName: "Restorasi Hutan Jakarta",
    projectType: "Reforestasi",
    community: "Green Earth Indonesia",
    joinDate: "2024-01-20",
    volunteerHours: 12,
    treesPlanted: 15,
    status: "Aktif",
    coverImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    shortDesc:
      "Proyek restorasi hutan skala besar di Jakarta untuk meningkatkan tutupan hijau kota.",
    location: {
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
    },
    nextActivity: "2024-02-15",
    totalVolunteers: 45,
    maxVolunteers: 80,
  },
  {
    id: "PRJ002",
    projectName: "Proyek Panel Surya Komunitas",
    projectType: "Energi Terbarukan",
    community: "Solar Future Collective",
    joinDate: "2024-01-25",
    volunteerHours: 8,
    treesPlanted: 0,
    status: "Aktif",
    coverImage:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    shortDesc:
      "Instalasi panel surya di komunitas pedesaan untuk mengurangi ketergantungan pada energi fosil.",
    location: {
      city: "Bandung",
      province: "Jawa Barat",
    },
    nextActivity: "2024-02-20",
    totalVolunteers: 23,
    maxVolunteers: 30,
  },
  {
    id: "PRJ003",
    projectName: "Penanaman Pohon Perkotaan",
    projectType: "Penanaman Pohon",
    community: "Green City Movement",
    joinDate: "2024-01-30",
    volunteerHours: 6,
    treesPlanted: 8,
    status: "Aktif",
    coverImage:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
    shortDesc:
      "Program penanaman pohon di area perkotaan untuk meningkatkan kualitas udara.",
    location: {
      city: "Yogyakarta",
      province: "DI Yogyakarta",
    },
    nextActivity: "2024-02-18",
    totalVolunteers: 89,
    maxVolunteers: 120,
  },
];

export default function MyProjectsPage() {
  const [projects] = useState(mockJoinedProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.community.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Selesai":
        return "bg-blue-100 text-blue-800";
      case "Dijeda":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "Aktif":
        return "Aktif";
      case "Selesai":
        return "Selesai";
      case "Dijeda":
        return "Dijeda";
      default:
        return status;
    }
  };

  const totalVolunteerHours = projects.reduce(
    (sum, project) => sum + project.volunteerHours,
    0,
  );
  const totalTreesPlanted = projects.reduce(
    (sum, project) => sum + project.treesPlanted,
    0,
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Proyek Saya</h1>
        <p className="mt-1 text-sm text-gray-600">
          Pantau proyek yang Anda ikuti dan dampak yang Anda buat
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Proyek Diikuti
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Jam Relawan
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {totalVolunteerHours}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <span className="text-2xl">🌳</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pohon Ditanam</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalTreesPlanted}
              </p>
            </div>
          </div>
        </div>
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
              placeholder="Cari berdasarkan nama proyek atau komunitas..."
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
              <option value="Active">Aktif</option>
              <option value="Completed">Selesai</option>
              <option value="Paused">Dijeda</option>
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
                  <span className="font-medium text-gray-700">Komunitas:</span>
                  <p className="text-gray-600">{project.community}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Bergabung:</span>
                  <p className="text-gray-600">
                    {new Date(project.joinDate).toLocaleDateString("id-ID")}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">
                    Jam Relawan:
                  </span>
                  <p className="text-gray-600">{project.volunteerHours} jam</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">
                    Pohon Ditanam:
                  </span>
                  <p className="text-gray-600">{project.treesPlanted} pohon</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Lokasi:
                </span>
                <p className="text-sm text-gray-600">
                  {project.location.city}, {project.location.province}
                </p>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Aktivitas Berikutnya:
                </span>
                <p className="text-sm text-gray-600">
                  {new Date(project.nextActivity).toLocaleDateString("id-ID")}
                </p>
              </div>

              <div className="mb-4">
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">Relawan:</span>
                  <span className="text-gray-600">
                    {project.totalVolunteers}/{project.maxVolunteers}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(project.totalVolunteers / project.maxVolunteers) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Bergabung{" "}
                  {new Date(project.joinDate).toLocaleDateString("id-ID")}
                </span>
                <Link
                  href={`/projects/${project.id}`}
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
            Anda belum bergabung dengan proyek apapun
          </h3>
          <p className="mb-6 text-gray-600">
            Mulai bergabung dengan proyek karbon untuk membuat dampak positif.
          </p>
          <Link
            href="/projects"
            className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white"
          >
            Jelajahi Proyek
          </Link>
        </div>
      )}
    </div>
  );
}
