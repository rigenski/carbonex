"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "mdi:view-dashboard",
      current: pathname === "/admin/dashboard",
    },
    {
      name: "Projects",
      href: "/admin/project",
      icon: "mdi:leaf",
      current: pathname === "/admin/project",
    },
    {
      name: "Communities",
      href: "/admin/community",
      icon: "mdi:account-group",
      current: pathname === "/admin/community",
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: "mdi:account-multiple",
      current: pathname === "/admin/users",
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: "mdi:chart-line",
      current: pathname === "/admin/analytics",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: "mdi:cog",
      current: pathname === "/admin/settings",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
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
          <Icon
            icon={sidebarOpen ? "mdi:close" : "mdi:menu"}
            className="h-6 w-6"
          />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-40 w-64 transform border-r border-gray-200 bg-white/80 backdrop-blur-md transition-transform duration-300 ease-in-out lg:relative lg:inset-0 lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="mb-8 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600">
              <Icon icon="mdi:shield-crown" className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black text-gray-900">Admin Panel</h1>
              <p className="text-xs text-gray-500">Platform Management</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 rounded-lg p-3 transition-colors ${
                  item.current
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon icon={item.icon} className="h-5 w-5" />
                <span className={item.current ? "font-bold" : ""}>
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>

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
