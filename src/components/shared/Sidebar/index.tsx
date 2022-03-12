// COMPONENTS
import Divider from "@/components/Layouts/Divider"
import Navitem from './Navitem'
// ICONS
import Dashboard from "@/components/Icons/Dashboard"
import Database from "@/components/Icons/Database"
import Logo from "@/components/Icons/Logo"
import User from "@/components/Icons/User"
import Users from "@/components/Icons/Users"
import Settings from "@/components/Icons/Settings"
import Signin from "@/components/Icons/Signin"


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
        { devItemList.map(item => 
          <Navitem 
            key={item.title}
            to={item.to} 
            title={item.title} 
            icon={item.icon}
          />
        )}
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
    to: '/list',
    title: 'List',
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

const devItemList = [
  {
    to: '/components',
    title: 'Components',
    icon: <Settings/>
  }
]