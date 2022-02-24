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
  const {addProduct}  = useContext(CartContext);
  return (
    <div className="containerDesc">
      <div className="containerDesc__item">
        <h1>{data[0].Nombre}</h1>
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
        <h3>Cantidad:</h3>
        {quantity.length ? <p>{quantity}</p> : <ItemCounter  
        cant={data[0].Stock}
        change={onChangeValue}
         />}
      </div>
      <div className="containerDesc__item-cart">
      {quantity.length ? <Link onClick={()=>addProduct(data[0], quantity)}  className="compra" to="/cart">
        FINALIZAR COMPRA
        </Link> : "" }
      </div>
    </div>
  );
};


export default ItemDetail;
