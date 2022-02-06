import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/useAuthContext'

const RequireAuth = () => {
    const location = useLocation()
    const { auth } = useAuthContext()

    if(auth) return <Outlet/>

    return <Navigate to='/signin' state={{ from: location}} replace/>
}

export default RequireAuth
