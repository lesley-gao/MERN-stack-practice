import React, { useEffect, useState } from 'react';
import { Box, useTheme, Typography, Grid2, Snackbar, Alert } from '@mui/material';
import { useProductStore } from '../store/product';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const theme = useTheme();
  const mode = theme.palette.mode; // get the color mode of current theme

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(''); // State for the Snackbar message

  const { fetchProducts, deleteProduct, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // console.log("Products:", products);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    setMessage(message);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginTop: 10 }}>

      <Box
        component="span"
        sx={{
          color: mode === 'light' ? '#8B4513' : '#D2B48C',
          fontWeight: 'bold',
          fontSize: 25,
          alignContent: 'center'
        }}
      >
        Current Products
      </Box>

      {products.length === 0 ? (
        <Typography gutterBottom component="p">
          No products found 😭
          <Link to={"/create"}>Create a product</Link>
        </Typography>
      ) : (
        <Grid2 container spacing={5} marginTop={5} justifyContent="center">
          {products.map((product) => (
            <Grid2 xs={12} sm={6} md={4} key={product._id}>
              <ProductCard product={product} onDelete={handleDeleteProduct}/>
            </Grid2>
          ))}
        </Grid2>

      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          { message || 'Product deleted successfully!'}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default HomePage