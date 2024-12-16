import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { httpRequest, httpClientResponse } from "../utils/types";

export function useAxiosRequest<RequestResponse>() {
  const [response, setResponse] =
    useState<httpClientResponse<RequestResponse> | null>(null);
  const [error, setError] = useState({
    message: "",
    status: 0,
  });

  const request = async ({
    url,
    method,
    headers,
    body: requestBody,
  }: httpRequest): Promise<httpClientResponse<RequestResponse>> => {
    try {
      const axiosResponse: AxiosResponse<RequestResponse> = await axios.request(
        {
          url,
          method,
          data: requestBody,
          headers,
        }
      );

      const result: httpClientResponse<RequestResponse> = {
        statusCode: axiosResponse.status,
        body: axiosResponse.data,
      };

      setResponse(result);
      return result;
    } catch (err) {
      const _error = err as AxiosError<{ message: string }>;
      const errorData = {
        status: _error.response?.status || 500,

        message:
          _error.response?.data.toString() ||
          _error.response?.data?.message ||
          _error.message ||
          "An unexpected error occurred",
      };

      setError(errorData);
      throw new Error(errorData.message);
    }
  };

  return { response, error, request };
}
