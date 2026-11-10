// import type means we only need the type for checking
// Nothing is imported at runtime
// tsconfig "verbatimModuleSyntax" is on; requires this for type-only imports.
import type { PlannerData } from "../types";
// The key the data is saved under in localStorage.
const STORAGE_KEY = "retirewise-data";
// What a brand new user starts with.
// The ": plannerData" annotation makes TypeScript check every field
// is present and valid
export const defaultData: PlannerData = {
    profile: {
        name: "",
        birthDate: "",
        filingStatus: "single",
        riskTolerance: "moderate", 
    },
    accounts: [],
    debts: [],
    insurancePolicies: [],
    estateDocuments: [], 
    assets: [],
};

export function loadData(): PlannerData {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        // '==' true for null or undefined, '===' only true for null
        if (raw === null) return defaultData; // First visit: nothing saved
        const parsed = JSON.parse(raw) as Partial<PlannerData>;
        // Start from the defaults, then overwrite with whatever was saved
        return { 
            ...defaultData,
             ...parsed, 
            profile: { ...defaultData.profile, ...parsed.profile } 
        };
    } catch {
        // Corrupted or unreadable data: start fresh rather than crash
        return defaultData;
    }
}

export function saveData(data: PlannerData): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        // Can fail if storage is full or blocked
        console.error("Could not save planner data:", error);
    }
}

export function clearData(): void {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Could not clear planner data:", error);
    }
}