
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [savings, setSavings] = useState<number>(500000);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);
  const [activePage, setActivePage] = useState<string>("Dashboard");

  const annualWithdrawal = savings * (withdrawalRate / 100);
  const monthlyWithdrawal = annualWithdrawal / 12;

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
      />

      <main className="main-content">
        <h1>{activePage}</h1>
        

        {activePage === "Dashboard" || activePage === "Calculator" ? (
          <>
            <p>Calculate your estimated monthly retirement withdrawal.</p>

            <div>
              <label htmlFor="savings">Retirement Savings ($): </label>
              <input
                id="savings"
                type="number"
                min="0"
                value={savings}
                onChange={(event) =>
                  setSavings(Number(event.target.value))
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
                  setWithdrawalRate(Number(event.target.value))
                }
              />
            </div>

            <h2>
              Monthly Withdrawal: ${monthlyWithdrawal.toFixed(2)}
            </h2>
          </>
        ) : (
          <p>The {activePage} page is coming soon.</p>
        )}
      </main>
    </div>
  );
}

export default App;
