import { useState } from "react";

export const useMaskedInput = ({
  mask,
  maxLength,
}: {
  mask?: string;
  maxLength: number;
}) => {
  const [value, setValue] = useState("");

  const applyMask = (value: string) => {
    const formattedValue = value.replace(/\D/g, "");
    let i = 0;
    return mask?.replace(/#/g, () => {
      const char = formattedValue[i++];
      return char || "";
    }) ?? value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (mask) {
      newValue = applyMask(newValue);
    }

    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  };

  return { value, handleChange };
};