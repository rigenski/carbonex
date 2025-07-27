"use client";

import { useState } from "react";
import Image from "next/image";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface Project {
  id: string;
  name: string;
  community: string;
  status: string;
  targetTrees: number;
  volunteers: number;
  image: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function AdminProject() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Mock data
  const projects: Project[] = [
    {
      id: "PRJ001",
      name: "Forest Restoration Initiative",
      community: "Green Earth Indonesia",
      status: "Active",
      targetTrees: 5000,
      volunteers: 45,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      location: "Bandung, Jawa Barat",
      startDate: "2024-03-01",
      endDate: "2024-12-31",
      description:
        "Proyek restorasi hutan skala besar untuk melawan deforestasi dan menciptakan penyerap karbon.",
    },
    {
      id: "PRJ002",
      name: "Solar Panel Community Project",
      community: "Solar Future Collective",
      status: "Under Development",
      targetTrees: 3000,
      volunteers: 23,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      location: "Semarang, Jawa Tengah",
      startDate: "2024-04-01",
      endDate: "2024-10-31",
      description:
        "Instalasi panel surya di komunitas pedesaan untuk mengurangi emisi karbon.",
    },
    {
      id: "PRJ003",
      name: "Mangrove Conservation Project",
      community: "Bumi Hijau Indonesia",
      status: "Active",
      targetTrees: 8000,
      volunteers: 67,
      image:
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=250&fit=crop&crop=center",
      location: "Jakarta, DKI Jakarta",
      startDate: "2024-02-15",
      endDate: "2024-11-30",
      description:
        "Konservasi dan restorasi ekosistem mangrove pesisir untuk melindungi pantai dan menyerap karbon.",
    },
    {
      id: "PRJ004",
      name: "Community Education Program",
      community: "Kolektif Masa Depan Surya",
      status: "Under Development",
      targetTrees: 2000,
      volunteers: 34,
      image:
        "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
      location: "Surabaya, Jawa Timur",
      startDate: "2024-05-01",
      endDate: "2024-08-31",
      description:
        "Program pendidikan lingkungan untuk meningkatkan kesadaran masyarakat tentang perubahan iklim.",
    },
    {
      id: "PRJ005",
      name: "Waste Management Initiative",
      community: "Inisiatif Kota Bersih",
      status: "Active",
      targetTrees: 1500,
      volunteers: 28,
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center",
      location: "Yogyakarta, DI Yogyakarta",
      startDate: "2024-01-15",
      endDate: "2024-09-30",
      description:
        "Inisiatif pengelolaan sampah yang berkelanjutan untuk mengurangi polusi dan emisi gas rumah kaca.",
    },
    {
      id: "PRJ006",
      name: "Coastal Restoration Project",
      community: "Penjaga Pesisir",
      status: "Under Development",
      targetTrees: 12000,
      volunteers: 89,
      image:
        "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=250&fit=crop&crop=center",
      location: "Balikpapan, Kalimantan Timur",
      startDate: "2024-06-01",
      endDate: "2025-03-31",
      description:
        "Restorasi ekosistem pesisir untuk melindungi garis pantai dan meningkatkan keanekaragaman hayati.",
    },
    {
      id: "PRJ007",
      name: "Urban Green Space Development",
      community: "Kota Hijau Indonesia",
      status: "Active",
      targetTrees: 3500,
      volunteers: 56,
      image:
        "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
      location: "Medan, Sumatera Utara",
      startDate: "2024-03-15",
      endDate: "2024-12-15",
      description:
        "Pengembangan ruang hijau perkotaan untuk meningkatkan kualitas udara dan kenyamanan warga kota.",
    },
    {
      id: "PRJ008",
      name: "Bamboo Forest Initiative",
      community: "Bambu Lestari",
      status: "Under Development",
      targetTrees: 8000,
      volunteers: 42,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      location: "Palembang, Sumatera Selatan",
      startDate: "2024-05-01",
      endDate: "2025-02-28",
      description:
        "Inisiatif penanaman bambu untuk restorasi lahan dan pemanfaatan bambu sebagai material berkelanjutan.",
    },
    {
      id: "PRJ009",
      name: "Peatland Restoration Program",
      community: "Gambut Sejahtera",
      status: "Active",
      targetTrees: 15000,
      volunteers: 78,
      image:
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=250&fit=crop&crop=center",
      location: "Palangkaraya, Kalimantan Tengah",
      startDate: "2024-01-01",
      endDate: "2025-06-30",
      description:
        "Program restorasi lahan gambut untuk mencegah kebakaran dan mengurangi emisi karbon.",
    },
    {
      id: "PRJ010",
      name: "Community Solar Energy Project",
      community: "Energi Bersih Nusantara",
      status: "Under Development",
      targetTrees: 1000,
      volunteers: 34,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      location: "Denpasar, Bali",
      startDate: "2024-07-01",
      endDate: "2024-11-30",
      description:
        "Proyek energi surya komunitas untuk mengurangi ketergantungan pada energi fosil.",
    },
  ];

  const handleViewDetail = (project: Project) => {
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setShowEditModal(true);
  };

  const handleDelete = (project: Project) => {
    if (
      confirm(`Apakah Anda yakin ingin menghapus proyek "${project.name}"?`)
    ) {
      alert(`Proyek "${project.name}" berhasil dihapus!`);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Under Development":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Filter and sort projects
  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.community.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "status":
          return a.status.localeCompare(b.status);
        case "targetTrees":
          return b.targetTrees - a.targetTrees;
        case "volunteers":
          return b.volunteers - a.volunteers;
        default:
          return 0;
      }
    });

  const projectStatuses = ["All", "Active", "Under Development", "Completed"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Daftar Proyek</h2>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Daftar Proyek</h3>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Cari Proyek
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Cari berdasarkan nama, komunitas, atau lokasi..."
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
                    {status === "All" ? "Semua" : status}
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
                className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="name">Nama</option>
                <option value="status">Status</option>
                <option value="targetTrees">Target Pohon</option>
                <option value="volunteers">Relawan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table
              className="min-w-full divide-y divide-gray-200"
              style={{ minWidth: "1000px" }}
            >
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-64 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Proyek
                  </th>
                  <th className="w-48 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Lokasi
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Target
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="w-40 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Durasi
                  </th>
                  <th className="w-48 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Komunitas
                  </th>
                  <th className="w-24 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
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
                        {project.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {project.targetTrees.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">pohon target</div>
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
                        <div>Mulai: {formatDate(project.startDate)}</div>
                        <div>Selesai: {formatDate(project.endDate)}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {project.community}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewDetail(project)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Lihat Detail"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(project)}
                          className="text-green-600 hover:text-green-900"
                          title="Edit"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(project)}
                          className="text-red-600 hover:text-red-900"
                          title="Hapus"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
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
              Tidak ada proyek ditemukan
            </h3>
            <p className="mt-2 text-gray-600">
              Coba sesuaikan kriteria pencarian atau filter untuk menemukan
              proyek.
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedProject && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Detail Proyek
              </h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="rounded p-1 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-gray-700">ID:</span>
                <span className="ml-2 text-gray-900">{selectedProject.id}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Nama Proyek:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.name}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Komunitas:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.community}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Status:
                </span>
                <span
                  className={`ml-2 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    selectedProject.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Target Pohon:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.targetTrees}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Relawan:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.volunteers}
                </span>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDetailModal(false)}
                className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedProject && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Edit Proyek
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="rounded p-1 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nama Proyek
                </label>
                <input
                  type="text"
                  defaultValue={selectedProject.name}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  defaultValue={selectedProject.status}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                >
                  <option value="Active">Aktif</option>
                  <option value="Under Development">Dalam Pengembangan</option>
                  <option value="Completed">Selesai</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Target Pohon
                </label>
                <input
                  type="number"
                  defaultValue={selectedProject.targetTrees}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
              >
                Batal
              </button>
              <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
