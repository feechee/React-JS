import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Divider from "@mui/material/Divider";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CartObject = ({ prod, deleteProduct }) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={prod.nombre} />
        <ListItemText secondary={`cantidad: ${prod.cantidad}`} />
        <ListItemText secondary={`precio: ${prod.precio*prod.cantidad}`} />
        <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={()=>deleteProduct(prod.id)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default CartObject;
