
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Calculator from "./components/Calculator";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState<string>("Dashboard");

  const [savings, setSavings] = useState<number>(500000);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);

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

        {activePage === "Dashboard" ? (
          <Dashboard
            savings={savings}
            annualWithdrawal={annualWithdrawal}
            monthlyWithdrawal={monthlyWithdrawal}
            withdrawalRate={withdrawalRate}
          />
        ) : activePage === "Calculator" ? (
          <Calculator
            savings={savings}
            withdrawalRate={withdrawalRate}
            onSavingsChange={setSavings}
            onWithdrawalRateChange={setWithdrawalRate}
          />
        ) : (
          <p>The {activePage} page is coming soon.</p>
        )}
      </main>
    </div>
  );
}

export default App;
