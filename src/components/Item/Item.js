import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const Item = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={data.Img}
          alt={data.Nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
          {data.Marca} {data.Nombre} 
          </Typography>
          <Typography gutterBottom variant="h6" align="center" color="green">
            $ {data.Precio} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default Item;
