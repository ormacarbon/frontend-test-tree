import { roboto } from "@/app/assets/fonts";
import { Props } from "./@types";

export const Title = ({ children, className, ...rest }: Props) => {
  return (
    <h2 className={`title-default ${roboto.className} ${className}`} {...rest}>
      {children}
    </h2>
  );
};