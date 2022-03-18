import React, { useState, useContext } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemDetail/ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const ItemDetail = ({ data }) => {
  const [quantity, setQuantity] = useState([]);
  const onChangeValue = (e) => {
    setQuantity(e.target.value);
  };
  const { addProduct } = useContext(CartContext);
  return (
    <Paper elevation={5}
    sx={{
      margin:15,
    }}>
    <div className="containerDesc">
      <div className="containerDesc__item">
        <h2 className="h2Detail">{data[0].Nombre}</h2>
      </div>
      <div className="containerDesc__item">
        <img src={data[0].Img} alt="#"></img>
      </div>
      <div className="containerDesc__item">
        <h3>Descripción:</h3>
        <p>{data[0].Descripción}</p>
      </div>
      <div className="containerDesc__item">
        <h3>Stock:</h3>
        <p>{data[0].Stock}</p>
      </div>
      <div className="containerDesc__item">
        <h3>Precio:</h3>
        <p>$ {data[0].Precio}</p>
      </div>
      <div className="containerDesc__item">
        <h3>Cantidad:</h3>
        {quantity.length ? (
          <p>{quantity}</p>
        ) : (
          <ItemCounter cant={data[0].Stock} change={onChangeValue} />
        )}
      </div>
      <div className="containerDesc__item-cart">
        {quantity.length ? (
          <Button variant="outlined" color="success">
            <Link
            className="compra"
              onClick={() => addProduct(data[0], quantity)}
              to="/cart"
            >
              Agregar Al Carrito
            </Link>
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
    </Paper>
  );
};

export default ItemDetail;
