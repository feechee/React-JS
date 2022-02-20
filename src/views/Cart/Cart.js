import React from "react";
import "../Cart/Cart.css";
import CartList from "../../components/CartList/CartList";


const Cart = ()=>{

    return(
        <div className="cartContainer">
            <h2>
                Carrito de Compra
            </h2>
            <div className="cartList">
                <CartList />
            </div>
        </div>
        


    )
}

export default Cart;