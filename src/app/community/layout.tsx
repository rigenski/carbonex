"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartBarIcon,
  FolderIcon,
  PlusIcon,
  UsersIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      href: "/community/dashboard",
      icon: ChartBarIcon,
      current: pathname === "/community/dashboard",
    },
    {
      name: "Daftar Proyek",
      href: "/community/projects",
      icon: FolderIcon,
      current: pathname === "/community/projects",
    },
    {
      name: "Buat Proyek",
      href: "/community/create-project",
      icon: PlusIcon,
      current: pathname === "/community/create-project",
    },
    {
      name: "Relawan",
      href: "/community/volunteers",
      icon: UsersIcon,
      current: pathname === "/community/volunteers",
    },
    {
      name: "Acara",
      href: "/community/events",
      icon: CalendarIcon,
      current: pathname === "/community/events",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar - Fixed and Sticky */}
        <div className="sidebar-fixed">
          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-900">
              Community Panel
            </h1>
          </div>
          <nav className="mt-6">
            <div className="space-y-1 px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                    item.current
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content - With left margin to account for fixed sidebar */}
        <div className="main-content-with-sidebar">
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
