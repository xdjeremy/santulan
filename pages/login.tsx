import React from "react";
import { GetServerSideProps, NextPage } from "next";
import LoginPage from "@/components/login/Login.page";
import { pbClient } from "@/utils/ssr";

const Login: NextPage = () => {
  return (
    <>
      <LoginPage />
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
export default Login;
