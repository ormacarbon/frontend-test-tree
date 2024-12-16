import { roboto } from "@/app/assets/fonts";
import { Props } from "./@types";

export const Text = ({ children, className, ...rest }: Props) => {
  return (
    <p
      className={`text-default ${roboto.className} ${className} `}
      {...rest}
    >
      {children}
    </p>
  );
};
