import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { pbClient } from "@/utils/ssr";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";
import { PostPage } from "@/components/post";
import { AnnouncementsResponse } from "@/types";

interface Props {
  userData: any;
  post: any;
}
const Post: NextPage<Props> = ({ userData, post }) => {
  const { setUser } = useUser();
  const announcement: AnnouncementsResponse = JSON.parse(post);

  console.log(announcement);

  useEffectOnce(() => {
    setUser(JSON.parse(userData));
  });

  return (
    <>
      <PostPage
        title={announcement.title}
        content={announcement.content}
        date={announcement.created}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = new pbClient(ctx);

  // get user data
  const user = pb.getUserData();

  // get id from url
  const { id } = ctx.query;
  if (!id || typeof id !== "string") {
    return {
      notFound: true,
    };
  }
  // fetch post data from db
  const post = await pb.client
    .collection("announcements")
    .getOne<AnnouncementsResponse>(id)
    .catch(() => {
      return {
        notFound: true,
      };
    });

  return {
    props: {
      userData: JSON.stringify(user),
      post: JSON.stringify(post),
    },
  };
};

export default Post;
