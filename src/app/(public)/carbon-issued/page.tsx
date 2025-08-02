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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";

// Mock data
const projects = [
  {
    id: "CRB001",
    name: "Forest Restoration Project",
    image:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
    location: "Sumatra, Indonesia",
    carbonCredits: 2500,
    issueDate: "2024-07-15",
    status: "Issued",
    description:
      "Large-scale forest restoration project that successfully absorbed carbon and received verified credits.",
    community: "Green Earth Indonesia",
  },
  {
    id: "CRB002",
    name: "Community Solar Panel Project",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
    location: "Bandung, Indonesia",
    carbonCredits: 1800,
    issueDate: "2024-06-01",
    status: "Issued",
    description:
      "Successfully installed solar panels that reduce carbon emissions and generate verified credits.",
    community: "Solar Future Collective",
  },
  {
    id: "CRB003",
    name: "Waste Management Initiative",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center",
    location: "Surabaya, Indonesia",
    carbonCredits: 1200,
    issueDate: "2024-04-20",
    retiredDate: "2024-08-15",
    status: "Withdrawn",
    description:
      "Comprehensive waste management program that achieved carbon reduction targets and credits have been withdrawn.",
    community: "Urban Sustainability Network",
  },
  {
    id: "CRB004",
    name: "Mangrove Conservation Project",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
    location: "Bali, Indonesia",
    carbonCredits: 3200,
    issueDate: "2024-12-10",
    status: "Issued",
    description:
      "Coastal mangrove ecosystem restoration that successfully generated verified carbon credits.",
    community: "Marine Conservation Alliance",
  },
  {
    id: "CRB005",
    name: "Wind Energy Farm",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=250&fit=crop&crop=center",
    location: "Makassar, Indonesia",
    carbonCredits: 4500,
    issueDate: "2024-02-15",
    retiredDate: "2024-09-20",
    status: "Withdrawn",
    description:
      "Large-scale wind power plant that generates clean energy and carbon credits, now withdrawn by corporate buyer.",
    community: "Wind Energy Coalition",
  },
  {
    id: "CRB006",
    name: "Urban Tree Planting",
    image:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
    location: "Yogyakarta, Indonesia",
    carbonCredits: 900,
    issueDate: "2024-05-25",
    status: "Issued",
    description:
      "Community-based urban tree planting initiative that successfully absorbed carbon in urban areas.",
    community: "Green City Movement",
  },
];

const projectStatuses = ["All", "Issued", "Withdrawn"];

export default function CarbonIssuedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("issueDate");

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.community.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter(
        (project) => project.status === selectedStatus,
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "issueDate":
          return (
            new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
          );
        case "name":
          return a.name.localeCompare(b.name);
        case "carbon":
          return b.carbonCredits - a.carbonCredits;
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedStatus, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

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
              <Icon icon="mdi:trending-up" className="mr-2 h-4 w-4" />
              Premium Carbon Credit Market
            </div>
            <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Carbon Credits Issued
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl">
              Access high-quality triple-verified carbon credits ready for
              direct purchase. Each credit represents measurable CO₂ reduction
              with guaranteed authenticity and environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Label htmlFor="search" className="mb-2 text-sm font-bold">
                    Search Carbon Credits
                  </Label>
                  <Input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name, location, or community..."
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
                          {status === "All"
                            ? "All"
                            : status === "Issued"
                              ? "Issued"
                              : "Withdrawn"}
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

      {/* Results Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Showing {filteredProjects.length} of {projects.length} carbon
                credit projects
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
                  <SelectItem value="issueDate">Issue Date</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="carbon">Carbon Credits</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="font-bold">Project</TableHead>
                      <TableHead className="font-bold">Location</TableHead>
                      <TableHead className="font-bold">
                        Carbon Credits
                      </TableHead>
                      <TableHead className="font-bold">Status</TableHead>
                      <TableHead className="font-bold">Date</TableHead>
                      <TableHead className="font-bold">Community</TableHead>
                      <TableHead className="font-bold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProjects.map((project) => (
                      <TableRow key={project.id} className="border-gray-100">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                              <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">
                                {project.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                Carbon credits issued
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-600">
                            {project.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-bold text-gray-900">
                            {project.carbonCredits.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              project.status === "Issued"
                                ? "default"
                                : "secondary"
                            }
                            className="bg-emerald-500 text-white"
                          >
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-xs text-gray-500">
                            <div>Issued: {formatDate(project.issueDate)}</div>
                            {project.retiredDate && (
                              <div>
                                Retired: {formatDate(project.retiredDate)}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-600">
                            {project.community}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            asChild
                            className="rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
                          >
                            <Link href={`/projects/${project.id}`}>
                              <Icon icon="mdi:eye" className="mr-2 h-4 w-4" />
                              View Details
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <div className="py-12 text-center">
              <Icon
                icon="mdi:trending-down"
                className="mx-auto h-16 w-16 text-gray-400"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No carbon credits found
              </h3>
              <p className="mt-2 text-gray-600">
                Adjust your search criteria or filters to find carbon credits.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
