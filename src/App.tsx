import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from '@/contexts/AuthContextProvider'
import Customers from "@/pages/Customers"
import Details from "@/pages/Details"
import Form from "@/pages/Form"
import Sidebar from "@/pages/Sidebar"
import Signin from "@/pages/SignIn"
import RequireAuth from '@/utils/RequireAuth'


const App: React.FC = () => {

  return (
    <AuthContextProvider>
      <div className="flex flex-row h-screen w-screen bg-gray-200 border-2 border-red-900">
        <div className="border-2 border-blue-900">
          <Sidebar/>
        </div>
        <div className="border-2 border-green-500">
          <Routes>
            <Route path="signin" element={<Signin/>} />
            <Route path="*" element={<div>404 page</div>} />
            <Route element={<RequireAuth/>}>
              <Route path="dashboard" element={<div className="container mx-auto bg-blue-300">dashboard page</div>} />
              <Route path="customers" element={<Customers/>} />
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
