import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import "../CategoryButtons/CategoryButtons.css";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MenuIcon from "@mui/icons-material/Menu";

//Boton ubicado en el NavBar, despliega un Sidebar con categorias
const CategoryButtons = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Productos" />
        </ListItem>
      </List>
      <List>
        <Link to="categorias/Pedula" className="LinkCategory">
          <ListItem>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText secondary="Pedulas"></ListItemText>
          </ListItem>
        </Link>

        <Link to="categorias/Arnés" className="LinkCategory">
          <ListItem>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText secondary="Arneses"></ListItemText>
          </ListItem>
        </Link>

        <Link to="categorias/Cuerda" className="LinkCategory">
          <ListItem>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText secondary="Cuerdas"></ListItemText>
          </ListItem>
        </Link>
        <Link to="categorias/Mosquetón" className="LinkCategory">
          <ListItem>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText secondary="Mosquetones"></ListItemText>
          </ListItem>
        </Link>

        <Link to="categorias/Casco">
          <ListItem>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText
              secondary="Cascos"
              className="LinkCategory"
            ></ListItemText>
          </ListItem>
        </Link>

        <Link to="categorias/Asegurador" className="LinkCategory">
          <ListItem>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText secondary="Aseguradores"></ListItemText>
          </ListItem>
        </Link>
        <Divider />
      </List>
      <List>
        <Link to="/envios" className="LinkCategory">
          <ListItem>
            <ListItemText primary="Envios" />
          </ListItem>
        </Link>
        <Divider />
      </List>
      <List>
        <Link to="/contacto" className="LinkCategory">
          <ListItem>
            <ListItemText primary="Contacto" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        
          <React.Fragment  key={anchor}>
            <button className="menuButton" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
            </button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        
      ))}
    </div>
  );
};

export default CategoryButtons;
