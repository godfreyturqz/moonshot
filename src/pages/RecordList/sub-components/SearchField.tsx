import Search from '@/components/Icons/Search'

const SearchField = () => {
	return (
		<div className="p-4">
			<div className="relative mt-1">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Search />
				</div>
				<input
					type="text"
					id="table-search"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
					placeholder="Search for items"
				/>
			</div>
		</div>
	)
}

export default SearchField
