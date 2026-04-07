import type { InputHTMLAttributes } from "react";

type Iprops = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      className="border border-gray-300 shadow-md
  focus:border-indigo-500 focus:outline-none focus:ring-1
  focus:ring-indigo-500 rounded-lg p-3 text-base"
      {...rest}
    />
  );
};

export default Input;
