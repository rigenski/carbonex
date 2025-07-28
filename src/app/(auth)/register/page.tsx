"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

type RegisterFormData = {
  role: "community" | "individual";
  idCard: FileList | null;
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"community" | "individual">(
    "individual",
  );
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<RegisterFormData>({
    defaultValues: {
      role: "individual",
    },
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to register the user
      console.log("Registration data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to email verification
      router.push("/verify-email");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = (role: "community" | "individual") => {
    setSelectedRole(role);
    setValue("role", role);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setIdCardPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      setValue("idCard", files);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setIdCardPreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        // Create a new FileList for the form
        const dt = new DataTransfer();
        dt.items.add(file);
        setValue("idCard", dt.files);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const removeIdCard = () => {
    setIdCardPreview(null);
    setValue("idCard", null);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="relative hidden bg-gradient-to-br from-green-600 to-green-800 lg:flex lg:w-1/2">
        <div className="bg-opacity-20 absolute inset-0 bg-black"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-8">
            <div className="mb-6 flex items-center">
              <Image
                src="/logo.png"
                alt="CarbonEx Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="ml-3 text-2xl font-bold">CarbonEx</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold">
              Bergabung dengan Gerakan Aksi Iklim
            </h1>
            <p className="mb-8 text-xl text-green-100">
              Terhubung dengan komunitas dan individu di seluruh dunia untuk
              menciptakan proyek offset karbon terverifikasi dan membuat dampak
              nyata pada masa depan planet kita.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Proyek kredit karbon terverifikasi</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Inisiatif berbasis komunitas</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Pelacakan dampak real-time</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full items-center justify-center bg-white p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Buat Akun Anda
            </h2>
            <p className="text-gray-600">
              Mulai perjalanan Anda menuju masa depan yang berkelanjutan
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Role Selection */}
            <div>
              <Label className="mb-3 block text-sm font-medium text-gray-700">
                Saya mendaftar sebagai:
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={
                    selectedRole === "individual" ? "default" : "outline"
                  }
                  onClick={() => handleRoleChange("individual")}
                  className="h-auto p-4"
                >
                  <div className="text-center">
                    <div className="font-semibold">Individu</div>
                    <div className="text-xs">Akun pribadi</div>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant={selectedRole === "community" ? "default" : "outline"}
                  onClick={() => handleRoleChange("community")}
                  className="h-auto p-4"
                >
                  <div className="text-center">
                    <div className="font-semibold">Komunitas</div>
                    <div className="text-xs">Akun organisasi</div>
                  </div>
                </Button>
              </div>
              <input type="hidden" {...register("role")} />
            </div>

            {/* ID Card Upload */}
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-700">
                {selectedRole === "community"
                  ? "ID Organisasi/NPWP"
                  : "Kartu Identitas"}{" "}
                *
              </Label>
              <div
                className={`relative rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
                  isDragOver
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-gray-400"
                } ${errors.idCard ? "border-red-300" : ""}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                {idCardPreview ? (
                  <div className="space-y-4">
                    <Image
                      src={idCardPreview}
                      alt="ID Card Preview"
                      className="mx-auto h-32 w-auto rounded-lg border object-cover"
                      width={240}
                      height={240}
                    />
                    <div className="flex justify-center space-x-2">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={removeIdCard}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-gray-600">
                        <span className="font-medium text-green-600">
                          Klik untuk unggah
                        </span>{" "}
                        atau seret dan lepas
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, JPEG hingga 10MB
                      </p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  {...register("idCard", {
                    required: "Kartu identitas wajib diisi",
                  })}
                  onChange={handleFileChange}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
              </div>
              {errors.idCard && (
                <p className="text-sm text-red-600">{errors.idCard.message}</p>
              )}
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                {selectedRole === "community"
                  ? "Nama Organisasi"
                  : "Nama Lengkap"}{" "}
                *
              </Label>
              <Input
                id="name"
                type="text"
                {...register("name", { required: "Nama wajib diisi" })}
                placeholder={
                  selectedRole === "community"
                    ? "Masukkan nama organisasi"
                    : "Masukkan nama lengkap Anda"
                }
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Nomor Telepon *</Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber", {
                  required: "Nomor telepon wajib diisi",
                })}
                placeholder="Masukkan nomor telepon Anda"
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-600">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Alamat Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email wajib diisi",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Silakan masukkan alamat email yang valid",
                  },
                })}
                placeholder="Masukkan alamat email Anda"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Alamat *</Label>
              <Textarea
                id="address"
                {...register("address", { required: "Alamat wajib diisi" })}
                placeholder="Masukkan alamat lengkap Anda"
                rows={3}
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Kata Sandi *</Label>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Kata sandi wajib diisi",
                  minLength: {
                    value: 8,
                    message: "Kata sandi minimal 8 karakter",
                  },
                })}
                placeholder="Buat kata sandi"
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi *</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Silakan konfirmasi kata sandi Anda",
                  validate: (value) =>
                    value === password || "Kata sandi tidak cocok",
                })}
                placeholder="Konfirmasi kata sandi Anda"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Membuat Akun..." : "Buat Akun"}
            </Button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{" "}
                <Link
                  href="/login"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
