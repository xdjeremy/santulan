import React, { FC, useState } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import ArticleFormItem from "@/components/articles/ArticleForm.item";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useEffectOnce } from "usehooks-ts";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { pocketBase } from "@/utils";
import { AnnouncementsResponse } from "@/types";

interface FormInputs {
  title: string;
  content: string;
}
const EditArticlePage: FC = () => {
  const methods = useForm<FormInputs>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffectOnce(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);

        const { id } = router.query;
        if (!id) {
          await router.push("/articles");
          return toast.error("No article id found");
        }
        const article = await pocketBase
          .collection("announcements")
          .getOne<AnnouncementsResponse>(id.toString());

        methods.setValue("title", article.title);
        methods.setValue("content", article.content);
      } catch (err: any) {
        toast.error(err.message);
      }
    };

    fetchArticle().then(() => setIsLoading(false));
  });
  const handleSubmit: SubmitHandler<FormInputs> = async () => {
    try {
      setIsLoading(true);
      const { id } = router.query;
      if (!id) {
        await router.push("/articles");
        return toast.error("No article id found");
      }

      await pocketBase.collection("announcements").update(id.toString(), {
        title: methods.getValues().title,
        content: methods.getValues().content,
      });

      toast.success("Article updated successfully");
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

export { EditArticlePage };
