"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";

interface RegisterForm {
  role: "individual" | "community";
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
  idCard: File | null;
}

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<"individual" | "community">(
    "individual",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterForm>({
    defaultValues: {
      role: "individual",
      name: "",
      phoneNumber: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      idCard: null,
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const password = watch("password");

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterForm) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Register data:", data);
      return { success: true };
    },
    onSuccess: () => {
      // Handle successful registration
      console.log("Registration successful");
    },
  });

  const onSubmit = (data: RegisterForm) => {
    registerMutation.mutate(data);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("idCard", file);
    }
  };

  const isLoading = registerMutation.isPending;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 py-16 sm:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Icon icon="mdi:account-plus" className="mr-2 h-4 w-4" />
              Join the Climate Action Movement
            </div>
            <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Join the Climate Action Movement
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl">
              Connect with communities and individuals worldwide to create
              verified carbon offset projects and make a real impact on our
              planet&apos;s future.
            </p>
          </div>
        </div>
      </section>

      {/* Register Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-md">
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-3xl font-black text-gray-900">
                  Create Your Account
                </h2>
                <p className="text-gray-600">
                  Start your journey towards a sustainable future
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Role Selection */}
                <div>
                  <Label className="mb-3 block text-sm font-bold text-gray-700">
                    <span>I&apos;m registering as:</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRole("individual");
                        setValue("role", "individual");
                      }}
                      className={`relative rounded-lg border-2 p-4 text-center transition-all duration-300 ${
                        selectedRole === "individual"
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 bg-white hover:border-emerald-300"
                      }`}
                    >
                      <Icon
                        icon="mdi:account"
                        className={`mx-auto mb-2 h-8 w-8 ${
                          selectedRole === "individual"
                            ? "text-emerald-600"
                            : "text-gray-400"
                        }`}
                      />
                      <div className="font-bold text-gray-900">Individual</div>
                      <div className="text-xs text-gray-500">
                        Personal account
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRole("community");
                        setValue("role", "community");
                      }}
                      className={`relative rounded-lg border-2 p-4 text-center transition-all duration-300 ${
                        selectedRole === "community"
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 bg-white hover:border-emerald-300"
                      }`}
                    >
                      <Icon
                        icon="mdi:account-group"
                        className={`mx-auto mb-2 h-8 w-8 ${
                          selectedRole === "community"
                            ? "text-emerald-600"
                            : "text-gray-400"
                        }`}
                      />
                      <div className="font-bold text-gray-900">Community</div>
                      <div className="text-xs text-gray-500">
                        Organization account
                      </div>
                    </button>
                  </div>
                </div>

                {/* ID Card Upload */}
                <div>
                  <Label className="mb-2 block text-sm font-bold text-gray-700">
                    {selectedRole === "community"
                      ? "Organization Name/NPWP"
                      : "ID Card"}{" "}
                    *
                  </Label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 hover:border-emerald-400 hover:bg-emerald-50">
                      <div className="text-center">
                        <Icon
                          icon="mdi:upload"
                          className="mx-auto mb-2 h-8 w-8 text-gray-400"
                        />
                        <p className="text-gray-600">
                          <span className="font-bold text-emerald-600">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">
                          PNG, JPG, JPEG up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  {form.watch("idCard") && (
                    <div className="mt-2 flex items-center justify-between rounded-lg bg-emerald-50 p-3">
                      <span className="text-sm text-emerald-700">
                        {form.watch("idCard")?.name}
                      </span>
                      <Button
                        type="button"
                        onClick={() => setValue("idCard", null)}
                        className="text-sm font-bold text-red-600 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                  {errors.idCard && (
                    <p className="mt-1 text-sm text-red-600">
                      ID card is required
                    </p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <Label htmlFor="name" className="mb-2 text-sm font-bold">
                    {selectedRole === "community"
                      ? "Organization Name"
                      : "Full Name"}{" "}
                    *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder={
                      selectedRole === "community"
                        ? "Enter organization name"
                        : "Enter your full name"
                    }
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <Label
                    htmlFor="phoneNumber"
                    className="mb-2 text-sm font-bold"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                    })}
                    placeholder="Enter your phone number"
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm"
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="mb-2 text-sm font-bold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    placeholder="Enter your email address"
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <Label htmlFor="address" className="mb-2 text-sm font-bold">
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    placeholder="Enter your full address"
                    rows={3}
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="password" className="mb-2 text-sm font-bold">
                    Password *
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                      placeholder="Create password"
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
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="mb-2 text-sm font-bold"
                  >
                    Confirm Password *
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      placeholder="Confirm your password"
                      className="rounded-lg border-gray-200 bg-white/50 pr-10 backdrop-blur-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Icon
                        icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"}
                        className="h-5 w-5"
                      />
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Icon
                        icon="mdi:loading"
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                      Creating Account...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Icon icon="mdi:account-plus" className="mr-2 h-4 w-4" />
                      Create Account
                    </div>
                  )}
                </Button>

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      Login here
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
