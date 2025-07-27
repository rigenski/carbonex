"use client";

import Link from "next/link";

export default function DashboardPage() {
  // Mock user data for demonstration
  const mockUser = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "COMMUNITY", // or "INDIVIDUAL" or "ADMIN"
  };

  const currentUser = mockUser;

  const renderCommunityDashboard = () => (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Selamat Datang, {currentUser.name}!
        </h2>
        <p className="mb-6 text-gray-600">
          Kelola proyek karbon Anda dan pantau dampak lingkungan yang Anda buat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Proyek</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Relawan</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <span className="text-2xl">🌳</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pohon Ditanam</p>
              <p className="text-2xl font-bold text-gray-900">2,450</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Proyek Terbaru
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
              <div>
                <p className="font-medium text-gray-900">
                  Restorasi Hutan Jakarta
                </p>
                <p className="text-sm text-gray-600">
                  Status: Dalam Pengembangan
                </p>
              </div>
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                Dalam Pengembangan
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
              <div>
                <p className="font-medium text-gray-900">
                  Solar Panel Community
                </p>
                <p className="text-sm text-gray-600">
                  Status: Dikirim untuk Pendaftaran
                </p>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                Dikirim
              </span>
            </div>
          </div>
          <Link
            href="/dashboard/projects"
            className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
          >
            Lihat Semua Proyek →
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Aktivitas Terbaru
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-green-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Proyek baru dibuat
                </p>
                <p className="text-xs text-gray-600">2 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  5 relawan baru bergabung
                </p>
                <p className="text-xs text-gray-600">1 hari yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-yellow-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Proyek disetujui
                </p>
                <p className="text-xs text-gray-600">3 hari yang lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIndividualDashboard = () => (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Selamat Datang, {currentUser.name}!
        </h2>
        <p className="mb-6 text-gray-600">
          Pantau proyek yang Anda ikuti dan dampak yang Anda buat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Proyek Diikuti
              </p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Jam Relawan</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <span className="text-2xl">🌳</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pohon Ditanam</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Proyek Saya
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <span className="text-xl">🌱</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Restorasi Hutan Jakarta
                </p>
                <p className="text-sm text-gray-600">
                  Komunitas: Green Earth Indonesia
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Aktif</p>
              <p className="text-xs text-gray-600">Bergabung 2 bulan lalu</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-xl">☀️</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Solar Panel Community
                </p>
                <p className="text-sm text-gray-600">
                  Komunitas: Solar Future Collective
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Aktif</p>
              <p className="text-xs text-gray-600">Bergabung 1 bulan lalu</p>
            </div>
          </div>
        </div>
        <Link
          href="/dashboard/my-projects"
          className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
        >
          Lihat Semua Proyek Saya →
        </Link>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Selamat Datang, Admin!
        </h2>
        <p className="mb-6 text-gray-600">
          Kelola platform CarbonEx dan pantau semua aktivitas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Proyek</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Komunitas</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <span className="text-2xl">👤</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Individu</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center">
            <div className="rounded-full bg-red-100 p-3">
              <span className="text-2xl">⏳</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Proyek Pending
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
              <div>
                <p className="font-medium text-gray-900">
                  Restorasi Hutan Bandung
                </p>
                <p className="text-sm text-gray-600">
                  Komunitas: Green Earth Indonesia
                </p>
              </div>
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                Menunggu Review
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
              <div>
                <p className="font-medium text-gray-900">Solar Panel Project</p>
                <p className="text-sm text-gray-600">
                  Komunitas: Solar Future Collective
                </p>
              </div>
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                Menunggu Review
              </span>
            </div>
          </div>
          <Link
            href="/dashboard/admin/projects"
            className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
          >
            Lihat Semua Proyek →
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Aktivitas Terbaru
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-green-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Proyek baru disetujui
                </p>
                <p className="text-xs text-gray-600">1 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Komunitas baru terdaftar
                </p>
                <p className="text-xs text-gray-600">3 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-yellow-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Laporan bulanan selesai
                </p>
                <p className="text-xs text-gray-600">1 hari yang lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => {
    switch (currentUser.role) {
      case "COMMUNITY":
        return renderCommunityDashboard();
      case "INDIVIDUAL":
        return renderIndividualDashboard();
      case "ADMIN":
        return renderAdminDashboard();
      default:
        return renderCommunityDashboard();
    }
  };

  return <div>{renderDashboard()}</div>;
}
