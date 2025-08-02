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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import IndonesiaMap from "@/components/indonesia-map";

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

// Mock transaction data
const transactions = [
  {
    id: "TXN001",
    projectName: "Forest Restoration Project",
    buyer: "EcoCorp Indonesia",
    seller: "Green Earth Indonesia",
    amount: 500,
    price: 25.5,
    date: "2024-12-15",
    status: "Completed",
  },
  {
    id: "TXN002",
    projectName: "Community Solar Panel Project",
    buyer: "SolarTech Solutions",
    seller: "Solar Future Collective",
    amount: 300,
    price: 28.75,
    date: "2024-12-14",
    status: "Pending",
  },
  {
    id: "TXN003",
    projectName: "Mangrove Conservation Project",
    buyer: "Marine Industries Ltd",
    seller: "Marine Conservation Alliance",
    amount: 800,
    price: 32.0,
    date: "2024-12-13",
    status: "Completed",
  },
  {
    id: "TXN004",
    projectName: "Urban Tree Planting",
    buyer: "City Green Initiative",
    seller: "Green City Movement",
    amount: 200,
    price: 22.5,
    date: "2024-12-12",
    status: "Completed",
  },
];

// Mock market data
const marketData = {
  totalVolume: 15420,
  averagePrice: 27.19,
  activeProjects: 6,
  totalTransactions: 24,
  priceChange: "+5.2%",
  volumeChange: "+12.8%",
};

// Mock weekly data for chart
const weeklyData = [
  { day: "Mon", volume: 1200, price: 25.5 },
  { day: "Tue", volume: 1800, price: 26.2 },
  { day: "Wed", volume: 2100, price: 27.1 },
  { day: "Thu", volume: 1900, price: 28.3 },
  { day: "Fri", volume: 2400, price: 29.1 },
  { day: "Sat", volume: 1600, price: 28.8 },
  { day: "Sun", volume: 1400, price: 27.9 },
];

