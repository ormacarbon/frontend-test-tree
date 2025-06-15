import React from "react";
import { IMaskInput } from "react-imask";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { IInputWithMask, IWithoutMask } from "@/types/formTypes";

const MaskedInput = React.forwardRef<HTMLInputElement, any>(
  ({ mask, ...props }, ref) => (
    <IMaskInput mask={mask} inputRef={ref} {...props} />
  )
)
MaskedInput.displayName = "MaskedInput";

export function InputWithMask({ ...props }: IInputWithMask) {
    return(
         <FormField
            control={props.control}
            name={props.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00A19D] font-bold text-base">{props.labelName}</FormLabel>
                <FormControl>
                  <MaskedInput
                    {...field}
                    mask={props.mask}
                    placeholder={props.placeholder}
                    className="w-full h-10 px-3 rounded-md bg-[#F4F4F499] border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
    )
}

export function InputWithoutMask({ ...props }: IWithoutMask) {
    return(
        <FormField
          control={props.control}
          name={props.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00A19D] font-bold text-base">{props.labelName}</FormLabel>
              <FormControl>
                <Input className="bg-[#F4F4F499] border-0" type={props.type} placeholder={props.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

    )
} 