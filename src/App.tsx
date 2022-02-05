import './styles/App.css'
import Container from '@mui/material/Container'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import DataTable from './components/Table'
import TableListUser from './pages/TableListUser'

const App: React.FC = () => {



  return (
    <Container>
      <TableListUser/>
    </Container>
  )
}

export default App
