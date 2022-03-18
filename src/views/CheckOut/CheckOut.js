import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckOutObject from "../../components/CheckOutObject/CheckOutObject";
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";
import "../CheckOut/CheckOut.css";
import Paper from "@mui/material/Paper";
const CheckOut = () => {
  let subtotal = 0;
  let total = 0;
  const { product } = useContext(CartContext);
  return (
    <div className="checkOut">
      <h2 className="checkH2">Check Out</h2>
      <Paper elevation={3}
      sx={{
        margin:3,
      }}>
        <div className="checkOutContainer">
          <div>
            <h3 className="checkH3">Datos de Compra</h3>
            <CheckOutForm />
          </div>
          <div>
            <h3 className="checkH3">Productos</h3>
            <div className="checkItems">
            {product.map((prod) => {
              subtotal = prod.Precio * prod.cantidad;
              total = total + subtotal;
              return <CheckOutObject key={prod.id} prod={prod} />;
            })}
            </div>

          </div>
        </div>
      </Paper>
      <Paper elevation={3}
      sx={{
        margin:3,
        height:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end"
              }}>
        <h4 className="totalCheckOut">Total: ${total}</h4>
      </Paper>
    </div>
  );
};

export default CheckOut;
