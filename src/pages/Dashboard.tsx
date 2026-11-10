import SummaryCard from "../components/SummaryCard";
import "./Dashboard.css";

interface DashboardProps {
  totalAssets: number;
  investmentTotal: number;
  availableCashTotal: number;
  shortTermTotal: number;
  totalDebt: number;
  estimatedNetWorth: number;
}

function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

function Dashboard({
  totalAssets,
  investmentTotal,
  availableCashTotal,
  shortTermTotal,
  totalDebt,
  estimatedNetWorth
}: DashboardProps) {
  return (
    <section>
      <p>Your retirement at a glance.</p>

      <div className="dashboard-grid">
        <SummaryCard
          title="Total Financial Assets"
          value={formatCurrency(totalAssets)}
          description="Total value across all recorded accounts"
        />

        <SummaryCard
          title="Total Debt"
          value={formatCurrency(totalDebt)}
          description="Outstanding balances across all recorded debts"
        />

        <SummaryCard
          title="Estimated Net Worth"
          value={formatCurrency(estimatedNetWorth)}
          description="Recorded account balances minus debts; excludes property and other assets"
        />

        <SummaryCard
          title="Investments"
          value={formatCurrency(investmentTotal)}
          description="Long-term investment assets"
        />

        <SummaryCard
          title="Available Cash"
          value={formatCurrency(availableCashTotal)}
          description="Cash available for immediate use"
        />

        <SummaryCard
          title="Short-Term Assets"
          value={formatCurrency(shortTermTotal)}
          description="Interest-earning cash equivalents"
        />
      </div>
    </section>
  );
}

export default Dashboard;