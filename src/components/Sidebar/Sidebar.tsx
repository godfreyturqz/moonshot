import { useState } from 'react'
import { navItemList, devItemList } from './NavigationList'
// ICONS
import Logo from '@/components/Icons/Logo'
// LIBRARIES
import { nanoid } from 'nanoid/non-secure'
import { Link, useLocation } from 'react-router-dom'
import Menu from '../Icons/Menu'
// STATE
import { useNavStore } from '@/utils/useNavStore'
import useSignOut from '@/utils/useSignOut'

const Sidebar = () => {
	// for sidebar
	const location = useLocation()
	// for open/close of sidebar
	const setOpen = useNavStore((state) => state.setOpen)
	const open = useNavStore((state) => state.open)
	// for signout function
	const { signOut } = useSignOut()

	return (
		<>
			{open === true && (
				<div className="flex flex-col h-full overflow-auto bg-gray-800 p-3 min-w-[18rem] shadow-2xl shadow-gray-900 z-10 select-none">
					<div
						onClick={() => setOpen()}
						className="cursor-pointer hover:bg-gray-700 w-fit rounded-full p-2 text-white ml-auto"
					>
						<Menu />
					</div>
					<div className="py-5">
						<div className="border-t border-gray-600" />
					</div>
					{navItemList.map(({ to, title, icon }) => (
						<Link to={to} key={title}>
							<div
								className={`flex px-4 py-2 m-1 rounded-lg items-center hover:bg-gray-700 transition ${
									location.pathname === to && 'bg-gray-700'
								}`}
							>
								{[icon, title].map((item) => (
									<div
										key={nanoid(4)}
										className={`text-white pr-3 ${
											location.pathname === to && 'text-sky-400'
										}`}
										onClick={() => to === '/signout' && signOut()}
									>
										{item}
									</div>
								))}
							</div>
						</Link>
					))}
					<div className="py-5">
						<div className="border-t border-gray-600" />
					</div>
					{devItemList.map(({ to, title, icon }) => (
						<Link to={to} key={title}>
							<div
								className={`flex px-4 py-2 m-1 rounded-lg items-center hover:bg-gray-700 transition ${
									location.pathname === to && 'bg-gray-700'
								}`}
							>
								{[icon, title].map((item) => (
									<div
										key={nanoid(4)}
										className={`text-white pr-3 ${
											location.pathname === to && 'text-sky-400'
										}`}
									>
										{item}
									</div>
								))}
							</div>
						</Link>
					))}
				</div>
			)}
		</>
	)
}

export default Sidebar
