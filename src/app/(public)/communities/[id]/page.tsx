"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock data for community details
const community = {
  id: "COM001",
  name: "Green Earth Indonesia",
  image:
    "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=800&h=400&fit=crop&crop=center",
  location: "Jakarta, Indonesia",
  establishedYear: 2019,
  description:
    "Leading environmental organization focused on forest restoration projects and carbon absorption across Indonesia. We work with local communities to create sustainable environmental solutions.",
  longDescription:
    "Green Earth Indonesia is a pioneering environmental organization dedicated to combating climate change through innovative forest restoration and carbon absorption projects. Founded in 2019, we have successfully implemented over 50 projects across Indonesia, working closely with local communities to ensure sustainable environmental impact.",
  projects: 12,
  carbonOffset: 5600,
  activeVolunteers: 89,
  gallery: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
  ],
  projectsList: [
    {
      id: "PRJ001",
      name: "Mangrove Conservation Project",
      status: "Active",
      carbonOffset: 1200,
      volunteers: 45,
      description:
        "Protecting coastal mangrove ecosystems to prevent erosion and support marine life.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: "PRJ002",
      name: "Urban Tree Planting",
      status: "Active",
      carbonOffset: 800,
      volunteers: 32,
      description:
        "Creating green spaces in urban areas to improve air quality and biodiversity.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: "PRJ003",
      name: "Forest Restoration",
      status: "Completed",
      carbonOffset: 2000,
      volunteers: 67,
      description:
        "Large-scale forest restoration project to combat deforestation and climate change.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
    },
  ],
};

export default function CommunityDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-emerald-600 py-16 sm:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Community Image */}
            <div className="relative h-64 overflow-hidden rounded-2xl lg:h-80">
              <Image
                src={community.image}
                alt={community.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <Badge className="absolute top-4 right-4 bg-emerald-500 text-white">
                {community.establishedYear}
              </Badge>
            </div>

            {/* Community Info */}
            <div className="flex flex-col items-start justify-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Icon icon="mdi:account-group" className="mr-2 h-4 w-4" />
                Environmental Organization
              </div>
              <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl">
                {community.name}
              </h1>
              <p className="mb-6 text-lg text-white/90">
                {community.description}
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {community.projects}
                  </div>
                  <div className="text-sm text-white/70">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {community.carbonOffset}
                  </div>
                  <div className="text-sm text-white/70">Tons CO₂</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {community.activeVolunteers}
                  </div>
                  <div className="text-sm text-white/70">Active Volunteers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <TabsList className="grid h-10 grid-cols-2 rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-md">
              <TabsTrigger
                value="overview"
                className="rounded-lg px-8 py-2 font-semibold transition-all duration-300 hover:scale-102 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Icon icon="mdi:information-outline" className="mr-2 h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="rounded-lg px-8 py-2 font-semibold transition-all duration-300 hover:scale-102 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Icon
                  icon="mdi:folder-multiple-outline"
                  className="mr-2 h-4 w-4"
                />
                Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Community Details */}
                <div className="space-y-6 lg:col-span-2">
                  <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black text-gray-900">
                        About Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-gray-700">
                        {community.longDescription}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Community Gallery */}
                  <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black text-gray-900">
                        Community Gallery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {community.gallery.map((image, index) => (
                          <div
                            key={index}
                            className="relative h-48 overflow-hidden rounded-lg"
                          >
                            <Image
                              src={image}
                              alt={`Community image ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Community Stats */}
                <div className="space-y-6">
                  <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-xl font-black text-gray-900">
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full rounded-lg border-2 border-emerald-500 font-bold text-emerald-600 transition-all duration-300 hover:scale-105"
                      >
                        <Icon icon="mdi:share" className="mr-2 h-4 w-4" />
                        Share Community
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-gray-900">
                    Community Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {community.projectsList.map((project) => (
                      <Card
                        key={project.id}
                        className="group overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/50"></div>
                          <Badge className="absolute top-4 right-4 bg-emerald-500 text-white">
                            {project.status}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="mb-2 text-xl font-black text-gray-900">
                            {project.name}
                          </h3>
                          <p className="mb-4 text-sm text-gray-600">
                            {project.description}
                          </p>

                          <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
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

                          <div className="mb-4 text-sm text-gray-500">
                            <div className="font-medium">{community.name}</div>
                            <div>Active Project</div>
                          </div>

                          <Button
                            asChild
                            className="w-full rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
                          >
                            <Link href={`/projects/${project.id}`}>
                              <Icon icon="mdi:eye" className="mr-2 h-4 w-4" />
                              View Details
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
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
