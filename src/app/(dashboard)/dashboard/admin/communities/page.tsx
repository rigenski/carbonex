"use client";

import { useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Community {
  id: string;
  name: string;
  description: string;
  location: string;
  projects: number;
  members: number;
  status: string;
  avatar: string;
}

export default function DashboardAdminCommunities() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Mock data
  const communities: Community[] = [
    {
      id: "COM001",
      name: "Green Earth Indonesia",
      description:
        "Organisasi lingkungan terkemuka yang berfokus pada proyek restorasi hutan dan penyerapan karbon di seluruh Indonesia.",
      location: "Jakarta, DKI Jakarta",
      projects: 8,
      members: 156,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "COM002",
      name: "Bumi Hijau Indonesia",
      description:
        "Komunitas yang berdedikasi untuk konservasi lingkungan dan pengembangan proyek karbon yang berkelanjutan.",
      location: "Bandung, Jawa Barat",
      projects: 5,
      members: 89,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "COM003",
      name: "Eco Warriors",
      description:
        "Kelompok relawan yang aktif dalam proyek-proyek lingkungan dan edukasi masyarakat tentang perubahan iklim.",
      location: "Surabaya, Jawa Timur",
      projects: 3,
      members: 67,
      status: "Nonaktif",
      avatar:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "COM004",
      name: "Coastal Guardians",
      description:
        "Organisasi yang berfokus pada konservasi ekosistem pesisir dan restorasi mangrove.",
      location: "Semarang, Jawa Tengah",
      projects: 6,
      members: 124,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "COM005",
      name: "City Green Movement",
      description:
        "Gerakan urban untuk menciptakan ruang hijau di perkotaan dan meningkatkan kualitas udara.",
      location: "Yogyakarta, DI Yogyakarta",
      projects: 4,
      members: 78,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1574263867128-9c1a5c5f4cf3?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "COM006",
      name: "Water Keepers",
      description:
        "Komunitas yang berdedikasi untuk konservasi sumber daya air dan pengelolaan sungai.",
      location: "Malang, Jawa Timur",
      projects: 7,
      members: 145,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=150&h=150&fit=crop&crop=center",
    },
  ];

  const handleViewDetail = (community: Community) => {
    setSelectedCommunity(community);
    setShowDetailModal(true);
  };

  const handleEdit = (community: Community) => {
    setSelectedCommunity(community);
    setShowEditModal(true);
  };

  const handleDelete = (community: Community) => {
    if (
      confirm(
        `Apakah Anda yakin ingin menghapus komunitas "${community.name}"?`,
      )
    ) {
      alert(`Komunitas "${community.name}" berhasil dihapus!`);
    }
  };

  // Filter and sort communities
  const filteredCommunities = communities
    .filter((community) => {
      const matchesSearch =
        community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        community.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        community.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" || community.status === selectedStatus;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "status":
          return a.status.localeCompare(b.status);
        case "projects":
          return b.projects - a.projects;
        case "members":
          return b.members - a.members;
        default:
          return 0;
      }
    });

  const statusOptions = ["All", "Aktif", "Nonaktif"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Kelola Komunitas
        </h2>
        <Button>Tambah Komunitas</Button>
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
              <Label htmlFor="search">Cari Komunitas</Label>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari berdasarkan nama, deskripsi, atau lokasi..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
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
                Menampilkan {filteredCommunities.length} dari{" "}
                {communities.length} komunitas
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
                  <SelectItem value="projects">Proyek</SelectItem>
                  <SelectItem value="members">Anggota</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communities Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Komunitas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-64">Komunitas</TableHead>
                  <TableHead className="w-48">Lokasi</TableHead>
                  <TableHead className="w-32">Proyek</TableHead>
                  <TableHead className="w-32">Anggota</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead className="w-24">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCommunities.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="py-8 text-center">
                      <div className="text-gray-500">
                        Tidak ada komunitas yang ditemukan
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredCommunities.map((community) => (
                    <TableRow key={community.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={community.avatar}
                              alt={community.name}
                            />
                            <AvatarFallback>
                              {community.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">
                              {community.name}
                            </div>
                            <div className="line-clamp-2 text-sm text-gray-500">
                              {community.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full bg-gray-300" />
                          <span className="text-sm text-gray-600">
                            {community.location}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm font-medium">
                          {community.projects} proyek
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm font-medium">
                          {community.members} anggota
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            community.status === "Aktif"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {community.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewDetail(community)}
                          >
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(community)}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(community)}
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
            <DialogTitle>Detail Komunitas</DialogTitle>
          </DialogHeader>
          {selectedCommunity && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={selectedCommunity.avatar}
                    alt={selectedCommunity.name}
                  />
                  <AvatarFallback className="text-lg">
                    {selectedCommunity.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedCommunity.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedCommunity.location}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">ID</Label>
                  <p className="text-sm text-gray-600">
                    {selectedCommunity.id}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <Badge
                    variant={
                      selectedCommunity.status === "Aktif"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {selectedCommunity.status}
                  </Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium">Proyek</Label>
                  <p className="text-sm text-gray-600">
                    {selectedCommunity.projects} proyek
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Anggota</Label>
                  <p className="text-sm text-gray-600">
                    {selectedCommunity.members} anggota
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">Deskripsi</Label>
                <p className="mt-1 text-sm text-gray-600">
                  {selectedCommunity.description}
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
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Komunitas</DialogTitle>
            <DialogDescription>
              Ubah informasi komunitas sesuai kebutuhan
            </DialogDescription>
          </DialogHeader>
          {selectedCommunity && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Komunitas</Label>
                  <Input id="name" defaultValue={selectedCommunity.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={selectedCommunity.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Aktif">Aktif</SelectItem>
                      <SelectItem value="Nonaktif">Nonaktif</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi</Label>
                <textarea
                  id="description"
                  defaultValue={selectedCommunity.description}
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring min-h-[100px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
    </div>
  );
}
