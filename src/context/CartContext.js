
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  
  const addProduct = (data, quantity) => {
    let cant = parseInt(quantity)
    data["cantidad"] = cant;
    const findProduct = product.find((prod) => prod.id === data.id);
    if (findProduct) {
      findProduct.cantidad += cant;
    } else {
        product.push(data)
    }
    setProduct([...product])
  };

  const deleteProduct = (productId) => {
    const updateProduct = product.filter((prod) => {
      return prod.id !== productId; 
    });

    setProduct(updateProduct);
  };

  const deleteAll = ()=> setProduct([]);

  const contadorCart = ()=>{
      return product.reduce((acc, value) => acc+ value.cantidad, 0);
      
  };


  return (
    <CartContext.Provider value={{ product, addProduct, deleteProduct, deleteAll, contadorCart }}>
      {children}
    </CartContext.Provider>
  );
};
