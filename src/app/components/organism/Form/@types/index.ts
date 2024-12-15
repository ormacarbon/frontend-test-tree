import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { FormikTouched, FormikValues } from "formik";

import { creditPriceData, httpRequest } from "@/app/utils/types";
import { httpClientResponse } from "@/app/utils/types";

// Tipando os parâmetros corretamente
export type FormProps = {
  loading: boolean;
  values: FormikValues;
  resetForm: () => void;
  touched: FormikTouched<FormikValues>;
  setNotFlip: Dispatch<SetStateAction<boolean>>
  errors: { [key: string]: string | undefined };
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

export type getAllCreditPriceProps = {
  request: (data: httpRequest) => Promise<httpClientResponse<creditPriceData[]>>;
};
export type getCreditPriceProps = {
  id: string;
  request: (data: httpRequest) => Promise<httpClientResponse<creditPriceData>>;
};
export type handleFormateCreditPriceProps = {
  list: creditPriceData[];
};