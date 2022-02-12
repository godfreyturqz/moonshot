import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from '@/contexts/useAuthContext'

const RequireAuth = () => {
    const location = useLocation()
    const { auth } = useAuthContext()

    console.log(auth ? true : false)
    if(auth) return <Outlet/>

    return <Navigate to='/signin' state={{ from: location}} replace/>
}

export default RequireAuth
