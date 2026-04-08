import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit" | "w-auto";
}

const Button = ({ children, className, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} capitalize p-2 rounded-lg text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
