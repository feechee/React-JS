import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ItemListContainer() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require('../img/arnesesPrinc.png')}
          alt="arnes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Arnes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Arnes de escalada deportiva marca Edelrid
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}