import React, { FC } from "react";

interface Props {
  value: string | null | undefined;
  title: string;
}
const VerifyInputItem: FC<Props> = ({ value = "", title }) => {
  return (
    <div className={"flex flex-row items-center justify-between gap-3"}>
      <label htmlFor={title}>{title}</label>
      <input
        name={title}
        readOnly={true}
        type={"text"}
        className="flex w-3/4 appearance-none border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:text-base-900 disabled:opacity-50"
        disabled={true}
        value={value || ""}
      />
    </div>
  );
};

export default VerifyInputItem;
