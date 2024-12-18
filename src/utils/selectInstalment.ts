export function selectInstallments(
    value: number,
    installments: number = 1
  ): { value: string; label: string }[] {
    if (installments < 1) {
      throw new Error("O número de parcelas deve ser pelo menos 1.");
    }
  
    const result = [];
  
    for (let i = 1; i <= installments; i++) {
      const installmentValue = value / i;
      result.push({
        value: i.toString(),
        label: `${i}x R$ ${installmentValue.toFixed(2).replace(".", ",")}`,
      });
    }
  
    return result;
  }
  