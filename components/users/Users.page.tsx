import React, { FC } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import VerifyCard from "@/components/users/Verify.card";
import UserInfoCard from "@/components/users/UserInfo.card";

const UsersPage: FC = () => {
  return (
    // TODO: change active page
    <Layout active={LinkName.Home}>
      <div
        className={
          "mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-32 px-10 lg:grid-cols-2"
        }
      >
        <VerifyCard />
        <UserInfoCard />
      </div>
    </Layout>
  );
};

export { UsersPage };
