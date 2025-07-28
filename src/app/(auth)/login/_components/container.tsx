"use client";

import { authLogin } from "@/services/auth";
import { TLoginRequest, TVerifyResponse } from "@/services/auth/types";
import { setSession } from "@/utils/session";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Container() {
  const form = useForm<TLoginRequest>();

  const authLoginMutation = useMutation({
    mutationFn: authLogin,
    onSuccess: (data) => {
      setSession(data.content as TVerifyResponse);

      toast.success(data.message);

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (value: TLoginRequest) => {
    authLoginMutation.mutate({
      email: value.email,
      password: value.password,
    });
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
              Selamat Datang Kembali ke Komunitas Aksi Iklim
            </h1>
            <p className="mb-8 text-xl text-green-100">
              Lanjutkan perjalanan Anda dalam menciptakan dampak berkelanjutan
              melalui proyek kredit karbon terverifikasi.
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
              <span>Lacak dampak offset karbon Anda</span>
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
              <span>Akses pembaruan proyek eksklusif</span>
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
              <span>Terhubung dengan komunitas global</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full items-center justify-center bg-white p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Masuk</h2>
            <p className="text-gray-600">Akses akun CarbonEx Anda</p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Alamat Email</Label>
              <Input
                type="email"
                id="email"
                {...form.register("email", { required: true })}
                placeholder="Masukkan alamat email Anda"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Kata Sandi</Label>
              <Input
                type="password"
                id="password"
                {...form.register("password", { required: true })}
                placeholder="Masukkan kata sandi Anda"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="text-sm">
                  Ingat saya
                </Label>
              </div>
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Lupa kata sandi?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={authLoginMutation.isPending}
              className="w-full"
            >
              {authLoginMutation.isPending ? "Sedang Masuk..." : "Masuk"}
            </Button>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Tidak punya akun?{" "}
                <Link
                  href="/register"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Buat akun di sini
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
