import React, { FC, ReactNode } from "react";
import { classNames } from "@/utils";
import Spinner from "@/components/common/Spinner";

interface Props {
  type: "submit" | "button";
  clickHandler?: () => void | Promise<void> | Promise<any>;
  children: ReactNode;
  loading?: boolean;
  color?: "primary" | "danger";
}
const Button: FC<Props> = ({
  type,
  clickHandler,
  children,
  loading,
  color = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={() => clickHandler && clickHandler()}
      className={classNames(
        color === "primary"
          ? "bg-primary-600 hover:bg-primary-700"
          : "bg-error-400 hover:bg-error-600",
        "flex flex-row items-center px-10 py-3 text-primary-50 disabled:opacity-50"
      )}
      disabled={loading}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export { Button };
