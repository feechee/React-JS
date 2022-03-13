import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";


const ItemList = (productos) => {
  const prod = productos.productos;
  return (
    <div className="list__containerl">
      
      {prod.map((producto) => {
        return (
          <div className="containerl" key={producto.id}>
            <Link className="linkProducto" to={`/detail/${producto.id}`}>
              <Item className="card" data={producto} />
            </Link>
          </div>
        );
      })}
      
      </div>
  );
};

export default ItemList;
