import React, { FC } from "react";
import { LinkName, NavBar } from "@/components/navbar";
import Hero from "./Hero";

const LandingPage: FC = () => {
  return (
    <div>
      <NavBar active={LinkName.Home} />
      <Hero />
    </div>
  );
};

export { LandingPage };
