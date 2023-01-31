import { RegisterOptions } from "react-hook-form";

const ArticleValidation: {
  [x: string]: RegisterOptions;
} = {
  title: {
    required: "Title is required",
  },
  content: {
    required: "Content is required",
  },
};

export { ArticleValidation };
