import { useState } from "react";

function App() {
  const [savings, setSavings] = useState<number>(500000);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);

  const annualWithdrawal = savings * (withdrawalRate / 100);
  const monthlyWithdrawal = annualWithdrawal / 12;
  

  return (
    <div>
      <h1>Retirement Planner</h1>
      <p>Calculate your estimated monthly retirement withdrawal.</p>
      <div>
        <label>Retirement Savings ($): </label>
        <input
            type = "number"
            value = {savings}
            onChange = {(event) => setSavings(Number(event.target.value))}
          />
         </div>
         <div>
          <label>Annual Withdrawal Rate (%): </label>
          <input
             type = "number"
             value = {withdrawalRate}
             onChange = {(event) => setWithdrawalRate(Number(event.target.value))}
          />
          </div>
          <h2>
            Monthly Withdrawal: ${monthlyWithdrawal.toFixed(2)}
            </h2>   
    </div>
  );
}
export default App;