"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";

type ProjectFormData = {
  name: string;
  type: string;
  shortDescription: string;
  fullDescription: string;
  address: {
    regional: string;
    province: string;
    city: string;
    district: string;
    postalCode: string;
  };
  estimateCarbon: number;
  totalVolunteers: number;
  estimateDate: {
    start: string;
    end: string;
  };
  images: FileList | null;
};

const projectTypes = [
  "Reforestation",
  "Renewable Energy",
  "Waste Reduction",
  "Conservation",
  "Sustainable Agriculture",
  "Clean Water",
  "Energy Efficiency",
  "Ocean Conservation",
];

const indonesianProvinces = [
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "Sumatera Utara",
  "Sumatera Selatan",
  "Sumatera Barat",
  "Bali",
  "Kalimantan Timur",
  "Sulawesi Selatan",
  "Papua",
  "Maluku",
];

export default function CreateProjectPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProjectFormData>();

  const watchImages = watch("images");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
      setImagePreview(previewUrls);
    }
  };

  const removeImage = (index: number) => {
    const newPreviews = imagePreview.filter((_, i) => i !== index);
    setImagePreview(newPreviews);

    // Create new FileList without the removed image
    if (watchImages) {
      const dt = new DataTransfer();
      Array.from(watchImages).forEach((file, i) => {
        if (i !== index) dt.items.add(file);
      });
      setValue("images", dt.files);
    }
  };

  const onSubmit = async (data: ProjectFormData) => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to create the project
      console.log("Project data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Redirect to project list or project detail
      router.push("/projects");
    } catch (error) {
      console.error("Failed to create project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  Create Project
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900">
            Create New Project
          </h1>
          <p className="mt-2 text-gray-600">
            Create a new carbon credit project to make a positive impact on our
            environment.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Information */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Project Name */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Project Name *
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Project name is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your project name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Project Type *
                </label>
                <select
                  {...register("type", {
                    required: "Project type is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.type && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.type.message}
                  </p>
                )}
              </div>

              {/* Estimated Carbon */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Estimated Carbon Offset (tons CO₂) *
                </label>
                <input
                  type="number"
                  min="1"
                  {...register("estimateCarbon", {
                    required: "Estimated carbon is required",
                    min: { value: 1, message: "Must be at least 1 ton" },
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="e.g., 1200"
                />
                {errors.estimateCarbon && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.estimateCarbon.message}
                  </p>
                )}
              </div>

              {/* Total Volunteers */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Total Volunteers Needed *
                </label>
                <input
                  type="number"
                  min="1"
                  {...register("totalVolunteers", {
                    required: "Number of volunteers is required",
                    min: { value: 1, message: "Must be at least 1 volunteer" },
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="e.g., 50"
                />
                {errors.totalVolunteers && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.totalVolunteers.message}
                  </p>
                )}
              </div>

              {/* Short Description */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Short Description *
                </label>
                <textarea
                  {...register("shortDescription", {
                    required: "Short description is required",
                  })}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Brief description of your project (max 200 characters)"
                  maxLength={200}
                />
                {errors.shortDescription && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.shortDescription.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Project Timeline */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Project Timeline
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Start Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Start Date *
                </label>
                <input
                  type="date"
                  {...register("estimateDate.start", {
                    required: "Start date is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                {errors.estimateDate?.start && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.estimateDate.start.message}
                  </p>
                )}
              </div>

              {/* End Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  End Date *
                </label>
                <input
                  type="date"
                  {...register("estimateDate.end", {
                    required: "End date is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                {errors.estimateDate?.end && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.estimateDate.end.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Project Location
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Regional */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Regional *
                </label>
                <input
                  type="text"
                  {...register("address.regional", {
                    required: "Regional is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="e.g., Java"
                />
                {errors.address?.regional && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.regional.message}
                  </p>
                )}
              </div>

              {/* Province */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Province *
                </label>
                <select
                  {...register("address.province", {
                    required: "Province is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <option value="">Select province</option>
                  {indonesianProvinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                {errors.address?.province && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.province.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  {...register("address.city", {
                    required: "City is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="e.g., Jakarta"
                />
                {errors.address?.city && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.city.message}
                  </p>
                )}
              </div>

              {/* District */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  District *
                </label>
                <input
                  type="text"
                  {...register("address.district", {
                    required: "District is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="e.g., Central Jakarta"
                />
                {errors.address?.district && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.district.message}
                  </p>
                )}
              </div>

              {/* Postal Code */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Postal Code *
                </label>
                <input
                  type="text"
                  {...register("address.postalCode", {
                    required: "Postal code is required",
                  })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="e.g., 10110"
                />
                {errors.address?.postalCode && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.postalCode.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Detailed Description
            </h2>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Project Description *
              </label>
              <textarea
                {...register("fullDescription", {
                  required: "Full description is required",
                })}
                rows={8}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Provide a detailed description of your project, including objectives, methodology, expected outcomes, and impact..."
              />
              {errors.fullDescription && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fullDescription.message}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-500">
                Provide comprehensive details about your project including
                goals, implementation plan, environmental impact, and community
                benefits.
              </p>
            </div>
          </div>

          {/* Project Images */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Project Images
            </h2>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Upload Project Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                {...register("images")}
                onChange={handleImageChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <p className="mt-2 text-sm text-gray-500">
                Upload multiple images to showcase your project. Supported
                formats: JPG, PNG, WebP. Max 5MB per image.
              </p>

              {/* Image Preview */}
              {imagePreview.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {imagePreview.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="h-32 w-full rounded-lg border object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-end gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Creating Project..." : "Create Project"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
