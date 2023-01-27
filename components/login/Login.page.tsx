import React, { FC } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import LoginCard from "@/components/login/Login.card";

const LoginPage: FC = () => {
  return (
    <Layout active={LinkName.Login}>
      <div className={"flex w-full flex-col items-center pt-28"}>
        <LoginCard />
      </div>
    </Layout>
  );
};

export default LoginPage;
