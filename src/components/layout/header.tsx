"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuthStore } from "@/stores/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  User,
  LogOut,
  Home,
  Users,
  Leaf,
  TrendingUp,
} from "lucide-react";

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
                className="hover:text-primary rounded-md px-3 py-2 text-sm font-medium text-nowrap text-gray-700 transition-colors"
              >
                Proyek
              </Link>
              <Link
                href="/carbon-issued"
                className="hover:text-primary rounded-md px-3 py-2 text-sm font-medium text-nowrap text-gray-700 transition-colors"
              >
                Karbon Terbit
              </Link>
              <Link
                href="/communities"
                className="hover:text-primary rounded-md px-3 py-2 text-sm font-medium text-nowrap text-gray-700 transition-colors"
              >
                Komunitas
              </Link>
              <Link
                href="/register"
                className="hover:text-primary rounded-md px-3 py-2 text-sm font-medium text-nowrap text-gray-700 transition-colors"
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
                    <Button asChild>
                      <Link href="/projects/create">Buat Proyek</Link>
                    </Button>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-2"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {(user.name || user.fullName || "U").charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">
                          {user.name || user.fullName || "Pengguna"}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="flex items-center">
                          <Home className="mr-2 h-4 w-4" />
                          Dasbor
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="flex items-center"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Keluar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" asChild>
                    <Link href="/admin/dashboard">Admin</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/community/dashboard">Community</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/individual/dashboard">Individual</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/logo.png"
                        alt="CarbonEx Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <span className="text-xl font-bold text-gray-900">
                        CarbonEx
                      </span>
                    </div>

                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        asChild
                        className="hover:text-primary w-full justify-start"
                      >
                        <Link href="/" className="flex items-center">
                          <Home className="mr-2 h-4 w-4" />
                          Beranda
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        asChild
                        className="hover:text-primary w-full justify-start"
                      >
                        <Link href="/projects" className="flex items-center">
                          <Leaf className="mr-2 h-4 w-4" />
                          Proyek
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        asChild
                        className="hover:text-primary w-full justify-start"
                      >
                        <Link
                          href="/carbon-issued"
                          className="flex items-center"
                        >
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Karbon Terbit
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        asChild
                        className="hover:text-primary w-full justify-start"
                      >
                        <Link href="/communities" className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          Komunitas
                        </Link>
                      </Button>
                    </div>

                    {user ? (
                      <div className="space-y-2 border-t pt-4">
                        <div className="flex items-center space-x-2 px-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {(user.name || user.fullName || "U").charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-gray-700">
                            {user.name || user.fullName || "Pengguna"}
                          </span>
                        </div>
                        {user.role === "community" && (
                          <Button asChild className="w-full justify-start">
                            <Link href="/projects/create">Buat Proyek</Link>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          asChild
                          className="w-full justify-start"
                        >
                          <Link href="/dashboard" className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            Dasbor
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={handleLogout}
                          className="w-full justify-start"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Keluar
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2 border-t pt-4">
                        <Button
                          variant="ghost"
                          asChild
                          className="w-full justify-start"
                        >
                          <Link href="/admin/dashboard">Admin</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          asChild
                          className="w-full justify-start"
                        >
                          <Link href="/community/dashboard">Community</Link>
                        </Button>
                        <Button asChild className="w-full justify-start">
                          <Link href="/individual/dashboard">Individual</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
