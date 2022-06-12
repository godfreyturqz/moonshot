import Menu from '@/components/Icons/Menu'
import { useNavStore } from '@/utils/useNavStore'

const Navbar = () => {
	const setOpen = useNavStore((state) => state.setOpen)
	const open = useNavStore((state) => state.open)
	return (
		<div className="bg-white p-3 sticky top-0 shadow shadow-gray-300 select-none">
			<div className="w-full max-w-7xl m-auto flex flex-row items-center justify-center">
				{/* {open === false && ( */}
				<div
					onClick={() => setOpen()}
					className="cursor-pointer hover:bg-gray-200 transition ease-in-out w-fit rounded-full p-2 text-gray-800"
				>
					<Menu />
				</div>
				{/* )} */}
				<div className="ml-auto flex flex-row">
					<div className="px-3">
						<p className="text-sm font-medium text-right">Godfrey</p>
						<p className="text-xs text-gray-500 text-right">Admin</p>
					</div>

					<button className="p-1 rounded-full focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
						<img
							className="h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
