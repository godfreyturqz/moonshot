// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'
// SERVICES
import { APIService } from '@/services/axios'

const useSignOut = () => {
	const { setAuth } = useAuthContext()

	const signOut = async () => {
		try {
			setAuth({ accessToken: '' })
			await new APIService('GET').signout()
		} catch (error) {
			console.log('log@useSignOut.ts', error)
		}
	}

	return { signOut }
}

export default useSignOut
