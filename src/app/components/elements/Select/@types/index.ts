import { optionDefault } from "@/app/utils/types";
import { SelectHTMLAttributes } from "react";

export type Props = {
  label?: string;
  error?: boolean;
  className?: string;
  helperText?: string;
  defaultOption?: string;
  options: optionDefault[];
}& SelectHTMLAttributes<HTMLSelectElement>;
