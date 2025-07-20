"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <span className="font-bold text-green-600">C</span>
              </div>
              <span className="ml-3 text-2xl font-bold">CarbonEx</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold">
              Join the Climate Action Movement
            </h1>
            <p className="mb-8 text-xl text-green-100">
              Connect with communities and individuals worldwide to create
              verified carbon offset projects and make a real impact on our
              planet&apos;s future.
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
              <span>Verified carbon credit projects</span>
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
              <span>Community-driven initiatives</span>
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
              <span>Real-time impact tracking</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-gray-600">
              Start your journey towards a sustainable future
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-700">
                I am registering as:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleRoleChange("individual")}
                  className={`rounded-lg border p-4 text-center transition-all ${
                    selectedRole === "individual"
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <div className="font-semibold">Individual</div>
                  <div className="text-xs text-gray-500">Personal account</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleChange("community")}
                  className={`rounded-lg border p-4 text-center transition-all ${
                    selectedRole === "community"
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <div className="font-semibold">Community</div>
                  <div className="text-xs text-gray-500">
                    Organization account
                  </div>
                </button>
              </div>
              <input type="hidden" {...register("role")} />
            </div>

            {/* ID Card Upload */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {selectedRole === "community"
                  ? "Organization ID/Tax ID"
                  : "ID Card"}{" "}
                *
              </label>
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
                    <img
                      src={idCardPreview}
                      alt="ID Card Preview"
                      className="mx-auto h-32 w-auto rounded-lg border object-cover"
                    />
                    <div className="flex justify-center space-x-2">
                      <button
                        type="button"
                        onClick={removeIdCard}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
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
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  {...register("idCard", { required: "ID card is required" })}
                  onChange={handleFileChange}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
              </div>
              {errors.idCard && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.idCard.message}
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {selectedRole === "community"
                  ? "Organization Name"
                  : "Full Name"}{" "}
                *
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder={
                  selectedRole === "community"
                    ? "Enter organization name"
                    : "Enter your full name"
                }
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Address *
              </label>
              <textarea
                {...register("address", { required: "Address is required" })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                rows={3}
                placeholder="Enter your complete address"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Confirm Password *
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
