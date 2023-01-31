import React, { FC, useState } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ArticleFormItem from "@/components/articles/ArticleForm.item";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";
import { AnnouncementsRecord } from "@/types";
import { useUser } from "@/context";
import { useRouter } from "next/router";

interface FormInputs {
  title: string;
  content: string;
}
const NewArticlePage: FC = () => {
  const methods = useForm<FormInputs>();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit: SubmitHandler<FormInputs> = async () => {
    try {
      setIsLoading(true);

      if (!user) {
        return toast.error("You must be logged in to create an article");
      }

      const data: AnnouncementsRecord = {
        title: methods.getValues().title,
        content: methods.getValues().content,
        user: user.id,
      };

      await pocketBase.collection("announcements").create(data);
      toast.success("Article created successfully");
      await router.push("/articles");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout active={LinkName.Articles}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <ArticleFormItem loading={isLoading} />
        </form>
      </FormProvider>
    </Layout>
  );
};

export { NewArticlePage };
