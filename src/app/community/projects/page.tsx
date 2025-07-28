"use client";

import { useState } from "react";
import Image from "next/image";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
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
import { Textarea } from "@/components/ui/textarea";

interface Project {
  id: string;
  name: string;
  status: string;
  targetTrees: number;
  volunteers: number;
  image: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function CommunityProjects() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Mock data
  const projects: Project[] = [
    {
      id: "PRJ001",
      name: "Inisiatif Restorasi Hutan",
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

  const statusOptions = ["All", "Aktif", "Dalam Pengembangan", "Selesai"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Kelola Proyek</h2>
        <Button onClick={() => setShowCreateModal(true)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Tambah Proyek
        </Button>
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
                  placeholder="Cari berdasarkan nama atau lokasi..."
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
                <SelectTrigger className="w-40">
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
                  <TableHead className="w-32">Target</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead className="w-40">Durasi</TableHead>
                  <TableHead className="w-24">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="py-8 text-center">
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
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detail Proyek</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                  <Label className="text-sm font-medium">Lokasi</Label>
                  <p className="text-sm text-gray-600">
                    {selectedProject.location}
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

      {/* Edit Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Proyek</DialogTitle>
            <DialogDescription>
              Ubah informasi proyek sesuai kebutuhan
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Proyek</Label>
                  <Input id="name" defaultValue={selectedProject.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={selectedProject.status}>
                    <SelectTrigger>
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
                <div className="space-y-2">
                  <Label htmlFor="location">Lokasi</Label>
                  <Input
                    id="location"
                    defaultValue={selectedProject.location}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="volunteers">Jumlah Relawan</Label>
                  <Input
                    id="volunteers"
                    type="number"
                    defaultValue={selectedProject.volunteers}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date">Tanggal Mulai</Label>
                  <Input
                    id="start-date"
                    type="date"
                    defaultValue={selectedProject.startDate}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">Tanggal Selesai</Label>
                  <Input
                    id="end-date"
                    type="date"
                    defaultValue={selectedProject.endDate}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi</Label>
                <Textarea
                  id="description"
                  defaultValue={selectedProject.description}
                  className="min-h-[120px]"
                />
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

      {/* Create Modal */}
      <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Tambah Proyek Baru</DialogTitle>
            <DialogDescription>
              Buat proyek baru untuk komunitas Anda
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Informasi Dasar</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="project-status">Status Proyek</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-development">
                        Under Development
                      </SelectItem>
                      <SelectItem value="submitted-for-registration">
                        Submitted for Registration
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-name">Nama Proyek</Label>
                  <Input id="project-name" placeholder="Masukkan nama proyek" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-type">Tipe Proyek</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih tipe proyek" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reforestation">Reforestasi</SelectItem>
                      <SelectItem value="urban-greening">
                        Penghijauan Perkotaan
                      </SelectItem>
                      <SelectItem value="mangrove-conservation">
                        Konservasi Mangrove
                      </SelectItem>
                      <SelectItem value="community-garden">
                        Taman Komunitas
                      </SelectItem>
                      <SelectItem value="watershed-protection">
                        Perlindungan DAS
                      </SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Negara</Label>
                  <Input
                    id="country"
                    placeholder="Indonesia"
                    defaultValue="Indonesia"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-trees">
                    Estimasi Target Pohon yang Ditanam
                  </Label>
                  <Input
                    id="target-trees"
                    type="number"
                    placeholder="Masukkan jumlah pohon"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date">Tanggal Mulai Proyek</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">Tanggal Selesai Proyek</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Detail Proyek</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cover-image">Cover Image</Label>
                  <Input id="cover-image" type="file" accept="image/*" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gallery-images">Gallery Images</Label>
                  <Input
                    id="gallery-images"
                    type="file"
                    accept="image/*"
                    multiple
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="short-description">Deskripsi Singkat</Label>
                  <Textarea
                    id="short-description"
                    placeholder="Deskripsi singkat proyek (maksimal 200 karakter)"
                    maxLength={200}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="full-description">Deskripsi Lengkap</Label>
                  <Textarea
                    id="full-description"
                    placeholder="Deskripsi lengkap proyek"
                    className="min-h-[120px]"
                  />
                </div>
              </div>
            </div>

            {/* Volunteer Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Informasi Relawan</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="looking-for-volunteers">
                    Mencari Relawan?
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih opsi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Ya</SelectItem>
                      <SelectItem value="no">Tidak</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="total-volunteers">
                    Total Relawan yang Dibutuhkan
                  </Label>
                  <Input
                    id="total-volunteers"
                    type="number"
                    placeholder="Masukkan jumlah relawan"
                  />
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Informasi Lokasi</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="region">Regional</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih regional" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sumatra">Sumatra</SelectItem>
                      <SelectItem value="java">Jawa</SelectItem>
                      <SelectItem value="kalimantan">Kalimantan</SelectItem>
                      <SelectItem value="sulawesi">Sulawesi</SelectItem>
                      <SelectItem value="bali-nusa-tenggara">
                        Bali & Nusa Tenggara
                      </SelectItem>
                      <SelectItem value="maluku-papua">
                        Maluku & Papua
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Provinsi</Label>
                  <Input id="province" placeholder="Masukkan nama provinsi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Kota/Kabupaten</Label>
                  <Input id="city" placeholder="Masukkan nama kota/kabupaten" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">Kecamatan</Label>
                  <Input id="district" placeholder="Masukkan nama kecamatan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal-code">Kode Pos</Label>
                  <Input id="postal-code" placeholder="Masukkan kode pos" />
                </div>
              </div>
            </div>

            {/* System Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Informasi Sistem</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="registration-date">Tanggal Registrasi</Label>
                  <Input
                    id="registration-date"
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-owner">Pemilik Proyek</Label>
                  <Input
                    id="project-owner"
                    placeholder="Sistem (by submitted user)"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateModal(false)}>
              Batal
            </Button>
            <Button onClick={() => setShowCreateModal(false)}>
              Buat Proyek
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
