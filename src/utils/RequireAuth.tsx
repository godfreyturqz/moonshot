import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'

const RequireAuth = () => {
    const location = useLocation()
    const { auth } = useAuth()

    if(auth) return <Outlet/>

    return <Navigate to='/login' state={{ from: location}} replace/>
}

export default RequireAuth
