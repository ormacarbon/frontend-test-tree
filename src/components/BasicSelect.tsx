import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { forwardRef } from "react";

interface BasicSelectProps {
  selectContent: { value: string; label: string }[];
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const BasicSelect = forwardRef<HTMLDivElement, BasicSelectProps>(
  (
    { selectContent, label, placeholder = "Selecionar", value, onChange }, ref
    
  ) => {
    return (
      <div className={`flex flex-col items-start gap-[6px] w-full`} ref={ref}>
        {label && <label className="text-primary-500 font-bold">{label}</label>}

        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-full bg-gray-200/60 px-3 py-2 rounded-[25px] border-none placeholder:text-gray-700 max-h-[30px] text-sm lg:max-h-[40px] xlg:px-6 lg:px-3 lg:py-3 xl:text-base">
            <SelectValue
              placeholder={placeholder}
              className="text-gray-700 placeholder:text-gray-700"
            />
          </SelectTrigger>
          <SelectContent>
            {selectContent.map((item, index) => (
              <SelectItem key={`${item.label}-${index}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }
);

BasicSelect.displayName = "BasicSelect";
