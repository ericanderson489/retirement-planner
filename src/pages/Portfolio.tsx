
import { useState } from "react";
import type { 
    AssetCategory, 
    PortfolioAccount
   } from "../types/Portfolio";
import "./Portfolio.css";

interface PortfolioProps {
  accounts: PortfolioAccount[];
  onAccountsChange: (accounts: PortfolioAccount[]) => void;
}

function Portfolio({
  accounts,
  onAccountsChange
}: PortfolioProps) {
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("Brokerage");
  const [accountBalance, setAccountBalance] = useState("");
  const [accountCategory, setAccountCategory] =
        useState<AssetCategory>("Investments");

  const totalBalance = accounts.reduce(
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

const [editingId, setEditingId] = useState<string | null>(null);

  function resetForm() {
  setEditingId(null);
  setAccountName("");
  setAccountType("Brokerage");
  setAccountBalance("");
  setAccountCategory("Investments");
}

function editAccount(account: PortfolioAccount) {
  setEditingId(account.id);
  setAccountName(account.name);
  setAccountType(account.type);
  setAccountBalance(String(account.balance));
  setAccountCategory(account.category);
}

function saveAccount(event: React.SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  const balance = Number(accountBalance);

  if (
    !accountName.trim() ||
    accountBalance.trim() === "" ||
    !Number.isFinite(balance) ||
    balance < 0
  ) {
    return;
  }

  const savedAccount: PortfolioAccount = {
    id: editingId ?? crypto.randomUUID(),
    name: accountName.trim(),
    type: accountType,
    category: accountCategory,
    balance
  };

  const updatedAccounts = editingId !== null
    ? accounts.map((account) =>
        account.id === editingId ? savedAccount : account
      )
    : [...accounts, savedAccount];

  onAccountsChange(updatedAccounts);
  resetForm();
}

function deleteAccount(id: string) {
  onAccountsChange(
    accounts.filter((account) => account.id !== id)
  );

  if (editingId === id) {
    resetForm();
  }
}

  return (
    <section className="portfolio-page">
      <p>Manage your investment and retirement accounts.</p>

      <div className="portfolio-total">
        <p>Total Portfolio Value</p>
        <h2>
          {totalBalance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </h2>
      </div>

      <div className="portfolio-categories">
      <div className="category-card">
        <h3>Investments</h3>
        <p>${investmentTotal.toLocaleString()}</p>
      </div>

      <div className="category-card">
        <h3>Available Cash</h3>
        <p>${availableCashTotal.toLocaleString()}</p>
      </div>

      <div className="category-card">
        <h3>Short-Term Assets</h3>
        <p>${shortTermTotal.toLocaleString()}</p>
      </div>
      </div>

      <h2>{editingId !== null ? "Edit Account" : "Add Account"}</h2>

        <form className="account-form" onSubmit={saveAccount}>
        <label>
          Account Name
          <input
            type="text"
            value={accountName}
            onChange={(event) => setAccountName(event.target.value)}
            placeholder="e.g. Fidelity Brokerage"
            required
          />
        </label>

        <label>
            Asset Category
            <select 
            value={accountCategory}
            onChange={(event) =>
                setAccountCategory(event.target.value as AssetCategory)
            }
            >
                <option value="Investments">Investments</option>
                <option value="Available Cash">Available Cash</option>
                <option value="Short-Term Assets">Short-Term Assets</option>
            </select>
        </label>

        <label>
          Account Type
          <select
            value={accountType}
            onChange={(event) => setAccountType(event.target.value)}
          >
            <option>Brokerage</option>
            <option>Traditional IRA</option>
            <option>Roth IRA</option>
            <option>401(k)</option>
            <option>403(b)</option>
            <option>HSA</option>
            <option>Cash Savings</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Current Balance ($)
          <input
            type="number"
            min="0"
            step="0.01"
            value={accountBalance}
            onChange={(event) => setAccountBalance(event.target.value)}
            placeholder="0.00"
            required
          />
        </label>

        <button type="submit" className="add-account-button">
            {editingId !== null ? "Save Changes" : "Add Account"}
        </button>

        {editingId !== null && (
        <button type="button" onClick={resetForm}>
            Cancel
        </button>
)}
      </form>

      <h2>Your Accounts</h2>

      {accounts.length === 0 ? (
        <p>No accounts added yet.</p>
      ) : (
        <div className="account-list">
          {accounts.map((account) => (
            <div className="account-card" key={account.id}>
              <div>
                <h3>{account.name}</h3>
                <p>{account.type} · {account.category}</p>
              </div>

              <div className="account-card-actions">
                <strong>
                  {account.balance.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })}
                </strong>

                <button
                  type="button"
                  onClick={() => deleteAccount(account.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Portfolio;
