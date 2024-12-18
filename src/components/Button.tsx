import { ButtonHTMLAttributes, FunctionComponent } from "react";

export const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={`flex flex-row justify-center items-center border-2 rounded-[5px] max-w-[198px] w-full p-[10px] h-[36px] border-gray-700 text-gray-700 ${className}`}
      {...props}
    />
  );
};
