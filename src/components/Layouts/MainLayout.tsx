// COMPONENTS
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"
// LIBRARIES
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <div className="w-full overflow-auto">
          <div className="sticky top-0 shadow-md shadow-gray-400 z-10">
            <Navbar/>
          </div>
          <div className="h-full overflow-auto p-5">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default MainLayout