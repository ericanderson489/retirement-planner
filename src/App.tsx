
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Calculator from "./components/Calculator";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import type { PortfolioAccount } from "./types/Portfolio";
import { loadData, saveData } from "./lib/storage";
import type { PlannerData, Debt } from "./types";
import Debts from "./pages/Debts";

function App() {
  const [activePage, setActivePage] = useState<string>("Dashboard");
  const [savings, setSavings] = useState<number>(500000);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);

  
 const [plannerData, setPlannerData] = useState<PlannerData>(
  () => loadData()
);

const accounts = plannerData.accounts;

function updateAccounts(updatedAccounts: PortfolioAccount[]) {
  const updatedData: PlannerData = {
    ...plannerData,
    accounts: updatedAccounts
  };

  setPlannerData(updatedData);
  saveData(updatedData);
}
function updateDebts(updatedDebts: Debt[]) {
  const updatedData: PlannerData = {
    ...plannerData,
    debts: updatedDebts
  };

  setPlannerData(updatedData);
  saveData(updatedData);
}

  const totalAssets = accounts.reduce(
  (total, account) => total + account.balance,
  0
);

const totalDebt = plannerData.debts.reduce(
  (total, debt) => total + debt.balance,
  0
);

const estimatedNetWorth = totalAssets - totalDebt;

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
      <Sidebar /*Side function, sets the main page depending on clicked item*/ 
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
            totalDebt={totalDebt}
            estimatedNetWorth={estimatedNetWorth}
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
          onAccountsChange={updateAccounts}
          />
        ) : activePage === "Debts" ? (
          <Debts
          debts={plannerData.debts}
          onDebtsChange={updateDebts}
          />
         ) : ( 
          <p>The {activePage} page is coming soon.</p>
        )}
      </main>
    </div>
  );
}

export default App;
