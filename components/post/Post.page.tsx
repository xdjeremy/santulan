import React, { FC } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import { formatRelative } from "date-fns";

interface Props {
  title: string;
  content: string;
  date: string;
}
const PostPage: FC<Props> = ({ title, content, date }) => {
  return (
    <Layout active={LinkName.Home}>
      <div className={"min-h-full w-full py-20 md:px-20"}>
        {/* card */}
        <div
          className={
            "mx-auto flex w-full max-w-4xl flex-col gap-10 bg-base-200 py-16 px-20"
          }
        >
          <h1 className={"py- text-center text-2xl font-semibold"}>{title}</h1>
          <p>{content}</p>

          <p className={"text-right capitalize"}>
            {formatRelative(new Date(date), new Date())}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export { PostPage };
