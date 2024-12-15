import React, { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  register?: UseFormRegisterReturn; // Registro do react-hook-form
}

export const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ label = "", className, register, ...props }, ref) => {
    return (
      <div
        className={`flex flex-col items-start gap-[6px] w-full ${className}`}
      >
        {label && <label className="text-primary-500 font-bold">{label}</label>}
        <input
          type="text"
          className="w-full bg-gray-200/60 px-3 py-2 rounded-[25px] border-none placeholder:text-gray-700 max-h-[30px] text-sm lg:max-h-[40px] lg:px-6 lg:py-3 lg:text-base"
          ref={ref}
          {...register} // Vincula o campo ao react-hook-form
          {...props}
        />
      </div>
    );
  }
);

BasicInput.displayName = "BasicInput";
