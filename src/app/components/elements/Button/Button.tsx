import { Props } from "./@types";

export const Button = ({
  loading,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <button className={`btn ${className}`} {...rest}>
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};
