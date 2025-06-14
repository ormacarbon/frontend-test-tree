import React from "react";
import { IMaskInput } from "react-imask";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const MaskedInput = React.forwardRef<HTMLInputElement, any>(
  ({ mask, ...props }, ref) => (
    <IMaskInput mask={mask} inputRef={ref} {...props} />
  )
)
MaskedInput.displayName = "MaskedInput"

interface IInputWithMask {
    control: any;
    name: string;
    labelName: string;
    mask: string;
    placeholder: string;

}

export function InputWithMask({ ...props }: IInputWithMask) {
    return(
         <FormField
            control={props.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00A19D] font-bold text-base">CVC</FormLabel>
                <FormControl>
                  <MaskedInput
                    {...field}
                    mask="000"
                    placeholder="123"
                    className="w-full h-10 px-3 rounded-md bg-[#F4F4F499] border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
    )
}