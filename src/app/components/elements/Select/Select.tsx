import { Text } from "../Text";
import { Props } from "./@types";

export const Select = ({
  label,
  error,
  options,
  className,
  helperText,
  defaultOption,
  ...res
}: Props) => (
  <>
    <label className={`form-control w-full ${className}`}>
      {label && (
        <div className="label relative">
          <Text>{label}</Text>
        </div>
      )}
      <select
        {...res}
        className="min-h-[41px] rounded-3xl bg-input select select-bordered w-full text-span text-[1.6rem] hover:bg-transparent"
      >
        {defaultOption && (
          <option
            value=""
            className="!text-buttonText text-[1.6rem]"
            defaultValue={defaultOption}
            disabled
          >
            {defaultOption}
          </option>
        )}
        {options && (
          <>
            {options.map((option) => (
              <option
                className="text-span text-[1.6rem]"
                value={option.amout || option.value}
                key={option.value}
              >
                {option.label}
              </option>
            ))}
          </>
        )}
      </select>

      {error && (
        <div className={`error-message ${helperText ? "active" : ""}`}>
          <span className="text-[1.4rem] text-error">{helperText}</span>
        </div>
      )}
    </label>
  </>
);
