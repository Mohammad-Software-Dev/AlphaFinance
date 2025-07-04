import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../components/Loader";

// Lazy load pages
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
const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account-verification" element={<AccountVerification />} />
        <Route path="/investor-profile" element={<InvestorProfile />} />
        <Route path="/legal-agreements" element={<LegalAgreements />} />
        <Route
          path="/identity-verification"
          element={<IdentityVerification />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-post" element={<BlogPostPage />} />
        <Route path="/real-estate/:assetId" element={<RealEstatePage />} />
        <Route path="/real-estate-assets" element={<RealEstateAssets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="*" element={<NotBuiltYet />} />
      </Routes>
    </Suspense>
  );
};

export default App;
