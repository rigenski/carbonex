"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

// Mock data
const transactions = [
  {
    id: "TXN001",
    projectName: "Forest Restoration Initiative",
    community: "Green Earth Indonesia",
    company: "EcoTech Solutions",
    amount: 25000,
    status: "Pending",
    date: "2024-01-15",
    carbonCredits: 500,
  },
  {
    id: "TXN002",
    projectName: "Urban Tree Planting",
    community: "City Green Initiative",
    company: "GreenCorp Industries",
    amount: 18000,
    status: "Approved",
    date: "2024-01-20",
    carbonCredits: 320,
  },
  {
    id: "TXN003",
    projectName: "Solar Panel Installation",
    community: "Solar Future Collective",
    company: "CleanEnergy Ltd",
    amount: 45000,
    status: "Completed",
    date: "2024-01-10",
    carbonCredits: 800,
  },
  {
    id: "TXN004",
    projectName: "Mangrove Conservation",
    community: "Coastal Guardians",
    company: "OceanTech Corp",
    amount: 35000,
    status: "Rejected",
    date: "2024-01-25",
    carbonCredits: 600,
  },
];

export default function AdminTransactionPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredTransactions =
    selectedStatus === "all"
      ? transactions
      : transactions.filter(
          (txn) => txn.status.toLowerCase() === selectedStatus,
        );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Approved":
        return "bg-blue-500 text-white";
      case "Completed":
        return "bg-emerald-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 p-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900">
              Transaction Management
            </h1>
            <p className="text-gray-600">
              Manage project withdrawals and company transactions
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Icon icon="mdi:plus" className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Filters */}
        <div className="mb-6 flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">
            Filter by Status:
          </span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-lg border-gray-200 bg-white px-3 py-2 text-sm"
          >
            <option value="all">All Transactions</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Transactions Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredTransactions.map((transaction) => (
            <Card
              key={transaction.id}
              className="border-0 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black text-gray-900">
                    {transaction.projectName}
                  </CardTitle>
                  <Badge className={getStatusColor(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">{transaction.community}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Company
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {transaction.company}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Amount
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      ${transaction.amount.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">
                      Carbon Credits
                    </div>
                    <div className="text-lg font-black text-gray-900">
                      {transaction.carbonCredits} tons
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">Date</div>
                    <div className="text-sm text-gray-900">
                      {transaction.date}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:eye" className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:check" className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon icon="mdi:close" className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
