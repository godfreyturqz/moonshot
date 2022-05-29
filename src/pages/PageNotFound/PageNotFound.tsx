import ArrowRight from '@/components/Icons/ArrowRight'
import { DASHBOARD } from '@/constants/routes'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<div className="h-full flex flex-col justify-center items-center">
			<p className="uppercase text-indigo-600 font-medium">Error</p>
			<h1 className="font-bold text-4xl pb-1">This page does not exist.</h1>
			<p className="text-gray-500">
				The page you are looking for could not be found.
			</p>
			<div className="font-medium text-indigo-600 hover:text-indigo-500 pt-5">
				<Link to={DASHBOARD}>
					<div className="flex flex-row">
						<p>Go back to Dashboard</p>
						<span className="pl-1">
							<ArrowRight />
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default PageNotFound
