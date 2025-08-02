"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

// Mock data - projects that the individual user has joined
const myProjects = [
  {
    id: "PRJ001",
    name: "Forest Restoration Initiative",
    community: "Green Earth Indonesia",
    status: "Active",
    carbonOffset: 1200,
    volunteers: 45,
    role: "Volunteer",
    joinDate: "2024-01-15",
    hoursContributed: 156,
    description: "Restoring degraded forest areas and planting native trees",
  },
  {
    id: "PRJ002",
    name: "Urban Tree Planting",
    community: "City Green Initiative",
    status: "Active",
    carbonOffset: 800,
    volunteers: 32,
    role: "Team Leader",
    joinDate: "2024-01-20",
    hoursContributed: 89,
    description: "Planting trees in urban areas to improve air quality",
  },
  {
    id: "PRJ003",
    name: "Mangrove Conservation",
    community: "Coastal Guardians",
    status: "Planning",
    carbonOffset: 1500,
    volunteers: 28,
    role: "Volunteer",
    joinDate: "2024-02-01",
    hoursContributed: 45,
    description: "Protecting and restoring mangrove ecosystems",
  },
  {
    id: "PRJ004",
    name: "Community Garden",
    community: "Urban Sustainability Network",
    status: "Completed",
    carbonOffset: 400,
    volunteers: 20,
    role: "Volunteer",
    joinDate: "2023-06-01",
    hoursContributed: 120,
    description: "Creating community gardens for sustainable food production",
  },
];

export default function IndividualProjectPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredProjects =
    selectedStatus === "all"
      ? myProjects
      : myProjects.filter(
          (project) => project.status.toLowerCase() === selectedStatus,
        );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500 text-white";
      case "Planning":
        return "bg-yellow-500 text-white";
      case "Completed":
        return "bg-blue-500 text-white";
      case "On Hold":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Team Leader":
        return "bg-purple-500 text-white";
      case "Volunteer":
        return "bg-emerald-500 text-white";
      case "Coordinator":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 p-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900">My Projects</h1>
            <p className="text-gray-600">
              View and track your participation in carbon credit projects
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Icon icon="mdi:plus" className="mr-2 h-4 w-4" />
            Join New Project
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Filters */}
        <div className="mb-6 flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">
            Filter by Status:
          </span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-lg border-gray-200 bg-white px-3 py-2 text-sm"
          >
            <option value="all">All Projects</option>
            <option value="active">Active</option>
            <option value="planning">Planning</option>
            <option value="completed">Completed</option>
            <option value="on hold">On Hold</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black text-gray-900">
                    {project.name}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge className={getRoleColor(project.role)}>
                      {project.role}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{project.community}</p>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Carbon Offset
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {project.carbonOffset} tons
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Total Volunteers
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {project.volunteers}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Hours Contributed
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {project.hoursContributed}h
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Join Date
                    </div>
                    <div className="text-sm text-gray-900">
                      {project.joinDate}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:eye" className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:calendar" className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:chart-line" className="mr-2 h-4 w-4" />
                    Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
