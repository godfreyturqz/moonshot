import { Dispatch, SetStateAction } from 'react'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import ChevronRight from '@/components/Icons/ChevronRight'

type PaginationType<T> = {
	tableList: T[]
	page: number
	setPage: Dispatch<SetStateAction<number>>
	limit: number
	setLimit: Dispatch<SetStateAction<number>>
}

const Pagination: React.FC<PaginationType<{}>> = ({
	tableList,
	page,
	setPage,
	limit,
	setLimit,
}) => {
	const handlePrev = () => {
		if (page <= 1) return
		setPage((prev) => prev - 1)
	}

	const handleNext = () => {
		if (tableList.length < limit) return
		setPage((prev) => prev + 1)
	}

	return (
		<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
			<div className="flex-1 flex justify-between sm:hidden">
				<a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
					Previous
				</a>
				<a className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
					Next
				</a>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">1</span> to{' '}
						<span className="font-medium">10</span> of{' '}
						<span className="font-medium">{tableList.length}</span> results
					</p>
				</div>
				<div>
					<nav
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						<a
							onClick={handlePrev}
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-indigo-600 hover:text-white transition ease-in-out"
						>
							<span className="sr-only">Previous</span>
							<ChevronLeft aria-hidden="true" />
						</a>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						{/* <a
							aria-current="page"
							className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							1
						</a>
						<a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
							2
						</a>
						<a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
							3
						</a>
						<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
							...
						</span>
						<a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
							8
						</a>
						<a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
							9
						</a>
						<a className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
							10
						</a> */}
						<a
							onClick={handleNext}
							className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-indigo-600 hover:text-white transition ease-in-out"
						>
							<ChevronRight />
						</a>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Pagination
