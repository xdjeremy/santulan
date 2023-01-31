import React, { FC } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import ArticlesTableItem from "@/components/articles/ArticlesTable.item";
import useSWR from "swr";
import { AnnouncementsResponse } from "@/types";
import { pocketBase } from "@/utils";
import { ListResult } from "pocketbase";

const ArticleListPage: FC = () => {
  const fetcher = async (
    collection: string
  ): Promise<ListResult<AnnouncementsResponse>> => {
    return pocketBase
      .collection(collection)
      .getList<AnnouncementsResponse>(1, 10, {
        expand: "user",
      });
  };

  const { data, error } = useSWR<ListResult<AnnouncementsResponse>>(
    "announcements",
    fetcher
  );
  console.log(data);

  return (
    <Layout active={LinkName.Home}>
      <div
        className={"mx-auto flex w-full max-w-4xl flex-col gap-7 pt-10 pb-20"}
      >
        <h1 className={"text-xl font-bold text-base-900"}>Articles</h1>
        <ArticlesTableItem data={data?.items} error={error} />
      </div>
    </Layout>
  );
};

export { ArticleListPage };
