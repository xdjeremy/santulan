import React, { FC, useState } from "react";
import { classNames, pocketBase } from "@/utils";
import { Button } from "@/components/common";
import useSWR from "swr";
import { UsersResponse } from "@/types";
import VerifyInputItem from "@/components/users/VerifyInput.item";

const VerifyCard: FC = () => {
  const [selectedUser, setSelectedUser] = useState<UsersResponse | null>(null);

  const fetcher = async (): Promise<UsersResponse[]> => {
    return await pocketBase
      .collection("users")
      .getFullList<UsersResponse>(100, {
        filter: "approved = false",
      });
  };

  const { data, error } = useSWR<UsersResponse[]>(["users"], fetcher);

  console.log(data);

  return (
    <div>
      <div className={"bg-primary-500 py-4"}>
        <h2 className={"text-center text-xl font-bold text-base-50"}>
          Verify Users
        </h2>
      </div>
      <div className={"bg-base-200 px-3 py-10 text-base-900"}>
        <VerifyInputItem value={selectedUser?.name} title={"Name"} />
        <VerifyInputItem value={selectedUser?.address} title={"Address"} />
        <VerifyInputItem value={selectedUser?.id} title={"User ID"} />

        <div className={"mt-8 flex h-96 flex-col overflow-auto bg-white"}>
          {data &&
            !error &&
            data.map((user) => {
              return (
                <div
                  key={user.name}
                  onClick={() => setSelectedUser(user)}
                  className={classNames(
                    selectedUser === user
                      ? "hover:base-primary-400 bg-primary-300"
                      : "hover:bg-base-100",
                    "cursor-pointer py-2 px-5"
                  )}
                >
                  {user.name}
                </div>
              );
            })}
        </div>

        <div
          className={
            "mt-14 flex w-full flex-row items-center justify-center gap-8"
          }
        >
          <Button type={"button"}>Approve</Button>
          <Button type={"button"} color={"danger"}>
            Deny
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCard;
