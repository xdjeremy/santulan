import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { EditArticlePage } from "@/components/articles";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";
import { pbClient } from "@/utils/ssr";
import { UsersRoleOptions } from "@/types";

interface Props {
  userData: any;
}
const EditArticle: NextPage<Props> = ({ userData }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });

  return (
    <>
      <EditArticlePage />
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
export default EditArticle;
