import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function read(path) {
  return readFileSync(resolve(root, path), "utf8");
}

function assertContains(text, snippet, message) {
  if (!text.includes(snippet)) {
    throw new Error(message + ` (missing: ${snippet})`);
  }
}

function assertNotContains(text, snippet, message) {
  if (text.includes(snippet)) {
    throw new Error(message + ` (found: ${snippet})`);
  }
}

const router = read("src/router.tsx");
assertContains(router, 'to="/dashboard"', "Root route should redirect to /dashboard");
assertContains(router, 'path: "/notifications"', "Notifications route should exist");
assertContains(router, 'path: "/settings"', "Settings route should exist");
assertContains(router, 'path: "*"', "Catch-all route should exist");
assertNotContains(router, "ProtectedRoute", "ProtectedRoute should be removed from router");
assertNotContains(router, "/auth/callback", "Auth callback route should be removed");

const blogPostPage = read("src/pages/BlogPage/BlogPostPage.tsx");
assertContains(blogPostPage, "useParams", "Blog post page should use route params");
assertContains(blogPostPage, "post.id === blogId", "Blog post page should resolve data by blogId");
assertContains(blogPostPage, "Post not found", "Blog post page should handle unknown IDs");

const signIn = read("src/pages/SignIn/useSignInForm.ts");
assertContains(signIn, 'navigate("/dashboard")', "Sign-in should use demo redirect");
assertNotContains(signIn, "beginLogin", "Sign-in should not call auth login flow");
if (existsSync(resolve(root, "src/services/authService.ts"))) {
  throw new Error("Legacy auth service should be removed in demo mode");
}

const tabContent = read("src/components/layouts/TabContent.tsx");
const tabsComponent = read("src/components/common/Tabs.tsx");
assertContains(tabContent, "identification: Identification", "Identification tab should be mapped");
assertContains(tabContent, "security: Security", "Security tab should be mapped");
assertContains(tabContent, "InlineNotBuiltYet", "Tab fallback should use branded component");
assertNotContains(tabContent, "coming soon", "Plain coming-soon fallback text should be removed");
assertNotContains(tabContent, "ballance", "Misspelled wallet tab key should be removed");
assertContains(tabsComponent, "role=\"tablist\"", "Tabs should expose tablist semantics");
assertContains(tabsComponent, "role=\"tab\"", "Tabs should expose semantic tab controls");

const walletPage = read("src/pages/Wallet/WalletPage.tsx");
assertContains(walletPage, 'value: "balance"', "Wallet should use canonical balance tab key");
assertContains(walletPage, 'defaultTab="balance"', "Wallet default tab should be balance");
assertNotContains(walletPage, "ballance", "Legacy wallet key should be removed from page config");

const profilePage = read("src/pages/Profile/ProfilePage.tsx");
assertContains(profilePage, 'value: "identification"', "Profile tab list should include identification");
assertContains(profilePage, 'value: "security"', "Profile tab list should include security");

const styles = read("src/styles/index.css");
assertNotContains(styles, ".w-full{", "Global Tailwind utility override should not exist");
assertNotContains(
  styles,
  'html[data-theme="dark"] .bg-white',
  "Legacy class-patch dark mode selectors should be removed"
);

const indexHtml = read("index.html");
assertContains(
  indexHtml,
  "localStorage.getItem(\"theme\")",
  "Pre-hydration theme script should be present in index.html"
);

assertContains(
  blogPostPage,
  "type=\"button\"",
  "Filter controls should use semantic buttons"
);
assertNotContains(
  blogPostPage,
  "<div\n                      key={f}\n                      onClick={() => setActiveFilter(f)}",
  "Filter controls should not use non-semantic clickable wrappers"
);

const modal = read("src/components/common/Modal.tsx");
assertContains(modal, "aria-labelledby", "Modal should expose labelledby relationship");
assertContains(modal, "aria-describedby", "Modal should expose describedby relationship");
assertContains(modal, "previousFocusRef", "Modal should restore previous focus on close");

const profileTab = read("src/components/profile/tabs/Profile.tsx");
assertContains(profileTab, "<Modal", "Profile mobile log panel should use shared accessible modal");

const dashboardPage = read("src/pages/Dashboard/Dashboard.tsx");
assertNotContains(
  dashboardPage,
  "components/dashnoard",
  "Dashboard imports should use normalized dashboard path"
);

const trending = read("src/components/dashboard/Trending.tsx");
assertNotContains(trending, "/blog-post", "Trending should not link to removed /blog-post route");
assertContains(trending, "useBlog()", "Trending should use blog dataset for route-valid posts");

const invoices = read("src/components/common/Invoices.tsx");
const operationsModal = read("src/components/realEstate/OperationModalContent.tsx");
assertNotContains(invoices, "window.open(", "Invoices should use safe external-open helper");
assertNotContains(
  operationsModal,
  "window.open(",
  "Operation modal should use safe external-open helper"
);

const app = read("src/App.tsx");
assertContains(app, "./components/common/Loader", "App should import loader from src tree");

const notificationsPage = read("src/pages/Notifications.tsx");
const settingsPage = read("src/pages/Settings.tsx");
assertNotContains(
  notificationsPage,
  "NotBuiltYet",
  "Notifications page should be implemented, not placeholder"
);
assertNotContains(
  settingsPage,
  "NotBuiltYet",
  "Settings page should be implemented, not placeholder"
);
assertContains(
  notificationsPage,
  "NotificationsEditPanel",
  "Notifications page should connect to notifications settings model"
);
assertContains(
  settingsPage,
  "SettingsDetailPanel",
  "Settings page should render settings detail panels"
);

console.log("Demo smoke checks passed.");
