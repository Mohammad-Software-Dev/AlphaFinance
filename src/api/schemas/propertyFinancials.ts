import { z } from "zod";

const ChartSeries = z.object({
  labels: z.array(z.string()),
  values: z.array(z.number()),
});

const ChartBlock = z.object({
  amount: z.number(),
  percentage: z.number(),
  isPositive: z.boolean(),
  series: ChartSeries,
});

const DividendsBlock = z.object({
  total: z.number(),
  percentage: z.number(),
  isPositive: z.boolean(),
  series: ChartSeries,
});

const ExpenseCategory = z.object({
  type: z.enum([
    "Alphased fees",
    "SPV maintenance",
    "Property management",
    "Facility management",
    "Services charges",
  ]),
  value: z.number(),
});

const Expenses = z.object({
  total: z.number(),
  label: z.string(),
  categories: z.array(ExpenseCategory),
});

const Invoice = z.object({
  invoiceId: z.string(),
  billingDate: z.string(),
  amount: z.number(),
});

const TokenTx = z.object({
  tokenId: z.object({ name: z.string(), image: z.string().nullable() }),
  balance: z.number(),
  value: z.object({
    amount: z.number(),
    percentage: z.number(),
    isPositive: z.boolean(),
  }),
});

const Investor = z.object({
  investorId: z.object({ name: z.string(), image: z.string().nullable() }),
  walletAddress: z.object({
    walletTitle: z.string(),
    address: z.string(),
  }),
  tokenAmount: z.number(),
  entryDate: z.string(),
  value: z.number(),
});

const FinancialTx = z.object({
  type: z.enum(["deposit", "withdrawal"]),
  label: z.string(),
  time: z.string(),
  amount: z.number(),
});

export const PropertyFinancialsDto = z.object({
  charts: z.object({
    propertyPrice: ChartBlock,
    totalRevenue: ChartBlock,
    netIncome: ChartBlock,
  }),
  expenses: Expenses,
  invoices: z.array(Invoice),
  dividends: DividendsBlock, // <-- note 'total'
  tokenTransactions: z.array(TokenTx),
  investors: z.array(Investor),
  financialTransactions: z.array(FinancialTx),
});

export type PropertyFinancialsDto = z.infer<typeof PropertyFinancialsDto>;
