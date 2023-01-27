import React, { FC } from "react";
import { LinkName } from "@/components/navbar";
import Hero from "./Hero";
import { Layout } from "@/components/layout";

const LandingPage: FC = () => {
  return (
    <Layout active={LinkName.Home}>
      <Hero />
    </Layout>
  );
};

export { LandingPage };
