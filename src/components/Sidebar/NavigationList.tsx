// ICONS
import Dashboard from '@/components/Icons/Dashboard'
import Document from '@/components/Icons/Document'
import Cog from '@/components/Icons/Cog'
import Users from '@/components/Icons/Users'
// CONSTANTS
import {
	ACCOUNT,
	COMPONENTS,
	DASHBOARD,
	RECORD_FORM,
	RECORD_LIST,
	SETTINGS,
	SIGN_OUT,
} from '@/constants/routes'
import Pencil from '../Icons/Pencil'
import Signout from '../Icons/Signout'

export const navItemList = [
	{
		to: DASHBOARD,
		title: 'Dashboard',
		icon: <Dashboard />,
	},
	// temporarily removed as it has no use at the moment
	// {
	// 	to: ACCOUNT,
	// 	title: 'Account',
	// 	icon: <User />,
	// },
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
	// temporarily removed as it has no use at the moment
	// {
	// 	to: SETTINGS,
	// 	title: 'Settings',
	// 	icon: <Cog />,
	// },
	{
		to: SIGN_OUT,
		title: 'Sign-out',
		icon: <Signout />,
	},
]

export const devItemList = [
	{
		to: COMPONENTS,
		title: 'Components',
		icon: <Cog />,
	},
]
