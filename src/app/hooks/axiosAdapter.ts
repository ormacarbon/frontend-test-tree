import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { httpRequest, httpClientResponse } from "../utils/types";

export function useAxiosRequest<RequestResponse>() {
  const [response, setResponse] = useState<httpClientResponse<RequestResponse> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const request = async ({
    url,
    method,
    headers,
    body: requestBody,
  }: httpRequest): Promise<httpClientResponse<RequestResponse>> => {
    try {
      const axiosResponse: AxiosResponse<RequestResponse> = await axios.request({
        url,
        method,
        data: requestBody,
        headers,
      });

      const result: httpClientResponse<RequestResponse> = {
        statusCode: axiosResponse.status,
        body: axiosResponse.data,
      };

      setResponse(result);
      setError(null);
      return result;
    } catch (err) {
      const _error = err as AxiosError<{ message: string }>;
      const errorMessage = _error.response?.data?.message || "An unexpected error occurred";

      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return { response, error, request };
}
