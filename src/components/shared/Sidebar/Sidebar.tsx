// ICONS
import Dashboard from '@/components/Icons/Dashboard'
import Database from '@/components/Icons/Database'
import Document from '@/components/Icons/Document'
import Logo from '@/components/Icons/Logo'
import Settings from '@/components/Icons/Settings'
import Signin from '@/components/Icons/Signin'
import User from '@/components/Icons/User'
import Users from '@/components/Icons/Users'
import { RECORD_DETAILS, RECORD_FORM, RECORD_LIST } from '@/constants/route'
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

const navItemList = [
	{
		to: '/dashboard',
		title: 'Dashboard',
		icon: <Dashboard />,
	},
	{
		to: '/account',
		title: 'Account',
		icon: <User />,
	},
	{
		to: RECORD_FORM,
		title: 'Record Form',
		icon: <Document />,
	},
	{
		to: RECORD_LIST,
		title: 'Record List',
		icon: <Users />,
	},
	{
		to: RECORD_DETAILS,
		title: 'Record Details',
		icon: <Database />,
	},
	{
		to: '/settings',
		title: 'Settings',
		icon: <Settings />,
	},
	{
		to: '/signin',
		title: 'Sign-in',
		icon: <Signin />,
	},
]

const devItemList = [
	{
		to: '/components',
		title: 'Components',
		icon: <Settings />,
	},
]
