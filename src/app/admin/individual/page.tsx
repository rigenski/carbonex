"use client";

import { useState } from "react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface Individual {
  id: string;
  name: string;
  email: string;
  location: string;
  projectsJoined: number;
  status: string;
}

export default function AdminIndividual() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedIndividual, setSelectedIndividual] =
    useState<Individual | null>(null);

  // Mock data
  const individuals: Individual[] = [
    {
      id: "IND001",
      name: "Ahmad Rizki",
      email: "ahmad.rizki@email.com",
      location: "Jakarta, Indonesia",
      projectsJoined: 5,
      status: "Aktif",
    },
    {
      id: "IND002",
      name: "Sarah Wijaya",
      email: "sarah.wijaya@email.com",
      location: "Bandung, Indonesia",
      projectsJoined: 3,
      status: "Aktif",
    },
    {
      id: "IND003",
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      location: "Surabaya, Indonesia",
      projectsJoined: 7,
      status: "Aktif",
    },
    {
      id: "IND004",
      name: "Dewi Kartika",
      email: "dewi.kartika@email.com",
      location: "Semarang, Indonesia",
      projectsJoined: 2,
      status: "Nonaktif",
    },
    {
      id: "IND005",
      name: "Rudi Hermawan",
      email: "rudi.hermawan@email.com",
      location: "Yogyakarta, Indonesia",
      projectsJoined: 4,
      status: "Aktif",
    },
    {
      id: "IND006",
      name: "Siti Nurhaliza",
      email: "siti.nurhaliza@email.com",
      location: "Medan, Indonesia",
      projectsJoined: 6,
      status: "Aktif",
    },
  ];

  const handleViewDetail = (individual: Individual) => {
    setSelectedIndividual(individual);
    setShowDetailModal(true);
  };

  const handleEdit = (individual: Individual) => {
    setSelectedIndividual(individual);
    setShowEditModal(true);
  };

  const handleDelete = (individual: Individual) => {
    if (
      confirm(
        `Apakah Anda yakin ingin menghapus individu "${individual.name}"?`,
      )
    ) {
      alert(`Individu "${individual.name}" berhasil dihapus!`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Daftar Individu</h2>
      </div>

      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              Daftar Individu
            </h3>
            <input
              type="text"
              placeholder="Cari individu..."
              className="rounded-md border border-gray-300 px-3 py-1 text-sm"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Lokasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Proyek Bergabung
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {individuals.map((individual) => (
                  <tr key={individual.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {individual.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {individual.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {individual.email}
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
                        {individual.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {individual.projectsJoined}
                      </div>
                      <div className="text-xs text-gray-500">
                        proyek bergabung
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          individual.status === "Aktif"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {individual.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewDetail(individual)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Lihat Detail"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(individual)}
                          className="text-green-600 hover:text-green-900"
                          title="Edit"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(individual)}
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
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedIndividual && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Detail Individu
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
                <span className="ml-2 text-gray-900">
                  {selectedIndividual.id}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">Nama:</span>
                <span className="ml-2 text-gray-900">
                  {selectedIndividual.name}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Email:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedIndividual.email}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Lokasi:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedIndividual.location}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Proyek Bergabung:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedIndividual.projectsJoined}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Status:
                </span>
                <span
                  className={`ml-2 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    selectedIndividual.status === "Aktif"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {selectedIndividual.status}
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
      {showEditModal && selectedIndividual && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Edit Individu
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
                  Nama
                </label>
                <input
                  type="text"
                  defaultValue={selectedIndividual.name}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={selectedIndividual.email}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  defaultValue={selectedIndividual.status}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
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
