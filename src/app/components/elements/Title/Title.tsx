import { Props } from "./@types";

const Title = ({ children, className, ...rest }: Props) => {
  return (
    <h2 className={`title-default ${className}`} {...rest}>
      {children}
    </h2>
  );
};

export { Title };