import { useEffect } from 'react'
// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'
// LIBRARIES
import { Outlet } from 'react-router-dom'
// SERVICES
import { APIService } from '@/services/axios'

export const PersistLogin = () => {
	const { setAuth } = useAuthContext()

	useEffect(() => {
		const refreshAccessToken = async () => {
			try {
				const { data } = await new APIService('GET').refreshToken()
				setAuth(() => ({ accessToken: data?.accessToken }))
			} catch (error) {
				console.log(error)
			}
		}
		refreshAccessToken()
	}, [])

	return <Outlet />
}
