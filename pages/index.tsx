import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { LandingPage } from "@/components/landing";
import { pbClient } from "@/utils/ssr";
import { useEffectOnce } from "usehooks-ts";
import { useUser } from "@/context";
import { AnnoucementsResponse } from "@/types";

interface Props {
  userData: any;
  announcements: any;
}
const Index: NextPage<Props> = ({ userData, announcements }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });
  return (
    <>
      <LandingPage announcements={JSON.parse(announcements)} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = new pbClient(ctx);

  // get user data
  const user = pb.getUserData();

  // get announcements
  const announcements = await pb.client
    .collection("announcements")
    .getFullList<AnnoucementsResponse>(3, {
      sort: "-created",
    });

  return {
    props: {
      userData: JSON.stringify(user),
      announcements: JSON.stringify(announcements),
    },
  };
};

export default Index;
