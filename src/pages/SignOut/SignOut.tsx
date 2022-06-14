import { useEffect } from 'react'
// COMPONENTS
import ArrowRight from '@/components/Icons/ArrowRight'
// CONSTANTS
import { SIGN_IN } from '@/constants/routes'
// LIBRARIES
import { Link, useNavigate } from 'react-router-dom'
// UTILITIES
import useSignOut from '@/utils/useSignOut'

const SignOut = () => {
	const navigate = useNavigate()
	const { signOut } = useSignOut()

	useEffect(() => {
		signOut()
		const navigateToSignIn = setTimeout(() => navigate(SIGN_IN), 3000)

		return () => {
			// clear timer when the SignOut component unmounts
			clearTimeout(navigateToSignIn)
		}
	}, [])

	return (
		<div className="flex flex-col items-center justify-center h-screen select-none">
			<h1 className="text-2xl">You have signed out!</h1>
			<p className="text-sm text-gray-500">Redirecting in 3 seconds</p>
			<div className="font-medium text-indigo-600 hover:text-indigo-500 pt-5">
				<Link to={SIGN_IN}>
					<div className="flex flex-row">
						<p className="font-medium text-indigo-800 hover:text-indigo-600">
							Go back to sign-in
						</p>
						<span className="pl-1">
							<ArrowRight />
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default SignOut
