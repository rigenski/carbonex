"use client";

import React, { useState } from "react";

import { ConfigProvider, TConfig } from "@/stores/config";
import { AuthProvider } from "@/stores/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar } from "next-nprogress-bar";
import { Toaster } from "sonner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

type TProvidersProps = {
  children: React.ReactNode;
  config: TConfig;
};

export default function Providers({ children, config }: TProvidersProps) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
          refetchOnWindowFocus: false,
        },
      },
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider config={config}>
        <AuthProvider isLogin={false} accessToken="" user={null}>
          <AppProgressBar
            height="4px"
            color={"#10B981"}
            options={{ showSpinner: false }}
            shallowRouting
          />
          <Toaster position="top-center" richColors />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
