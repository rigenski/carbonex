"use client";

import { useState } from "react";
import Image from "next/image";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
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
  DialogDescription,
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
}

export default function AdminProject() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
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
        "Mangrove conservation to protect coastlines and marine ecosystems.",
    },
    {
      id: "PRJ005",
      name: "Inisiatif Pengelolaan Sampah",
      community: "Eco Warriors",
      status: "Dalam Pengembangan",
      targetTrees: 2000,
      volunteers: 38,
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center",
      location: "Yogyakarta, DI Yogyakarta",
      startDate: "2024-04-01",
      endDate: "2024-09-30",
      description:
        "Inisiatif pengelolaan sampah yang terintegrasi dengan penanaman pohon.",
    },
    {
      id: "PRJ006",
      name: "Perlindungan Keanekaragaman Hayati",
      community: "Wildlife Conservation",
      status: "Aktif",
      targetTrees: 6000,
      volunteers: 42,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      location: "Bogor, Jawa Barat",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      description:
        "Perlindungan keanekaragaman hayati melalui restorasi habitat alami.",
    },
    {
      id: "PRJ007",
      name: "Program Edukasi Komunitas",
      community: "Green Learning Center",
      status: "Selesai",
      targetTrees: 1000,
      volunteers: 25,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center",
      location: "Malang, Jawa Timur",
      startDate: "2023-08-01",
      endDate: "2024-01-31",
      description:
        "Program edukasi komunitas tentang pentingnya konservasi lingkungan.",
    },
    {
      id: "PRJ008",
      name: "Proyek Konservasi Air",
      community: "Water Keepers",
      status: "Dalam Pengembangan",
      targetTrees: 4000,
      volunteers: 35,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      location: "Solo, Jawa Tengah",
      startDate: "2024-05-01",
      endDate: "2024-10-31",
      description:
        "Proyek konservasi air melalui penanaman pohon di daerah resapan air.",
    },
    {
      id: "PRJ009",
      name: "Peningkatan Kualitas Udara",
      community: "Clean Air Alliance",
      status: "Aktif",
      targetTrees: 3500,
      volunteers: 48,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      location: "Tangerang, Banten",
      startDate: "2024-03-15",
      endDate: "2024-12-31",
      description:
        "Peningkatan kualitas udara melalui penanaman pohon di area perkotaan.",
    },
    {
      id: "PRJ010",
      name: "Proyek Energi Surya Komunitas",
      community: "Energi Bersih Nusantara",
      status: "Dalam Pengembangan",
      targetTrees: 1000,
      volunteers: 34,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      location: "Denpasar, Bali",
      startDate: "2024-07-01",
      endDate: "2024-11-30",
      description:
        "Proyek energi surya komunitas untuk mengurangi ketergantungan pada energi fosil.",
    },
  ];

  const handleViewDetail = (project: Project) => {
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setShowEditModal(true);
  };

  const handleDelete = (project: Project) => {
    if (
      confirm(`Apakah Anda yakin ingin menghapus proyek "${project.name}"?`)
    ) {
      alert(`Proyek "${project.name}" berhasil dihapus!`);
    }
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
        case "targetTrees":
          return b.targetTrees - a.targetTrees;
        case "volunteers":
          return b.volunteers - a.volunteers;
        default:
          return 0;
      }
    });

  const projectStatuses = ["All", "Aktif", "Dalam Pengembangan", "Selesai"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Daftar Proyek</h2>
        <Button>Tambah Proyek</Button>
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
                  {projectStatuses.map((status) => (
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
                  <SelectItem value="targetTrees">Target Pohon</SelectItem>
                  <SelectItem value="volunteers">Relawan</SelectItem>
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
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead className="w-40">Durasi</TableHead>
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
                        <Badge
                          variant={
                            project.status === "Aktif" ? "default" : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          <div>{formatDate(project.startDate)}</div>
                          <div>s/d {formatDate(project.endDate)}</div>
                        </div>
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
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(project)}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(project)}
                          >
                            <TrashIcon className="h-4 w-4" />
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

      {/* Edit Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Proyek</DialogTitle>
            <DialogDescription>
              Ubah informasi proyek sesuai kebutuhan
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Proyek</Label>
                  <Input id="name" defaultValue={selectedProject.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={selectedProject.status}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Aktif">Aktif</SelectItem>
                      <SelectItem value="Dalam Pengembangan">
                        Dalam Pengembangan
                      </SelectItem>
                      <SelectItem value="Selesai">Selesai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target">Target Pohon</Label>
                  <Input
                    id="target"
                    type="number"
                    defaultValue={selectedProject.targetTrees}
                  />
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditModal(false)}>
              Batal
            </Button>
            <Button onClick={() => setShowEditModal(false)}>
              Simpan Perubahan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
