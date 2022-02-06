import './styles/App.css'
import Container from '@mui/material/Container'
import TableListUser from './pages/TableListUser'
import AuthContextProvider from './context/AuthContextProvider'

const App: React.FC = () => {

  return (
    <AuthContextProvider>
      <Container>
        <TableListUser/>
      </Container>
    </AuthContextProvider>
  )
}

export default App
