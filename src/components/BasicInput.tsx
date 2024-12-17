import React, { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  register?: UseFormRegisterReturn;
}

export const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ label = "", className, register, ...props }, ref) => {
    return (
      <div
        className={`flex flex-col items-start gap-[6px] w-full ${className}`}
      >
        {label && <label className="text-primary-500 font-bold">{label}</label>}
        <input
          {...props}
          ref={ref}
          className="w-full bg-gray-200/60 px-3 py-2 rounded-[25px] border-none placeholder:text-gray-700 max-h-[30px] text-sm lg:max-h-[40px] xl:px-6 lg:px-3 lg:py-3 xl:text-base"
          {...register}
        />
      </div>
    );
  }
);

BasicInput.displayName = "BasicInput";
