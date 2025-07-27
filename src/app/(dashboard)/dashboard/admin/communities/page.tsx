"use client";

import { useState } from "react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface Community {
  id: string;
  name: string;
  location: string;
  projects: number;
  members: number;
  status: string;
}

export default function AdminCommunities() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(
    null,
  );

  // Mock data
  const communities: Community[] = [
    {
      id: "COM001",
      name: "Green Earth Indonesia",
      location: "Bandung, Jawa Barat",
      projects: 12,
      members: 156,
      status: "Verified",
    },
    {
      id: "COM002",
      name: "Solar Future Collective",
      location: "Semarang, Jawa Tengah",
      projects: 8,
      members: 89,
      status: "Verified",
    },
  ];

  const handleViewDetail = (community: Community) => {
    setSelectedCommunity(community);
    setShowDetailModal(true);
  };

  const handleEdit = (community: Community) => {
    setSelectedCommunity(community);
    setShowEditModal(true);
  };

  const handleDelete = (community: Community) => {
    if (
      confirm(
        `Apakah Anda yakin ingin menghapus komunitas "${community.name}"?`,
      )
    ) {
      alert(`Komunitas "${community.name}" berhasil dihapus!`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Daftar Komunitas
        </h2>
      </div>

      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              Daftar Komunitas
            </h3>
            <input
              type="text"
              placeholder="Cari komunitas..."
              className="rounded-md border border-gray-300 px-3 py-1 text-sm"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Nama Komunitas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Lokasi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Proyek
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Anggota
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {communities.map((community) => (
                <tr key={community.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    {community.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                    {community.name}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                    {community.location}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                    {community.projects}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                    {community.members}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        community.status === "Verified"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {community.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetail(community)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Lihat Detail"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(community)}
                        className="text-green-600 hover:text-green-900"
                        title="Edit"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(community)}
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
      {showDetailModal && selectedCommunity && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Detail Komunitas
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
                  {selectedCommunity.id}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Nama Komunitas:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedCommunity.name}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Lokasi:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedCommunity.location}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Jumlah Proyek:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedCommunity.projects}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Jumlah Anggota:
                </span>
                <span className="ml-2 text-gray-900">
                  {selectedCommunity.members}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Status:
                </span>
                <span
                  className={`ml-2 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    selectedCommunity.status === "Verified"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {selectedCommunity.status}
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
      {showEditModal && selectedCommunity && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Edit Komunitas
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
                  Nama Komunitas
                </label>
                <input
                  type="text"
                  defaultValue={selectedCommunity.name}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Lokasi
                </label>
                <input
                  type="text"
                  defaultValue={selectedCommunity.location}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  defaultValue={selectedCommunity.status}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
                >
                  <option value="Verified">Verified</option>
                  <option value="Pending">Pending</option>
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
