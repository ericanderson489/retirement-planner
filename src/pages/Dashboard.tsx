
import SummaryCard from "../components/SummaryCard";
import "./Dashboard.css";

interface DashboardProps {
  totalAssets: number;
  investmentTotal: number;
  availableCashTotal: number;
  shortTermTotal: number;
}

function Dashboard({
  totalAssets,
  investmentTotal,
  availableCashTotal,
  shortTermTotal
}: DashboardProps) {
  return (
    <section>
      <p>Your retirement at a glance.</p>

      <div className="dashboard-grid">
        
<SummaryCard
  title="Total Assets"
  value={totalAssets.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}
  description="Total value across all accounts"
/>

<SummaryCard
  title="Investments"
  value={investmentTotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}
  description="Long-term investment assets"
/>

<SummaryCard
  title="Available Cash"
  value={availableCashTotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}
  description="Cash available for immediate use"
/>

<SummaryCard
  title="Short-Term Assets"
  value={shortTermTotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}
  description="Interest-earning cash equivalents"
/>

      </div>
    </section>
  );
}

export default Dashboard;
