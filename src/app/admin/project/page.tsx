"use client";

import { useState } from "react";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

interface Project {
  id: string;
  name: string;
  community: string;
  status: string;
  targetTrees: number;
  volunteers: number;
}

export default function AdminProject() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mock data
  const projects: Project[] = [
    {
      id: "PRJ001",
      name: "Forest Restoration Initiative",
      community: "Green Earth Indonesia",
      status: "Active",
      targetTrees: 5000,
      volunteers: 45,
    },
    {
      id: "PRJ002",
      name: "Solar Panel Community Project",
      community: "Solar Future Collective",
      status: "Under Development",
      targetTrees: 3000,
      volunteers: 23,
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Daftar Proyek</h2>
      </div>

      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Daftar Proyek</h3>
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
                <th>Komunitas</th>
                <th>Status</th>
                <th>Target Pohon</th>
                <th>Relawan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="text-gray-900">{project.id}</td>
                  <td className="font-medium text-gray-900">{project.name}</td>
                  <td className="text-gray-500">{project.community}</td>
                  <td>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="text-gray-500">{project.targetTrees}</td>
                  <td className="text-gray-500">{project.volunteers}</td>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
                <span className="ml-2 text-gray-900">{selectedProject.name}</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
                  <option value="Active">Active</option>
                  <option value="Under Development">Under Development</option>
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
    </div>
  );
}
