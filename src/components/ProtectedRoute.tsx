import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../lib/useAuth";
import { LOGIN_FLOW } from "../lib/config";

export default function ProtectedRoute() {
  return <Outlet />;
  const { authenticated, loading, login } = useAuth();
  const location = useLocation();

  if (loading) return <div className="p-8">Loading…</div>;

  if (!authenticated) {
    if (LOGIN_FLOW === "top-level") {
      // Start OAuth immediately (preserves cookies/session best)
      login();
      return <div className="p-8">Redirecting to sign in…</div>;
    }
    // SPA callback flow: send user to your local /signin route
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
