import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthContext } from '@/contexts/AuthContextProvider'
import { APIService } from '@/services/axios'

const PersistLogin = () => {
	const { auth, setAuth } = useAuthContext()

	// useEffect(() => {
	// 	const verifyRefreshToken = async () => {
	// 		try {
	// 			const { data } = await new APIService('GET').refreshToken()
	// 			setAuth((prev) => ({
	// 				...prev,
	// 				accessToken: data.accessToken,
	// 			}))
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}

	// 	console.log(auth)
	// 	!auth && verifyRefreshToken()
	// }, [])

	return <Outlet />
}

export default PersistLogin
