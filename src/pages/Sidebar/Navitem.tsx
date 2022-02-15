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
      <div className={`flex px-4 py-2 m-1 rounded-lg items-center hover:bg-gray-700 transition ${active && 'bg-gray-700'}`}>
        {[icon, title].map(item => 
            <div className={`text-white pr-3 ${active && 'text-sky-400'}`}>
              {item}
            </div>
        )}
      </div>
    </Link>
  )
}

export default Navitem
