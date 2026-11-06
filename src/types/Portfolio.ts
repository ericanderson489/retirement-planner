// Union type of string literals, only one of the three strings can be assigned/chosen
export type AssetCategory =
  | "Investments"
  | "Available Cash"
  | "Short-Term Assets";

export interface PortfolioAccount {
  id: string;
  name: string;
  type: string;
  category: AssetCategory;
  balance: number;
}
