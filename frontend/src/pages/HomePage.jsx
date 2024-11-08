import React, { useEffect } from 'react';
import { Box, useTheme, Card, CardContent, CardActionArea, Typography, CardMedia, Stack, Grid2 } from '@mui/material';
import { useProductStore } from '../store/product';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const theme = useTheme();
  const mode = theme.palette.mode; // get the color mode of current theme

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // console.log("Products:", products);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", gap: 2, marginTop: 10 }}>

      <Box
        component="span"
        sx={{
          color: mode === 'light' ? 'grey' : 'white',
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
        <Grid2 container spacing={5} sx={{ padding: 3 }}>
          {products.map((product) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={product._id}>
              <ProductCard key={product._id} product={product} />
            </Grid2>
          ))}
        </Grid2>
      )}

    </Box>
  )
}

export default HomePage