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