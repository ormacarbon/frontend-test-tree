import { Props } from "./@types";

const Text = ({ children, className, ...rest }: Props) => {
  return (
    <p className={`text-default ${className}`} {...rest}>
      {children}
    </p>
  );
};

export { Text };