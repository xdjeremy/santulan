import React, { FC, useState } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import { useRouter } from "next/router";
import { pocketBase } from "@/utils";
import useSWR from "swr";
import {
  TicketMessagesRecord,
  TicketMessagesResponse,
  TicketsResponse,
} from "@/types";
import { useEffectOnce } from "usehooks-ts";
import { Button } from "@/components/common";
import TicketChatItem from "@/components/tickets/TicketChat.item";
import { useUser } from "@/context";
import { SubmitHandler, useForm } from "react-hook-form";
import { TicketMessageValidation } from "@/utils/formValidations";
import toast from "react-hot-toast";

interface FormInputs {
  message: string;
}
const ViewTicketPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ticketSubject, setTicketSubject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useUser();
  const { handleSubmit, register, setValue } = useForm<FormInputs>();

  useEffectOnce(() => {
    const getTicket = async () => {
      try {
        if (!id) {
          return;
        }
        const ticket = await pocketBase
          .collection("tickets")
          .getOne<TicketsResponse>(id.toString());
        setTicketSubject(ticket.subject);
      } catch (error) {
        console.error(error);
      }
    };
    getTicket().then(() => setIsLoading(false));
  });

  const fetch = async (
    collection: string
  ): Promise<TicketMessagesResponse[]> => {
    return await pocketBase.collection(collection).getFullList(100, {
      filter: `ticket_id = '${id}'`,
      sort: "created",
      expand: "ticket_id",
    });
  };

  const { data, error } = useSWR<TicketMessagesResponse[]>(
    "ticket_messages",
    fetch
  );

  const submitMessageHandler: SubmitHandler<FormInputs> = async ({
    message,
  }) => {
    try {
      setIsLoading(true);
      if (!user?.id || !id) {
        toast.error("You must be logged in to create a ticket");
        return;
      }
      const messageData: TicketMessagesRecord = {
        message,
        user: user.id,
        ticket_id: id.toString(),
      };
      const ticketData = await pocketBase
        .collection("ticket_messages")
        .create<TicketMessagesResponse>(messageData);

      // reset form
      setValue("message", "");

      // add new message to data array
      data?.push(ticketData);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout active={LinkName.Tickets}>
      <div className={"mx-auto mt-12 w-full max-w-lg"}>
        <div className={"bg-primary-600 py-5"}>
          <h2 className={"text-center text-lg font-semibold text-primary-50"}>
            {ticketSubject}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(submitMessageHandler)}
          className={"bg-white"}
        >
          <div
            className={
              "flex max-h-96 flex-col gap-2 overflow-y-scroll px-3 py-5"
            }
          >
            {data &&
              !error &&
              data.map((message) => (
                <TicketChatItem
                  key={message.id}
                  message={message.message}
                  position={message.user === user?.id ? "right" : "left"}
                />
              ))}
          </div>
          <div className={"flex flex-row"}>
            <input
              {...register("message", TicketMessageValidation.message)}
              disabled={isLoading}
              className={"w-full px-3"}
            />
            <Button loading={isLoading} type={"submit"}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export { ViewTicketPage };
