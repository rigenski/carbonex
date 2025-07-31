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
import { Button } from "@/components/ui/button";

export default function IndividualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/individual/dashboard",
      icon: ChartBarIcon,
      current: pathname === "/individual/dashboard",
    },
    {
      name: "Proyek Saya",
      href: "/individual/projects",
      icon: FolderIcon,
      current: pathname === "/individual/projects",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          {sidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Not Fixed */}
        <Sidebar
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-40 min-w-[240px] transform transition-transform duration-300 ease-in-out lg:relative lg:inset-0 lg:translate-x-0`}
        >
          <SidebarHeader>
            <h1 className="text-xl font-semibold text-gray-900">
              Individual Panel
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
