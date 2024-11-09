import React from 'react'
import { Card, CardContent, CardActionArea, Typography, CardMedia, Stack } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {

  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log("Success:", success);
    console.log("Message:", message);
  }


  return (
    <Card sx={{
      width: 350,
      height: 330,
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
      }
    }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="160"
          image={product.image}
          alt={product.name}
        />
        <CardContent sx={{
          height: 'calc(100% - 160px)',  // card height - height of image(CardMedia)
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Typography gutterBottom variant="h6" >
            {product.name}
          </Typography>
          <Typography variant="body2">
            ${product.price}
          </Typography>
          <Stack direction="row" spacing={2}>
            <CreateOutlinedIcon />
            <DeleteOutlineOutlinedIcon onClick={() => handleDeleteProduct(product._id)} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard