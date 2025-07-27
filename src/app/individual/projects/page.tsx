"use client";

import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  name: string;
  community: string;
  status: string;
  joinDate: string;
  hoursContributed: string;
  treesPlanted: number;
  location: string;
  shortDesc: string;
  coverImage: string;
}

export default function IndividualProjects() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mock data
  const joinedProjects: Project[] = [
    {
      id: "PRJ001",
      name: "Forest Restoration Initiative",
      community: "Green Earth Indonesia",
      status: "Active",
      joinDate: "2024-01-15",
      hoursContributed: "24 jam",
      treesPlanted: 45,
      location: "Bandung, Jawa Barat",
      shortDesc: "Proyek restorasi hutan skala besar",
      coverImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: "PRJ002",
      name: "Solar Panel Community Project",
      community: "Solar Future Collective",
      status: "Completed",
      joinDate: "2024-02-20",
      hoursContributed: "18 jam",
      treesPlanted: 32,
      location: "Semarang, Jawa Tengah",
      shortDesc: "Instalasi panel surya di komunitas",
      coverImage:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const handleViewDetail = (project: Project) => {
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const handleJoinProject = (project: Project) => {
    alert(`Berhasil bergabung dengan proyek "${project.name}"!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Proyek yang Saya Ikuti
        </h2>
        <Link
          href="/projects"
          className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          Cari Proyek Baru
        </Link>
      </div>

      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Semua Proyek</h3>
            <input
              type="text"
              placeholder="Cari proyek..."
              className="rounded-md border border-gray-300 px-3 py-1 text-sm"
            />
          </div>
        </div>
        <div className="table-container">
          <table className="responsive-table">
            <thead className="table-header">
              <tr>
                <th>Proyek</th>
                <th>Komunitas</th>
                <th>Status</th>
                <th>Tanggal Bergabung</th>
                <th>Jam Kontribusi</th>
                <th>Pohon Tertanam</th>
                <th>Lokasi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {joinedProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap">
                    <div className="flex items-center">
                      <Image
                        src={project.coverImage}
                        alt={project.name}
                        className="mr-3 h-8 w-8 rounded object-cover"
                        width={240}
                        height={240}
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {project.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {project.shortDesc}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm whitespace-nowrap text-gray-500">
                    {project.community}
                  </td>
                  <td className="whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : project.status === "Completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="text-sm whitespace-nowrap text-gray-500">
                    {project.joinDate}
                  </td>
                  <td className="text-sm whitespace-nowrap text-gray-500">
                    {project.hoursContributed}
                  </td>
                  <td className="text-sm whitespace-nowrap text-gray-500">
                    {project.treesPlanted}
                  </td>
                  <td className="text-sm whitespace-nowrap text-gray-500">
                    {project.location}
                  </td>
                  <td className="text-sm font-medium whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetail(project)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Lihat Detail"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      {project.status === "Active" && (
                        <button
                          onClick={() => handleJoinProject(project)}
                          className="text-red-600 hover:text-red-900"
                          title="Bergabung"
                        >
                          <HeartIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                      : selectedProject.status === "Completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Tanggal Bergabung:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.joinDate}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Jam Kontribusi:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.hoursContributed}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Pohon Tertanam:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.treesPlanted}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Lokasi:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.location}
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
    </div>
  );
}
