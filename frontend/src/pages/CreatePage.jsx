import React from 'react'
import { Box, TextField, useTheme } from '@mui/material';

const CreatePage = () => {
    const theme = useTheme();
    const mode = theme.palette.mode; // get the color mode of current theme
    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column' }}
            autoComplete="off"
        >

            {/* <Box
                component="span"
                sx={{
                    color: mode === 'light' ? 'black' : 'white',  
                    fontWeight: 'bold',
                    fontSize: 25,
                }}
            >
                Create New Product
            </Box> */}

            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />
            </div>
        </Box>
    )
}

export default CreatePage