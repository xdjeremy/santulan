import React, { FC } from "react";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
  content: string;
  href: string;
}
const AnnouncementCard: FC<Props> = ({ title, content, href }) => {
  return (
    <div className={"flex flex-col gap-3 bg-base-200 p-8 shadow-lg"}>
      <h1 className={"text-2xl font-bold"}>{title}</h1>
      <p className={"text-lg line-clamp-5"}>{content}</p>
      <Link
        href={href}
        className={
          "flex flex-row items-center justify-end text-base font-bold text-primary-500 hover:underline"
        }
      >
        <span>Read More</span> <ChevronDoubleRightIcon className={"h-5 w-5"} />
      </Link>
    </div>
  );
};

export default AnnouncementCard;
