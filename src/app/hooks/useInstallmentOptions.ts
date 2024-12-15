import { useMemo } from "react";

interface InstallmentOption {
  label: string;
  value: number;
}
interface InstallmentProps {
  price: number;
  quantity: number;
  installments?: number;
}

export const useInstallmentOptions = ({
  price = 0,
  quantity = 0,
  installments = 12,
}: InstallmentProps): InstallmentOption[] => {
  return useMemo(() => {
    const totalPrice = price * quantity;
    const options: InstallmentOption[] = [];

    for (let i = 1; i <= installments; i++) {
      const installmentValue = totalPrice / i;
      options.push({
        label: `${i}x de R$ ${installmentValue.toFixed(2).replace(".", ",")}`,
        value: i,
      });
    }

    return options;
  }, [price, quantity, installments]);
};
