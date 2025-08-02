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
const communities = [
  {
    id: "COM001",
    name: "Green Earth Indonesia",
    image:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
    location: "Jakarta, Indonesia",
    establishedYear: 2019,
    description:
      "Leading environmental organization focused on forest restoration projects and carbon absorption across Indonesia.",
    projects: 12,
    carbonOffset: 5600,
    members: 234,
  },
  {
    id: "COM002",
    name: "Solar Future Collective",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop&crop=center",
    location: "Bandung, Indonesia",
    establishedYear: 2020,
    description:
      "Community-based initiative that promotes renewable energy adoption through solar panel installation.",
    projects: 8,
    carbonOffset: 3200,
    members: 156,
  },
  {
    id: "COM003",
    name: "Urban Sustainability Network",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    location: "Surabaya, Indonesia",
    establishedYear: 2018,
    description:
      "Urban sustainability organization focused on waste management and circular economy solutions.",
    projects: 15,
    carbonOffset: 4200,
    members: 189,
  },
  {
    id: "COM004",
    name: "Marine Conservation Alliance",
    image:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=250&fit=crop&crop=center",
    location: "Bali, Indonesia",
    establishedYear: 2021,
    description:
      "Marine conservation group dedicated to protecting coastal ecosystems and reducing marine plastic waste.",
    projects: 6,
    carbonOffset: 2800,
    members: 98,
  },
  {
    id: "COM005",
    name: "Wind Energy Coalition",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400&h=250&fit=crop&crop=center",
    location: "Makassar, Indonesia",
    establishedYear: 2017,
    description:
      "Regional coalition promoting wind energy development and sustainable power generation.",
    projects: 4,
    carbonOffset: 1800,
    members: 67,
  },
  {
    id: "COM006",
    name: "Green City Movement",
    image:
      "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=400&h=250&fit=crop&crop=center",
    location: "Yogyakarta, Indonesia",
    establishedYear: 2019,
    description:
      "Urban sustainability movement creating green spaces and promoting environmental awareness in cities.",
    projects: 10,
    carbonOffset: 3400,
    members: 145,
  },
];

export default function CommunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredCommunities = useMemo(() => {
    let filtered = communities;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (community) =>
          community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          community.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          community.location.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "projects":
          return b.projects - a.projects;
        case "carbon":
          return b.carbonOffset - a.carbonOffset;
        case "established":
          return b.establishedYear - a.establishedYear;
        default:
          return 0;
      }
    });

    return filtered;
  }, [communities, searchTerm, sortBy]);

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
              <Icon icon="mdi:account-group" className="mr-2 h-4 w-4" />
              Join Impactful Communities
            </div>
            <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Environmental Communities
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl">
              Connect with verified organizations that have achieved outstanding
              carbon impact results. Join 890+ communities that have
              collectively offset over 56,789 tons of CO₂ through proven
              sustainability initiatives.
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
                    Search Communities
                  </Label>
                  <Input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name, description, or location..."
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="sort"
                    className="mb-2 text-sm font-bold text-nowrap"
                  >
                    Sort by
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm">
                      <SelectValue placeholder="Choose sort order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="projects">Projects</SelectItem>
                      <SelectItem value="carbon">Carbon Offset</SelectItem>
                      <SelectItem value="established">
                        Established Date
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Showing {filteredCommunities.length} of {communities.length}{" "}
                communities
              </span>
            </div>
          </div>

          {filteredCommunities.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCommunities.map((community) => (
                <Card
                  key={community.id}
                  className="group overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={community.image}
                      alt={community.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <Badge className="absolute top-4 right-4 bg-emerald-500 text-white">
                      {community.establishedYear}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-black text-gray-900">
                      {community.name}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      {community.description}
                    </p>

                    <div className="mb-4 grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">
                          {community.projects}
                        </div>
                        <div className="text-gray-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">
                          {community.carbonOffset}
                        </div>
                        <div className="text-gray-500">Tons CO₂</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">
                          {community.members}
                        </div>
                        <div className="text-gray-500">Members</div>
                      </div>
                    </div>

                    <div className="mb-4 text-sm text-gray-500">
                      <div className="font-medium">{community.location}</div>
                    </div>

                    <Button
                      asChild
                      className="w-full rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-700"
                    >
                      <Link href={`/communities/${community.id}`}>
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
                icon="mdi:account-group-off"
                className="mx-auto h-16 w-16 text-gray-400"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No communities found
              </h3>
              <p className="mt-2 text-gray-600">
                Adjust your search criteria or filters to find communities.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-4 text-2xl font-black text-gray-900">
                Ready to Make a Difference?
              </h3>
              <p className="mb-6 text-gray-600">
                Join 890+ successful organizations making change and connecting
                with thousands of environmentally conscious supporters ready to
                fund your sustainability projects.
              </p>
              <div className="space-x-4">
                <Button
                  asChild
                  className="rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-700"
                >
                  <Link href="/register">
                    <Icon icon="mdi:account-plus" className="mr-2 h-4 w-4" />
                    Start Your Community
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-lg border-2 border-emerald-500 font-bold text-emerald-600 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/about">
                    <Icon icon="mdi:information" className="mr-2 h-4 w-4" />
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
