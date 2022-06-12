import { useEffect, useState } from 'react'
// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'
// LIBRARIES
import { Outlet } from 'react-router-dom'
// SERVICES
import { APIService } from '@/services/axios'

export const PersistLogin = () => {
	const { auth, setAuth } = useAuthContext()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const verifyRefreshToken = async () => {
			try {
				const { data } = await new APIService('GET').refreshToken()
				setAuth((prev) => ({
					...prev,
					accessToken: data.accessToken,
				}))
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		console.log('persistLogin')
		console.log(auth?.accessToken ? 'true' : 'false')
		auth?.accessToken ? setIsLoading(false) : verifyRefreshToken()
	}, [auth])

	console.log(isLoading === false && 'done loading')
	return <Outlet />
}
