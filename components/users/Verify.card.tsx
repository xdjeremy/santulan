import React, { FC, useState } from "react";
import { classNames, pocketBase } from "@/utils";
import { Button } from "@/components/common";
import useSWR from "swr";
import { UsersResponse } from "@/types";
import VerifyInputItem from "@/components/users/VerifyInput.item";
import toast from "react-hot-toast";

const VerifyCard: FC = () => {
  const [selectedUser, setSelectedUser] = useState<UsersResponse | null>(null);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const fetcher = async (collection: string): Promise<UsersResponse[]> => {
    return await pocketBase
      .collection(collection)
      .getFullList<UsersResponse>(100, {
        filter: "approved = false",
      });
  };

  const { data, error } = useSWR<UsersResponse[]>(["users"], fetcher);

  const handleApprove = async () => {
    try {
      console.log("Approving user");
      setLoadingButton(true);
      if (!selectedUser) {
        toast.error("No user selected");
        return;
      }
      await pocketBase.collection("users").update(selectedUser.id, {
        approved: true,
      });

      // remove user from list
      setSelectedUser(null);
      data?.splice(data.indexOf(selectedUser), 1);

      setLoadingButton(false);
      toast.success("User approved");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingButton(false);
    }
  };

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
          <Button
            loading={loadingButton}
            type={"button"}
            clickHandler={handleApprove}
          >
            Approve
          </Button>
          <Button
            type={"button"}
            color={"danger"}
            clickHandler={() => setSelectedUser(null)}
            loading={loadingButton}
          >
            Deny
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCard;
