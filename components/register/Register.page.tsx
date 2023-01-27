import React, { FC } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import RegisterCard from "@/components/register/Register.card";

const RegisterPage: FC = () => {
  return (
    <Layout active={LinkName.CreateAccount}>
      <div className={"flex w-full flex-col items-center pt-10"}>
        <RegisterCard />
      </div>
    </Layout>
  );
};

export { RegisterPage };
