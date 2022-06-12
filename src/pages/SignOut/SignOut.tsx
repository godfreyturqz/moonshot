import { useEffect } from 'react'
import useSignOut from '@/utils/useSignOut'
import { Link } from 'react-router-dom'
import { SIGN_IN } from '@/constants/routes'
import ArrowRight from '@/components/Icons/ArrowRight'

const SignOut = () => {
	const { signOut } = useSignOut()

	useEffect(() => {
		setTimeout(() => signOut(), 3000)
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
