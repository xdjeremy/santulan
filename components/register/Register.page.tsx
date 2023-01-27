import React, { FC, useState } from "react";
import { Layout } from "@/components/layout";
import { LinkName } from "@/components/navbar";
import RegisterCard from "@/components/register/Register.card";
import ConfirmEmailCard from "@/components/register/ConfirmEmail.card";

const RegisterPage: FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <Layout active={LinkName.CreateAccount}>
      <div className={"flex w-full flex-col items-center pt-10"}>
        {step === 1 ? <RegisterCard setStep={setStep} /> : <ConfirmEmailCard />}
      </div>
    </Layout>
  );
};

export { RegisterPage };
