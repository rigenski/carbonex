"use client";

import {
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function AdminDashboard() {
  // Mock data
  const stats = {
    totalProjects: 156,
    totalCommunities: 89,
    totalIndividuals: 1247,
    activeProjects: 89,
  };

  const recentProjects = [
    {
      id: "PRJ001",
      name: "Inisiatif Restorasi Hutan",
      community: "Green Earth Indonesia",
      status: "Aktif",
      volunteers: 45,
      targetTrees: 5000,
    },
    {
      id: "PRJ002",
      name: "Proyek Panel Surya Komunitas",
      community: "Solar Future Collective",
      status: "Perencanaan",
      volunteers: 23,
      targetTrees: 3000,
    },
  ];

  const recentCommunities = [
    {
      id: "COM001",
      name: "Green Earth Indonesia",
      location: "Jakarta, Indonesia",
      projects: 23,
      members: 156,
    },
    {
      id: "COM002",
      name: "Solar Future Collective",
      location: "Bandung, Indonesia",
      projects: 15,
      members: 89,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                              <FolderIcon className="h-8 w-8 text-primary" />
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
              <UsersIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total Komunitas
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalCommunities}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UserIcon className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total Individu
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalIndividuals}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-8 w-8 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Proyek Aktif</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.activeProjects}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Proyek Terbaru</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentProjects.map((project) => (
            <div key={project.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-500">{project.community}</p>
                  <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                    <span>Status: {project.status}</span>
                    <span>Relawan: {project.volunteers}</span>
                    <span>Target: {project.targetTrees} pohon</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Communities */}
      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">
            Komunitas Terbaru
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentCommunities.map((community) => (
            <div key={community.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {community.name}
                  </h4>
                  <p className="text-sm text-gray-500">{community.location}</p>
                  <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                    <span>{community.projects} proyek</span>
                    <span>{community.members} anggota</span>
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
