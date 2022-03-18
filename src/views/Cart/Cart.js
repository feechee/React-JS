import React from "react";
import "../Cart/Cart.css";
import CartList from "../../components/CartList/CartList";


const Cart = ()=>{

    return(
        <div className="cartContainer">
            <div>
            <h2 className="h2Cart">
                Carrito de Compra
            </h2>
            </div>

            <div className="cartList">
                <CartList />
            </div>
        </div>
        


    )
}

export default Cart;