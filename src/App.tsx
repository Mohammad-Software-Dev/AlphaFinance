import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import InvestorProfile from "./pages/InvestorProfile/InvestorProfile";
import LegalAgreements from "./pages/LegalAgreements/LegalAgreements";
import AccountVerification from "./pages/AccountVerification/AccountVerification";
import IdentityVerification from "./pages/IdentityVerification/IdentityVerification";
import BlogPostPage from "./pages/BlogPage/BlogPostPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import RealEstatePage from "./pages/RealEstate/RealEstatePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/account-verification" element={<AccountVerification />} />
      <Route path="/investor-profile" element={<InvestorProfile />} />
      <Route path="/legal-agreements" element={<LegalAgreements />} />
      <Route path="/identity-verification" element={<IdentityVerification />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog-post" element={<BlogPostPage />} />
      <Route path="/real-estate/:assetId" element={<RealEstatePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
