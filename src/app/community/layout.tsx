"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChartBarIcon,
  FolderIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
} from "@/components/ui/sidebar";

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          type="button"
          className="fixed top-4 left-4 z-50 rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          {sidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        <Sidebar
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-40 min-w-[240px] transform transition-transform duration-300 ease-in-out lg:relative lg:inset-0 lg:translate-x-0`}
        >
          <SidebarHeader>
            <h1 className="text-xl font-semibold text-gray-900">
              Community Panel
            </h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarNav>
              {navigation.map((item) => (
                <SidebarNavItem
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  active={item.current}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </SidebarNavItem>
              ))}
            </SidebarNav>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-4 lg:p-8">{children}</div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="bg-opacity-75 fixed inset-0 z-30 bg-gray-600 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
