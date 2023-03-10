import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { TicketListPage } from "@/components/tickets";
import { pbClient } from "@/utils/ssr";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  userData: any;
}
const Tickets: NextPage<Props> = ({ userData }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });

  return (
    <>
      {/*<TicketsPage />*/}
      <TicketListPage />
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

export default Tickets;
