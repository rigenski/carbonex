"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const authLoginMutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login data:", data);
      return { success: true };
    },
    onSuccess: () => {
      // Handle successful login
      console.log("Login successful");
    },
  });

  const onSubmit = (data: LoginForm) => {
    authLoginMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-emerald-600 py-16 sm:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Icon icon="mdi:account" className="mr-2 h-4 w-4" />
              Welcome Back to the Carbon Community
            </div>
            <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Welcome Back to the Carbon Community
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl">
              Continue your journey in creating sustainable impact through
              verified carbon credit projects.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-3xl font-black text-gray-900">
                  Login
                </h2>
                <p className="text-gray-600">Access your CarbonEx account</p>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="email" className="mb-2 text-sm font-bold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email", { required: true })}
                    placeholder="Enter your email address"
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="mb-2 text-sm font-bold">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...form.register("password", { required: true })}
                      placeholder="Enter your password"
                      className="rounded-lg border-gray-200 bg-white/50 pr-10 backdrop-blur-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Icon
                        icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                        className="h-5 w-5"
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember-me"
                      {...form.register("rememberMe")}
                      className="rounded border-gray-300"
                    />
                    <Label
                      htmlFor="remember-me"
                      className="text-sm font-medium text-gray-700"
                    >
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={authLoginMutation.isPending}
                  className="w-full rounded-lg bg-emerald-600 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-700"
                >
                  {authLoginMutation.isPending ? (
                    <div className="flex items-center">
                      <Icon
                        icon="mdi:loading"
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                      Logging in...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Icon icon="mdi:login" className="mr-2 h-4 w-4" />
                      Login
                    </div>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
                      className="font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      Create one here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
