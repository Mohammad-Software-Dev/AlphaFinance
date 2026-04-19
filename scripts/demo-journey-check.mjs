import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function read(path) {
  return readFileSync(resolve(root, path), "utf8");
}

function assertContains(text, snippet, message) {
  if (!text.includes(snippet)) {
    throw new Error(`${message} (missing: ${snippet})`);
  }
}

const trending = read("src/components/dashboard/Trending.tsx");
assertContains(
  trending,
  "to={`/blog/${post.id}`}",
  "Dashboard trending should route to blog detail by ID"
);

const walletBank = read("src/components/wallet/tabs/Bank.tsx");
assertContains(
  walletBank,
  "Transfer limit reached in demo mode",
  "Wallet bank tab should expose deterministic demo error state"
);
assertContains(
  walletBank,
  "Transfer draft reset.",
  "Wallet bank tab should support cancel/reset feedback"
);

const settingsBasic = read("src/components/profile/Settings/BasicInfoEditPanel.tsx");
assertContains(
  settingsBasic,
  "Changes discarded.",
  "Profile basic settings should support cancel/reset feedback"
);
assertContains(
  settingsBasic,
  "Basic info saved.",
  "Profile basic settings should support save feedback"
);

console.log("Demo journey checks passed.");

