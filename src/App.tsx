// COMPONENTS
import MainLayout from "@/components/Layouts/MainLayout"
import RequireAuth from '@/components/RequireAuth'
// CONTEXT
import { AuthContextProvider } from '@/contexts/AuthContextProvider'
// LIBRARIES
import { Routes, Route } from "react-router-dom"
// PAGES
import Components from "@/pages/Components"
import Details from "@/pages/Details"
import Form from "@/pages/Form"
import List from "@/pages/List"
import Signin from "@/pages/SignIn"


const App: React.FC = () => {

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route path="components" element={<Components/>} />
          <Route path="signin" element={<Signin/>} />

          <Route element={<RequireAuth/>}>
            <Route path="list" element={<List/>} />
            <Route path="dashboard" element={<div>dashboard page</div>} />
            <Route path="details" element={<Details/>} />
            <Route path="form" element={<Form/>} />
          </Route>
          
          <Route path="*" element={<div>404 page</div>} />
        </Route>
      </Routes>
    </AuthContextProvider>
  )
}

export default App
