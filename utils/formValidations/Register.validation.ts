import { RegisterOptions } from "react-hook-form";

const EMAIL_REGEX_PATTERN = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const RegisterValidation: {
  [x: string]: RegisterOptions;
} = {
  email: {
    required: {
      value: true,
      message: "Email is required",
    },
    pattern: {
      value: EMAIL_REGEX_PATTERN,
      message: "Invalid email",
    },
  },
  name: {
    required: {
      value: true,
      message: "Name is required",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password is required",
    },
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
  },
  passwordConfirm: {
    required: {
      value: true,
      message: "Confirm password is required",
    },
    minLength: {
      value: 8,
      message: "Confirm password must be at least 8 characters long",
    },
  },
  address: {
    required: {
      value: true,
      message: "Address is required",
    },
  },
};

export { RegisterValidation };
