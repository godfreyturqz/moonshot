import Dashboard from "@/components/Icons/Dashboard"
import Database from "@/components/Icons/Database"
import Logo from "@/components/Icons/Logo"
import Users from "@/components/Icons/Users"
import Settings from "@/components/Icons/Settings"
import Signin from "@/components/Icons/Signin"
import User from "@/components/Icons/User"
import Navitem from './Navitem'
import Divider from "@/components/Layouts/Divider"


const Sidebar = () => {
  return (
    <div className="flex flex-col h-full overflow-auto bg-gray-800 p-3 min-w-[18rem] shadow-2xl shadow-gray-900 z-10">
      <div className="p-2">
        <Logo/>
      </div>
      <Divider/>
        { navItemList.map(item => 
          <Navitem 
            key={item.title}
            to={item.to} 
            title={item.title} 
            icon={item.icon}
          />
        )}
      <Divider/>
    </div>
  )
}

export default Sidebar

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
  }
]