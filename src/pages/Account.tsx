import { useAuth } from '../hooks/useAuth'

export default function Account() {
    const { authenticated, scope, expires_in } = useAuth()
    return (
        <div className="p-8">
            <h2 className="text-xl font-semibold mb-4">Account</h2>
            <pre className="bg-gray-100 p-4 rounded">
                {JSON.stringify({ authenticated, scope, expires_in }, null, 2)}
            </pre>
        </div>
    )
}
