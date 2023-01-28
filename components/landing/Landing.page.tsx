import React, { FC } from "react";
import { LinkName } from "@/components/navbar";
import Hero from "./Hero";
import { Layout } from "@/components/layout";
import AnnouncementSection from "@/components/landing/Announcement.section";

const LandingPage: FC = () => {
  return (
    <Layout active={LinkName.Home}>
      <Hero />
      <AnnouncementSection />
    </Layout>
  );
};

export { LandingPage };
