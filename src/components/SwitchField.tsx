"use client";

import { Switch } from "@/components/ui/switch"; // Ajuste o path conforme seu projeto
import { useController, UseControllerProps, FieldValues } from "react-hook-form";

interface SwitchFieldProps<T extends FieldValues> extends UseControllerProps<T> {
  label?: string;
  description?: string;
}

export function SwitchField<T extends FieldValues>({
  label,
  description,
  ...controllerProps
}: SwitchFieldProps<T>) {
  const {
    field: { value, onChange, ...rest },
  } = useController(controllerProps);

  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="flex items-center space-x-3">
        <Switch
          checked={Boolean(value)}
          onCheckedChange={onChange}
          {...rest}
        />
        {description && <span className="text-sm text-primary-500 font-semibold">{description}</span>}
      </div>
    </div>
  );
}
