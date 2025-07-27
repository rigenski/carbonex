"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth";

// Mock data for projects
const mockProjects = [
  {
    id: "PRJ001",
    name: "Forest Restoration Initiative",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    address: "Jakarta, Indonesia",
    estimateCarbon: 1200,
    registeredVolunteers: 45,
    maxVolunteers: 80,
    needsVolunteers: true,
    estimateDate: {
      start: "2024-12-01",
      end: "2025-06-30",
    },
    status: "Active",
    description:
      "Large-scale forest restoration project to combat deforestation and create carbon sinks.",
    community: "Green Earth Indonesia",
  },
  {
    id: "PRJ002",
    name: "Solar Panel Community Project",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    address: "Bandung, Indonesia",
    estimateCarbon: 800,
    registeredVolunteers: 23,
    maxVolunteers: 30,
    needsVolunteers: true,
    estimateDate: {
      start: "2024-11-15",
      end: "2025-05-15",
    },
    status: "Active",
    description:
      "Installing solar panels in rural communities to reduce carbon emissions.",
    community: "Solar Future Collective",
  },
  {
    id: "PRJ003",
    name: "Waste Management Program",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center",
    address: "Surabaya, Indonesia",
    estimateCarbon: 600,
    registeredVolunteers: 67,
    maxVolunteers: 100,
    needsVolunteers: true,
    estimateDate: {
      start: "2024-10-01",
      end: "2025-03-31",
    },
    status: "Planning",
    description:
      "Comprehensive waste management and recycling program for urban areas.",
    community: "Clean City Initiative",
  },
  {
    id: "PRJ004",
    name: "Ocean Conservation Project",
    image:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=250&fit=crop&crop=center",
    address: "Bali, Indonesia",
    estimateCarbon: 450,
    registeredVolunteers: 0,
    maxVolunteers: 0,
    needsVolunteers: false,
    estimateDate: {
      start: "2024-12-15",
      end: "2025-08-15",
    },
    status: "Active",
    description:
      "Marine ecosystem restoration and plastic waste cleanup initiative.",
    community: "Ocean Guardians Bali",
  },
  {
    id: "PRJ005",
    name: "Urban Tree Planting",
    image:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
    address: "Yogyakarta, Indonesia",
    estimateCarbon: 320,
    registeredVolunteers: 89,
    maxVolunteers: 120,
    needsVolunteers: true,
    estimateDate: {
      start: "2024-11-01",
      end: "2025-04-30",
    },
    status: "Active",
    description:
      "Community-driven initiative to plant trees in urban areas and public spaces.",
    community: "Green City Movement",
  },
  {
    id: "PRJ006",
    name: "Wind Farm Development",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=250&fit=crop&crop=center",
    address: "Makassar, Indonesia",
    estimateCarbon: 1500,
    registeredVolunteers: 12,
    maxVolunteers: 50,
    needsVolunteers: true,
    estimateDate: {
      start: "2025-01-01",
      end: "2025-12-31",
    },
    status: "Planning",
    description:
      "Large-scale wind farm project to generate clean energy for coastal communities.",
    community: "Wind Power Alliance",
  },
  {
    id: "PRJ007",
    name: "Corporate Carbon Offset",
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=250&fit=crop&crop=center",
    address: "Medan, Indonesia",
    estimateCarbon: 2200,
    registeredVolunteers: 0,
    maxVolunteers: 0,
    needsVolunteers: false,
    estimateDate: {
      start: "2024-09-01",
      end: "2026-09-01",
    },
    status: "Active",
    description:
      "Corporate-funded reforestation project with professional management team.",
    community: "EcoBalance Corp",
  },
  {
    id: "PRJ008",
    name: "Community Composting Hub",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop&crop=center",
    address: "Semarang, Indonesia",
    estimateCarbon: 180,
    registeredVolunteers: 156,
    maxVolunteers: 200,
    needsVolunteers: true,
    estimateDate: {
      start: "2024-10-15",
      end: "2025-10-15",
    },
    status: "Active",
    description:
      "Neighborhood composting program to reduce organic waste and create fertilizer.",
    community: "Zero Waste Semarang",
  },
  {
    id: "PRJ009",
    name: "Automated Carbon Capture",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop&crop=center",
    address: "Palembang, Indonesia",
    estimateCarbon: 3000,
    registeredVolunteers: 0,
    maxVolunteers: 0,
    needsVolunteers: false,
    estimateDate: {
      start: "2025-02-01",
      end: "2027-02-01",
    },
    status: "Planning",
    description:
      "High-tech carbon capture facility using advanced automation technology.",
    community: "TechCarbon Solutions",
  },
  {
    id: "PRJ010",
    name: "Mangrove Restoration",
    image:
      "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=250&fit=crop&crop=center",
    address: "Balikpapan, Indonesia",
    estimateCarbon: 950,
    registeredVolunteers: 78,
    maxVolunteers: 90,
    needsVolunteers: true,
    estimateDate: {
      start: "2024-11-30",
      end: "2025-11-30",
    },
    status: "Active",
    description:
      "Coastal mangrove ecosystem restoration to protect shorelines and wildlife.",
    community: "Coastal Guardians",
  },
  {
    id: "PRJ011",
    name: "Bike Sharing Program",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=250&fit=crop&crop=center",
    address: "Denpasar, Indonesia",
    estimateCarbon: 250,
    registeredVolunteers: 34,
    maxVolunteers: 60,
    needsVolunteers: true,
    estimateDate: {
      start: "2024-12-01",
      end: "2025-12-01",
    },
    status: "Planning",
    description:
      "City-wide bike sharing program to reduce vehicle emissions and promote clean transport.",
    community: "Green Transport Bali",
  },
  {
    id: "PRJ012",
    name: "Industrial Solar Installation",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop&crop=center",
    address: "Batam, Indonesia",
    estimateCarbon: 1800,
    registeredVolunteers: 0,
    maxVolunteers: 0,
    needsVolunteers: false,
    estimateDate: {
      start: "2025-03-01",
      end: "2025-09-01",
    },
    status: "Planning",
    description:
      "Large-scale solar panel installation for industrial complexes with contractor teams.",
    community: "Industrial Green Energy",
  },
];

