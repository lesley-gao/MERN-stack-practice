import React, { useState } from 'react';
import { Box, TextField, Button, useTheme, Snackbar, Alert } from '@mui/material';
import { useProductStore } from '../store/product';

const CreatePage = () => {
    const theme = useTheme();
    const mode = theme.palette.mode; // get the color mode of current theme

    // Define the common properties for TextField components
    const textFieldStyle = {
        multiline: true,
        maxRows: 4,
        minWidth: 1 / 3
    };

    const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false); // Track success status for Snackbar

    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        setSuccess(success); // Set the success state
        setOpen(true); // Show the Snackbar
        console.log("Success:", success);
        console.log("Message:", message);
        setNewProduct({name: "", price: "", image: ""});
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box sx={{ autoComplete: "off", display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", gap: 2, marginTop: 10 }}>
            <Box
                component="span"
                sx={{
                    color: mode === 'light' ? 'grey' : 'white',
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
                sx={textFieldStyle}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Product Price"
                value={newProduct.price}
                sx={textFieldStyle}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Product Image URL"
                value={newProduct.image}
                sx={textFieldStyle}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <Button
                variant="contained"
                sx={{ minWidth: 1 / 3, background: 'linear-gradient(45deg, #2196F3, #21CBF3)' }}
                onClick={handleAddProduct}
            >
                Add Product
            </Button>


            {/* if a product is added successfully, a successful alert will show up, otherwise, a waning alert will appear */}

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                {success ? (
                    <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                        A new product created successfully!
                    </Alert>
                ) : (
                    <Alert onClose={handleClose} severity="warning" variant="filled" sx={{ width: '100%' }}>
                        Please fill in all fields.
                    </Alert>
                )}
            </Snackbar>
        </Box>
    );
};

export default CreatePage;
