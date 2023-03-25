import { Navigate, Outlet, useLocation } from 'react-router-dom'
// CONSTANTS
import { DASHBOARD, SIGN_IN } from '@/constants/routes'
// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'

export const AuthRoute = () => {
	const location = useLocation()
	const { auth } = useAuthContext()

	console.log('log@AuthRoute.ts', auth)
	console.log('log@AuthRoute.ts', location)
	if (auth?.accessToken) return <Outlet />

	return <Navigate to={SIGN_IN} state={{ prevPathname: location.pathname }} />
}

// use when accessing the state on other files
export type UseLocationState = {
	prevPathname: string
}
