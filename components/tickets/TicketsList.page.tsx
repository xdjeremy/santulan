import React, { FC } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import TicketsTableItem from "@/components/tickets/TicketsTable.item";
import Link from "next/link";
import { Button } from "@/components/common";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useUser } from "@/context";
import { UsersRoleOptions } from "@/types";

const TicketListPage: FC = () => {
  const { user } = useUser();
  return (
    <Layout active={LinkName.Tickets}>
      <div
        className={"mx-auto flex w-full max-w-4xl flex-col gap-7 pt-10 pb-20"}
      >
        <div className={"flex flex-row items-center justify-between px-5"}>
          <h1 className={"text-xl font-bold text-base-900"}>Tickets</h1>
          {user?.role === UsersRoleOptions.member && (
            <Link href={"/tickets/new"}>
              <Button type={"button"}>
                <PlusIcon className={"mr-2 h-5 w-5"} />
                Create Ticket
              </Button>
            </Link>
          )}
        </div>
        <TicketsTableItem />
      </div>
    </Layout>
  );
};

export { TicketListPage };
