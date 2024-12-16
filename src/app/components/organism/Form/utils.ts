import { optionDefault } from "@/app/utils/types";
import { handleFormateCreditPriceProps } from "./@types";
import { formatter } from "@/app/utils/utils";

export const paymentOptions: optionDefault[] = [
  {
    label: "1x R$ 300",
    value: "1",
  },
  {
    label: "2x R$ 150",
    value: "2",
  },
  {
    label: "3x R$ 100",
    value: "3",
  },
  {
    label: "4x R$ 75",
    value: "4",
  },
  {
    label: "5x R$ 60",
    value: "5",
  },
  {
    label: "6x R$ 50",
    value: "6",
  },
  {
    label: "7x R$ 42,86",
    value: "7",
  },
  {
    label: "8x R$ 37,05",
    value: "8",
  },
  {
    label: "9x R$ 33,33",
    value: "9",
  },
  {
    label: "10x R$ 30",
    value: "10",
  },
  {
    label: "11x R$ 27,27",
    value: "11",
  },
  {
    label: "12x R$ 25",
    value: "12",
  },
];

export const handleFormateCreditPrice = ({
  list,
}: handleFormateCreditPriceProps) => {
  const newList = list
    .filter((item) => item.amout)
    .map((item) => ({
      ...item,
      value: item.id,
      label: `Compensação - ${formatter({
        type: "pt-BR",
        currency: "BRL",
        style: "currency",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(item.amout || 0)}`,
    }));
  return newList;
};

export const generateInstallmentOptions = ({
  co2,
  cred,
  maxInstallments = 12,
}: {
  co2: number;
  cred: number;
  maxInstallments?: number;
}) => {
  const total = cred * co2;
  const options: optionDefault[] = [];

  for (let i = 1; i <= maxInstallments; i++) {
    const installmentValue = (total / i).toFixed(2).replace(".", ",");
    options.push({
      label: `${i}x de R$ ${installmentValue}`,
      value: `${i}`,
    });
  }

  return options;
};
