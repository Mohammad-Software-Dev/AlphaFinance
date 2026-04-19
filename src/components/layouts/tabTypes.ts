export type TabKey =
  | "asset"
  | "info"
  | "financial"
  | "calculator"
  | "update"
  | "documents"
  | "reach"
  | "profile"
  | "transactions"
  | "settings"
  | "identification"
  | "security"
  | "balance"
  | "wallet_portfolio"
  | "transfer"
  | "bank";

export type TabItem = {
  label: string;
  value: TabKey;
};
