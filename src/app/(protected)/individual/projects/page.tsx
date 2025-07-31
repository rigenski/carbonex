"use client";

import { useState } from "react";
import Image from "next/image";
import { EyeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  id: string;
  name: string;
  community: string;
  status: string;
  targetTrees: number;
  volunteers: number;
  image: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  joinedDate: string;
}

export default function IndividualProjects() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Mock data
  const projects: Project[] = [
    {
      id: "PRJ001",
      name: "Inisiatif Restorasi Hutan",
      community: "Green Earth Indonesia",
      status: "Aktif",
      targetTrees: 5000,
      volunteers: 45,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      location: "Bandung, Jawa Barat",
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      description:
        "Proyek restorasi hutan skala besar untuk memerangi deforestasi dan menciptakan penyerap karbon.",
      joinedDate: "2024-02-01",
    },
    {
      id: "PRJ002",
      name: "Proyek Panel Surya Komunitas",
      community: "Solar Future Collective",
      status: "Dalam Pengembangan",
      targetTrees: 3000,
      volunteers: 28,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      location: "Semarang, Jawa Tengah",
      startDate: "2024-03-01",
      endDate: "2024-08-31",
      description:
        "Instalasi panel surya di komunitas untuk mengurangi ketergantungan pada energi fosil.",
      joinedDate: "2024-03-15",
    },
    {
      id: "PRJ003",
      name: "Pengembangan Taman Perkotaan",
      community: "City Green Movement",
      status: "Selesai",
      targetTrees: 1500,
      volunteers: 32,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
      location: "Jakarta, DKI Jakarta",
      startDate: "2023-09-01",
      endDate: "2024-02-28",
      description:
        "Pengembangan taman kota untuk meningkatkan kualitas udara dan estetika lingkungan.",
      joinedDate: "2023-10-01",
    },
    {
      id: "PRJ004",
      name: "Konservasi Mangrove",
      community: "Coastal Guardians",
      status: "Aktif",
      targetTrees: 8000,
      volunteers: 56,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      location: "Surabaya, Jawa Timur",
      startDate: "2024-02-15",
      endDate: "2024-11-30",
      description:
        "Konservasi mangrove untuk melindungi garis pantai dan ekosistem laut.",
      joinedDate: "2024-03-01",
    },
  ];

  const handleViewDetail = (project: Project) => {
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter and sort projects
  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.community.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "status":
          return a.status.localeCompare(b.status);
        case "joinedDate":
          return (
            new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()
          );
        default:
          return 0;
      }
    });

  const statusOptions = ["All", "Aktif", "Dalam Pengembangan", "Selesai"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Proyek Saya</h2>
      </div>

      {/* Filter and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Filter & Pencarian</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Search */}
            <div className="space-y-2 lg:col-span-2">
              <Label htmlFor="search">Cari Proyek</Label>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari berdasarkan nama, komunitas, atau lokasi..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status === "All" ? "Semua" : status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sort and Results Count */}
          <div className="mt-6 flex flex-col items-start justify-between border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Menampilkan {filteredProjects.length} dari {projects.length}{" "}
                proyek
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 sm:mt-0">
              <span className="text-sm text-gray-600">
                Urutkan berdasarkan:
              </span>
                              <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih pengurutan" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nama</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="joinedDate">Tanggal Bergabung</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Proyek</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-64">Proyek</TableHead>
                  <TableHead className="w-48">Lokasi</TableHead>
                  <TableHead className="w-32">Target</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead className="w-40">Bergabung</TableHead>
                  <TableHead className="w-48">Komunitas</TableHead>
                  <TableHead className="w-24">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="py-8 text-center">
                      <div className="text-gray-500">
                        Tidak ada proyek yang ditemukan
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {project.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: {project.id}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full bg-gray-300" />
                          <span className="text-sm text-gray-600">
                            {project.location}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm font-medium">
                          {project.targetTrees.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            project.status === "Aktif"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {formatDate(project.joinedDate)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-600">
                          {project.community}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewDetail(project)}
                          >
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detail Proyek</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">ID</Label>
                  <p className="text-sm text-gray-600">{selectedProject.id}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Nama Proyek</Label>
                  <p className="text-sm text-gray-600">
                    {selectedProject.name}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Komunitas</Label>
                  <p className="text-sm text-gray-600">
                    {selectedProject.community}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <Badge
                    variant={
                      selectedProject.status === "Aktif"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {selectedProject.status}
                  </Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium">Target Pohon</Label>
                  <p className="text-sm text-gray-600">
                    {selectedProject.targetTrees}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Relawan</Label>
                  <p className="text-sm text-gray-600">
                    {selectedProject.volunteers}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">
                    Tanggal Bergabung
                  </Label>
                  <p className="text-sm text-gray-600">
                    {formatDate(selectedProject.joinedDate)}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Durasi Proyek</Label>
                  <p className="text-sm text-gray-600">
                    {formatDate(selectedProject.startDate)} -{" "}
                    {formatDate(selectedProject.endDate)}
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">Deskripsi</Label>
                <p className="mt-1 text-sm text-gray-600">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailModal(false)}>
              Tutup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
