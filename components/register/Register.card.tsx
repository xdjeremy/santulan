import React, { FC, useState } from "react";
import { Button, SimpleInput } from "@/components/common";
import { RegisterValidation } from "@/utils/formValidations";
import { SubmitHandler, useForm } from "react-hook-form";
import { pocketBase } from "@/utils";
import toast from "react-hot-toast";
import { UsersRoleOptions } from "@/types";

interface FormInputs {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  address: string;
  pocketBaseError?: string;
}

interface Props {
  setStep: (step: 1 | 2) => void;
}

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="mb-4 text-sm text-error-400">{message}</div>;
};
const RegisterCard: FC<Props> = ({ setStep }) => {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    watch,
    clearErrors,
  } = useForm<FormInputs>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerHandler: SubmitHandler<FormInputs> = async ({
    email,
    name,
    password,
    passwordConfirm,
    address,
  }) => {
    try {
      setIsLoading(true);

      await pocketBase.collection("users").create({
        email,
        password,
        passwordConfirm,
        name,
        address,
        role: UsersRoleOptions.member,
        approved: false,
      });

      toast.success("Account created successfully");
      setStep(2);
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

  // clear errors on input change
  watch(() => errors.pocketBaseError && clearErrors("pocketBaseError"));

  return (
    <div className={"w-full md:max-w-lg"}>
      <div className={"bg-primary-500 py-9"}>
        <h3 className={"text-center text-2xl font-bold text-primary-50"}>
          Register
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(registerHandler)}
        className={"flex flex-col items-center bg-base-200 px-10 py-16"}
      >
        {/*error message from pocketbase */}
        {errors.pocketBaseError?.message && (
          <ErrorMessage message={errors.pocketBaseError?.message.toString()} />
        )}
        <div className={"mb-12 flex w-full flex-col items-center gap-5"}>
          <SimpleInput
            register={register}
            name={"email"}
            validationSchema={RegisterValidation.email}
            label={"Email"}
            loading={isLoading}
            error={errors.email?.message}
          />
          <SimpleInput
            register={register}
            name={"name"}
            validationSchema={RegisterValidation.name}
            label={"Full Name"}
            loading={isLoading}
            error={errors.name?.message}
          />
          <SimpleInput
            name={"password"}
            type={"password"}
            register={register}
            validationSchema={RegisterValidation.password}
            label={"Password"}
            loading={isLoading}
            error={errors.password?.message}
          />
          <SimpleInput
            name={"passwordConfirm"}
            type={"password"}
            register={register}
            validationSchema={RegisterValidation.passwordConfirm}
            label={"Confirm Password"}
            loading={isLoading}
            error={errors.passwordConfirm?.message}
          />
          <SimpleInput
            name={"address"}
            register={register}
            validationSchema={RegisterValidation.address}
            label={"Address"}
            loading={isLoading}
            error={errors.address?.message}
          />
        </div>
        <Button loading={isLoading} type={"submit"}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterCard;
