export function calculateLoan(
  price: number,
  downPayment: number,
  annualRate: number,
  months: number,
) {
  if (
    ![price, downPayment, annualRate, months].every(Number.isFinite) ||
    price <= 0 ||
    downPayment < 0 ||
    downPayment > price ||
    annualRate < 0 ||
    annualRate > 100 ||
    months < 1 ||
    !Number.isInteger(months)
  ) {
    throw new Error(
      "Enter a valid price, down payment, interest rate and loan term. Down payment cannot exceed the vehicle price.",
    );
  }
  const principal = price - downPayment;
  const monthlyRate = annualRate / 1200;
  const monthlyPayment =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months);
  const totalPayments = monthlyPayment * months;
  return {
    monthlyPayment,
    totalInterest: totalPayments - principal,
    totalPayments,
  };
}
