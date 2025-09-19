export type ChartSeriesModel = {
  labels: string[];
  values: number[];
};

export type ChartBlockModel = {
  amount: number;
  percentage: number;
  isPositive: boolean;
  series: ChartSeriesModel;
};

export type DividendsBlockModel = {
  total: number;
  percentage: number;
  isPositive: boolean;
  series: ChartSeriesModel;
};

export type ExpenseCategoryModel = {
  type:
    | "Alphased fees"
    | "SPV maintenance"
    | "Property management"
    | "Facility management"
    | "Services charges";
  value: number;
};

export type ExpensesModel = {
  total: number;
  label: string;
  categories: ExpenseCategoryModel[];
};

export type InvoiceModel = {
  invoiceId: string;
  billingDate: string; // ISO or human
  amount: number;
};

export type TokenTransactionModel = {
  tokenId: { name: string; image: string | null };
  balance: number;
  value: { amount: number; percentage: number; isPositive: boolean };
};

export type InvestorModel = {
  investorId: { name: string; image: string | null };
  walletAddress: { walletTitle: string; address: string };
  tokenAmount: number;
  entryDate: string;
  value: number;
};

export type FinancialTransactionModel = {
  type: "deposit" | "withdrawal";
  label: string;
  time: string;
  amount: number;
};

export type PropertyFinancialsModel = {
  charts: {
    propertyPrice: ChartBlockModel;
    totalRevenue: ChartBlockModel;
    netIncome: ChartBlockModel;
  };
  expenses: ExpensesModel;
  invoices: InvoiceModel[];
  dividends: DividendsBlockModel;
  tokenTransactions: TokenTransactionModel[];
  investors: InvestorModel[];
  financialTransactions: FinancialTransactionModel[];
};
