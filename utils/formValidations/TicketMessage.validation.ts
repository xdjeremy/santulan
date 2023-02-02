import { RegisterOptions } from "react-hook-form";

const TicketMessageValidation: {
  [x: string]: RegisterOptions;
} = {
  message: {
    required: {
      value: true,
      message: "Message is required",
    },
    maxLength: {
      value: 500,
      message: "Message must be less than 500 characters",
    },
  },
};

export { TicketMessageValidation };
