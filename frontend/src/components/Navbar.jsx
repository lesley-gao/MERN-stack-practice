import React from 'react';
import { Typography, useTheme, Container, Box, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({ toggleColorMode }) => {
    const theme = useTheme(); // Use the useTheme() hook to get the current theme
    const mode = theme.palette.mode; // Retrieve the current color mode (light or dark)

    // Define common styles for icon buttons to reduce repetition
    const iconButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 48,
        height: 48,
    };

    return (
        <Container sx={{ maxWidth: "1140px", px: 4 }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ md: 'row', sm: 'column' }}
                sx={{ height: 16, mt: 10 }}
            >
                {/* Logo with gradient text */}
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
                    {/* Button that links to create page */}
                    <Link to={"/create"}><Button

                        sx={iconButtonStyle}
                    >
                        <AddBoxOutlinedIcon fontSize='large' />
                    </Button></Link>

                    {/* Button to toggle between light and dark mode */}
                    <Button
                        onClick={toggleColorMode}  // Toggle color mode when clicked
                        sx={iconButtonStyle}
                    >
                        {mode === 'light' ? <DarkModeIcon fontSize='large' /> : <LightModeIcon fontSize='large' />}
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default Navbar;
