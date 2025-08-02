"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  {
    title: "Community Members",
    value: "234",
    change: "+12",
    changeType: "positive",
    icon: "mdi:account-group",
  },
  {
    title: "Volunteer Hours",
    value: "1.2K",
    change: "+25%",
    changeType: "positive",
    icon: "mdi:clock",
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

const recentMembers = [
  {
    name: "Sarah Johnson",
    role: "Volunteer",
    joinedDate: "2024-01-15",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Team Leader",
    joinedDate: "2024-01-20",
    avatar: "MC",
  },
  {
    name: "Emma Davis",
    role: "Volunteer",
    joinedDate: "2024-01-25",
    avatar: "ED",
  },
];

const upcomingEvents = [
  {
    title: "Tree Planting Workshop",
    date: "2024-02-15",
    time: "09:00 AM",
    location: "Central Park",
    attendees: 45,
  },
  {
    title: "Environmental Awareness Seminar",
    date: "2024-02-20",
    time: "02:00 PM",
    location: "Community Center",
    attendees: 32,
  },
  {
    title: "Carbon Offset Training",
    date: "2024-02-25",
    time: "10:00 AM",
    location: "Green Office",
    attendees: 28,
  },
];

export default function CommunityDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

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
            Community Overview
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Active Projects */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900">
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group overflow-hidden rounded-lg border-0 bg-white/80 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="font-bold text-gray-900">
                          {project.name}
                        </h3>
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Members */}
            <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-black text-gray-900">
                  Recent Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                        {member.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {member.role} • {member.joinedDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-black text-gray-900">
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="rounded-lg bg-gray-50 p-3">
                      <h4 className="font-bold text-gray-900">{event.title}</h4>
                      <div className="mt-1 text-xs text-gray-500">
                        <div>
                          {event.date} at {event.time}
                        </div>
                        <div>{event.location}</div>
                        <div>{event.attendees} attendees</div>
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
