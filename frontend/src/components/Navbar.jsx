import React, { useState, useMemo } from 'react';
import { Container, Box, Typography, Stack, Button, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                },
            }),
        [mode]
    );

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{ maxWidth: "1140px", px: 4 }}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ md: 'row', sm: 'column' }}
                    sx={{ height: 16, mt: 10 }}
                >
                    <Typography
                        sx={{
                            background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold',
                            fontSize: 30
                        }}
                    >
                        <Link to={"/"}>Product Store 🛒</Link>
                    </Typography>

                    {/* Icons and Toggle Button */}
                    <Stack
                        spacing={2}
                        direction="row"
                        alignItems="center"
                        sx={{ mt: { sm: 2, md: 0 } }}
                    >
                        <Link to={"/create"}>
                            <Button
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 48,
                                    height: 48
                                }}
                            >
                                <AddBoxOutlinedIcon fontSize='large' />
                            </Button>
                        </Link>

                        <Button
                            onClick={toggleColorMode}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: 48,
                                height: 48
                            }}
                        >
                            {mode === 'light' ? <DarkModeIcon fontSize='large' /> : <LightModeIcon fontSize='large' />}
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Navbar;