// Mock Indonesian provinces data
const provincesData: Array<{
  name: string;
  carbonIssued: number;
  coordinates: [number, number];
}> = [
  { name: "Aceh", carbonIssued: 3200, coordinates: [4.6951, 96.7494] },
  {
    name: "Sumatera Utara",
    carbonIssued: 4500,
    coordinates: [2.1157, 99.5451],
  },
  {
    name: "Sumatera Barat",
    carbonIssued: 2800,
    coordinates: [-0.7397, 100.8001],
  },
  { name: "Riau", carbonIssued: 3800, coordinates: [0.2933, 101.7068] },
  { name: "Jambi", carbonIssued: 2100, coordinates: [-1.4852, 102.4389] },
  {
    name: "Sumatera Selatan",
    carbonIssued: 3400,
    coordinates: [-3.3194, 103.9144],
  },
  { name: "Bengkulu", carbonIssued: 1600, coordinates: [-3.7924, 102.2608] },
  { name: "Lampung", carbonIssued: 2900, coordinates: [-4.5586, 105.4068] },
  { name: "DKI Jakarta", carbonIssued: 5200, coordinates: [-6.2088, 106.8456] },
  { name: "Jawa Barat", carbonIssued: 6800, coordinates: [-6.9175, 107.6191] },
  { name: "Jawa Tengah", carbonIssued: 4100, coordinates: [-7.1509, 110.1403] },
  {
    name: "DI Yogyakarta",
    carbonIssued: 2300,
    coordinates: [-7.7971, 110.3708],
  },
  { name: "Jawa Timur", carbonIssued: 5600, coordinates: [-7.5361, 112.2384] },
  { name: "Bali", carbonIssued: 3900, coordinates: [-8.3405, 115.092] },
  {
    name: "Nusa Tenggara Barat",
    carbonIssued: 1800,
    coordinates: [-8.6529, 117.3616],
  },
  {
    name: "Nusa Tenggara Timur",
    carbonIssued: 1200,
    coordinates: [-8.6574, 121.0794],
  },
  {
    name: "Kalimantan Barat",
    carbonIssued: 4200,
    coordinates: [0.0, 109.3333],
  },
  {
    name: "Kalimantan Tengah",
    carbonIssued: 3100,
    coordinates: [-1.4994, 113.2903],
  },
  {
    name: "Kalimantan Selatan",
    carbonIssued: 2700,
    coordinates: [-3.3166, 114.5901],
  },
  {
    name: "Kalimantan Timur",
    carbonIssued: 4800,
    coordinates: [1.6404, 116.4194],
  },
  {
    name: "Kalimantan Utara",
    carbonIssued: 1900,
    coordinates: [3.5952, 116.166],
  },
  {
    name: "Sulawesi Utara",
    carbonIssued: 2400,
    coordinates: [1.4748, 124.8421],
  },
  {
    name: "Sulawesi Tengah",
    carbonIssued: 2200,
    coordinates: [-1.43, 121.4457],
  },
  {
    name: "Sulawesi Selatan",
    carbonIssued: 3500,
    coordinates: [-3.6688, 119.9741],
  },
  {
    name: "Sulawesi Tenggara",
    carbonIssued: 1600,
    coordinates: [-3.5491, 121.7279],
  },
  { name: "Gorontalo", carbonIssued: 900, coordinates: [0.6999, 122.2647] },
  {
    name: "Sulawesi Barat",
    carbonIssued: 1100,
    coordinates: [-2.8441, 119.2321],
  },
  { name: "Maluku", carbonIssued: 800, coordinates: [-3.2385, 130.1453] },
  { name: "Maluku Utara", carbonIssued: 600, coordinates: [1.5709, 127.8088] },
  { name: "Papua", carbonIssued: 1400, coordinates: [-4.2699, 138.0808] },
  { name: "Papua Barat", carbonIssued: 1000, coordinates: [-1.3361, 133.1747] },
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
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

      {/* Tabs Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="carbon-issued" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-md">
              <TabsTrigger
                value="carbon-issued"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                <Icon icon="mdi:leaf" className="mr-2 h-4 w-4" />
                Carbon Issued
              </TabsTrigger>
              <TabsTrigger
                value="transaction"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                <Icon icon="mdi:chart-line" className="mr-2 h-4 w-4" />
                Transaction
              </TabsTrigger>
              <TabsTrigger
                value="issuer"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                <Icon icon="mdi:map-marker" className="mr-2 h-4 w-4" />
                Carbon Credit Issuer
              </TabsTrigger>
            </TabsList>

            {/* Carbon Issued Tab */}
            <TabsContent value="carbon-issued" className="mt-6">
              {/* Filters Section */}
              <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="search"
                        className="mb-2 text-sm font-bold"
                      >
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
                      <Label
                        htmlFor="status"
                        className="mb-2 text-sm font-bold"
                      >
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

              {/* Results Section */}
              <div className="mt-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      Showing {filteredProjects.length} of {projects.length}{" "}
                      carbon credit projects
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
                  <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-gray-200">
                            <TableHead className="font-bold">Project</TableHead>
                            <TableHead className="font-bold">
                              Location
                            </TableHead>
                            <TableHead className="font-bold">
                              Carbon Credits
                            </TableHead>
                            <TableHead className="font-bold">Status</TableHead>
                            <TableHead className="font-bold">Date</TableHead>
                            <TableHead className="font-bold">
                              Community
                            </TableHead>
                            <TableHead className="font-bold">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredProjects.map((project) => (
                            <TableRow
                              key={project.id}
                              className="border-gray-100"
                            >
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
                                  <div>
                                    Issued: {formatDate(project.issueDate)}
                                  </div>
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
                                  className="rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl"
                                >
                                  <Link href={`/projects/${project.id}`}>
                                    <Icon
                                      icon="mdi:eye"
                                      className="mr-2 h-4 w-4"
                                    />
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
                      Adjust your search criteria or filters to find carbon
                      credits.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Transaction Tab */}
            <TabsContent value="transaction" className="mt-6 space-y-8">
              {/* Overview Section */}
              <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Market Overview
                  </h3>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-emerald-50 p-4">
                      <div className="text-sm text-gray-600">Total Volume</div>
                      <div className="text-2xl font-bold text-emerald-600">
                        {marketData.totalVolume.toLocaleString()}
                      </div>
                      <div className="text-xs text-emerald-500">
                        {marketData.volumeChange}
                      </div>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4">
                      <div className="text-sm text-gray-600">
                        Active Projects
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        {marketData.activeProjects}
                      </div>
                    </div>
                    <div className="rounded-lg bg-orange-50 p-4">
                      <div className="text-sm text-gray-600">
                        Total Transactions
                      </div>
                      <div className="text-2xl font-bold text-orange-600">
                        {marketData.totalTransactions}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Market Section */}
              <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Market Activity
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-gray-800">
                        Recent Transactions
                      </h4>
                      <div className="space-y-3">
                        {transactions.slice(0, 3).map((txn) => (
                          <div
                            key={txn.id}
                            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3"
                          >
                            <div>
                              <div className="font-semibold text-gray-900">
                                {txn.projectName}
                              </div>
                              <div className="text-sm text-gray-600">
                                {txn.buyer} → {txn.seller}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-emerald-600">
                                {txn.amount} credits
                              </div>
                              <div className="text-sm text-gray-600">
                                {formatCurrency(txn.price)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-gray-800">
                        Price Trends
                      </h4>
                      <div className="h-48 rounded-lg bg-gray-50 p-4">
                        <div className="flex h-full items-end justify-between space-x-1">
                          {weeklyData.map((data, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center"
                            >
                              <div
                                className="w-8 rounded-t bg-emerald-500"
                                style={{
                                  height: `${(data.volume / 2500) * 100}%`,
                                }}
                              ></div>
                              <div className="mt-1 text-xs text-gray-600">
                                {data.day}
                              </div>
                              <div className="text-xs font-semibold text-gray-800">
                                ${data.price}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transaction List Section */}
              <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    All Transactions
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="font-bold">
                          Transaction ID
                        </TableHead>
                        <TableHead className="font-bold">Project</TableHead>
                        <TableHead className="font-bold">Buyer</TableHead>
                        <TableHead className="font-bold">Seller</TableHead>
                        <TableHead className="font-bold">Amount</TableHead>
                        <TableHead className="font-bold">Price</TableHead>
                        <TableHead className="font-bold">Date</TableHead>
                        <TableHead className="font-bold">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((txn) => (
                        <TableRow key={txn.id} className="border-gray-100">
                          <TableCell className="font-mono text-sm">
                            {txn.id}
                          </TableCell>
                          <TableCell className="font-semibold">
                            {txn.projectName}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {txn.buyer}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {txn.seller}
                          </TableCell>
                          <TableCell className="font-bold text-emerald-600">
                            {txn.amount}
                          </TableCell>
                          <TableCell className="font-semibold">
                            {formatCurrency(txn.price)}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {formatDate(txn.date)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                txn.status === "Completed"
                                  ? "default"
                                  : "secondary"
                              }
                              className={
                                txn.status === "Completed"
                                  ? "bg-emerald-500 text-white"
                                  : "bg-yellow-500 text-white"
                              }
                            >
                              {txn.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Carbon Credit Issuer Tab */}
            <TabsContent value="issuer" className="mt-6">
              <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Carbon Credit Issuers by Province
                  </h3>
                  <IndonesiaMap provincesData={provincesData} />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {provincesData
                      .sort((a, b) => b.carbonIssued - a.carbonIssued)
                      .slice(0, 12)
                      .map((province) => (
                        <div
                          key={province.name}
                          className="rounded-lg border border-gray-200 bg-white p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {province.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {province.carbonIssued.toLocaleString()} credits
                                issued
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-600">
                                {province.carbonIssued}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                      <Icon icon="mdi:map-marker" className="mr-2 h-4 w-4" />
                      View Full Map
                    </Button>
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