const projectStatuses = ["All", "Active", "Planning", "Completed"];
const volunteerOptions = ["All", "Need Volunteers", "No Need for Volunteers"];

export default function ProjectsPage() {
  const { user } = useAuthStore();
  const [projects] = useState(mockProjects);
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedVolunteerFilter, setSelectedVolunteerFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.community.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter(
        (project) => project.status === selectedStatus,
      );
    }

    // Filter by volunteer availability
    if (selectedVolunteerFilter !== "All") {
      if (selectedVolunteerFilter === "Need Volunteers") {
        filtered = filtered.filter(
          (project) => project.needsVolunteers === true,
        );
      } else if (selectedVolunteerFilter === "No Need for Volunteers") {
        filtered = filtered.filter(
          (project) => project.needsVolunteers === false,
        );
      }
    }

    // Sort projects
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "carbon":
          return b.estimateCarbon - a.estimateCarbon;
        case "volunteers":
          return b.registeredVolunteers - a.registeredVolunteers;
        case "date":
          return (
            new Date(a.estimateDate.start).getTime() -
            new Date(b.estimateDate.start).getTime()
          );
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedStatus, selectedVolunteerFilter, sortBy]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getVolunteerBadgeColor = (needsVolunteers: boolean) => {
    return needsVolunteers
      ? "bg-purple-100 text-purple-800"
      : "bg-gray-100 text-gray-600";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Proyek Kredit Karbon Premium
              </h1>
              <p className="mt-2 text-gray-600">
                Temukan proyek triple-verified berdampak tinggi yang memberikan
                hasil terukur. Mulai offset jejak karbon Anda hari ini dengan
                proyek yang menjamin perubahan lingkungan nyata.
              </p>
            </div>
            {user?.role === "community" && (
              <Link
                href="/projects/create"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                Luncurkan Proyek Anda
              </Link>
            )}
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
                Cari Proyek
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Cari berdasarkan nama, lokasi, atau komunitas..."
              />
            </div>

            {/* Status Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                {projectStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Volunteer Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status Relawan
              </label>
              <select
                value={selectedVolunteerFilter}
                onChange={(e) => setSelectedVolunteerFilter(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                {volunteerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === "All"
                      ? "Semua"
                      : option === "Need Volunteers"
                        ? "Butuh Relawan"
                        : "Tidak Butuh Relawan"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort and Results Count */}
          <div className="mt-6 flex flex-col items-start justify-between border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Menampilkan {filteredProjects.length} dari {projects.length}{" "}
                proyek
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 sm:mt-0">
              <span className="text-sm text-gray-600">
                Urutkan berdasarkan:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="name">Nama</option>
                <option value="carbon">Dampak Karbon</option>
                <option value="volunteers">Relawan</option>
                <option value="date">Tanggal Mulai</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`rounded px-2.5 py-0.5 text-xs font-medium ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                    {project.needsVolunteers && (
                      <span
                        className={`rounded px-2.5 py-0.5 text-xs font-medium ${getVolunteerBadgeColor(project.needsVolunteers)}`}
                      >
                        Butuh Relawan
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{project.id}</span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {project.name}
                </h3>

                <p className="mb-3 text-sm text-gray-600">
                  {project.description}
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
                    {project.address}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                    {formatDate(project.estimateDate.start)} -{" "}
                    {formatDate(project.estimateDate.end)}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                    {project.estimateCarbon.toLocaleString()} ton CO₂
                    diperkirakan
                  </div>
                  {project.needsVolunteers && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.54 3.51L13.5 14H16v8h4z" />
                          </svg>
                          <span className="text-sm text-gray-600">
                            {project.registeredVolunteers}/
                            {project.maxVolunteers} relawan
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {Math.round(
                            (project.registeredVolunteers /
                              project.maxVolunteers) *
                              100,
                          )}
                          %
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-green-500 transition-all duration-300"
                          style={{
                            width: `${Math.min((project.registeredVolunteers / project.maxVolunteers) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    by {project.community}
                  </span>
                  <Link
                    href={`/projects/${project.id}`}
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
        {filteredProjects.length === 0 && (
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
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Tidak ada proyek ditemukan
            </h3>
            <p className="mt-2 text-gray-600">
              Coba sesuaikan kriteria pencarian atau filter untuk menemukan
              proyek.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
