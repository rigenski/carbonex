"use client";

import Image from "next/image";
import {
  ChartBarIcon,
  FolderIcon,
  SparklesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function IndividualDashboard() {
  // Mock data
  const stats = {
    totalProjectsJoined: 8,
    totalHoursContributed: 156,
    totalTreesPlanted: 89,
    totalImpact: 2450,
  };

  const recentProjects = [
    {
      id: "PRJ001",
      name: "Forest Restoration Initiative",
      community: "Green Earth Indonesia",
      status: "Active",
      treesPlanted: 45,
      hoursContributed: 24,
      coverImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: "PRJ002",
      name: "Solar Panel Community Project",
      community: "Solar Future Collective",
      status: "Completed",
      treesPlanted: 32,
      hoursContributed: 18,
      coverImage:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const upcomingEvents = [
    {
      id: "EVT001",
      name: "Tree Planting Day",
      date: "2024-03-15",
      location: "Bandung, Jawa Barat",
      participants: 45,
    },
    {
      id: "EVT002",
      name: "Environmental Workshop",
      date: "2024-03-20",
      location: "Jakarta",
      participants: 30,
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
              <p className="text-sm font-medium text-gray-500">
                Proyek Bergabung
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalProjectsJoined}
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
              <p className="text-sm font-medium text-gray-500">
                Jam Kontribusi
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalHoursContributed}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <SparklesIcon className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Pohon Tertanam
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalTreesPlanted}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <HeartIcon className="h-8 w-8 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Dampak</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalImpact}
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
                    <p className="text-sm text-gray-500">{project.community}</p>
                    <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          project.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span>Pohon: {project.treesPlanted}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Acara Mendatang</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {event.name}
                  </h4>
                  <p className="text-sm text-gray-500">{event.location}</p>
                  <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                    <span>{event.date}</span>
                    <span>{event.participants} peserta</span>
                  </div>
                </div>
                <button className="rounded-md bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-700">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
