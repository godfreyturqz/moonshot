import './styles/App.css'
import Container from '@mui/material/Container'
import { Routes, Route, Link } from "react-router-dom"
import TableListUser from './pages/TableListUser'
import { AuthContextProvider } from './context/AuthContextProvider'
import RequireAuth from './utils/RequireAuth'
import Signin from './pages/Signin'


const App: React.FC = () => {


  return (
    <AuthContextProvider>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/profile">Profile</Link>
        <Routes>
          <Route path="signin" element={<Signin/>} />

          <Route element={<RequireAuth/>}>
            <Route path="/" element={<TableListUser />} />
          </Route>
          
          <Route path="*" element={<div>404 page</div>} />
        </Routes>
      </Container>
    </AuthContextProvider>
  )
}

export default App
