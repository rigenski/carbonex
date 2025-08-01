"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";

// Mock data for project details
const project = {
  id: "PRJ001",
  name: "Forest Restoration Initiative",
  status: "Active",
  type: "Reforestation",
  treeStatus: "In Planting",
  description:
    "Corporate-funded reforestation project with professional management team. This project aims to restore degraded forest areas and create sustainable carbon sinks through strategic tree planting and ecosystem restoration.",
  community: "Ecological Balance Corporation",
  carbonOffset: 1200,
  volunteers: 45,
  maxVolunteers: 80,
  startDate: "2024-12-01",
  endDate: "2025-06-30",
  location: "Sumatra, Indonesia",
  image:
    "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=800&h=400&fit=crop&crop=center",
  gallery: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
  ],
  volunteersList: [
    { name: "Sarah Johnson", role: "Senior Volunteer", avatar: "SJ" },
    { name: "Michael Chen", role: "Team Leader", avatar: "MC" },
    { name: "Emma Davis", role: "Volunteer", avatar: "ED" },
    { name: "Alex Rodriguez", role: "Volunteer", avatar: "AR" },
  ],
  updates: [
    {
      date: "2024-12-15",
      title: "Project Launch",
      description:
        "Successfully launched the forest restoration project with initial tree planting phase.",
    },
    {
      date: "2024-12-20",
      title: "Volunteer Training",
      description:
        "Completed training session for 45 volunteers on proper tree planting techniques.",
    },
    {
      date: "2024-12-25",
      title: "First Milestone",
      description:
        "Reached 25% of target tree planting goal with excellent survival rates.",
    },
  ],
};

export default function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 py-16 sm:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden rounded-2xl lg:h-80">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <Badge className="absolute top-4 right-4 bg-emerald-500 text-white">
                {project.status}
              </Badge>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Icon icon="mdi:leaf" className="mr-2 h-4 w-4" />
                {project.type}
              </div>
              <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl">
                {project.name}
              </h1>
              <p className="mb-6 text-lg text-white/90">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {project.carbonOffset}
                  </div>
                  <div className="text-sm text-white/70">Tons CO₂</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {project.volunteers}
                  </div>
                  <div className="text-sm text-white/70">Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {project.treeStatus}
                  </div>
                  <div className="text-sm text-white/70">Tree Status</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {project.community}
                  </div>
                  <div className="text-sm text-white/70">Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <TabsList className="grid w-full grid-cols-4 rounded-xl bg-white/90 p-2 shadow-lg backdrop-blur-md">
              <TabsTrigger
                value="overview"
                className="flex items-center space-x-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <Icon icon="mdi:eye" className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="milestones"
                className="flex items-center space-x-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <Icon icon="mdi:flag-checkered" className="h-4 w-4" />
                <span>Milestones</span>
              </TabsTrigger>
              <TabsTrigger
                value="volunteers"
                className="flex items-center space-x-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <Icon icon="mdi:account-multiple" className="h-4 w-4" />
                <span>Volunteers</span>
              </TabsTrigger>
              <TabsTrigger
                value="updates"
                className="flex items-center space-x-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <Icon icon="mdi:newspaper" className="h-4 w-4" />
                <span>Updates</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Project Details */}
                <div className="space-y-6 lg:col-span-2">
                  <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black text-gray-900">
                        Project Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-bold text-gray-500">
                            Start Date
                          </span>
                          <div className="text-lg font-bold text-gray-900">
                            {project.startDate}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-gray-500">
                            End Date
                          </span>
                          <div className="text-lg font-bold text-gray-900">
                            {project.endDate}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-gray-500">
                            Location
                          </span>
                          <div className="text-lg font-bold text-gray-900">
                            {project.location}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-gray-500">
                            Type
                          </span>
                          <div className="text-lg font-bold text-gray-900">
                            {project.type}
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-gray-500">
                          Description
                        </span>
                        <p className="mt-2 text-gray-700">
                          {project.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Gallery */}
                  <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black text-gray-900">
                        Project Gallery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {project.gallery.map((image, index) => (
                          <div
                            key={index}
                            className="relative h-48 overflow-hidden rounded-lg"
                          >
                            <Image
                              src={image}
                              alt={`Project image ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Project Stats */}
                <div className="space-y-6">
                  <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-xl font-black text-gray-900">
                        Project Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-black text-emerald-600">
                          {project.carbonOffset}
                        </div>
                        <div className="text-sm text-gray-500">
                          Tons CO₂ Offset
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-emerald-600">
                          {project.volunteers}/{project.maxVolunteers}
                        </div>
                        <div className="text-sm text-gray-500">
                          Active Volunteers
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-emerald-600">
                          {project.treeStatus}
                        </div>
                        <div className="text-sm text-gray-500">Tree Status</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-xl font-black text-gray-900">
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <Icon
                          icon="mdi:account-plus"
                          className="mr-2 h-4 w-4"
                        />
                        Join as Volunteer
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full rounded-lg border-2 border-emerald-500 font-bold text-emerald-600 transition-all duration-300 hover:scale-105"
                      >
                        <Icon icon="mdi:share" className="mr-2 h-4 w-4" />
                        Share Project
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full rounded-lg border-2 border-emerald-500 font-bold text-emerald-600 transition-all duration-300 hover:scale-105"
                      >
                        <Icon icon="mdi:heart" className="mr-2 h-4 w-4" />
                        Follow Project
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="volunteers" className="space-y-6">
              <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-gray-900">
                    Volunteer Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {project.volunteersList.map((volunteer, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 font-bold text-white">
                          {volunteer.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">
                            {volunteer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {volunteer.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="updates" className="space-y-6">
              <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-gray-900">
                    Project Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {project.updates.map((update, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-emerald-500 pl-4"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-gray-900">
                            {update.title}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {update.date}
                          </span>
                        </div>
                        <p className="mt-2 text-gray-600">
                          {update.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
