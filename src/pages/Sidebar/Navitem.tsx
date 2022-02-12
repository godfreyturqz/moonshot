import { Link, useLocation } from "react-router-dom"

type NavitemType = {
  to: string
  title: string
  icon: JSX.Element
}

const Navitem: React.FC<NavitemType> = ({ to, title, icon }) => {

  const location = useLocation()
  const active = location.pathname === to ? true : false

  return (
    <Link to={to}>
      <div className="flex p-3 m-1 rounded-lg items-center hover:bg-gray-600 transition">
        <div className="text-slate-300 pr-3">
          {icon}
        </div>
        <div className="text-slate-300">
          {title}
        </div>
      </div>
    </Link>
  )
}

export default Navitem
