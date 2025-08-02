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
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center",
  gallery: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
  ],
  volunteersList: [
    { name: "Sarah Johnson", avatar: "SJ" },
    { name: "Michael Chen", avatar: "MC" },
    { name: "Emma Davis", avatar: "ED" },
    { name: "Alex Rodriguez", avatar: "AR" },
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
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Image */}
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-2xl lg:h-80">
                <Image
                  src={project.gallery[selectedImage]}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-20 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? "border-emerald-500"
                        : "border-transparent hover:border-emerald-300"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col items-start justify-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                <Icon icon="mdi:leaf" className="mr-2 h-4 w-4" />
                {project.type}
              </div>
              <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
                {project.name}
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex h-full flex-col items-center text-center">
                    <div className="text-sm text-gray-500">Tons CO₂</div>
                    <div className="text-2xl font-black text-emerald-600">
                      {project.carbonOffset}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div className="flex h-full flex-col items-center text-center">
                    <div className="text-sm text-gray-500">Volunteers</div>
                    <div className="text-2xl font-black text-emerald-600">
                      {project.volunteers}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div className="flex h-full flex-col items-center text-center">
                    <div className="text-sm text-gray-500">Project Status</div>
                    <div className="text-2xl font-black text-emerald-600">
                      {project.status}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div className="flex h-full flex-col items-center text-center">
                    <div className="text-sm text-gray-500">Community</div>
                    <div className="text-2xl font-black text-emerald-600">
                      {project.community}
                    </div>
                  </div>
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
            <TabsList className="grid h-10 grid-cols-2 rounded-xl border border-gray-200 bg-white shadow-lg">
              <TabsTrigger
                value="overview"
                className="rounded-lg px-8 py-2 font-semibold transition-all duration-300 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Icon icon="mdi:eye" className="mr-2 h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="volunteers"
                className="rounded-lg px-8 py-2 font-semibold transition-all duration-300 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Icon icon="mdi:account-multiple" className="mr-2 h-4 w-4" />
                <span>Volunteers</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Project Details */}
                <div className="space-y-6 lg:col-span-2">
                  <Card className="border border-gray-200 bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black text-gray-900">
                        Project Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <span className="text-sm font-medium text-gray-500">
                            Start Date
                          </span>
                          <div className="text-base font-semibold text-gray-900">
                            {project.startDate}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="text-sm font-medium text-gray-500">
                            End Date
                          </span>
                          <div className="text-base font-semibold text-gray-900">
                            {project.endDate}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="text-sm font-medium text-gray-500">
                            Location
                          </span>
                          <div className="text-base font-semibold text-gray-900">
                            {project.location}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="text-sm font-medium text-gray-500">
                            Type
                          </span>
                          <div className="text-base font-semibold text-gray-900">
                            {project.type}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-gray-500">
                          Description
                        </span>
                        <p className="leading-relaxed text-gray-700">
                          {project.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Project Stats */}
                <div className="space-y-6">
                  <Card className="border border-gray-200 bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-black text-gray-900">
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl">
                        <Icon
                          icon="mdi:account-plus"
                          className="mr-2 h-4 w-4"
                        />
                        Join as Volunteer
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full rounded-lg border-2 border-emerald-500 font-bold text-emerald-600 transition-all duration-300"
                      >
                        <Icon icon="mdi:share" className="mr-2 h-4 w-4" />
                        Share Project
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200 bg-white shadow-lg">
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
                          {project.status}
                        </div>
                        <div className="text-sm text-gray-500">
                          Project Status
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="volunteers" className="space-y-6">
              <Card className="border border-gray-200 bg-white shadow-lg">
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
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
                          {volunteer.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {volunteer.name}
                          </div>
                        </div>
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
