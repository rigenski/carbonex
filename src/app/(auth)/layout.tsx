import { TAuthIsLogin, TAuthUser } from "@/stores/auth";
import { getSession } from "@/utils/session";
import React from "react";
import Providers from "./_components/providers";

type TLayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: TLayoutProps) {
  const session = await getSession();

  const isLogin: TAuthIsLogin = false;
  const user: TAuthUser | null = null;

  // if (session?.accessToken) {
  //   await authVerifyToken({ token: session?.accessToken })
  //     .then((response) => {
  //       isLogin = true;
  //       user = response?.content?.user?.email ? response?.content?.user : null;
  //     })
  //     .catch(async () => {
  //       isLogin = false;
  //       user = null;

  //       redirect("/api/logout");
  //     });
  // }

  // if (isLogin) {
  //   redirect("/dashboard");
  // }

  return (
    <Providers
      auth={{
        isLogin: isLogin,
        accessToken: session?.accessToken,
        user: user,
      }}
    >
      {children}
    </Providers>
  );
}
