import "./App.css";
import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetail from "../src/views/CardDetail/CardDetail";
import Contacto from "../src/views/Contacto/Contacto";
import Home from "../src/views/Home/Home";
import Envios from "../src/views/Envios/Envios";
import Cart from "../src/views/Cart/Cart";
import {CartProvider} from "./context/CartContext"
import Categorias from "../src/views/Categorias/Categorias";
import CheckOut from "../src/views/CheckOut/CheckOut";
import Footer from "../src/components/Footer/Footer"


const App = () => {
  return (
    <CartProvider>
    <Router>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/envios" element={<Envios />} />
            <Route path="/detail/:id" element={<CardDetail />} />
            <Route path="/categorias/:categoria" element={<Categorias />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkOut" element={<CheckOut />} />
          </Routes>
        </div> 
    </Router>
    <Footer />
    </CartProvider>
  );
};

export default App;
