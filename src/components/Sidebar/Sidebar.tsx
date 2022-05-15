import { navItemList, devItemList } from './NavigationList'
// ICONS
import Logo from '@/components/Icons/Logo'
// LIBRARIES
import { nanoid } from 'nanoid/non-secure'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
	const location = useLocation()

	return (
		<div className="flex flex-col h-full overflow-auto bg-gray-800 p-3 min-w-[18rem] shadow-2xl shadow-gray-900 z-10">
			<div className="p-2">
				<Logo />
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
	)
}

export default Sidebar
