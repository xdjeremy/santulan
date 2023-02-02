import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { pbClient } from "@/utils/ssr";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";
import { NewTicketPage } from "@/components/tickets";

interface Props {
  userData: any;
}
const NewTicket: NextPage<Props> = ({ userData }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });

  return (
    <>
      <NewTicketPage />
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

export default NewTicket;
