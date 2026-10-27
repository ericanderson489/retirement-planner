
import SummaryCard from "../components/SummaryCard";
import "./Dashboard.css";

interface DashboardProps {
  savings: number;
  annualWithdrawal: number;
  monthlyWithdrawal: number;
  withdrawalRate: number;
}

function Dashboard({
  savings,
  annualWithdrawal,
  monthlyWithdrawal,
  withdrawalRate
}: DashboardProps) {
  return (
    <section>
      <p>Your retirement at a glance.</p>

      <div className="dashboard-grid">
        <SummaryCard
          title="Total Savings"
          value={`$${savings.toLocaleString()}`}
          description="Retirement portfolio"
        />

        <SummaryCard
          title="Monthly Withdrawal"
          value={`$${monthlyWithdrawal.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}`}
          description={`Based on a ${withdrawalRate}% annual withdrawal rate`}
        />

        <SummaryCard
          title="Annual Withdrawal"
          value={`$${annualWithdrawal.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}`}
          description="Estimated annual withdrawal before taxes"
        />

        <SummaryCard
          title="Monthly Expenses"
          value="Not set"
          description="Expense tracking coming soon"
        />
      </div>
    </section>
  );
}

export default Dashboard;
