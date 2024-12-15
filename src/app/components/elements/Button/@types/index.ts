import { ButtonHTMLAttributes, ReactNode } from "react";

export type Props = {
  loading?: boolean;
  className?: string;
  children?: ReactNode;
} &  ButtonHTMLAttributes<HTMLButtonElement>;
