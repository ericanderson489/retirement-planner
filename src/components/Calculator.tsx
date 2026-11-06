
interface CalculatorProps {
  savings: number;
  withdrawalRate: number;
  onSavingsChange: (value: number) => void;
  onWithdrawalRateChange: (value: number) => void;
}

function Calculator({
  savings,
  withdrawalRate,
  onSavingsChange,
  onWithdrawalRateChange
}: CalculatorProps) {
  const annualWithdrawal = savings * (withdrawalRate / 100);
  const monthlyWithdrawal = annualWithdrawal / 12;

  return (
    <section>
      <p>Calculate your estimated monthly retirement withdrawal.</p>

      <div>
        <label htmlFor="savings">Retirement Savings ($): </label>
        <input
          id="savings"
          type="number"
          min="0"
          value={savings}
          onChange={(event) =>
            onSavingsChange(Number(event.target.value))
          }
        />
      </div>

      <div>
        <label htmlFor="withdrawalRate">
          Annual Withdrawal Rate (%):
        </label>
        <input
          id="withdrawalRate"
          type="number"
          min="0"
          value={withdrawalRate}
          onChange={(event) =>
            onWithdrawalRateChange(Number(event.target.value))
          }
        />
      </div>

      <h2>
        Monthly Withdrawal: ${monthlyWithdrawal.toFixed(2)}
      </h2>
    </section>
  );
}

export default Calculator;
