"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

// Mock data
const stats = [
  {
    title: "Total Projects",
    value: "156",
    change: "+12%",
    changeType: "positive",
    icon: "mdi:leaf",
  },
  {
    title: "Active Communities",
    value: "89",
    change: "+8%",
    changeType: "positive",
    icon: "mdi:account-group",
  },
  {
    title: "Carbon Offset",
    value: "45.2K",
    change: "+15%",
    changeType: "positive",
    icon: "mdi:trending-up",
  },
  {
    title: "Total Volunteers",
    value: "2.3K",
    change: "+5%",
    changeType: "positive",
    icon: "mdi:account-multiple",
  },
];

const recentProjects = [
  {
    id: "PRJ001",
    name: "Forest Restoration Initiative",
    community: "Green Earth Indonesia",
    status: "Active",
    carbonOffset: 1200,
    volunteers: 45,
  },
  {
    id: "PRJ002",
    name: "Urban Tree Planting",
    community: "City Green Initiative",
    status: "Active",
    carbonOffset: 800,
    volunteers: 32,
  },
  {
    id: "PRJ003",
    name: "Mangrove Conservation",
    community: "Coastal Guardians",
    status: "Planning",
    carbonOffset: 1500,
    volunteers: 28,
  },
];

const recentCommunities = [
  {
    id: "COM001",
    name: "Green Earth Indonesia",
    location: "Jakarta, Indonesia",
    projects: 12,
    carbonOffset: 5600,
    members: 234,
  },
  {
    id: "COM002",
    name: "Solar Future Collective",
    location: "Bandung, Indonesia",
    projects: 8,
    carbonOffset: 3200,
    members: 156,
  },
  {
    id: "COM003",
    name: "Urban Sustainability Network",
    location: "Surabaya, Indonesia",
    projects: 15,
    carbonOffset: 4200,
    members: 189,
  },
];

export default function AdminDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="p-6">
          <div className="mb-8 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600">
              <Icon icon="mdi:shield-crown" className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black text-gray-900">Admin Panel</h1>
              <p className="text-xs text-gray-500">Platform Management</p>
            </div>
          </div>

          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-3 rounded-lg bg-emerald-50 p-3 text-emerald-700"
            >
              <Icon icon="mdi:view-dashboard" className="h-5 w-5" />
              <span className="font-bold">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-50"
            >
              <Icon icon="mdi:leaf" className="h-5 w-5" />
              <span>Projects</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-50"
            >
              <Icon icon="mdi:account-group" className="h-5 w-5" />
              <span>Communities</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-50"
            >
              <Icon icon="mdi:account-multiple" className="h-5 w-5" />
              <span>Users</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-50"
            >
              <Icon icon="mdi:chart-line" className="h-5 w-5" />
              <span>Analytics</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-50"
            >
              <Icon icon="mdi:cog" className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-gray-200 bg-white/80 p-6 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Monitor and manage all carbon credit projects, communities, and
                environmental initiatives across the platform.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Period:</span>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="rounded-lg border-gray-200 bg-white/50 px-3 py-1 text-sm backdrop-blur-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stats Section */}
          <div className="mb-8">
            <h2 className="mb-6 text-xl font-black text-gray-900">
              Platform Overview
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-gray-500">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-black text-gray-900">
                          {stat.value}
                        </p>
                        <div className="mt-2 flex items-center">
                          <span
                            className={`text-sm font-bold ${stat.changeType === "positive" ? "text-emerald-600" : "text-red-600"}`}
                          >
                            {stat.change}
                          </span>
                          <span className="ml-1 text-sm text-gray-500">
                            from last period
                          </span>
                        </div>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600">
                        <Icon icon={stat.icon} className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Recent Projects */}
            <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900">
                  Recent Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group overflow-hidden rounded-lg border-0 bg-white/80 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {project.community}
                          </p>
                          <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="font-bold text-gray-900">
                                {project.carbonOffset} tons
                              </div>
                              <div className="text-gray-500">CO₂ Offset</div>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">
                                {project.volunteers}
                              </div>
                              <div className="text-gray-500">Volunteers</div>
                            </div>
                          </div>
                        </div>
                        <Badge
                          className={`${
                            project.status === "Active"
                              ? "bg-emerald-500 text-white"
                              : "bg-yellow-500 text-white"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Communities */}
            <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900">
                  Recent Communities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCommunities.map((community) => (
                    <div
                      key={community.id}
                      className="group overflow-hidden rounded-lg border-0 bg-white/80 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">
                            {community.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {community.location}
                          </p>
                          <div className="mt-2 grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="font-bold text-gray-900">
                                {community.projects}
                              </div>
                              <div className="text-gray-500">Projects</div>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">
                                {community.members}
                              </div>
                              <div className="text-gray-500">Members</div>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">
                                {community.carbonOffset} tons
                              </div>
                              <div className="text-gray-500">CO₂ Offset</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600">
                          <Icon
                            icon="mdi:account-group"
                            className="h-5 w-5 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
