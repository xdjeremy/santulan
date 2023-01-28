import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";
import { pocketBase } from "@/utils";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";

const Logout: NextPage = () => {
  const router = useRouter();

  useEffectOnce(() => {
    pocketBase.authStore.clear();
    // clear pb_auth cookie
    document.cookie =
      "pb_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // wait for 1 second and redirect to login page
    setTimeout(() => {
      router.push("login").then();
    }, 1000);
  });
  return (
    <Layout active={LinkName.Logout}>
      <>Logging Out...</>
    </Layout>
  );
};

export default Logout;
