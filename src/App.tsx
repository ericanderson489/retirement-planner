
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Calculator from "./components/Calculator";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import type { PortfolioAccount } from "./types/Portfolio";

function App() {
  const [activePage, setActivePage] = useState<string>("Dashboard");

  const [savings, setSavings] = useState<number>(500000);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);

  const annualWithdrawal = savings * (withdrawalRate / 100);
  const monthlyWithdrawal = annualWithdrawal / 12;
  const [accounts, setAccounts] = useState<PortfolioAccount[]>([]);

  const totalAssets = accounts.reduce(
  (total, account) => total + account.balance,
  0
);

const investmentTotal = accounts
  .filter((account) => account.category === "Investments")
  .reduce((total, account) => total + account.balance, 0);

const availableCashTotal = accounts
  .filter((account) => account.category === "Available Cash")
  .reduce((total, account) => total + account.balance, 0);

const shortTermTotal = accounts
  .filter((account) => account.category === "Short-Term Assets")
  .reduce((total, account) => total + account.balance, 0);

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
            totalAssets={totalAssets}
            investmentTotal={investmentTotal}
            availableCashTotal={availableCashTotal}
            shortTermTotal={shortTermTotal}
          />
        ) : activePage === "Calculator" ? (
          <Calculator
            savings={savings}
            withdrawalRate={withdrawalRate}
            onSavingsChange={setSavings}
            onWithdrawalRateChange={setWithdrawalRate}
          />
        ) : activePage === "Portfolio" ? (
          <Portfolio 
          accounts={accounts}
          onAccountsChange={setAccounts}
          />
        ) : ( 
          <p>The {activePage} page is coming soon.</p>
        )}
      </main>
    </div>
  );
}

export default App;
