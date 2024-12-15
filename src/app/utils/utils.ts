import { formatterProps } from "./types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertToParams = (data: Record<string, any>) =>
  data ? new URLSearchParams(data).toString() : "";

export const convertToParamsArrayString = (data: any[], name: string) => {
  const array = data?.map((item) =>
    typeof item === "number" ? item : item.value
  );

  return array.length > 0 ? `${name}[]=${array.join(`&${name}[]=`)}` : "";
};

export const cleanObject = (obj: Record<string, any>): Record<string, any> =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) =>
        value !== 0 &&
        value !== null &&
        value !== "" &&
        value !== undefined &&
        (Array.isArray(value) ? value.length !== 0 : true)
    )
  );

export const cleanObjectWithZero = (
  obj: Record<string, any>
): Record<string, any> =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) =>
        value !== null &&
        value !== "" &&
        value !== undefined &&
        (Array.isArray(value) ? value.length !== 0 : true)
    )
  );

export const formatter = ({
  type = "en-US",
  currency = "USD",
  style = "decimal",
  minimumFractionDigits,
  maximumFractionDigits,
}: formatterProps) => {
  return new Intl.NumberFormat(type, {
    style,
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });
};

export const unformat = (value: string) => {
  const number = value.replace(new RegExp(`[^0-9.-]+`, "g"), "").trim();

  return parseFloat(number) || 0;
};

export const createMessageConfig = (
  statusCodes: number[],
  config: object
): Record<number, object> => {
  return statusCodes.reduce((acc, status) => {
    acc[status] = config;
    return acc;
  }, {} as Record<number, object>);
};

export const maskCpf = (value: string) => {
  value.replace(/[^\d]/g, "");
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

export const maskPhone = (value: string) =>
  value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");

export const maskCard = (value: string) =>
  value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, "$1 $2 $3 $4");
