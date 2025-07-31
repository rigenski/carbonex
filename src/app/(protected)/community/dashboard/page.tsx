"use client";

import Image from "next/image";
import {
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function CommunityDashboard() {
  // Mock data
  const stats = {
    totalProjects: 12,
    activeProjects: 8,
    totalVolunteers: 156,
    totalTreesPlanted: 4500,
  };

  const projects = [
    {
      id: "PRJ001",
      name: "Inisiatif Restorasi Hutan",
      status: "Dalam Pengembangan",
      projectType: "Reforestasi",
      country: "Indonesia",
      targetTrees: 5000,
      registDate: "2024-01-15",
      startDate: "2024-03-01",
      endDate: "2024-12-31",
      projectOwner: "Green Earth Indonesia",
      coverImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      galleryImages: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop&crop=center",
      ],
      shortDesc:
        "Proyek restorasi hutan skala besar untuk melawan deforestasi dan menciptakan penyerap karbon.",
      fullDesc:
        "Proyek restorasi hutan skala besar yang bertujuan untuk melawan deforestasi dan menciptakan penyerap karbon yang efektif. Proyek ini melibatkan penanaman berbagai jenis pohon asli yang sesuai dengan ekosistem lokal.",
      lookingForVolunteers: true,
      totalVolunteersNeeded: 50,
      location: {
        regional: "Jawa",
        province: "Jawa Barat",
        city: "Bandung",
        district: "Cimenyan",
        postalCode: "40191",
      },
    },
    {
      id: "PRJ002",
      name: "Proyek Panel Surya Komunitas",
      status: "Diajukan untuk Registrasi",
      projectType: "Energi Terbarukan",
      country: "Indonesia",
      targetTrees: 3000,
      registDate: "2024-02-20",
      startDate: "2024-04-01",
      endDate: "2024-10-31",
      projectOwner: "Solar Future Collective",
      coverImage:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      galleryImages: [
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      ],
      shortDesc:
        "Instalasi panel surya di komunitas pedesaan untuk mengurangi emisi karbon.",
      fullDesc:
        "Proyek instalasi panel surya di komunitas pedesaan yang bertujuan untuk mengurangi emisi karbon dan memberikan akses energi bersih kepada masyarakat lokal.",
      lookingForVolunteers: true,
      totalVolunteersNeeded: 30,
      location: {
        regional: "Jawa",
        province: "Jawa Tengah",
        city: "Semarang",
        district: "Tembalang",
        postalCode: "50275",
      },
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FolderIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Proyek</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalProjects}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Proyek Aktif</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.activeProjects}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UsersIcon className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Relawan</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalVolunteers}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <SparklesIcon className="h-8 w-8 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Dampak Lingkungan
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalTreesPlanted}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              Proyek Terbaru
            </h3>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-500">{project.shortDesc}</p>
                    <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          project.status === "Under Development"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span>Target: {project.targetTrees} pohon</span>
                      <span>Relawan: {project.totalVolunteersNeeded}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
