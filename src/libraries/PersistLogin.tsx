import { useEffect, useState } from 'react'
// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'
// LIBRARIES
import { Outlet } from 'react-router-dom'
// SERVICES
import { APIService } from '@/services/axios'

export const PersistLogin = () => {
	const [loading, setLoading] = useState(true)
	const { setAuth } = useAuthContext()

	useEffect(() => {
		const refreshAccessToken = async () => {
			try {
				const { data } = await new APIService('GET').refreshToken()
				setAuth(() => ({ accessToken: data?.accessToken }))
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		refreshAccessToken()
	}, [])

	return <>{loading === false && <Outlet />}</>
}
