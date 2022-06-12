import { useEffect } from 'react'
import useSignOut from '@/utils/useSignOut'

const SignOut = () => {
	const { signOut } = useSignOut()

	useEffect(() => {
		signOut()
	}, [])

	return <></>
}

export default SignOut
