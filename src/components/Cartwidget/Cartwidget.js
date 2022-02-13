import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "../Cartwidget/Cartwidget.css"
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const CartWidget = () => {
  return (
    <Link to="/cart" className="cart">
      <StyledBadge badgeContent={3} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </Link>
  );
};

export default CartWidget;
