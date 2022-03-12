// LIBRARIES
import { Routes, Route } from "react-router-dom"
// CONTEXT
import { AuthContextProvider } from '@/contexts/AuthContextProvider'
// PAGES
import Components from "./pages/Components"
import List from "@/pages/List"
import Details from "@/pages/Details"
import Form from "@/pages/Form"
import Signin from "@/pages/SignIn"
// COMPONENTS
import Sidebar from "@/components/shared/Sidebar"
import Navbar from "./components/shared/Navbar"
// UTILS
import RequireAuth from '@/utils/RequireAuth'


const App: React.FC = () => {

  return (
    <AuthContextProvider>
      <div className="flex h-screen bg-gray-200">
        <Sidebar/>
        <div className="w-full overflow-auto">
          <Navbar/>
          <Routes>
            <Route path="components" element={<Components/>} />
            <Route path="signin" element={<Signin/>} />
            <Route path="*" element={<div>404 page</div>} />
            <Route element={<RequireAuth/>}>
              <Route path="list" element={<List/>} />
              <Route path="dashboard" element={<div className="container mx-auto bg-blue-300">dashboard page</div>} />
              <Route path="details" element={<Details/>} />
              <Route path="form" element={<Form/>} />
            </Route>
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  )
}

export default App
