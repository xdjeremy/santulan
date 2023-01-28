import React, { FC } from "react";
import AnnouncementCard from "@/components/landing/Announcement.card";

const announcements = [
  {
    title: "Announcement 1",
    description:
      "Sed condimentum consectetur turpis, eu consequat libero. Sed condimentum et enim quis vulputate. Etiam dapibus justo et felis maximus, nec vehicula lacus vehicula. Sed at neque eu nibh condimentum auctor. Integer ut rhoncus augue, eget egestas neque. Aliquam vehicula nulla ut tellus eleifend, et faucibus purus egestas. Pellentesque ut ornare eros, eu sollicitudin enim. Aenean elementum neque sit amet nulla suscipit pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ultricies finibus facilisis. Phasellus eget tortor id lacus pulvinar aliquet nec at arcu. Phasellus volutpat mattis mi eu convallis. Phasellus facilisis arcu odio, in sodales enim aliquam sed.",
    href: "/",
  },
  {
    title: "Announcement 2",
    description:
      "Sed viverra accumsan pharetra. Vivamus blandit risus neque, nec tristique erat convallis ut. Vestibulum quis interdum odio. Aenean nec iaculis risus, in imperdiet eros. Nulla facilisi. Suspendisse interdum mauris at magna ullamcorper consectetur. Ut metus diam, sagittis sed quam non, elementum pulvinar neque. Nunc ut magna id lorem aliquam ultrices eget iaculis erat. Nullam id sapien lectus. Fusce quis posuere nulla. Donec viverra dui vitae tortor cursus gravida. Nunc nulla lectus, finibus sit amet augue quis, condimentum consequat metus.",
    href: "/",
  },
  {
    title: "Announcement 3",
    description:
      "Pellentesque vitae volutpat felis. Sed varius enim ligula, ut pretium lorem faucibus id. Praesent ultrices in nibh a consectetur. Nullam lacus urna, luctus id facilisis a, bibendum eu orci. Donec vulputate ligula ut neque auctor, eget hendrerit lacus maximus. Integer faucibus molestie turpis nec auctor. Nulla consequat tristique sapien et eleifend. In viverra ex eget odio ornare, sit amet mollis tortor feugiat. Nullam at hendrerit nulla. Curabitur et viverra dolor, consequat congue arcu. Vivamus sit amet accumsan tellus. Nunc vitae orci id dui sagittis porta nec sit amet eros. Vestibulum euismod eget mauris accumsan tristique. Aenean at velit odio. Pellentesque at dolor eget tellus tempus commodo quis non purus.",
    href: "/",
  },
];
const AnnouncementSection: FC = () => {
  return (
    <div
      className={
        "mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-stretch gap-11 py-24 px-8 lg:grid-cols-2"
      }
    >
      <AnnouncementCard
        title={announcements[0].title}
        content={announcements[0].description}
        href={announcements[0].href}
      />
      <div className={"grid grid-cols-1 justify-items-stretch gap-11"}>
        <AnnouncementCard
          title={announcements[1].title}
          content={announcements[1].description}
          href={announcements[1].href}
        />
        <AnnouncementCard
          title={announcements[2].title}
          content={announcements[2].description}
          href={announcements[2].href}
        />
      </div>
    </div>
  );
};

export default AnnouncementSection;
