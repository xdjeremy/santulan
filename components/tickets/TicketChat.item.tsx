import React, { FC } from "react";
import { classNames } from "@/utils";

interface Props {
  position: "left" | "right";
  message: string;
}
const TicketChatItem: FC<Props> = ({ position, message }) => {
  return (
    <div className={"w-full"}>
      <p
        className={classNames(
          position === "left"
            ? "mr-auto bg-base-300 text-base-900"
            : "ml-auto bg-blue-500 text-white",
          "w-fit max-w-xs break-words rounded-lg px-3 py-2"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default TicketChatItem;
