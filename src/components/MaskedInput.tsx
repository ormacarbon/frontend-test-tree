import React, { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputMask, InputMaskProps } from "@react-input/mask";

interface MaskedInputProps extends InputMaskProps {
  label?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  mask?: string; // Propriedade mask para definir a máscara
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ label = "", className, register, mask, ...props }, ref) => {
    return (
      <div
        className={`flex flex-col items-start gap-[6px] w-full ${className}`}
      >
        {label && <label className="text-primary-500 font-bold">{label}</label>}
        <InputMask
          mask={mask} // Aplique a máscara diretamente no componente
          {...props} // Passe os outros props para o input
          ref={ref}
          className="w-full bg-gray-200/60 px-3 py-2 rounded-[25px] border-none placeholder:text-gray-700 max-h-[30px] text-sm lg:max-h-[40px] xl:px-6 lg:px-3 lg:py-3 xl:text-base"
          {...register} // Passe a função de registro do react-hook-form
        />
      </div>
    );
  }
);

MaskedInput.displayName = "MaskedInput";
