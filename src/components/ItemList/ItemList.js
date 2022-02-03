import React from "react";
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = (productos)=>{
    const prod= productos.productos
    return(
        <div className="list__containerl">
            {prod.map((producto) => {
                return(
                    <div className="containerl" key = {producto.id}>
                        <Item className="card" data = {producto} />
                    </div>
                )
            })}
        </div>
    )
};

export default ItemList;