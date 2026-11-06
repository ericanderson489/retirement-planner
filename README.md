# Retirement Planner

A retirement planning and financial management application designed to help individuals approaching or entering retirement organize their finances, manage investments, and prepare for important financial decisions.

The goal of Retirement Planner is to provide a centralized, easy-to-use platform where users can track their financial situation, estimate retirement income, plan withdrawals, and stay informed about important retirement milestones.

The application is intended to be accessible to users with varying levels of financial knowledge, offering straightforward tools and educational suggestions without replacing professional financial advice.

## Project Status

**In Development**

Retirement Planner is currently in the early stages of development. Core portfolio tracking and dashboard functionality are being implemented, with additional retirement planning tools planned for future releases.

## Current Features

- **Financial Dashboard:** View total assets and a breakdown of investments, available cash, and short-term assets.
- **Portfolio Management:** Add and remove financial accounts, including brokerage accounts, retirement accounts, and cash savings.
- **Asset Categorization:** Organize accounts into investments, available cash, and short-term assets.
- **Withdrawal Calculator:** Estimate annual and monthly withdrawals based on a specified portfolio balance and withdrawal percentage.
- **Dark-Themed Interface:** Navigate between the dashboard, portfolio, and calculator using a sidebar.

*Current account data is stored in application memory and is reset when the page is refreshed. Persistent storage is planned.*

## Planned Features

### 1. Financial Overview and Portfolio Management

- Track retirement accounts, brokerage accounts, savings, and other financial assets.
- Record outstanding debts and liabilities to calculate estimated net worth.
- Monitor asset allocation across stocks, bonds, cash, and other investments.
- View estimated portfolio growth under different market assumptions.
- Track available cash and short-term investments separately from long-term retirement assets.

### 2. Retirement Withdrawals and Required Minimum Distributions

- Calculate estimated Required Minimum Distributions (RMDs) based on applicable IRS rules.
- Estimate retirement account withdrawals and their impact on remaining balances.
- Help users plan distributions from traditional and Roth retirement accounts.
- Provide reminders for upcoming RMD deadlines.
- Explore withdrawal strategies based on retirement income needs.

### 3. Tax Planning

- Estimate federal income tax brackets based on projected retirement income.
- Calculate the potential tax impact of retirement account withdrawals and Roth conversions.
- Identify when additional taxable income may push a user into a higher marginal tax bracket.
- Help users compare withdrawal scenarios to support tax-aware retirement planning.

Tax calculations will be estimates based on applicable tax rules and user-provided information.

### 4. Retirement Milestones and Reminders

Provide reminders for important retirement-related events, including:

- Social Security eligibility and claiming considerations.
- Medicare enrollment periods and deadlines.
- Medicaid eligibility considerations, when applicable.
- Required Minimum Distribution deadlines.
- Insurance policy renewals and expiration dates.
- Estate planning tasks, such as preparing or reviewing a will or trust.

### 5. Insurance and Estate Planning

- Maintain a basic record of insurance policies, including provider, coverage type, and expiration or renewal dates.
- Track whether important estate planning documents have been prepared.
- Record the existence and review dates of wills, trusts, and other estate planning arrangements.
- Provide reminders to periodically review insurance coverage and estate planning documents.

The application is intended to organize this information, not replace legal documents or professional legal advice.

### 6. Portfolio Projections and Asset Allocation

- Estimate portfolio growth using adjustable return assumptions.
- Model different allocations between stocks, bonds, cash, and short-term investments.
- Illustrate how withdrawals, investment returns, and inflation may affect retirement savings.
- Provide general educational asset allocation suggestions based on age, retirement timeline, and risk tolerance.
- Encourage users to consult a qualified financial advisor before making significant investment decisions.

These suggestions will focus on diversification and risk management rather than recommending individual stocks or securities.

## Technology Stack

- **React:** User interface development
- **TypeScript:** Type-safe application logic
- **Vite:** Development and build tooling
- **CSS:** Interface styling
- **Git and GitHub:** Version control and project management

## Getting Started

### Prerequisites

Install a current supported version of Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/ericanderson489/retirement-planner.git
```

Navigate to the project directory:

```bash
cd retirement-planner
```

Switch to the dashboard development branch:

```bash
git switch feature/dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

## Development Roadmap

The following milestones represent planned development priorities and may change as the project evolves.

- [x] Initialize React and TypeScript project
- [x] Create application navigation and dashboard
- [x] Implement basic portfolio account management
- [x] Add investment and cash asset categories
- [x] Implement basic withdrawal calculations
- [ ] Add persistent account storage
- [ ] Support editing existing financial accounts
- [ ] Implement debt tracking and net worth calculations
- [ ] Develop retirement withdrawal and RMD calculators
- [ ] Add retirement income and tax projections
- [ ] Implement retirement milestone reminders
- [ ] Add insurance and estate planning tracking
- [ ] Develop portfolio growth and asset allocation projections
- [ ] Improve data security and privacy protections
- [ ] Expand testing and application documentation

## Financial Disclaimer

Retirement Planner is an educational and financial planning tool. It does not provide personalized investment, tax, legal, or financial advice.

Calculations and projections are estimates and may not reflect actual investment performance, tax liabilities, or future financial conditions. Users should verify important financial information and consult qualified financial, tax, or legal professionals before making significant decisions.

## License

No license has been specified at this time.

## Contributing

This project is currently under active personal development. Contributions, suggestions, and feedback may be considered as the application evolves.
