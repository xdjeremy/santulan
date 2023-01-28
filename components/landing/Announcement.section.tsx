import React, { FC } from "react";
import AnnouncementCard from "@/components/landing/Announcement.card";

interface Props {
  announcements: any;
}

const AnnouncementSection: FC<Props> = ({ announcements }) => {
  return (
    <div
      className={
        "mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-stretch gap-11 py-24 px-8 lg:grid-cols-2"
      }
    >
      {announcements[0] && (
        <AnnouncementCard
          title={announcements[0].title}
          content={announcements[0].content}
          href={announcements[0].id}
        />
      )}
      <div className={"grid grid-cols-1 justify-items-stretch gap-11"}>
        {announcements[1] && (
          <AnnouncementCard
            title={announcements[1].title}
            content={announcements[1].content}
            href={announcements[1].id}
          />
        )}
        {announcements[2] && (
          <AnnouncementCard
            title={announcements[2].title}
            content={announcements[2].content}
            href={announcements[2].id}
          />
        )}
      </div>
    </div>
  );
};

export default AnnouncementSection;
