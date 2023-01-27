import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { RegisterPage } from "@/components/register";
import { pbClient } from "@/utils/ssr";

const CreateAccount: NextPage = () => {
  return (
    <>
      <RegisterPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = new pbClient(ctx);

  // if user is already logged in
  if (pb.isAuthValid()) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default CreateAccount;
