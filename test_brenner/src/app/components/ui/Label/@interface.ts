import { LabelHTMLAttributes } from "react";

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
    children: React.ReactNode;
}