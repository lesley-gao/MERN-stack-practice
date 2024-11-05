import React, { useState } from 'react'
import { Box, TextField, Button, useTheme } from '@mui/material';

const CreatePage = () => {
    const theme = useTheme();
    const mode = theme.palette.mode; // get the color mode of current theme

    // Define the common properties for TextField components
    const textFieldStyle = {
        multiline: true,
        maxRows: 4,
        minWidth: 1 / 3
    };

    const [newProduct, setNewPeoduct] = useState({ name: "", price: "", image: "" });

    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return (

        <Box sx={{ autoComplete: "off", display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", gap: 2, marginTop: 10 }}
        >

            <Box
                component="span"
                sx={{
                    color: mode === 'light' ? 'black' : 'white',
                    fontWeight: 'bold',
                    fontSize: 25,
                    alignContent: 'center'
                }}
            >
                Create New Product
            </Box>

            <TextField
                id="outlined-multiline-flexible"
                label="Product Name"
                value={newProduct.name}
                sx={textFieldStyle} onChange={(e) => setNewPeoduct({ ...newProduct, name: e.target.value })}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Product Price"
                value={newProduct.price}
                sx={textFieldStyle} onChange={(e) => setNewPeoduct({ ...newProduct, price: e.target.value })}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Product Image URL"
                value={newProduct.image}
                sx={textFieldStyle} onChange={(e) => setNewPeoduct({ ...newProduct, image: e.target.value })}
            />

            <Button variant="contained" sx={{ minWidth: 1 / 3, background: 'linear-gradient(45deg, #2196F3, #21CBF3)'}} onClick={handleAddProduct}>
                Add Product
            </Button>
        </Box>
    )
}

export default CreatePage