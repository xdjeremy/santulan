import React, { FC, ReactNode } from "react";
import { LinkName, NavBar } from "@/components/navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  children: ReactNode;
  active: LinkName;
}

const Layout: FC<Props> = ({ children, active }) => {
  return (
    <>
      <div className={"h-full bg-base-100 pb-5"}>
        <NavBar active={active} />
        {children}
      </div>
      <Footer />
    </>
  );
};

export { Layout };
