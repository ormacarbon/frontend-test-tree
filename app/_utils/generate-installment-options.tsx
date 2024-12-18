export function totalOfInstallments(
  value: number,
  maxInstallments: number = 12,
): { value: string; label: string }[] {
  if (maxInstallments < 1) {
    throw new Error("O número de parcelas deve ser pelo menos 1.");
  }

  const result = [];

  for (let i = 1; i <= maxInstallments; i++) {
    const installmentValue = value / i;
    const formattedValue = Number.isInteger(installmentValue)
      ? installmentValue.toString()
      : installmentValue.toFixed(2).replace(".", ",");

    result.push({
      value: i.toString(),
      label: `${i}x R$ ${formattedValue}`,
    });
  }

  return result;
}
