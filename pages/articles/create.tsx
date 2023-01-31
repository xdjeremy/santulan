import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { NewArticlePage } from "@/components/articles";
import { pbClient } from "@/utils/ssr";
import { UsersRoleOptions } from "@/types";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  userData: any;
}
const CreateArticle: NextPage<Props> = ({ userData }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });
  return (
    <>
      <NewArticlePage />
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

export default CreateArticle;
