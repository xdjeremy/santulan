import React, { FC, ReactNode } from "react";
import { LinkName, NavBar } from "@/components/navbar";

interface Props {
  children: ReactNode;
  active: LinkName;
}

const Layout: FC<Props> = ({ children, active }) => {
  return (
    <div className={"h-full bg-base-100 pb-5"}>
      <NavBar active={active} />
      {children}
    </div>
  );
};

export { Layout };
