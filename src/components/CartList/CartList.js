import React, { useContext } from "react";
import List from "@mui/material/List";
import CartObject from "../CartObject/CartObject";
import { CartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import "../CartList/CartList"

const CartList = () => {

    const {product, addProduct, deleteProduct, deleteAll}  = useContext(CartContext);
  return (
      <>
    <List 
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
      className="cards"
    >
        {product.map((prod)=>

            <CartObject 
            key={prod.id}
            prod={prod}
            deleteProduct={deleteProduct}
             />
        )}
    </List>
    <div className="vaciarButton" >
        <Button  onClick={deleteAll} variant="outlined">Vaciar</Button>
    </div>

    
    </>
  );
};

export default CartList;
