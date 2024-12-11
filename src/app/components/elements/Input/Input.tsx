import { FormFieldProps } from "@/app/utils/types";
import { Text } from "../Text";
import { useMaskedInput } from "@/app/hooks/useMaskedInput";

export const Input = ({
  type,
  name,
  error,
  label,
  register,
  className,
  mask = "",
  placeholder,
  valueAsNumber,
  maxLength = 35,
}: FormFieldProps) => {
  const { value, handleChange } = useMaskedInput({ mask, maxLength });
  return (
    <>
      <label className={`form-control w-full ${className}`}>
        {label && (
          <div className="label relative">
            <Text>{label}</Text>
          </div>
        )}
        <div className="input min-h-[41px] rounded-3xl flex items-center justify-between gap-2 bg-input">
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            className="w-full bg-transparent text-span text-[1.6rem] flex-1 placeholder:text-[1.6rem]"
            {...register(name, {
              valueAsNumber,
              onChange: handleChange,
            })}
          />
        </div>

        {error && (
          <div className={`error-message ${error.message ? "active" : ""}`}>
            <span className="text-[1.4rem] text-error">{error.message}</span>
          </div>
        )}
      </label>
    </>
  );
};
