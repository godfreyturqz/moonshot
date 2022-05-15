// ICONS
import Dashboard from '@/components/Icons/Dashboard'
import Database from '@/components/Icons/Database'
import Document from '@/components/Icons/Document'
import Cog from '@/components/Icons/Cog'
import Signin from '@/components/Icons/Signin'
import User from '@/components/Icons/User'
import Users from '@/components/Icons/Users'
// CONSTANTS
import {
	ACCOUNT,
	COMPONENTS,
	DASHBOARD,
	RECORD_DETAILS,
	RECORD_FORM,
	RECORD_LIST,
	SETTINGS,
	SIGN_IN,
} from '@/constants/routes'

export const navItemList = [
	{
		to: DASHBOARD,
		title: 'Dashboard',
		icon: <Dashboard />,
	},
	{
		to: ACCOUNT,
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
		to: SETTINGS,
		title: 'Settings',
		icon: <Cog />,
	},
	{
		to: SIGN_IN,
		title: 'Sign-in',
		icon: <Signin />,
	},
]

export const devItemList = [
	{
		to: COMPONENTS,
		title: 'Components',
		icon: <Cog />,
	},
]
