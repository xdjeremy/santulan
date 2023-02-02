import React, { FC, ReactNode } from "react";
import { LinkName, NavBar } from "@/components/navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  children: ReactNode;
  active: LinkName;
}

const Layout: FC<Props> = ({ children, active }) => {
  return (
    <div className={"flex min-h-screen flex-col justify-between bg-base-100"}>
      <NavBar active={active} />
      <main className={"flex flex-col bg-base-100 pb-5"}>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
