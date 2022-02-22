import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { flexbox, height } from "@mui/system";
import { ForkLeft } from "@mui/icons-material";

const CartObject = ({ prod, deleteProduct }) => {
  return (
    <div>
      <ListItem
        sx={{
          height: 100,
          backgroundColor:"#0000002a",
          margin:0.5,
          borderRadius:25,
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
        <ListItemText primary={`cantidad: ${prod.cantidad}`} />
        <ListItemText primary={`precio: ${prod.Precio*prod.cantidad}`} />
        <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={()=>deleteProduct(prod.id)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
      </ListItem>
    </div>
  );
};

export default CartObject;
