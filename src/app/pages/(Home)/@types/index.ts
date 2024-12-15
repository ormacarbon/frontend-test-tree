import { Dispatch, SetStateAction } from "react";

import { BuyCarbonData, httpClientResponse, httpRequest, processPaymentResponse } from "@/app/utils/types";

export type processPaymentProps = {
  data: BuyCarbonData;
  setLoading: Dispatch<SetStateAction<boolean>>;
  request: (data: httpRequest) => Promise<httpClientResponse<BuyCarbonData>>;
};
