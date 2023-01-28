import React, { FC } from "react";
import { LinkName } from "@/components/navbar";
import Hero from "./Hero";
import { Layout } from "@/components/layout";
import AnnouncementSection from "@/components/landing/Announcement.section";
import { AnnoucementsResponse } from "@/types";

interface Props {
  announcements: AnnoucementsResponse;
}
const LandingPage: FC<Props> = ({ announcements }) => {
  return (
    <Layout active={LinkName.Home}>
      <Hero />
      <AnnouncementSection announcements={announcements} />
    </Layout>
  );
};

export { LandingPage };
