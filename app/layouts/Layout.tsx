import { useLocation } from "@remix-run/react";
import type { ReactNode } from "react";
import { Header } from "~/components";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  const notShowHeader = pathname === "/user/login";
  return (
    <>
      {!notShowHeader && <Header />}
      {children}
    </>
  );
};
