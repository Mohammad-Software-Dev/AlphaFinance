import { useAuth } from "../lib/useAuth";

export function UserMenu() {
  const { authenticated, scope, logout } = useAuth();
  if (!authenticated) return null;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">scope: {scope ?? "n/a"}</span>
      <button onClick={logout} className="px-3 py-2 rounded border">
        Logout
      </button>
    </div>
  );
}
