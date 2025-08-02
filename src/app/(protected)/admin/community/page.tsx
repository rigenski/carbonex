"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

// Mock data
const communities = [
  {
    id: "COM001",
    name: "Green Earth Indonesia",
    email: "contact@greenearth.id",
    status: "Approved",
    registerDate: "2024-01-15",
    members: 234,
    projects: 12,
    carbonOffset: 5600,
    location: "Jakarta, Indonesia",
    description: "Environmental conservation and sustainability initiatives",
  },
  {
    id: "COM002",
    name: "Solar Future Collective",
    email: "info@solarfuture.id",
    status: "Pending",
    registerDate: "2024-01-20",
    members: 156,
    projects: 8,
    carbonOffset: 3200,
    location: "Bandung, Indonesia",
    description: "Renewable energy and solar power projects",
  },
  {
    id: "COM003",
    name: "Urban Sustainability Network",
    email: "hello@urbansustain.id",
    status: "Approved",
    registerDate: "2024-01-25",
    members: 189,
    projects: 15,
    carbonOffset: 4200,
    location: "Surabaya, Indonesia",
    description: "Urban environmental and sustainability projects",
  },
  {
    id: "COM004",
    name: "Coastal Guardians",
    email: "contact@coastalguard.id",
    status: "Rejected",
    registerDate: "2024-02-01",
    members: 89,
    projects: 5,
    carbonOffset: 1800,
    location: "Medan, Indonesia",
    description: "Marine conservation and coastal protection",
  },
];

export default function AdminCommunityPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredCommunities =
    selectedStatus === "all"
      ? communities
      : communities.filter(
          (com) => com.status.toLowerCase() === selectedStatus,
        );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-emerald-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      case "Suspended":
        return "bg-gray-500 text-white";
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
              Community Management
            </h1>
            <p className="text-gray-600">
              Manage community registrations and approvals
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Icon icon="mdi:plus" className="mr-2 h-4 w-4" />
            Add New Community
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
            <option value="all">All Communities</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredCommunities.map((community) => (
            <Card
              key={community.id}
              className="border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black text-gray-900">
                    {community.name}
                  </CardTitle>
                  <Badge className={getStatusColor(community.status)}>
                    {community.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">{community.email}</p>
                <p className="text-sm text-gray-600">{community.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Location
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {community.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Register Date
                    </div>
                    <div className="text-sm text-gray-900">
                      {community.registerDate}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Members
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {community.members}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Projects
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {community.projects}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Carbon Offset
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {community.carbonOffset} tons
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:eye" className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  {community.status === "Pending" && (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon icon="mdi:check" className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon icon="mdi:close" className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                    </>
                  )}
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
