import React, { FC, useState } from "react";
import { Button, SimpleInput } from "@/components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginValidation } from "@/utils/formValidations";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";
import { useRouter } from "next/router";

interface FormInputs {
  email: string;
  password: string;
  pocketBaseError?: string;
}

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="mb-4 text-sm text-error-400">{message}</div>;
};
const LoginCard: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useForm<FormInputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const loginHandler: SubmitHandler<FormInputs> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);

      await pocketBase.collection("users").authWithPassword(email, password);

      // save to cookie
      document.cookie = pocketBase.authStore.exportToCookie({
        httpOnly: false,
      });

      //redirect to dashboard
      await router.push("/");

      toast.success("Login successful");
    } catch (err: any) {
      setError("pocketBaseError", {
        type: "manual",
        message: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // clear errors on input change
  watch(() => errors.pocketBaseError && clearErrors("pocketBaseError"));
  return (
    <div className={"w-full md:max-w-lg"}>
      <div className={"bg-primary-500 py-9"}>
        <h3 className={"text-center text-2xl font-bold text-primary-50"}>
          Login
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(loginHandler)}
        className={"flex flex-col items-center bg-base-200 px-10 py-16"}
      >
        {/* error message from pocketbase */}
        {errors.pocketBaseError?.message && (
          <ErrorMessage message={errors.pocketBaseError?.message.toString()} />
        )}
        <div className={"mb-12 flex w-full flex-col items-center gap-5"}>
          <SimpleInput
            register={register}
            name={"email"}
            validationSchema={LoginValidation.email}
            label={"Email"}
            loading={isLoading}
            error={errors.email?.message}
          />
          <SimpleInput
            name={"password"}
            register={register}
            validationSchema={LoginValidation.password}
            label={"Password"}
            loading={isLoading}
            error={errors.password?.message}
          />
        </div>
        <Button loading={isLoading} type={"submit"}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginCard;
