import { PaymentDataType } from "@/@types/paymentData";
import axios from "axios";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL  
});
console.log("api",process.env.NEXT_PUBLIC_API_URL);


export const getAllCreditPrice = async () => {
  return await api.get("/credit-price");
};

export const postPayment = async (data: PaymentDataType) => {
  return await api.post("/payment", data);
};

export const getCreditPrice = async (id: number) => {
  return await api.get(`/credit-price/${id}`);
};

export default api;
