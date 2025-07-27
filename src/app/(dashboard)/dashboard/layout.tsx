"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Mock user data for demonstration
  const mockUser = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "COMMUNITY", // or "INDIVIDUAL" or "ADMIN"
  };

  const currentUser = mockUser;

  const getSidebarItems = () => {
    switch (currentUser.role) {
      case "COMMUNITY":
        return [
          { name: "Dasbor", href: "/dashboard", icon: "📊" },
          { name: "Daftar Proyek", href: "/dashboard/projects", icon: "🌱" },
          {
            name: "Buat Proyek",
            href: "/dashboard/projects/create",
            icon: "➕",
          },
        ];
      case "INDIVIDUAL":
        return [
          { name: "Dasbor", href: "/dashboard", icon: "📊" },
          { name: "Proyek Saya", href: "/dashboard/my-projects", icon: "🌱" },
        ];
      case "ADMIN":
        return [
          { name: "Dasbor", href: "/dashboard", icon: "📊" },
          { name: "Proyek", href: "/dashboard/admin/projects", icon: "🌱" },
          {
            name: "Komunitas",
            href: "/dashboard/admin/communities",
            icon: "👥",
          },
          {
            name: "Individu",
            href: "/dashboard/admin/individuals",
            icon: "👤",
          },
        ];
      default:
        return [{ name: "Dasbor", href: "/dashboard", icon: "📊" }];
    }
  };

  const sidebarItems = getSidebarItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="CarbonEx Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              CarbonEx
            </span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-md p-2 text-gray-400 hover:text-gray-600 md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* User Info */}
        <div className="border-b px-6 py-4">
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <span className="text-sm font-medium text-green-600">
                {currentUser.name?.charAt(0) || "U"}
              </span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {currentUser.name}
              </p>
              <p className="text-xs text-gray-500">{currentUser.email}</p>
              <p className="text-xs font-medium text-green-600">
                {currentUser.role === "COMMUNITY" && "Komunitas"}
                {currentUser.role === "INDIVIDUAL" && "Individu"}
                {currentUser.role === "ADMIN" && "Admin"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-6 py-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute right-0 bottom-0 left-0 border-t p-6">
          <Link
            href="/"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <span className="mr-3">🚪</span>
            Keluar
          </Link>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="bg-opacity-75 fixed inset-0 z-40 bg-gray-600 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`${isSidebarOpen ? "md:ml-64" : ""} transition-all duration-300 ease-in-out`}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-30 border-b bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="rounded-md p-2 text-gray-400 hover:text-gray-600 md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
