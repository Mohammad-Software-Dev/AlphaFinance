// src/router.tsx
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

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
const NotBuiltYet = React.lazy(() => import("./pages/NotBuiltYet"));
const Profile = React.lazy(() => import("./pages/Profile/ProfilePage"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const WalletPage = React.lazy(() => import("./pages/Wallet/WalletPage"));

const AuthCallback = React.lazy(() => import("./pages/AuthCallback"));
const Account = React.lazy(() => import("./pages/Account"));

export const router = createBrowserRouter([
  // Root → redirect
  { path: "/", element: <Navigate to="/signin" replace /> },

  // Public routes
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/auth/callback", element: <AuthCallback /> }, // SPA auth callback
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog-post", element: <BlogPostPage /> },
  { path: "/real-estate/:assetId", element: <RealEstatePage /> },

  // Protected routes (require auth)
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/account", element: <Account /> },
      { path: "/profile", element: <Profile /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/wallet", element: <WalletPage /> },
      { path: "/investor-profile", element: <InvestorProfile /> },
      { path: "/legal-agreements", element: <LegalAgreements /> },
      { path: "/account-verification", element: <AccountVerification /> },
      { path: "/identity-verification", element: <IdentityVerification /> },
      { path: "/real-estate-assets", element: <RealEstateAssets /> },
    ],
  },

  // Catch-all
  { path: "*", element: <NotBuiltYet /> },
]);
