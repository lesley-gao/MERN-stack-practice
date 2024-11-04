
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <>
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
