import React from 'react'
import { Card, CardContent, CardActionArea, Typography, CardMedia, Stack} from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ProductCard = ({product}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.image} 
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               ${product.price}
              </Typography>
              <Stack direction="row" spacing={2} marginTop={2}>
                <CreateOutlinedIcon />
                <DeleteOutlineOutlinedIcon />
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
  )
}

export default ProductCard