import React, { FC } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import ArticlesTableItem from "@/components/articles/ArticlesTable.item";
import useSWR from "swr";
import { AnnouncementsResponse } from "@/types";
import { pocketBase } from "@/utils";
import { ListResult } from "pocketbase";
import { Button } from "@/components/common";
import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const ArticleListPage: FC = () => {
  const fetcher = async (
    collection: string
  ): Promise<ListResult<AnnouncementsResponse>> => {
    return pocketBase
      .collection(collection)
      .getList<AnnouncementsResponse>(1, 10, {
        expand: "user",
        sort: "-created",
      });
  };

  const { data, error } = useSWR<ListResult<AnnouncementsResponse>>(
    "announcements",
    fetcher
  );

  return (
    <Layout active={LinkName.Articles}>
      <div
        className={"mx-auto flex w-full max-w-4xl flex-col gap-7 pt-10 pb-20"}
      >
        <div className={"flex flex-row items-center justify-between px-5"}>
          <h1 className={"text-xl font-bold text-base-900"}>Articles</h1>
          <Link href={"/articles/create"}>
            <Button type={"button"}>
              <PlusIcon className={"mr-2 h-5 w-5"} />
              Add Article
            </Button>
          </Link>
        </div>
        <ArticlesTableItem data={data?.items} error={error} />
      </div>
    </Layout>
  );
};

export { ArticleListPage };
