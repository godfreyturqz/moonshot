// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'
// CONSTANTS
import { SIGN_IN } from '@/constants/routes'
// LIBRARIES
import { useNavigate } from 'react-router-dom'
// SERVICES
import { APIService } from '@/services/axios'

const useSignOut = () => {
	const { setAuth } = useAuthContext()
	const navigate = useNavigate()

	const signOut = async () => {
		try {
			setAuth({ accessToken: '' })
			await new APIService('GET').signout()
			navigate(SIGN_IN)
		} catch (error) {
			console.log('log@useSignOut.ts', error)
		}
	}

	return { signOut }
}

export default useSignOut
