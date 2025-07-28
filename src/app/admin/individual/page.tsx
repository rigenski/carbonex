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

interface Individual {
  id: string;
  name: string;
  email: string;
  location: string;
  projectsJoined: number;
  status: string;
  avatar: string;
}

export default function AdminIndividual() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedIndividual, setSelectedIndividual] =
    useState<Individual | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Mock data
  const individuals: Individual[] = [
    {
      id: "IND001",
      name: "Ahmad Rizki",
      email: "ahmad.rizki@email.com",
      location: "Jakarta, DKI Jakarta",
      projectsJoined: 3,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "IND002",
      name: "Sarah Putri",
      email: "sarah.putri@email.com",
      location: "Bandung, Jawa Barat",
      projectsJoined: 5,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "IND003",
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      location: "Surabaya, Jawa Timur",
      projectsJoined: 2,
      status: "Nonaktif",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "IND004",
      name: "Dewi Sari",
      email: "dewi.sari@email.com",
      location: "Semarang, Jawa Tengah",
      projectsJoined: 4,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "IND005",
      name: "Rudi Hermawan",
      email: "rudi.hermawan@email.com",
      location: "Yogyakarta, DI Yogyakarta",
      projectsJoined: 1,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "IND006",
      name: "Nina Kartika",
      email: "nina.kartika@email.com",
      location: "Malang, Jawa Timur",
      projectsJoined: 6,
      status: "Aktif",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const handleViewDetail = (individual: Individual) => {
    setSelectedIndividual(individual);
    setShowDetailModal(true);
  };

  const handleEdit = (individual: Individual) => {
    setSelectedIndividual(individual);
    setShowEditModal(true);
  };

  const handleDelete = (individual: Individual) => {
    if (
      confirm(
        `Apakah Anda yakin ingin menghapus individu "${individual.name}"?`,
      )
    ) {
      alert(`Individu "${individual.name}" berhasil dihapus!`);
    }
  };

  // Filter and sort individuals
  const filteredIndividuals = individuals
    .filter((individual) => {
      const matchesSearch =
        individual.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        individual.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        individual.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" || individual.status === selectedStatus;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "status":
          return a.status.localeCompare(b.status);
        case "projectsJoined":
          return b.projectsJoined - a.projectsJoined;
        default:
          return 0;
      }
    });

  const statusOptions = ["All", "Aktif", "Nonaktif"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Kelola Individu</h2>
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
              <Label htmlFor="search">Cari Individu</Label>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari berdasarkan nama, email, atau lokasi..."
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
                Menampilkan {filteredIndividuals.length} dari{" "}
                {individuals.length} individu
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
                  <SelectItem value="projectsJoined">
                    Proyek Bergabung
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individuals Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Individu</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-64">Individu</TableHead>
                  <TableHead className="w-48">Lokasi</TableHead>
                  <TableHead className="w-32">Proyek Bergabung</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead className="w-24">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIndividuals.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="py-8 text-center">
                      <div className="text-gray-500">
                        Tidak ada individu yang ditemukan
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredIndividuals.map((individual) => (
                    <TableRow key={individual.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={individual.avatar}
                              alt={individual.name}
                            />
                            <AvatarFallback>
                              {individual.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">
                              {individual.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {individual.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full bg-gray-300" />
                          <span className="text-sm text-gray-600">
                            {individual.location}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm font-medium">
                          {individual.projectsJoined} proyek
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            individual.status === "Aktif"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {individual.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewDetail(individual)}
                          >
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(individual)}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(individual)}
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
            <DialogTitle>Detail Individu</DialogTitle>
          </DialogHeader>
          {selectedIndividual && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={selectedIndividual.avatar}
                    alt={selectedIndividual.name}
                  />
                  <AvatarFallback className="text-lg">
                    {selectedIndividual.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedIndividual.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedIndividual.email}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">ID</Label>
                  <p className="text-sm text-gray-600">
                    {selectedIndividual.id}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Lokasi</Label>
                  <p className="text-sm text-gray-600">
                    {selectedIndividual.location}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">
                    Proyek Bergabung
                  </Label>
                  <p className="text-sm text-gray-600">
                    {selectedIndividual.projectsJoined} proyek
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <Badge
                    variant={
                      selectedIndividual.status === "Aktif"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {selectedIndividual.status}
                  </Badge>
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
            <DialogTitle>Edit Individu</DialogTitle>
            <DialogDescription>
              Ubah informasi individu sesuai kebutuhan
            </DialogDescription>
          </DialogHeader>
          {selectedIndividual && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" defaultValue={selectedIndividual.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={selectedIndividual.email}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={selectedIndividual.status}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Aktif">Aktif</SelectItem>
                      <SelectItem value="Nonaktif">Nonaktif</SelectItem>
                    </SelectContent>
                  </Select>
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
