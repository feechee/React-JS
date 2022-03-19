import React, { useContext } from "react";
import List from "@mui/material/List";
import CartObject from "../CartObject/CartObject";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import "../CartList/CartList.css";
import { Link } from "react-router-dom";

//Listado de productos agregados al carrito, la data proviene de CartContext
const CartList = () => {
  const { product, deleteProduct, deleteAll } = useContext(CartContext);
  let subtotal = 0;
  let total = 0;

  return (
    <>
      <List
        sx={{
          width: "70%",
          marginTop: 5,
        }}
        className="cards"
      >
        {product.map((prod) => {
          subtotal = prod.Precio * prod.cantidad;
          total = total + subtotal;

          return (
            <div key={prod.id}>
              <CartObject prod={prod} deleteProduct={deleteProduct} />
            </div>
          );
        })}
      </List>
      {product.length === 0 ? (
        <p>
          {" "}
          No ha agregado ningun producto.
        </p>
      ) : (
        ""
      )}
      <div className="totalCart">
        <h4>Total: ${total}</h4>
      </div>
      <div className="buttonContainer">
        <div className="vaciarButton">
          {product.length === 0 ? (
            ""
          ) : (
            <Button onClick={deleteAll} variant="outlined" color="secondary">
              Vaciar
            </Button>
          )}
        </div>
        <div className="comprarButton">
          {product.length === 0 ? (
            ""
          ) : (
            <Link to="/checkOut">
              <Button variant="outlined" color="success">Finalizar Compra</Button>{" "}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;
