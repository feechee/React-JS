import React, { useContext } from "react";
import List from "@mui/material/List";
import CartObject from "../CartObject/CartObject";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import "../CartList/CartList.css";
import { Link } from "react-router-dom";

const CartList = () => {
  const { product, deleteProduct, deleteAll } =
    useContext(CartContext);
  let subtotal = 0;
  let total = 0;
  
  return (
    <>
      <List
        sx={{
          width: "70%",
          
        }}
        className="cards"
      >
        {product.map((prod) => {
          subtotal = prod.Precio * prod.cantidad;
          total = total + subtotal;
          
          return (
              <div key={prod.id}>
                  <CartObject  prod={prod} deleteProduct={deleteProduct}/> 
              </div>
              
          );
        })}
      </List>
      {product.length == 0 ? <p> No ha agregado ningun producto. Ingrese a la sección <Link to="/">Productos</Link> para realizar su compra.</p> : "" }
      <div className="total">
        <p>Total: ${total}</p>
      </div>
      <div className="vaciarButton">
        <Button onClick={deleteAll} variant="outlined">
          Vaciar
        </Button>
      </div>
    </>
  );
};

export default CartList;
