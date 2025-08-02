import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="CarbonEx Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <span className="ml-3 text-2xl font-black text-emerald-400">
                CARBONEX
              </span>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-gray-300">
              Connecting communities and individuals to create a sustainable
              future through verified carbon credit projects. Together, we can
              make a difference for our planet.
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="group relative flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20"
              >
                <Icon icon="mdi:twitter" className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="group relative flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20"
              >
                <Icon icon="mdi:linkedin" className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="group relative flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20"
              >
                <Icon icon="mdi:instagram" className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-black text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  Home
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  Projects
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li>
                <Link
                  href="/communities"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  Communities
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  About Us
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-xl font-black text-white">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/help"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  Help Center
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  Contact Us
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  Privacy Policy
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group relative inline-flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                >
                  Terms of Service
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 CarbonEx. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-2 md:mt-0">
            <span className="text-sm text-gray-400">Made by Skyline</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
