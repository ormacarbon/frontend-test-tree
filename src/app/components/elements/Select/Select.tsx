import { Text } from "../Text";
import { FormSelectProps } from "@/app/utils/types";

export const Select = ({
  name,
  label,
  error,
  options,
  register,
  className,
  defaultOption,
}: FormSelectProps) => (
  <>
    <label className={`form-control w-full ${className}`}>
      {label && (
        <div className="label relative">
          <Text>{label}</Text>
        </div>
      )}
      <select
        {...register(name)}
        className="min-h-[41px] rounded-3xl bg-input select select-bordered w-full text-span text-[1.6rem] hover:bg-transparent"
      >
        {defaultOption && (
          <option className="text-span text-[1.6rem]" value="" defaultValue={defaultOption} disabled>
            {defaultOption}
          </option>
        )}
        {options && (
          <>
            {options.map((option) => (
              <option className="text-span text-[1.6rem]" value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </>
        )}
      </select>

      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </div>
      )}
    </label>
  </>
);
