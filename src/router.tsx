import { createBrowserRouter, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import AuthCallback from './pages/AuthCallback'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'

export const router = createBrowserRouter([
    { path: '/', element: <Navigate to="/signin" replace /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/auth/callback', element: <AuthCallback /> }, // SPA-callback flow
    {
        element: <ProtectedRoute />,
        children: [{ path: '/account', element: <Account /> }],
    },
])
