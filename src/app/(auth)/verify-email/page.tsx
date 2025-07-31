"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = pastedData
      .split("")
      .concat(Array(6 - pastedData.length).fill(""));
    setOtp(newOtp.slice(0, 6));

    // Focus the next empty input or the last input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      alert("Silakan masukkan semua 6 digit");
      return;
    }

    setIsLoading(true);
    try {
      // Here you would typically make an API call to verify the OTP
      console.log("OTP:", otpCode);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to login or dashboard
      router.push("/login");
    } catch (error) {
      console.error("Verification failed:", error);
      alert("Verifikasi gagal. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      // Here you would typically make an API call to resend the OTP
      console.log("Resending OTP...");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset countdown
      setCountdown(60);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (error) {
      console.error("Resend failed:", error);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="CarbonEx Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900">
                CarbonEx
              </span>
            </div>
          </div>

          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Verifikasi Email Anda
          </h2>
          <p className="mb-8 text-gray-600">
            Kami telah mengirim kode verifikasi ke alamat email Anda. Silakan
            masukkan kode 6 digit di bawah ini.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* OTP Input */}
          <div className="flex justify-center space-x-4">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="h-12 w-12 text-center text-xl font-semibold"
                placeholder="0"
              />
            ))}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading || otp.join("").length !== 6}
            className="w-full"
          >
            {isLoading ? "Memverifikasi..." : "Verifikasi Email"}
          </Button>

          {/* Resend Code */}
          <div className="text-center">
            <p className="mb-2 text-sm text-gray-600">Tidak menerima kode?</p>
            {canResend ? (
              <Button
                type="button"
                variant="link"
                onClick={handleResend}
                disabled={resendLoading}
                className="h-auto p-0 text-sm font-medium text-green-600 hover:text-green-700 disabled:opacity-50"
              >
                {resendLoading ? "Mengirim..." : "Kirim Ulang Kode"}
              </Button>
            ) : (
              <span className="text-sm text-gray-500">
                Kirim ulang kode dalam {countdown}s
              </span>
            )}
          </div>

          {/* Back to Register */}
          <div className="text-center">
            <Link
              href="/register"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              ← Kembali ke Pendaftaran
            </Link>
          </div>
        </form>

        {/* Instructions */}
        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Tips untuk verifikasi
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Periksa folder spam jika Anda tidak melihat email</li>
                  <li>Kode berlaku selama 10 menit</li>
                  <li>Anda dapat meminta kode baru setelah 60 detik</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
