import { InputHTMLAttributes } from "react";

export type Props = {
  label?: string;
  error?: boolean;
  className?: string;
  maxLength?: number;
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;
