import React, { FC } from "react";
import { Button, SimpleInput } from "@/components/common";
import { useFormContext } from "react-hook-form";
import { ArticleValidation } from "@/utils/formValidations";

interface Props {
  loading: boolean;
}
const ArticleFormItem: FC<Props> = ({ loading }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className={
        "mx-auto mt-16 mb-10 flex w-full max-w-6xl flex-col items-center justify-center gap-3"
      }
    >
      <div className={"flex w-full flex-col items-end"}>
        <div>
          <Button loading={loading} type={"submit"}>
            Save
          </Button>
        </div>
      </div>

      <div
        className={"w-full bg-base-200 px-2 py-10 shadow-sm md:px-10 xl:px-44"}
      >
        <SimpleInput
          name={"title"}
          label={"Title"}
          register={register}
          validationSchema={ArticleValidation.title}
          loading={loading}
          error={errors.title?.message}
        />
        <div>
          <textarea
            className={
              "focus:shadow-outline mt-4 h-96 w-full rounded-lg border px-4 py-2 text-base text-black placeholder-gray-500"
            }
            disabled={loading}
            {...register("content", ArticleValidation.content)}
          />
          <label className={"mt-1 ml-1 text-sm text-error-400"}>
            {errors.content?.message?.toString()}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ArticleFormItem;
