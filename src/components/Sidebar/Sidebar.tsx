import { navItemList, devItemList } from './NavigationList'
// ICONS
import Logo from '@/components/Icons/Logo'
// LIBRARIES
import { nanoid } from 'nanoid/non-secure'
import { Link, useLocation } from 'react-router-dom'
import Menu from '../Icons/Menu'
// STATE
import { useNavStore } from '@/utils/useNavStore'

const Sidebar = () => {
	// for sidebar
	const location = useLocation()
	// for open/close of sidebar
	const setOpen = useNavStore((state) => state.setOpen)
	const open = useNavStore((state) => state.open)
	// ${open === true ? 'translate-x-0' : '-translate-x-full'}

	return (
		<>
			{open === true && (
				<div
					className={`flex flex-col h-full overflow-auto bg-gray-800 p-3 min-w-[18rem] shadow-2xl shadow-gray-900 select-none transition-transform ease-in-out duration-300 `}
				>
					{/* Menu button */}
					<div
						onClick={() => setOpen()}
						className="cursor-pointer hover:bg-gray-700 w-fit rounded-full p-2 text-white ml-auto"
					>
						<Menu />
					</div>
					{/* Divider */}
					<div className="py-5">
						<div className="border-t border-gray-600" />
					</div>
					{/* Navigation list */}
					<div className="h-full flex flex-col">
						{navItemList.map(({ to, title, icon }) => (
							<div key={title} className="last:mt-auto">
								<Link to={to}>
									<div
										className={`flex px-4 py-2 m-1 rounded-lg items-center hover:bg-gray-700 transition ${
											location.pathname === to && 'bg-gray-700'
										}`}
									>
										{[icon, title].map((item) => (
											<div
												key={nanoid(4)}
												className={`text-white pr-3
											${location.pathname === to && 'text-sky-400'}
											
											`}
											>
												{item}
											</div>
										))}
									</div>
								</Link>
							</div>
						))}
					</div>
					{/* Divider */}
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
