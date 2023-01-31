import { RegisterOptions } from "react-hook-form";

const TicketValidation: {
  [x: string]: RegisterOptions;
} = {
  name: {
    required: "Name is required",
  },
  subject: {
    required: "Subject is required",
    minLength: {
      value: 5,
      message: "Subject must be at least 5 characters",
    },
    maxLength: {
      value: 50,
      message: "Subject must be at most 50 characters",
    },
  },
  message: {
    required: "Message is required",
    minLength: {
      value: 20,
      message: "Message must be at least 20 characters",
    },
    maxLength: {
      value: 2000,
      message: "Message must be at most 2000 characters",
    },
  },
};

export { TicketValidation };
