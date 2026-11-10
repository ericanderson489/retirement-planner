import { useState } from "react";
import type { SubmitEvent } from "react";
import type { Debt, DebtType } from "../types";
import "./Debts.css";

interface DebtsProps {
  debts: Debt[];
  onDebtsChange: (debts: Debt[]) => void;
}

const debtTypes: { value: DebtType; label: string }[] = [
  { value: "credit_card", label: "Credit Card" },
  { value: "auto_loan", label: "Auto Loan" },
  { value: "mortgage", label: "Mortgage" },
  { value: "student_loan", label: "Student Loan" },
  { value: "medical", label: "Medical" },
  { value: "equipment_loan", label: "Equipment Loan" },
  { value: "buy_now_pay_later", label: "Buy Now, Pay Later" },
  { value: "line_of_credit", label: "Line of Credit" },
  { value: "signature_loan", label: "Personal / Signature Loan" },
  { value: "payday_loan", label: "Payday Loan" },
  { value: "other", label: "Other" }
];

function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

function Debts({ debts, onDebtsChange }: DebtsProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState<DebtType>("credit_card");
  const [balance, setBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [error, setError] = useState("");

  const totalDebt = debts.reduce(
    (total, debt) => total + debt.balance,
    0
  );

  const totalMonthlyPayments = debts.reduce(
    (total, debt) => total + debt.monthlyPayment,
    0
  );

  function addDebt(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const numericBalance = Number(balance);
    const numericRate = Number(interestRate);
    const numericPayment = Number(monthlyPayment);

    const hasMissingFields =
      !name.trim() ||
      balance.trim() === "" ||
      interestRate.trim() === "" ||
      monthlyPayment.trim() === "";

    const hasInvalidNumbers = [
      numericBalance,
      numericRate,
      numericPayment
    ].some((value) => !Number.isFinite(value) || value < 0);

    if (hasMissingFields || hasInvalidNumbers) {
      setError(
        "Enter a debt name and valid, nonnegative numbers in every field."
      );
      return;
    }

    const newDebt: Debt = {
      id: crypto.randomUUID(),
      name: name.trim(),
      type,
      balance: numericBalance,
      interestRate: numericRate,
      monthlyPayment: numericPayment
    };

    onDebtsChange([...debts, newDebt]);

    setName("");
    setBalance("");
    setInterestRate("");
    setMonthlyPayment("");
    setError("");
  }

  function removeDebt(id: string) {
    onDebtsChange(debts.filter((debt) => debt.id !== id));
  }

  return (
    <section className="debts-page">
      <p>Track outstanding balances and monthly debt payments.</p>

      <div className="debt-summary">
        <div className="debt-summary-card">
          <h2>Total Debt</h2>
          <strong>{formatCurrency(totalDebt)}</strong>
        </div>

        <div className="debt-summary-card">
          <h2>Monthly Payments</h2>
          <strong>{formatCurrency(totalMonthlyPayments)}</strong>
        </div>
      </div>

      <h2>Add Debt</h2>

      <form className="debt-form" onSubmit={addDebt}>
        <label>
          Debt Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Car Loan"
            required
          />
        </label>

        <label>
          Debt Type
          <select
            value={type}
            onChange={(event) =>
              setType(event.target.value as DebtType)
            }
          >
            {debtTypes.map((debtType) => (
              <option key={debtType.value} value={debtType.value}>
                {debtType.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Remaining Balance ($)
          <input
            type="number"
            min="0"
            step="0.01"
            value={balance}
            onChange={(event) => setBalance(event.target.value)}
            placeholder="0.00"
            required
          />
        </label>

        <label>
          Annual Interest Rate (%)
          <input
            type="number"
            min="0"
            step="any"
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
            placeholder="e.g. 6.5"
            required
          />
        </label>

        <label>
          Monthly Payment ($)
          <input
            type="number"
            min="0"
            step="0.01"
            value={monthlyPayment}
            onChange={(event) => setMonthlyPayment(event.target.value)}
            placeholder="0.00"
            required
          />
        </label>

        {error && (
          <p className="debt-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Add Debt</button>
      </form>

      <h2>Your Debts</h2>

      {debts.length === 0 ? (
        <p>No debts added yet.</p>
      ) : (
        <div className="debt-list">
          {debts.map((debt) => (
            <article className="debt-card" key={debt.id}>
              <div>
                <h3>{debt.name}</h3>
                <p>
                  {debtTypes.find((item) => item.value === debt.type)
                    ?.label ?? debt.type}
                </p>
                <p>Annual interest rate: {debt.interestRate}%</p>
                <p>
                  Monthly payment: {formatCurrency(debt.monthlyPayment)}
                </p>
              </div>

              <div className="debt-card-actions">
                <strong>{formatCurrency(debt.balance)}</strong>
                <button
                  type="button"
                  aria-label={`Remove ${debt.name}`}
                  onClick={() => removeDebt(debt.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Debts;