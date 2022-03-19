import React from "react";
import "../NavBar/NavBar.css";
import CartWidget from "../Cartwidget/Cartwidget.js";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CategoryButtons from "../CategoryButtons/CategoryButtons";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

//Barra de navegacion principal

const NavBar = () => {
  const renderMenu = <div></div>;

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = <div></div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <CategoryButtons />
          <Link to="/" className="Linknav">
            <Avatar
              alt="Logo"
              src="https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Trepar-Logo.png?alt=media&token=e164636d-c114-4695-86e2-da356defe856"
              sx={{ width: 70, height: 70 }}
            />
          </Link>
          <Avatar
            src="https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/trepar-titulo.png?alt=media&token=eac5693b-8945-4015-9c03-ca89f80e5d75"
            variant="square"
            sx={{ width: 200, height: 70 }}
          ></Avatar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <CartWidget />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <CartWidget />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default NavBar;
