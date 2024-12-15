import { getAllCreditPriceProps, getCreditPriceProps } from "./@types";
import { httpRequest } from "@/app/utils/types";
import { ENDPOINTS } from "@/app/utils/endpoints";

export const getCreditPrice = async ({ id, request }: getCreditPriceProps) => {
  const requestConfig: httpRequest = {
    url: `${ENDPOINTS.USER.CARBON.GET_CREDIT_DETAILS}/credit-price/${id}`,
    method: "get",
    headers: {},
    body: null,
  };

  try {
    await request(requestConfig);
  } catch (e) {
    console.error(e);
  }
};

export const getAllCreditPrice = async ({ request }: getAllCreditPriceProps) => {
  const requestConfig: httpRequest = {
    url: `${ENDPOINTS.USER.CARBON.GET_CREDIT_DETAILS}/credit-price`,
    method: "get",
    headers: {},
    body: null,
  };

  try {
    await request(requestConfig);
  } catch (e) {
    console.error(e);
  }
};
