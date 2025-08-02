"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

// Mock data - hanya data yang relevan untuk individual
const stats = [
  {
    title: "Projects Joined",
    value: "8",
    change: "+2",
    changeType: "positive",
    icon: "mdi:leaf",
  },
  {
    title: "Carbon Offset",
    value: "2.4K",
    change: "+15%",
    changeType: "positive",
    icon: "mdi:trending-up",
  },
  {
    title: "Volunteer Hours",
    value: "156",
    change: "+8%",
    changeType: "positive",
    icon: "mdi:clock",
  },
  {
    title: "Communities",
    value: "3",
    change: "+1",
    changeType: "positive",
    icon: "mdi:account-group",
  },
];

const myActiveProjects = [
  {
    id: "PRJ001",
    name: "Forest Restoration Initiative",
    community: "Green Earth Indonesia",
    status: "Active",
    carbonOffset: 1200,
    volunteers: 45,
    role: "Volunteer",
    hoursContributed: 156,
  },
  {
    id: "PRJ002",
    name: "Urban Tree Planting",
    community: "City Green Initiative",
    status: "Active",
    carbonOffset: 800,
    volunteers: 32,
    role: "Team Leader",
    hoursContributed: 89,
  },
  {
    id: "PRJ003",
    name: "Mangrove Conservation",
    community: "Coastal Guardians",
    status: "Planning",
    carbonOffset: 1500,
    volunteers: 28,
    role: "Volunteer",
    hoursContributed: 45,
  },
];

export default function IndividualDashboardPage() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 p-6 backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-black text-gray-900">
            Welcome Back, Sarah!
          </h1>
          <p className="text-gray-600">
            Track your environmental impact and continue making a difference
            through carbon credit projects.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Stats Section */}
        <div className="mb-8">
          <h2 className="mb-6 text-xl font-black text-gray-900">
            Your Impact Overview
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
        <div className="grid grid-cols-1 gap-8">
          {/* My Active Projects */}
          <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-gray-900">
                My Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myActiveProjects.map((project) => (
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
                              {project.hoursContributed}h
                            </div>
                            <div className="text-gray-500">Hours</div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="font-bold text-emerald-600">
                            {project.role}
                          </span>
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
        </div>
      </div>
    </div>
  );
}
