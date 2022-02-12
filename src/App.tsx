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
      <div className="flex h-screen">
        <Sidebar/>
        <div className="grow" style={{border: '1px solid blue'}}>
          <Routes>
            <Route path="signin" element={<Signin/>} />
            <Route path="*" element={<div>404 page</div>} />
            <Route element={<RequireAuth/>}>
              <Route path="dashboard" element={<div>dashboard page</div>} />
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
