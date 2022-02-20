import React, {useState, useContext} from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemDetail/ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ data }) => {
  const [quantity, setQuantity] = useState([])
  const onChangeValue = (e)=>{
    setQuantity(e.target.value)
  }
  const {product, addProduct}  = useContext(CartContext);
  return (
    <div className="containerDesc">
      <div className="containerDesc__item">
        <h1>{data.nombre}</h1>
      </div>
      <div className="containerDesc__item">
        <img src={data.imgUrl} alt="#"></img>
      </div>
      <div className="containerDesc__item">
        <h3>Descripción:</h3>
        <p>{data.descripcion}</p>
      </div>
      <div className="containerDesc__item">
        <h3>Información técnica:</h3>
        <p>{data.info}</p>
      </div>
      <div className="containerDesc__item">
        <h3>Talle:</h3>
        <p>{data.talle}</p>
      </div>
      <div className="containerDesc__item">
        <h3>Stock:</h3>
        <p>{data.stock}</p>
      </div>
      <div className="containerDesc__item">
        <h3>Cantidad:</h3>
        {quantity.length ? <p>{quantity}</p> : <ItemCounter  
        cant={data.stock}
        change={onChangeValue}
         />}
      </div>
      <div className="containerDesc__item-cart">
      {quantity.length ? <Link onClick={()=>addProduct(data, parseInt(quantity))}  className="compra" to="/cart">
        FINALIZAR COMPRA
        </Link> : "" }
      </div>
    </div>
  );
};

export default ItemDetail;
