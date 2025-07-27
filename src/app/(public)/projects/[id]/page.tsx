"use client";

import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

// Mock project data (in real app, this would come from API)
const mockProject = {
  id: "PRJ001",
  name: "Forest Restoration Initiative",
  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop&crop=center",
  ],
  address: {
    full: "Jakarta, Indonesia",
    regional: "Java",
    province: "DKI Jakarta",
    city: "Jakarta",
    district: "Central Jakarta",
    postalCode: "10110",
  },
  estimateCarbon: 1200,
  totalVolunteers: 45,
  currentVolunteers: 32,
  estimateDate: {
    start: "2024-12-01",
    end: "2025-06-30",
  },
  status: "Active",
  projectType: "Reforestation", // Changed from type to projectType
  treeStatus: "35,000 trees planted", // Changed from trees planted number to status
  shortDescription:
    "Large-scale forest restoration project to combat deforestation and create carbon sinks.",
  fullDescription: `This comprehensive forest restoration initiative aims to restore 500 hectares of degraded forestland in the Jakarta metropolitan area. The project focuses on native species reforestation, soil rehabilitation, and community engagement to create sustainable carbon sequestration solutions.

Our approach combines scientific research with traditional ecological knowledge to ensure the highest success rate for tree survival and ecosystem restoration. The project includes nursery development, community training programs, and long-term monitoring systems.

Key objectives include:
- Restore 500 hectares of degraded forest
- Plant 100,000 native trees
- Engage 1,000+ community members
- Create 50 local employment opportunities
- Establish sustainable carbon monitoring systems

The project follows international carbon credit standards and will be verified by independent third-party organizations throughout its implementation.`,
  community: {
    name: "Green Earth Indonesia",
    verified: true,
    description:
      "Leading environmental organization focused on forest conservation and restoration across Indonesia.",
    projects: 23,
  },
  volunteers: [
    { name: "John Doe", role: "Team Lead", joinDate: "2024-10-15", hours: 120 },
    {
      name: "Jane Smith",
      role: "Volunteer",
      joinDate: "2024-11-01",
      hours: 45,
    },
    {
      name: "Ahmad Rahman",
      role: "Local Coordinator",
      joinDate: "2024-10-01",
      hours: 200,
    },
  ],
};

export default function ProjectDetailPage() {
  const { user } = useAuthStore();
  const [project] = useState(mockProject);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already joined this project
    if (user && user.role === "individual") {
      // This would be an API call in real app
      setIsJoined(false);
    }
  }, [user]);

  const handleJoinProject = async () => {
    if (!user) {
      // Redirect to login
      return;
    }

    setIsLoading(true);
    try {
      // API call to join project
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsJoined(true);
    } catch (error) {
      console.error("Failed to join project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeaveProject = async () => {
    setIsLoading(true);
    try {
      // API call to leave project
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsJoined(false);
    } catch (error) {
      console.error("Failed to leave project:", error);
    } finally {
      setIsLoading(false);
    }
  };

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  {project.name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Images */}
            <div>
              <div className="relative">
                <img
                  src={project.images[activeImageIndex]}
                  alt={project.name}
                  className="h-96 w-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-3 w-3 rounded-full ${
                        activeImageIndex === index
                          ? "bg-white"
                          : "bg-opacity-50 bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-20 w-20 overflow-hidden rounded-lg border-2 ${
                      activeImageIndex === index
                        ? "border-green-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </span>
                <span className="text-sm text-gray-500">{project.id}</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                {project.name}
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                {project.shortDescription}
              </p>

              {/* Key Stats */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-green-50 p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {project.estimateCarbon.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Tons CO₂ Target</div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {project.currentVolunteers}/{project.totalVolunteers}
                  </div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {project.projectType}
                  </div>
                  <div className="text-sm text-gray-600">Project Type</div>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <div className="text-2xl font-bold text-orange-600">
                    {project.treeStatus}
                  </div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">{project.address.full}</p>
                <p className="text-sm text-gray-500">
                  {project.address.district}, {project.address.city},{" "}
                  {project.address.province}
                </p>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Project Duration
                </h3>
                <p className="text-gray-600">
                  {formatDate(project.estimateDate.start)} -{" "}
                  {formatDate(project.estimateDate.end)}
                </p>
              </div>

              {/* Community */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Organized By
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="font-semibold text-green-600">
                      {project.community.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">
                        {project.community.name}
                      </span>
                      {project.community.verified && (
                        <svg
                          className="ml-1 h-4 w-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {project.community.projects} projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {user?.role === "individual" && (
                  <div>
                    {!isJoined ? (
                      <button
                        onClick={handleJoinProject}
                        disabled={isLoading}
                        className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isLoading ? "Joining..." : "Join This Project"}
                      </button>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-full rounded-lg bg-green-100 px-6 py-3 text-center font-semibold text-green-800">
                          ✓ You&apos;ve Joined This Project
                        </div>
                        <button
                          onClick={handleLeaveProject}
                          disabled={isLoading}
                          className="w-full rounded-lg border border-red-300 px-6 py-2 font-medium text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isLoading ? "Leaving..." : "Leave Project"}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {user?.role === "community" && (
                  <div className="space-y-2">
                    <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                      Manage Project
                    </button>
                    <button className="w-full rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                      View Analytics
                    </button>
                  </div>
                )}

                {!user && (
                  <div className="space-y-2">
                    <Link
                      href="/register"
                      className="block w-full rounded-lg bg-green-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-green-700"
                    >
                      Register to Join
                    </Link>
                    <Link
                      href="/login"
                      className="block w-full rounded-lg border border-gray-300 px-6 py-2 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: "overview", label: "Overview" },
              { id: "volunteers", label: "Volunteers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 px-1 py-4 text-sm font-medium ${
                  activeTab === tab.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === "overview" && (
          <div className="prose max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Project Overview
            </h2>
            <div className="whitespace-pre-line text-gray-600">
              {project.fullDescription}
            </div>
          </div>
        )}

        {activeTab === "volunteers" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Project Volunteers
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Volunteer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Join Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Hours
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {project.volunteers.map((volunteer, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                            <span className="text-sm font-medium text-gray-600">
                              {volunteer.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {volunteer.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                        {volunteer.role}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {formatDate(volunteer.joinDate)}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                        {volunteer.hours}h
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
