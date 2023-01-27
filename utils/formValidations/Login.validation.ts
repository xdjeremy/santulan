import { RegisterOptions } from "react-hook-form";

const LoginValidation: {
  [x: string]: RegisterOptions;
} = {
  email: {
    required: "Email is required",
  },
  password: {
    required: "Password is required",
  },
};

export { LoginValidation };
