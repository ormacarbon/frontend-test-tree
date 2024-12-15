import { HTMLAttributes } from "react";

export type Props = {
  icon: string;
  title: string;
  status: string;
  subTitle: string;
  loading?: boolean;
  message: string[];
  textButton: string;
  className?: string;
  handleClick: () => void;
} & HTMLAttributes<HTMLHeadingElement>;
