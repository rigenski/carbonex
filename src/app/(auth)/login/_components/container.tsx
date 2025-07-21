"use client";

import { authLogin } from "@/services/auth";
import { TLoginRequest, TVerifyResponse } from "@/services/auth/types";
import { setSession } from "@/utils/session";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";

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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <span className="font-bold text-green-600">C</span>
              </div>
              <span className="ml-3 text-2xl font-bold">CarbonEx</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold">
              Welcome Back to the Climate Action Community
            </h1>
            <p className="mb-8 text-xl text-green-100">
              Continue your journey in creating sustainable impact through
              verified carbon credit projects.
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
              <span>Track your carbon offset impact</span>
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
              <span>Access exclusive project updates</span>
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
              <span>Connect with global communities</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Sign In</h2>
            <p className="text-gray-600">Access your CarbonEx account</p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...form.register("email", { required: true })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...form.register("password", { required: true })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={authLoginMutation.isPending}
              className="w-full rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {authLoginMutation.isPending ? "Signing In..." : "Sign In"}
            </button>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Create one here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
