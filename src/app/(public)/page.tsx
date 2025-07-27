import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold text-gray-900">
                Ubah Jejak Karbon Anda Menjadi{" "}
                <span className="text-green-600">Dampak Nyata</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Akses proyek offset karbon terverifikasi premium yang memberikan
                hasil lingkungan yang terukur. Bergabunglah dengan 890+
                organisasi yang sudah membuat perbedaan melalui platform kami
                yang terbukti.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/projects"
                  className="rounded-lg bg-green-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-green-700"
                >
                  Mulai Kontribusi
                </Link>
                <Link
                  href="/communities"
                  className="rounded-lg border border-green-600 px-8 py-3 text-center font-semibold text-green-600 transition-colors hover:bg-green-50"
                >
                  Lihat Komunitas
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    1,234+
                  </div>
                  <div className="text-gray-600">Proyek Terverifikasi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    56,789
                  </div>
                  <div className="text-gray-600">Ton CO₂ Dihilangkan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">890+</div>
                  <div className="text-gray-600">Mitra Sukses</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-green-200 p-8">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center"
                  alt="Environmental sustainability"
                  className="h-80 w-full rounded-2xl object-cover"
                  width={480}
                  height={480}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Proyek Terverifikasi</div>
                    <div className="text-sm text-gray-600">100% Transparan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Mengapa 890+ Organisasi Memilih CarbonEx
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Satu-satunya platform yang Anda butuhkan untuk kredit karbon
              premium dengan ROI terjamin pada investasi keberlanjutan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Kualitas Triple-Verified
              </h3>
              <p className="text-gray-600">
                Setiap proyek memenuhi standar internasional dengan verifikasi
                pihak ketiga. Investasi Anda dilindungi dengan 100% transparansi
                dan hasil yang terukur.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h4a3 3 0 013 3v2a3 3 0 01-3 3zM8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Skala & Dampak Instan
              </h3>
              <p className="text-gray-600">
                Luncurkan program karbon Anda dalam hitungan menit, bukan bulan.
                Terhubung dengan komunitas yang telah diverifikasi dan lihat
                dampak lingkungan langsung dengan pelacakan real-time.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-8 w-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Hasil ROI Terbukti</h3>
              <p className="text-gray-600">
                Tingkatkan nilai merek, penuhi persyaratan kepatuhan, dan
                menarik pelanggan yang sadar lingkungan. Klien kami melaporkan
                peningkatan 40% dalam metrik keberlanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Bergabung dengan Pemimpin Industri yang Membuat Perubahan Nyata
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Dari perusahaan Fortune 500 hingga startup yang berkembang - lihat
              bagaimana organisasi di seluruh dunia mencapai tujuan
              keberlanjutan mereka lebih cepat dengan CarbonEx.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              {
                name: "EcoTech Solutions",
                image:
                  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
                description: "Technology Leader",
              },
              {
                name: "Green Industries",
                image:
                  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=100&fit=crop&crop=center",
                description: "Manufacturing",
              },
              {
                name: "Sustainable Corp",
                image:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop&crop=center",
                description: "Financial Services",
              },
              {
                name: "Clean Energy Co",
                image:
                  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&h=100&fit=crop&crop=center",
                description: "Energy Sector",
              },
              {
                name: "Global Logistics",
                image:
                  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&crop=center",
                description: "Transportation",
              },
              {
                name: "Future Retail",
                image:
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop&crop=center",
                description: "Retail Chain",
              },
            ].map((client, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="mb-4 overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src={client.image}
                    alt={client.name}
                    className="h-16 w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    width={240}
                    height={240}
                  />
                </div>
                <h3 className="mb-1 text-center text-sm font-semibold text-gray-900">
                  {client.name}
                </h3>
                <p className="text-center text-xs text-gray-500">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-green-600">
                  500+
                </div>
                <div className="text-gray-600">Mitra Korporat</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-green-600">
                  95%
                </div>
                <div className="text-gray-600">Kepuasan Klien</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-green-600">
                  150M
                </div>
                <div className="text-gray-600">Ton CO₂ Offset Bersama</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Cara Kerjanya
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Langkah sederhana untuk mulai membuat perbedaan dalam melawan
              perubahan iklim.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-3 text-lg font-semibold">Daftar</h3>
              <p className="text-gray-600">
                Daftar sebagai komunitas atau individu untuk memulai perjalanan
                offset karbon Anda.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-3 text-lg font-semibold">Jelajahi Proyek</h3>
              <p className="text-gray-600">
                Jelajahi proyek kredit karbon terverifikasi di area Anda atau
                buat proyek Anda sendiri.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-3 text-lg font-semibold">Berpartisipasi</h3>
              <p className="text-gray-600">
                Bergabung dengan proyek sebagai relawan atau berkontribusi pada
                inisiatif komunitas.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="mb-3 text-lg font-semibold">Lacak Dampak</h3>
              <p className="text-gray-600">
                Pantau kontribusi offset karbon Anda dan lihat dampak nyata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Fitur Kuat untuk Aksi Iklim
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      Verifikasi Proyek
                    </h3>
                    <p className="text-gray-600">
                      Verifikasi independen memastikan semua proyek memenuhi
                      standar kredit karbon internasional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      Pemantauan Real-time
                    </h3>
                    <p className="text-gray-600">
                      Lacak kemajuan proyek dan pengurangan karbon secara
                      real-time dengan analitik detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      Koneksi Komunitas
                    </h3>
                    <p className="text-gray-600">
                      Terhubung dengan komunitas dan individu yang berpikiran
                      sama untuk dampak yang lebih besar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center"
                alt="Get started"
                className="h-64 w-full rounded-xl object-cover"
                width={480}
                height={480}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Proyek Terbaru
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Temukan proyek kredit karbon terbaru yang membuat perbedaan di
              seluruh dunia.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-lg bg-white shadow-md"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center"
                  alt={`Project ${project}`}
                  className="h-48 w-full object-cover"
                  width={480}
                  height={480}
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Aktif
                    </span>
                    <span className="text-sm text-gray-500">
                      Proyek #{project}23
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Inisiatif Restorasi Hutan
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    Jakarta, Indonesia • 1,200 ton CO₂ diperkirakan
                  </p>
                  <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                    <span>45 relawan</span>
                    <span>Des 2024 - Jun 2025</span>
                  </div>
                  <Link
                    href={`/projects/${project}`}
                    className="block w-full rounded-md bg-green-600 py-2 text-center text-white transition-colors hover:bg-green-700"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              Lihat Semua Proyek
            </Link>
          </div>
        </div>
      </section>

      {/* Validators Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Jaminan Kualitas yang Diakui Secara Global
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Investasi karbon Anda didukung oleh badan sertifikasi paling
              terpercaya di dunia. Setiap kredit memenuhi standar internasional
              untuk dampak dan kredibilitas maksimal.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
            {[
              "Verra",
              "Gold Standard",
              "Climate Action Reserve",
              "American Carbon Registry",
            ].map((validator, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-lg bg-gray-100 p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded bg-gray-300">
                    <span className="text-sm font-semibold text-gray-600">
                      {validator.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{validator}</h3>
                <p className="text-sm text-gray-600">Sertifikasi Premium</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Mulai Perjalanan Dampak Karbon Anda Hari Ini
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-green-100">
            Bergabunglah dengan 890+ organisasi yang sudah mencapai tujuan
            keberlanjutan mereka. Dapatkan akses instan ke kredit karbon premium
            dan lihat hasil terukur dalam hitungan minggu, bukan tahun.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
            >
              Mulai Gratis Hari Ini
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              Jelajahi Proyek Premium
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
