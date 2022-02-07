import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import ItemCounter from '../ItemCounter/ItemCounter';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const  Item = ({data}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={data.imgUrl}
          alt={data.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock:{data.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemDetailContainer data={data} />
        
        <ItemCounter cant = {data.stock} />
      </CardActions>
    </Card>
  );
}

export default Item;