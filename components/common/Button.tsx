import React, { FC, ReactNode } from "react";
import { classNames } from "@/utils";
import Spinner from "@/components/common/Spinner";

interface Props {
  type: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
  loading?: boolean;
}
const Button: FC<Props> = ({ type, onClick, children, loading }) => {
  return (
    <button
      type={type}
      onClick={() => onClick}
      className={classNames(
        "bg-primary-600 px-10 py-3 text-primary-50 hover:bg-primary-700 disabled:opacity-50"
      )}
      disabled={loading}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export { Button };
