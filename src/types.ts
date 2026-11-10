import type { PortfolioAccount } from "./types/Portfolio";
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

export type DebtType = 
| "credit_card"
| "auto_loan"
| "mortgage"
| "student_loan"
| "medical"
| "equipment_loan"
| "buy_now_pay_later"
| "line_of_credit"
| "signature_loan"
| "payday_loan"
| "other";

export type EstateDocumentType =
| "will" 
| "trust" 
| "power_of_attorney"
| "healthcare_directive"
| "other";

export type EstateDocumentStatus =
| "not_started" 
| "in_progress" 
| "complete";

export type AssetType = 
| "auto" 
| "primary_residence"
| "jewelry"
| "precious_metals"
| "other_real_estate"
| "other";

export type CoverageType =
| "health"
| "medicare"
| "medicare_advantage"
| "medicare_part_d"
| "term_life"
| "whole_life"
| "universal_life"
| "disability"
| "long_term_care"
| "pet"
| "home"
| "renters"
| "condo"
| "auto"
| "umbrella"
| "cyber"
| "business"
| "professional_liability"
| "travel"
| "other";

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
    allocation: Allocation; // Interfaces can contain other interfaces
}

export interface Debt {
    id: string;
    name: string;
    balance: number;
    interestRate: number;
    type: DebtType;
    monthlyPayment: number;
    }

export interface Profile {
    name: string;
    birthDate: string;
    filingStatus: FilingStatus;
    riskTolerance: RiskTolerance;
    ssBenefitAtFRA?: number;
    spouse?: { name: string; birthDate: string };
}
// Everything the app knows about the user in a single object 
export interface PlannerData {
    profile: Profile;
    accounts: PortfolioAccount[]; // Array of account objects.
    debts: Debt[];
    insurancePolicies: InsurancePolicy[];
    estateDocuments: EstateDocument[];
    assets: Asset[];
}

export interface InsurancePolicy {
    id: string;
    name: string;
    carrier?: string;
    policyNumber?: string;
    coverageType: CoverageType;
    coverageAmount?: number;
    expirationDate?: string;
}

export interface EstateDocument {
    id: string;
    type: EstateDocumentType;
    lastReviewed?: string;
    location?: string;
    agentName?: string;
    status: EstateDocumentStatus;
    beneficiaries?: string[];
}

export interface Asset {
    id: string;
    name: string;
    type: AssetType;
    quantity?: number;
    estimatedValue: number;
}

