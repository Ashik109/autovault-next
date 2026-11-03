"use client";

import { useState, type FormEvent } from "react";
import { calculateLoan } from "@/lib/loan";

export default function LoanCalculator() {
  const [result, setResult] = useState<ReturnType<typeof calculateLoan> | null>(
    null,
  );
  const [error, setError] = useState("");
  const money = (amount: number) =>
    amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      setResult(
        calculateLoan(
          Number(data.get("price")),
          Number(data.get("downPayment")),
          Number(data.get("rate")),
          Number(data.get("months")),
        ),
      );
      setError("");
    } catch (error) {
      setResult(null);
      setError(
        error instanceof Error
          ? error.message
          : "Please check the loan details.",
      );
    }
  }
  return (
    <section className="rts-calculator-area rts-section-gap">
      <div className="container">
        <div className="calculator-form-inner">
          <h4 className="text-center mb--30">Car Loan Calculator</h4>
          <form onSubmit={submit}>
            <div className="single-wrapper">
              <span>
                <label htmlFor="loan-price">Vehicle Price ($)</label>
                <input
                  id="loan-price"
                  name="price"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Vehicle Price"
                  required
                />
              </span>
              <span>
                <label htmlFor="loan-down">Down Payment ($)</label>
                <input
                  id="loan-down"
                  name="downPayment"
                  type="number"
                  min="0"
                  step="0.01"
                  defaultValue="0"
                  required
                />
              </span>
            </div>
            <div className="single-wrapper">
              <span>
                <label htmlFor="loan-rate">Annual Interest Rate (%)</label>
                <input
                  id="loan-rate"
                  name="rate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  placeholder="Interest Rate"
                  required
                />
              </span>
              <span>
                <label htmlFor="loan-months">Loan Term (months)</label>
                <select id="loan-months" name="months" defaultValue="60">
                  {[12, 24, 36, 48, 60, 72, 84].map((months) => (
                    <option key={months} value={months}>
                      {months} months
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <button
              className="rts-btn radius-small btn-primary mb--20"
              type="submit"
            >
              Calculate
            </button>
            {error && <p role="alert">{error}</p>}
            {result && (
              <div className="loan-result" role="status">
                <p>
                  Monthly Payment:{" "}
                  <strong>{money(result.monthlyPayment)}</strong>
                </p>
                <p>
                  Total Interest: <strong>{money(result.totalInterest)}</strong>
                </p>
                <p>
                  Total Payments: <strong>{money(result.totalPayments)}</strong>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
