import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute() {
    const { authenticated, loading, login } = useAuth()
    if (loading) return <div className="p-8">Loading…</div>
    if (!authenticated) {
        // Optionally start login immediately:
        login()
        return <Navigate to="/" replace />
    }
    return <Outlet />
}
