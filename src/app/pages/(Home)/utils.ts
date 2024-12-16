import { icons } from "@/app/assets/icons";
import { dataMessage, messageConfig } from "@/app/utils/types";
import { createMessageConfig } from "@/app/utils/utils";

export const initialValues = {
  cpf: "",
  co2: "",
  name: "",
  cred: "",
  phone: "",
  email: "",
  card_number: "",
  security_code: "",
  option_payment: "",
  expiration_year: "",
  expiration_month: "",
};


const statusConfig = {
  success: [200, 201, 202, 203, 204, 205, 206],
  error: [
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
    415, 416, 417, 418, 422, 429, 500, 501, 502, 503, 504, 505, 507, 508, 510, 511,
  ],
};

const defaultSuccessConfig:messageConfig = {
  title: "Parabéns!",
  status: "success",
  textButton: "Compartilhar",
  icon: icons.successCardBuy,
  subTitle: "Você compensou suas emissões com sucesso!",
  message: [
    "Com essa ação você contribui para um mundo mais sustentável",
    "Um email com o certificado de compensação será enviado para você em breve",
  ],
};

const defaultErrorConfig:messageConfig = {
  status: "error",
  title: "Desculpe",
  icon: icons.errorCardBuy,
  textButton: "Tentar novamente",
  subTitle: "Ocorreu um erro inesperado",
  message: ["Mensagem de erro decorrente da resposta do cartão"],
};

export const messagesConfig = {
  ...createMessageConfig(statusConfig.success, defaultSuccessConfig),
  ...createMessageConfig(statusConfig.error, defaultErrorConfig),
};

export const generateDataMessage = (config?: messageConfig): dataMessage => ({
  show: true,
  loading: false,
  icon: config?.icon || "",
  subTitle: config?.subTitle || "",
  status: config?.status || "error",
  title: config?.title || "Erro Desconhecido",
  textButton: config?.textButton || "Tentar novamente",
  message: config?.message || ["Ocorreu um erro inesperado. Tente novamente."],
});