import React, { useState, useMemo } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';

function App() {
  // use useState() hook to track the color mode
  const [mode, setMode] = useState('dark');

  // Memoized theme to optimize performance by avoiding unnecessary re-creations
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode, // Set the palette mode to the current state ('light' or 'dark')
        },
      }),
    [mode] // Re-run this function whenever the mode state changes
  );


  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    // ThemeProvider applies the custom theme to all child components
    // CssBaseline provides a consistent baseline for the app's styling
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: '100vh' }}>

        <Navbar toggleColorMode={toggleColorMode} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>

      </Box>
    </ThemeProvider>
  );
}

export default App;
