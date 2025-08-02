"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

// Mock data
const individuals = [
  {
    id: "IND001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    status: "Active",
    joinDate: "2024-01-15",
    projectsJoined: 8,
    carbonOffset: 2400,
    location: "Jakarta, Indonesia",
  },
  {
    id: "IND002",
    name: "Michael Chen",
    email: "michael.chen@email.com",
    status: "Active",
    joinDate: "2024-01-20",
    projectsJoined: 5,
    carbonOffset: 1800,
    location: "Bandung, Indonesia",
  },
  {
    id: "IND003",
    name: "Emma Davis",
    email: "emma.davis@email.com",
    status: "Inactive",
    joinDate: "2024-01-25",
    projectsJoined: 3,
    carbonOffset: 1200,
    location: "Surabaya, Indonesia",
  },
  {
    id: "IND004",
    name: "David Wilson",
    email: "david.wilson@email.com",
    status: "Active",
    joinDate: "2024-02-01",
    projectsJoined: 12,
    carbonOffset: 3600,
    location: "Medan, Indonesia",
  },
];

export default function AdminIndividualPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredIndividuals =
    selectedStatus === "all"
      ? individuals
      : individuals.filter(
          (ind) => ind.status.toLowerCase() === selectedStatus,
        );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500 text-white";
      case "Inactive":
        return "bg-gray-500 text-white";
      case "Suspended":
        return "bg-red-500 text-white";
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
            <h1 className="text-2xl font-black text-gray-900">
              Individual Management
            </h1>
            <p className="text-gray-600">
              Manage individual users and their contributions
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Icon icon="mdi:plus" className="mr-2 h-4 w-4" />
            Add New Individual
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
            <option value="all">All Individuals</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>

        {/* Individuals Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredIndividuals.map((individual) => (
            <Card
              key={individual.id}
              className="border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black text-gray-900">
                    {individual.name}
                  </CardTitle>
                  <Badge className={getStatusColor(individual.status)}>
                    {individual.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">{individual.email}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Location
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {individual.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Join Date
                    </div>
                    <div className="text-sm text-gray-900">
                      {individual.joinDate}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Projects Joined
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {individual.projectsJoined}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Carbon Offset
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {individual.carbonOffset} tons
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:eye" className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:pencil" className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:delete" className="mr-2 h-4 w-4" />
                    Delete
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
