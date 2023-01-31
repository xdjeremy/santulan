import React, { FC, useState } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import { Button, SimpleInput } from "@/components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { TicketValidation } from "@/utils/formValidations";
import { useEffectOnce } from "usehooks-ts";
import { pocketBase } from "@/utils";
import toast from "react-hot-toast";
import { TicketsRecord } from "@/types";

interface FormInputs {
  name: string;
  subject: string;
  message: string;
}
const TicketsPage: FC = () => {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormInputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffectOnce(() => {
    // set user name as default value
    const name = pocketBase.authStore.model?.name;
    setValue("name", name);
  });

  const submitTicketHandler: SubmitHandler<FormInputs> = async ({
    subject,
    message,
  }) => {
    try {
      setIsLoading(true);

      if (!pocketBase.authStore.model?.id) {
        toast.error("You must be logged in to create a ticket");
        return;
      }

      const data: TicketsRecord = {
        subject,
        message,
        user: pocketBase.authStore.model.id,
      };

      await pocketBase.collection("tickets").create(data);
      toast.success("Ticket created successfully");
    } catch (err: any) {
      const obj = Object.keys(err.data.data);
      obj.map((key) => {
        setError(key as any, {
          type: "manual",
          message: err.data.data[key].message,
        });
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout active={LinkName.Tickets}>
      <div className={"mx-auto mt-10 max-w-3xl px-10"}>
        <div className={"bg-primary-500 py-4"}>
          <h2 className={"text-center text-xl font-bold text-base-50"}>
            Create Ticket
          </h2>
        </div>
        <div className={"bg-base-200 px-8 py-10 text-base-900"}>
          <form
            onSubmit={handleSubmit(submitTicketHandler)}
            className={"flex flex-col gap-3"}
          >
            <SimpleInput
              name={"name"}
              label={"Name"}
              register={register}
              loading={true}
              error={errors.name?.message?.toString()}
              validationSchema={TicketValidation.name}
            />
            <SimpleInput
              name={"subject"}
              label={"Subject"}
              register={register}
              loading={isLoading}
              error={errors.subject?.message?.toString()}
              validationSchema={TicketValidation.subject}
            />
            <div>
              <label htmlFor={"message"} className="text-gray-700">
                Message
              </label>
              <textarea
                className={
                  "h-96 w-full border px-4 py-2 text-base text-black placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                }
                disabled={isLoading}
                {...register("message", TicketValidation.message)}
              />
              <label className={"mt-1 ml-1 text-sm text-error-400"}>
                {errors.message?.message?.toString()}
              </label>
            </div>
            <div className={"flex w-full flex-col items-end"}>
              <Button type={"submit"} loading={isLoading}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export { TicketsPage };
