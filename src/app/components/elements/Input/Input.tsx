import { Text } from "../Text";
import { Props } from "./@types";

export const Input = ({
  label,
  error,
  value,
  onChange,
  className,
  maxLength,
  helperText,
  ...res
}: Props) => (
  <label className={`form-control w-full ${className}`}>
    {label && (
      <div className="label relative">
        <Text>{label}</Text>
      </div>
    )}
    <div className="input min-h-[41px] rounded-3xl flex items-center justify-between gap-2 bg-input">
      <input
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full bg-transparent text-span text-[1.6rem] flex-1 placeholder:text-[1.6rem]"
        {...res}
      />
    </div>

    {error && helperText && (
      <div className="error-message active">
        <span className="text-[1.4rem] text-error">{helperText}</span>
      </div>
    )}
  </label>
);
