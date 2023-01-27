import React, { FC } from "react";
import { InboxIcon } from "@heroicons/react/24/solid";

const ConfirmEmailCard: FC = () => {
  return (
    <div className={"w-full md:max-w-lg"}>
      <div className={"bg-primary-500 py-9"}>
        <h3 className={"text-center text-2xl font-bold text-primary-50"}>
          Confirm Email!
        </h3>
      </div>
      <div
        className={"flex flex-col items-center gap-4 bg-base-200 px-10 py-16"}
      >
        <InboxIcon className={"h-16 w-16 text-primary-500"} />
        <p className={"text-center text-base-900"}>
          Please confirm your email address by clicking on the link we just sent
          to your email address. This will help us ensure that we can keep in
          touch and send important updates.
        </p>
      </div>
    </div>
  );
};

export default ConfirmEmailCard;
