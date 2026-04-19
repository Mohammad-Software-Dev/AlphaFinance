// src/router.tsx
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// --- Lazy pages (code-split) ---
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const InvestorProfile = React.lazy(
  () => import("./pages/InvestorProfile/InvestorProfile")
);
const LegalAgreements = React.lazy(
  () => import("./pages/LegalAgreements/LegalAgreements")
);
const AccountVerification = React.lazy(
  () => import("./pages/AccountVerification/AccountVerification")
);
const IdentityVerification = React.lazy(
  () => import("./pages/IdentityVerification/IdentityVerification")
);
const BlogPostPage = React.lazy(() => import("./pages/BlogPage/BlogPostPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));
const RealEstatePage = React.lazy(
  () => import("./pages/RealEstate/RealEstatePage")
);
const RealEstateAssets = React.lazy(
  () => import("./pages/RealEstateAssets/RealEstateAssetsPage")
);
const Profile = React.lazy(() => import("./pages/Profile/ProfilePage"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const WalletPage = React.lazy(() => import("./pages/Wallet/WalletPage"));
const NotificationsPage = React.lazy(() => import("./pages/Notifications"));
const SettingsPage = React.lazy(() => import("./pages/Settings"));
const NotBuiltYet = React.lazy(() => import("./pages/NotBuiltYet"));

const Home = React.lazy(() => import("./pages/Home"));
export const router = createBrowserRouter([
  // Root → redirect
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  { path: "/home", element: <Home /> },
  // Public routes (demo mode)
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:blogId", element: <BlogPostPage /> },
  { path: "/real-estate/:assetId", element: <RealEstatePage /> },
  { path: "/profile", element: <Profile /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/wallet", element: <WalletPage /> },
  { path: "/investor-profile", element: <InvestorProfile /> },
  { path: "/legal-agreements", element: <LegalAgreements /> },
  { path: "/account-verification", element: <AccountVerification /> },
  { path: "/identity-verification", element: <IdentityVerification /> },
  { path: "/real-estate-assets", element: <RealEstateAssets /> },
  { path: "/notifications", element: <NotificationsPage /> },
  { path: "/settings", element: <SettingsPage /> },

  // Catch-all
  { path: "*", element: <NotBuiltYet /> },
]);
