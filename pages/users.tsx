import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { UsersPage } from "@/components/users";
import { pbClient } from "@/utils/ssr";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";
import { UsersRoleOptions } from "@/types";

interface Props {
  userData: any;
}
const Users: NextPage<Props> = ({ userData }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });
  return (
    <>
      <UsersPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = new pbClient(ctx);

  // get user data
  const user = pb.getUserData();

  // check if admin
  if (user.role !== UsersRoleOptions.admin) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      userData: JSON.stringify(user),
    },
  };
};

export default Users;
