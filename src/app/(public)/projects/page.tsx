"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

// Mock data
const projects = [
  {
    id: "PRJ001",
    name: "Forest Restoration Initiative",
    status: "Active",
    description:
      "Corporate-funded reforestation project with professional management team.",
    community: "Ecological Balance Corporation",
    carbonOffset: 1200,
    volunteers: 45,
    startDate: "2024-12-01",
    endDate: "2025-06-30",
    image:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: "PRJ002",
    name: "Urban Green Spaces",
    status: "Active",
    description:
      "Creating green spaces in urban areas to improve air quality and biodiversity.",
    community: "City Green Initiative",
    carbonOffset: 800,
    volunteers: 32,
    startDate: "2024-11-15",
    endDate: "2025-05-15",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: "PRJ003",
    name: "Mangrove Conservation",
    status: "Active",
    description:
      "Protecting coastal mangrove ecosystems to prevent erosion and support marine life.",
    community: "Coastal Guardians",
    carbonOffset: 1500,
    volunteers: 28,
    startDate: "2024-10-01",
    endDate: "2025-09-30",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: "PRJ004",
    name: "Community Garden Network",
    status: "Active",
    description:
      "Establishing community gardens to promote local food production and education.",
    community: "Green Thumb Collective",
    carbonOffset: 600,
    volunteers: 55,
    startDate: "2024-09-01",
    endDate: "2025-08-31",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: "PRJ005",
    name: "Watershed Protection",
    status: "Active",
    description:
      "Protecting watershed areas to ensure clean water supply and prevent flooding.",
    community: "Water Guardians",
    carbonOffset: 2000,
    volunteers: 40,
    startDate: "2024-08-15",
    endDate: "2025-07-15",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: "PRJ006",
    name: "Renewable Energy Installation",
    status: "Active",
    description:
      "Installing solar panels and wind turbines in rural communities.",
    community: "Clean Energy Alliance",
    carbonOffset: 3000,
    volunteers: 25,
    startDate: "2024-07-01",
    endDate: "2025-06-30",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
  },
];

const projectStatuses = ["All", "Active", "Completed", "Planning"];
const projectTypes = [
  "All",
  "Reforestation",
  "Urban Greening",
  "Mangrove Conservation",
  "Community Garden",
  "Watershed Protection",
  "Renewable Energy",
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.community.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter(
        (project) => project.status === selectedStatus,
      );
    }

    // Filter by type (simplified for demo)
    if (selectedType !== "All") {
      filtered = filtered.filter((project) =>
        project.name.includes(selectedType),
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "carbon":
          return b.carbonOffset - a.carbonOffset;
        case "volunteers":
          return b.volunteers - a.volunteers;
        case "date":
          return (
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedStatus, selectedType, sortBy]);

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
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Icon icon="mdi:leaf" className="mr-2 h-4 w-4" />
              Discover Impactful Projects
            </div>
            <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Carbon Credit Projects
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl">
              Explore verified carbon offset projects that are making real
              environmental impact. Join communities and contribute to a
              sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
                  <Label htmlFor="search" className="mb-2 text-sm font-bold">
                    Search Projects
                  </Label>
                  <Input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name, description, or community..."
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="status" className="mb-2 text-sm font-bold">
                    Status
                  </Label>
                  <Select
                    value={selectedStatus}
                    onValueChange={setSelectedStatus}
                  >
                    <SelectTrigger className="w-full rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectStatuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="type" className="mb-2 text-sm font-bold">
                    Type
                  </Label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Showing {filteredProjects.length} of {projects.length} projects
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-nowrap text-gray-600">
                Sort by:
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm">
                  <SelectValue placeholder="Choose sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="carbon">Carbon Offset</SelectItem>
                  <SelectItem value="volunteers">Volunteers</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
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
                      <div className="font-medium">{project.community}</div>
                      <div>
                        {project.startDate} - {project.endDate}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-700"
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
          ) : (
            <div className="py-12 text-center">
              <Icon
                icon="mdi:leaf-off"
                className="mx-auto h-16 w-16 text-gray-400"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No projects found
              </h3>
              <p className="mt-2 text-gray-600">
                Adjust your search criteria or filters to find projects.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
