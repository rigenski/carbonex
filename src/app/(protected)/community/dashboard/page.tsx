"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

// Mock data
const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+3",
    changeType: "positive",
    icon: "mdi:leaf",
  },
  {
    title: "Total Carbon Offset",
    value: "5.6K",
    change: "+18%",
    changeType: "positive",
    icon: "mdi:trending-up",
  },
];

const activeProjects = [
  {
    id: "PRJ001",
    name: "Forest Restoration Initiative",
    status: "Active",
    carbonOffset: 1200,
    volunteers: 45,
    progress: 75,
  },
  {
    id: "PRJ002",
    name: "Urban Tree Planting",
    status: "Active",
    carbonOffset: 800,
    volunteers: 32,
    progress: 60,
  },
  {
    id: "PRJ003",
    name: "Mangrove Conservation",
    status: "Planning",
    carbonOffset: 1500,
    volunteers: 28,
    progress: 25,
  },
];

export default function CommunityDashboardPage() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 p-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900">
              Green Earth Indonesia
            </h1>
            <p className="text-gray-600">
              Manage your environmental projects and community initiatives to
              create lasting impact.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Stats Section */}
        <div className="mb-8">
          <h2 className="mb-6 text-xl font-black text-gray-900">
            Community Overview
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
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

        {/* Active Projects */}
        <div className="mb-8">
          <h2 className="mb-6 text-xl font-black text-gray-900">
            Active Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {activeProjects.map((project) => (
              <Card
                key={project.id}
                className="border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-gray-900">
                      {project.name}
                    </CardTitle>
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
                </CardHeader>
                <CardContent>
                  <div className="mb-3 grid grid-cols-2 gap-4 text-sm">
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
                  <div className="mb-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-bold text-gray-900">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-emerald-600 transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
