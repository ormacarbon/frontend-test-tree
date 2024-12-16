import { AxiosError } from "axios";

import { processPaymentProps } from "./@types";
import { httpRequest } from "@/app/utils/types";
import { ENDPOINTS } from "@/app/utils/endpoints";

export const processPayment = async ({
  data,
  request,
  setLoading,
}: processPaymentProps) => {
  setLoading(true);

  const requestConfig: httpRequest = {
    url: `${ENDPOINTS.USER.CARBON.POST_CARBON}/payment`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: data,
  };

  try {
    await request(requestConfig);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    const errorMessage =
      _error.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  } finally {
    setLoading(false);
  }
};
