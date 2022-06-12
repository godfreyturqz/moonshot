import { Navigate, Outlet, useLocation } from 'react-router-dom'
// CONSTANTS
import { SIGN_IN } from '@/constants/routes'
// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'

export const AuthRoute = () => {
	console.log('im at authroute')
	const location = useLocation()
	const { auth } = useAuthContext()

	console.log('log@AuthRoute.ts', auth)
	console.log('log@AuthRoute.ts', location)
	if (auth?.accessToken) return <Outlet />

	return <Navigate to="signin" state={{ from: location }} replace />
}
