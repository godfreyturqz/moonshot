import React from 'react'
import Menu from '@/components/Icons/Menu'
import { useNavStore } from '@/utils/useNavStore'

const Navbar = () => {
	const setOpen = useNavStore((state) => state.setOpen)
	const open = useNavStore((state) => state.open)
	return (
		<div className="bg-gray-800 p-3 flex flex-row items-center justify-center">
			{open === false && (
				<div
					onClick={() => setOpen()}
					className="cursor-pointer hover:bg-gray-700 w-fit rounded-full p-2 text-white"
				>
					<Menu />
				</div>
			)}
			<button className="p-1 rounded-full focus:ring-1 focus:ring-white focus:ring-offset-2 ml-auto">
				<img
					className="h-8 w-8 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</button>
		</div>
	)
}

export default Navbar
