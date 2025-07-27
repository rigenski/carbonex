"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuthStore } from "@/stores/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex flex-1 justify-start">
            <Link href="/" className="flex items-center">
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
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden flex-1 justify-center md:flex">
            <div className="flex items-baseline space-x-8">
              <Link
                href="/projects"
                className="rounded-md px-3 py-2 text-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                Proyek
              </Link>
              <Link
                href="/carbon-issued"
                className="rounded-md px-3 py-2 text-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                Karbon Terbit
              </Link>
              <Link
                href="/communities"
                className="rounded-md px-3 py-2 text-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                Komunitas
              </Link>
              <Link
                href="/register"
                className="rounded-md px-3 py-2 text-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                Daftar
              </Link>
            </div>
          </div>

          {/* User Auth Section - Right */}
          <div className="flex flex-1 justify-end">
            <div className="hidden md:block">
              {user ? (
                <div className="flex items-center space-x-4">
                  {user.role === "community" && (
                    <Link
                      href="/projects/create"
                      className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                    >
                      Buat Proyek
                    </Link>
                  )}
                  <div className="group relative">
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <span className="text-sm font-medium text-green-600">
                          {(user.name || user.fullName || "U").charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {user.name || user.fullName || "Pengguna"}
                      </span>
                    </button>
                    <div className="invisible absolute right-0 mt-2 w-48 rounded-md bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dasbor
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Keluar
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    href="/admin/dashboard"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                  >
                    Admin
                  </Link>
                  <Link
                    href="/community/dashboard"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                  >
                    Community
                  </Link>
                  <Link
                    href="/individual/dashboard"
                    className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Individual
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-inset"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t bg-white px-2 pt-2 pb-3 sm:px-3">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                Beranda
              </Link>
              <Link
                href="/projects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                Proyek
              </Link>
              <Link
                href="/carbon-issued"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                Karbon Terbit
              </Link>
              <Link
                href="/communities"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                Komunitas
              </Link>

              {user ? (
                <div className="border-t pt-3">
                  <div className="flex items-center px-3 py-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <span className="text-sm font-medium text-green-600">
                        {(user.name || user.fullName || "U").charAt(0)}
                      </span>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {user.name || user.fullName || "Pengguna"}
                    </span>
                  </div>
                  {user.role === "community" && (
                    <Link
                      href="/projects/create"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                    >
                      Buat Proyek
                    </Link>
                  )}
                  <Link
                    href="/dashboard"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                  >
                    Dasbor
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:text-green-600"
                  >
                    Keluar
                  </button>
                </div>
              ) : (
                <div className="space-y-1 border-t pt-3">
                  <Link
                    href="/admin/dashboard"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                  >
                    Admin
                  </Link>
                  <Link
                    href="/community/dashboard"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                  >
                    Community
                  </Link>
                  <Link
                    href="/individual/dashboard"
                    className="block rounded-md bg-green-600 px-3 py-2 text-base font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Individual
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
