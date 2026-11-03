// A union type. The values must be exactly one of these strings.
// Typos like roth ira become compile errors instead of silent bugs.

export type AccountType =
| "traditional_ira"
| "roth_ira"
| "401k"
| "roth_401k"
| "brokerage"
| "savings";

export type FilingStatus = 
| "single" 
| "married_joint" 
| "married_separate" 
| "head_of_household";

export type RiskTolerance = 
| "conservative"
| "moderate" 
| "aggressive";

// An interface describes the shape of an object. Which fields it has and their types.
export interface Allocation {
    stocks: number;
    bonds: number;
    cash: number;
}

export interface Account {
    id: string;
    name: string;
    type: AccountType;
    balance: number;
    allocation: Allocation;
}

export interface Debt {
    id: string;
    name: string;
    balance: number;
    interestRate: number;
}

export interface Profile {
    name: string;
    birthDate: string;
    filingStatus: FilingStatus;
    riskTolerance: RiskTolerance;
}
// Represents a users financial profile. 
export interface Planner {
    profile: Profile;
    accounts: Account[]; // Array of account objects.
    debts: Debt[];
}

export interface InsurancePolicy {
    carrier?: string;
    policyNumber?: string;
    covergaeType?: string;
    coverageAmount?: number;
}
export interface EstateDocument {
    hasWill: boolean;
    hasTrust: boolean;
    willDescription?: string;
    trustDescription?: string;
}