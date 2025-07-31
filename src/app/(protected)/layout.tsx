import React from "react";

type TLayoutProps = {
  children: React.ReactNode;
};

export default async function layout({ children }: TLayoutProps) {
  return <>{children}</>;
}
