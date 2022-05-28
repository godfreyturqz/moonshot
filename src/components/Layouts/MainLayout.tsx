// COMPONENTS
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
// LIBRARIES
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div className="flex flex-row h-screen bg-gray-100">
			<Sidebar />
			<div className="w-full overflow-auto flex flex-col">
				<div className="sticky top-0 shadow-md shadow-gray-400 z-10">
					<Navbar />
				</div>
				{/* Main Content shows below */}
				<div className="h-full p-5">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default MainLayout
