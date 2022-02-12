import Dashboard from "@/components/Icons/Dashboard"
import Database from "@/components/Icons/Database"
import Logo from "@/components/Icons/Logo"
import Users from "@/components/Icons/Users"
import Settings from "@/components/Icons/Settings"
import Signin from "@/components/Icons/Signin"
import User from "@/components/Icons/User"
import Navitem from './Navitem'

const navItemList = [
  {
    to: '/dashboard',
    title: 'Dashboard',
    icon: <Dashboard/>
  },
  {
    to: '/account',
    title: 'Account',
    icon: <User/>
  },
  {
    to: '/customers',
    title: 'Customers',
    icon: <Users/>
  },
  {
    to: '/details',
    title: 'Details',
    icon: <Database/>
  },
  {
    to: '/form',
    title: 'Form',
    icon: <Database/>
  },
  {
    to: '/settings',
    title: 'Settings',
    icon: <Settings/>
  },
  {
    to: '/signin',
    title: 'Sign-in',
    icon: <Signin/>
  },
]

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-800 p-3">
      <div className="flex p-3">
        <Logo/>
      </div>
      <div className=""></div>
      {navItemList
      .map(item => <Navitem key={item.title} to={item.to} title={item.title} icon={item.icon}/>)}
    </div>
  )
}

export default Sidebar