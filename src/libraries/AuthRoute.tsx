import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from '@/contexts/AuthContextProvider'
import { SIGN_IN } from '@/constants/routes'

export const AuthRoute = () => {
	const location = useLocation()
	const { auth } = useAuthContext()

	if (auth) return <Outlet />

	return <Navigate to={SIGN_IN} state={{ from: location }} replace />
}
