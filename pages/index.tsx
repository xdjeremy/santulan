import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { LandingPage } from "@/components/landing";
import { pbClient } from "@/utils/ssr";
import { useEffectOnce } from "usehooks-ts";
import { useUser } from "@/context";

interface Props {
  userData: any;
}
const Index: NextPage<Props> = ({ userData }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });
  return (
    <>
      <LandingPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = new pbClient(ctx);

  // get user data
  const user = pb.getUserData();

  return {
    props: {
      userData: JSON.stringify(user),
    },
  };
};

export default Index;
