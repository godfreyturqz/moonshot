import React from 'react'
// COMPONENTS
import Logo from '@/components/Icons/Logo'
import Pencil from '@/components/Icons/Pencil'
// CONTEXTS
import { useAuthContext } from '@/contexts/AuthContextProvider'
// CONSTANTS
import { SIGN_IN, DASHBOARD } from '@/constants/routes'
// LIBRARIES
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// SERVICES
import { APIService } from '@/services/axios'

//---------------
// TYPES
//---------------
type FormValuesType = {
	email: string
	password: string
}

const SignUp = () => {
	const { register, handleSubmit, reset } = useForm<FormValuesType>()
	const { setAuth } = useAuthContext()
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<FormValuesType> = async (formData) => {
		// Logic flow
		// 1. send payload thru API service
		// 2. check if there's a valid response
		// 3. clean the form
		// 4. set authentication data
		// 5. navigate to desired route i.e. '/dashboard'

		try {
			const { data } = await new APIService('POST', '', formData).signin()
			if (!data) return
			reset()
			setAuth((prev) => ({
				...prev,
				accessToken: data.accessToken,
			}))
			navigate(DASHBOARD)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-md w-full space-y-8">
				<div>
					<Logo />
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Create your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<Link to={SIGN_IN}>
							<span className="font-medium text-indigo-600 hover:text-indigo-500">
								sign in instead
							</span>
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								{...register('email', { required: true })}
								id="email"
								name="email"
								type="email"
								autoComplete="off"
								required
								// value={'godfreyt@admin.com'}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								{...register('password', { required: true })}
								id="password"
								name="password"
								type="password"
								autoComplete="off"
								required
								// value={'admin'}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<Pencil />
							</span>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignUp
