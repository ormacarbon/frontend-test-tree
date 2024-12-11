/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from "react-hook-form";

export type httpRequest = {
  body: any;
  url: string;
  headers: any;
  method: "get" | "post" | "put" | "delete";
};

export type optionDefault = {
  label: string;
  value: string;
};

export type useAxiosRequestProps = {
  RequestResponse: any;
};

export type httpClientResponse<T = any> = {
  body: T;
  statusCode: number;
};

export type FormData = {
  cvv: number;
  cpf: string;
  name: string;
  phone: number;
  email: string;
  numberOfCard: number;
  optionOfPayment: string;
  monthOfExperience: number;
  yearsOfExperience: number;
};

export type FormFieldProps = {
  mask?: string;
  type: string;
  label?: string;
  maxLength?: number;
  className?: string;
  placeholder: string;
  name: ValidFieldNames;
  valueAsNumber?: boolean;
  error: FieldError | undefined;
  register: UseFormRegister<FormData>;
};

export type FormSelectProps = {
  label?: string;
  className?: string;
  name: ValidFieldNames;
  defaultOption?: string;
  options: optionDefault[];
  error: FieldError | undefined;
  register: UseFormRegister<FormData>;
};

export type ValidFieldNames =
  | "cvv"
  | "cpf"
  | "name"
  | "phone"
  | "email"
  | "numberOfCard"
  | "optionOfPayment"
  | "monthOfExperience"
  | "yearsOfExperience";
