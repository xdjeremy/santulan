import React, { FC, useState } from "react";
import { classNames } from "@/utils";
import { Button } from "@/components/common";

interface User {
  name: string;
  email: string;
}

const users: User[] = [
  {
    name: "monds",
    email: "mitang@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
  {
    name: "mons",
    email: "monds@gmail.com",
  },
];

const VerifyCard: FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div>
      <div className={"bg-primary-500 py-4"}>
        <h2 className={"text-center text-xl font-bold text-base-50"}>
          Verify Users
        </h2>
      </div>
      <div className={"bg-base-200 px-3 py-10 text-base-900"}>
        <div className={"flex flex-row items-center gap-3"}>
          <label htmlFor={"user"}>Name</label>
          <input
            name={"user"}
            readOnly={true}
            type={"text"}
            className="flex w-full grow appearance-none border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:text-base-900 disabled:opacity-50"
            disabled={true}
            value={selectedUser?.name}
          />
        </div>

        <div className={"mt-8 flex h-96 flex-col overflow-auto bg-white"}>
          {users.map((user) => {
            return (
              <div
                key={user.name}
                onClick={() => setSelectedUser(user)}
                className={classNames(
                  selectedUser === user ? "bg-primary-300" : "",
                  "cursor-pointer py-2 px-5 hover:bg-base-100"
                )}
              >
                {user.email}
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
