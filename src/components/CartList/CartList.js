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
    console.log(product.length);
  let subtotal = 0;
  let total = 0;
  console.log(product);
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
                  {product.length == 0 ? <p> No hay agregado ningun producto. Ingrese a la seccion <Link to="/">Productos</Link> para realizar su compra.</p> : <CartObject  prod={prod} deleteProduct={deleteProduct}/>} 
              </div>
              
          );
        })}
      </List>
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
