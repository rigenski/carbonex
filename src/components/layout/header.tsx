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
import { Menu, LogOut, Home } from "lucide-react";
import { Icon } from "@iconify/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 shadow-lg backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex flex-1 justify-start">
            <Link href="/" className="group flex items-center">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="CarbonEx Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 transition-transform duration-300"
                />
              </div>
              <span className="ml-3 text-xl font-black text-emerald-600">
                CARBONEX
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden flex-1 justify-center md:flex">
            <div className="flex items-baseline space-x-1">
              <Link
                href="/projects"
                className="group relative rounded-lg px-4 py-2 text-sm font-bold text-nowrap text-gray-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Projects
              </Link>
              <Link
                href="/carbon-issued"
                className="group relative rounded-lg px-4 py-2 text-sm font-bold text-nowrap text-gray-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Carbon Issued
              </Link>
              <Link
                href="/communities"
                className="group relative rounded-lg px-4 py-2 text-sm font-bold text-nowrap text-gray-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Communities
              </Link>
            </div>
          </div>

          {/* User Auth Section - Right */}
          <div className="flex flex-1 justify-end">
            <div className="hidden md:block">
              {user ? (
                <div className="flex items-center space-x-4">
                  {user.role === "community" && (
                    <Button
                      asChild
                      className="rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl"
                    >
                      <Link href="/projects/create">
                        <Icon icon="mdi:plus" className="mr-2 h-4 w-4" />
                        Create Project
                      </Link>
                    </Button>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-2 rounded-lg hover:bg-emerald-50"
                      >
                        <Avatar className="h-8 w-8 ring-2 ring-emerald-100">
                          <AvatarFallback className="bg-emerald-600 font-bold text-white">
                            {(user.name || user.fullName || "U").charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-bold">
                          {user.name || user.fullName || "User"}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-48 rounded-lg border-0 bg-white/90 shadow-xl backdrop-blur-md"
                    >
                      <DropdownMenuItem asChild>
                        <Link
                          href="/dashboard"
                          className="flex items-center rounded-md"
                        >
                          <Home className="mr-2 h-4 w-4" />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="flex items-center rounded-md"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    asChild
                    className="rounded-lg font-bold hover:bg-emerald-50"
                  >
                    <Link href="/admin/dashboard">Admin</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="rounded-lg font-bold hover:bg-emerald-50"
                  >
                    <Link href="/community/dashboard">Community</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="rounded-lg font-bold hover:bg-emerald-50"
                  >
                    <Link href="/individual/dashboard">Individual</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-lg">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-white/95 backdrop-blur-md"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src="/logo.png"
                          alt="CarbonEx Logo"
                          width={32}
                          height={32}
                          className="h-8 w-8"
                        />
                      </div>
                      <span className="text-xl font-black text-emerald-600">
                        CarbonEx
                      </span>
                    </div>

                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                      >
                        <Link href="/" className="flex items-center">
                          <Icon icon="mdi:home" className="mr-3 h-5 w-5" />
                          Home
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                      >
                        <Link href="/projects" className="flex items-center">
                          <Icon icon="mdi:leaf" className="mr-3 h-5 w-5" />
                          Projects
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                      >
                        <Link
                          href="/carbon-issued"
                          className="flex items-center"
                        >
                          <Icon
                            icon="mdi:trending-up"
                            className="mr-3 h-5 w-5"
                          />
                          Carbon Issued
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                      >
                        <Link href="/communities" className="flex items-center">
                          <Icon
                            icon="mdi:account-group"
                            className="mr-3 h-5 w-5"
                          />
                          Communities
                        </Link>
                      </Button>
                    </div>

                    {user ? (
                      <div className="space-y-3 border-t border-gray-200 pt-6">
                        <div className="flex items-center space-x-3 px-2">
                          <Avatar className="h-10 w-10 ring-2 ring-emerald-100">
                            <AvatarFallback className="bg-emerald-600 font-bold text-white">
                              {(user.name || user.fullName || "U").charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-bold text-gray-700">
                            {user.name || user.fullName || "User"}
                          </span>
                        </div>
                        {user.role === "community" && (
                          <Button
                            asChild
                            className="w-full justify-start rounded-lg bg-emerald-600 font-bold text-white hover:bg-emerald-700"
                          >
                            <Link href="/projects/create">
                              <Icon icon="mdi:plus" className="mr-2 h-4 w-4" />
                              Create Project
                            </Link>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          asChild
                          className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                        >
                          <Link href="/dashboard" className="flex items-center">
                            <Icon
                              icon="mdi:view-dashboard"
                              className="mr-3 h-5 w-5"
                            />
                            Dashboard
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={handleLogout}
                          className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                        >
                          <Icon icon="mdi:logout" className="mr-3 h-5 w-5" />
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3 border-t border-gray-200 pt-6">
                        <Button
                          variant="ghost"
                          asChild
                          className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                        >
                          <Link href="/admin/dashboard">Admin</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          asChild
                          className="w-full justify-start rounded-lg font-bold hover:bg-emerald-50"
                        >
                          <Link href="/community/dashboard">Community</Link>
                        </Button>
                        <Button
                          asChild
                          className="w-full justify-start rounded-lg bg-emerald-600 font-bold text-white hover:bg-emerald-700"
                        >
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
