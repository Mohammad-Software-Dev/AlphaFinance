import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute() {
    const { authenticated, loading } = useAuth()
    if (loading) return <div className="p-8">Loading…</div>
    if (!authenticated) return <Navigate to="/signin" replace />
    return <Outlet />
}
