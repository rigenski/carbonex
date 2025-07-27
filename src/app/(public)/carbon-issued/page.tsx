"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Mock data for carbon issued projects
const mockCarbonProjects = [
  {
    id: "CRB001",
    name: "Inisiatif Restorasi Hutan",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    address: "Jakarta, Indonesia",
    estimateCarbon: 1200,
    issuedCarbon: 950,
    registeredVolunteers: 45,
    maxVolunteers: 80,
    needsVolunteers: false,
    estimateDate: {
      start: "2023-12-01",
      end: "2024-06-30",
    },
    issueDate: "2024-07-15",
    status: "Diterbitkan",
    description:
      "Proyek restorasi hutan skala besar yang berhasil menyerap karbon dan mendapatkan kredit terverifikasi.",
    community: "Bumi Hijau Indonesia",
  },
  {
    id: "CRB002",
    name: "Proyek Panel Surya Komunitas",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    address: "Bandung, Indonesia",
    estimateCarbon: 800,
    issuedCarbon: 780,
    registeredVolunteers: 23,
    maxVolunteers: 30,
    needsVolunteers: false,
    estimateDate: {
      start: "2023-11-15",
      end: "2024-05-15",
    },
    issueDate: "2024-06-01",
    status: "Diterbitkan",
    description:
      "Berhasil memasang panel surya yang mengurangi emisi karbon dan menghasilkan kredit terverifikasi.",
    community: "Kolektif Masa Depan Surya",
  },
  {
    id: "CRB003",
    name: "Program Pengelolaan Sampah",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center",
    address: "Surabaya, Indonesia",
    estimateCarbon: 600,
    issuedCarbon: 580,
    registeredVolunteers: 67,
    maxVolunteers: 100,
    needsVolunteers: false,
    estimateDate: {
      start: "2023-10-01",
      end: "2024-03-31",
    },
    issueDate: "2024-04-20",
    retiredDate: "2024-08-15",
    status: "Ditarik",
    description:
      "Program pengelolaan sampah komprehensif yang mencapai target pengurangan karbon dan kredit telah ditarik.",
    community: "Inisiatif Kota Bersih",
  },
  {
    id: "CRB004",
    name: "Restorasi Mangrove",
    image:
      "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=250&fit=crop&crop=center",
    address: "Balikpapan, Indonesia",
    estimateCarbon: 950,
    issuedCarbon: 890,
    registeredVolunteers: 78,
    maxVolunteers: 90,
    needsVolunteers: false,
    estimateDate: {
      start: "2023-11-30",
      end: "2024-11-30",
    },
    issueDate: "2024-12-10",
    status: "Diterbitkan",
    description:
      "Restorasi ekosistem mangrove pesisir yang berhasil menghasilkan kredit karbon terverifikasi.",
    community: "Penjaga Pesisir",
  },
  {
    id: "CRB005",
    name: "Pengembangan Pembangkit Listrik Tenaga Angin",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=250&fit=crop&crop=center",
    address: "Makassar, Indonesia",
    estimateCarbon: 1500,
    issuedCarbon: 1420,
    registeredVolunteers: 12,
    maxVolunteers: 50,
    needsVolunteers: false,
    estimateDate: {
      start: "2023-01-01",
      end: "2023-12-31",
    },
    issueDate: "2024-02-15",
    retiredDate: "2024-09-20",
    status: "Retired",
    description:
      "Large-scale wind farm that generated clean energy and carbon credits, now retired by corporate buyer.",
    community: "Wind Power Alliance",
  },
  {
    id: "CRB006",
    name: "Urban Tree Planting",
    image:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
    address: "Yogyakarta, Indonesia",
    estimateCarbon: 320,
    issuedCarbon: 310,
    registeredVolunteers: 89,
    maxVolunteers: 120,
    needsVolunteers: false,
    estimateDate: {
      start: "2023-11-01",
      end: "2024-04-30",
    },
    issueDate: "2024-05-25",
    status: "Issued",
    description:
      "Community-driven urban tree planting initiative that successfully sequestered carbon in city areas.",
    community: "Green City Movement",
  },
];

const projectStatuses = ["All", "Issued", "Retired"];

export default function CarbonIssuedPage() {
  const [projects] = useState(mockCarbonProjects);
  const [filteredProjects, setFilteredProjects] = useState(mockCarbonProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("issueDate");

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

    // Sort projects
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "carbon":
          return b.issuedCarbon - a.issuedCarbon;
        case "issueDate":
          return (
            new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
          );
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedStatus, sortBy]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Diterbitkan":
        return "bg-blue-100 text-blue-800";
      case "Ditarik":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
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
                Pasar Kredit Karbon Premium
              </h1>
              <p className="mt-2 text-gray-600">
                Akses kredit karbon berkualitas tinggi triple-verified siap
                untuk pembelian langsung. Setiap kredit mewakili pengurangan CO₂
                yang terukur dengan keaslian terjamin dan dampak lingkungan
                maksimal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters and Search */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Cari Kredit Karbon
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {projectStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "All"
                      ? "Semua"
                      : status === "Issued"
                        ? "Terbit"
                        : "Pensiun"}
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
                proyek kredit karbon
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 sm:mt-0">
              <span className="text-sm text-gray-600">
                Urutkan berdasarkan:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="issueDate">Tanggal Terbit</option>
                <option value="name">Nama</option>
                <option value="carbon">Kredit Karbon</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Proyek
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Lokasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Kredit Karbon
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Komunitas
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Image
                          className="h-12 w-12 rounded-lg object-cover"
                          src={project.image}
                          alt={project.name}
                          width={480}
                          height={480}
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {project.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {project.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        <svg
                          className="mr-1 inline h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        {project.address}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {project.issuedCarbon.toLocaleString()} tons
                      </div>
                      <div className="text-xs text-gray-500">
                        Kredit CO₂ diterbitkan
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs text-gray-500">
                        <div>Terbit: {formatDate(project.issueDate)}</div>
                        {project.retiredDate && (
                          <div>Pensiun: {formatDate(project.retiredDate)}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {project.community}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-nowrap text-white shadow-sm hover:bg-blue-700"
                      >
                        Lihat Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              No carbon credits found
            </h3>
            <p className="mt-2 text-gray-600">
              Try adjusting your search criteria or filters to find carbon
              credits.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
