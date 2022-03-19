import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';

//Productos agregados al carrito
const CartObject = ({ prod, deleteProduct }) => {
  return (
    <div>
      <Paper elevation={6}
      sx={
        {marginTop:1,
          display: 'flex',
          flexWrap:"wrap",
          justifyContent:"space-evenly"
        }
      }
      >
      <ListItem
        sx={{
          flexWrap:"wrap"
        }}>
        <ListItemAvatar>
          <Avatar
          sx={{
              width:80,
              height:80,
              marginRight:5,
          }}
           alt={prod.Nombre} src={prod.Img}>
            <ImageIcon
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={prod.Nombre} />
        <ListItemText primary={`Cantidad: ${prod.cantidad}`} />
        <ListItemText primary={` $${prod.Precio*prod.cantidad}`} />
        <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={()=>deleteProduct(prod.id)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
      </ListItem>
      </Paper >
    </div>
  );
};

export default CartObject;
