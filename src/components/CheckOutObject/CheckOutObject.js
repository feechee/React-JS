import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import IconButton from '@mui/material/IconButton';
import "../CheckOutObject/CheckOutObject.css"
import Paper from "@mui/material/Paper";



const CheckOutObject = ({ prod }) => {
  return (
    <Paper elevation={3}
    sx={{
      margin:1,
    }}>
      <ListItem sx={
        {
          flexDirection:"column",

        }
      }>
        <ListItemAvatar>
          <Avatar
          sx={{
              width:80,
              height:80,
          }}
           alt={prod.Nombre} src={prod.Img}>
            <ImageIcon
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={prod.Nombre} />
        <ListItemText primary={`X ${prod.cantidad}`} />
        <ListItemText primary={` $${prod.Precio*prod.cantidad}`} />
        <IconButton
              aria-label="close"
              color="inherit"
              size="small"
            >
            </IconButton>
      </ListItem>
      </Paper>
  );
};

export default CheckOutObject;