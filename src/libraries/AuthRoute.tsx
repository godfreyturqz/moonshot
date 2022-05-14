import { Navigate, Outlet, useLocation } from 'react-router-dom'
// CONSTANTS
import { SIGN_IN } from '@/constants/routes'
// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'

export const AuthRoute = () => {
	const location = useLocation()
	const { auth } = useAuthContext()

	console.log('log@AuthRoute.ts', auth)
	console.log('log@AuthRoute.ts', location)
	if (auth) return <Outlet />

	return <Navigate to={SIGN_IN} state={{ from: location }} replace />
}
