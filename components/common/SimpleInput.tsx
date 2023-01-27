import React, { FC } from "react";

interface Props {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: any;
  validationSchema?: any;
  loading?: boolean;
  error?: any;
}
const SimpleInput: FC<Props> = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  validationSchema,
  loading,
  error,
}) => {
  return (
    <>
      <div className=" w-full ">
        <label htmlFor={name} className="text-gray-700">
          {label}
        </label>
        <input
          type={type}
          id={name}
          className="flex w-full grow appearance-none border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:opacity-50"
          name={name}
          disabled={loading}
          placeholder={placeholder}
          {...register(name, validationSchema)}
        />
        <p className={"text- mt-1 ml-1 text-sm text-error-400"}>{error}</p>
      </div>
    </>
  );
};

export { SimpleInput };
