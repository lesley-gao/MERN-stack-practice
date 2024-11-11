import React, { useEffect, useState } from 'react';
import { Box, useTheme, Typography, Grid2, Snackbar, Alert, Modal, TextField, Button } from '@mui/material';
import { useProductStore } from '../store/product';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const theme = useTheme();
  const mode = theme.palette.mode; // get the color mode of current theme

  const [selectedProduct, setSelectedProduct] = useState(null); // Product to be edited
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState(''); // State for the Snackbar message

  const { fetchProducts, deleteProduct, updateProduct, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // console.log("Products:", products);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    setMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleUpdateProduct = async (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);  // Clear selected product when closing
  };

  const handleConfirmUpdate = async () => {
    if (!selectedProduct) return;

    const { success, message } = await updateProduct(selectedProduct._id, selectedProduct);
    if (success) {
      setMessage(message || 'Product updated successfully!');
      setSnackbarOpen(true);
      setModalOpen(false);
      fetchProducts();  // Refresh the products list
    }
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
              <ProductCard product={product} onDelete={handleDeleteProduct} onUpdate={handleUpdateProduct} />
            </Grid2>
          ))}
        </Grid2>
      )}

      <Snackbar open={snackbarOpen} autoHideDuration={1000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          {message || 'Product deleted successfully!'}
        </Alert>
      </Snackbar>

      {/* Update Product Modal will appear after the edit icon is clicked */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box bgcolor={mode === 'light' ? 'white' : 'black'} sx={{ padding: 4, borderRadius: 2, width: 400, margin: 'auto', marginTop: '15%' }}>
          <Typography variant="h6">Edit Product</Typography>
          <TextField
            label="Name"
            fullWidth
            value={selectedProduct?.name || ''}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
            sx={{ marginY: 2 }}
          />
          <TextField
            label="Price"
            fullWidth
            type="number"
            value={selectedProduct?.price || ''}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
            sx={{ marginY: 2 }}
          />
          <TextField
            label="Image URL"
            fullWidth
            value={selectedProduct?.image || ''}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.value })}
            sx={{ marginY: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, marginTop: 2 }}>
            <Button variant="outlined" sx={{
              minWidth: 48,
              height: 48,
              borderColor: mode === 'light' ? '#8B4513' : '#D2B48C',
              color: mode === 'light' ? '#8B4513' : '#D2B48C'
            }} onClick={handleModalClose}>Cancel</Button>
            <Button variant="contained" sx={{
              minWidth: 48,
              height: 48,
              backgroundColor: mode === 'light' ? '#8B4513' : '#D2B48C'
            }} onClick={handleConfirmUpdate}>Save Changes</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default HomePage