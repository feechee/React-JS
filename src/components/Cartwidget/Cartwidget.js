import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "../Cartwidget/Cartwidget.css"
import { CartContext } from "../../context/CartContext";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  const {contadorCart}  = useContext(CartContext);
  
  return (
    <Link to="/cart" className="cart">
      {contadorCart() !== 0 ? <StyledBadge badgeContent={`${contadorCart()}`} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge> : <ShoppingCartIcon /> }
    </Link>
  );
};

export default CartWidget;
