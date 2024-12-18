import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button: FunctionComponent<ButtonProps> = ({
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
