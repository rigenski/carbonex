"use client";

import { useState } from "react";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

interface Project {
  id: string;
  name: string;
  status: string;
  projectType: string;
  country: string;
  targetTrees: number;
  registDate: string;
}

export default function CommunityProjects() {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mock data
  const projects: Project[] = [
    {
      id: "PRJ001",
      name: "Forest Restoration Initiative",
      status: "Under Development",
      projectType: "Reforestasi",
      country: "Indonesia",
      targetTrees: 5000,
      registDate: "2024-01-15",
    },
    {
      id: "PRJ002",
      name: "Solar Panel Community Project",
      status: "Active",
      projectType: "Energi Terbarukan",
      country: "Indonesia",
      targetTrees: 3000,
      registDate: "2024-02-20",
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

  const handleCreateProject = () => {
    setShowCreateProject(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Daftar Proyek</h2>
        <button
          onClick={handleCreateProject}
          className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          <PlusIcon className="mr-2 inline h-4 w-4" />
          Buat Proyek Baru
        </button>
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
                <th>ID</th>
                <th>Nama Proyek</th>
                <th>Status</th>
                <th>Jenis Proyek</th>
                <th>Negara</th>
                <th>Target Pohon</th>
                <th>Tanggal Registrasi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="text-gray-900">{project.id}</td>
                  <td className="font-medium text-gray-900">{project.name}</td>
                  <td>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        project.status === "Under Development"
                          ? "bg-yellow-100 text-yellow-800"
                          : project.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="text-gray-500">{project.projectType}</td>
                  <td className="text-gray-500">{project.country}</td>
                  <td className="text-gray-500">{project.targetTrees}</td>
                  <td className="text-gray-500">{project.registDate}</td>
                  <td className="font-medium">
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
                  Status:
                </span>
                <span
                  className={`ml-2 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    selectedProject.status === "Under Development"
                      ? "bg-yellow-100 text-yellow-800"
                      : selectedProject.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Jenis Proyek:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.projectType}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Negara:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.country}
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
                  Tanggal Registrasi:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedProject.registDate}
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
                  <option value="Under Development">Under Development</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
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

      {/* Create Modal */}
      {showCreateProject && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Buat Proyek Baru
              </h3>
              <button
                onClick={() => setShowCreateProject(false)}
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
                  placeholder="Masukkan nama proyek"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Jenis Proyek
                </label>
                <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none">
                  <option value="Reforestasi">Reforestasi</option>
                  <option value="Energi Terbarukan">Energi Terbarukan</option>
                  <option value="Konservasi">Konservasi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Target Pohon
                </label>
                <input
                  type="number"
                  placeholder="1000"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateProject(false)}
                className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
              >
                Batal
              </button>
              <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                Buat Proyek
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
