import "./App.css";
import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetail from "../src/views/CardDetail/CardDetail";
import Contacto from "../src/views/Contacto/Contacto";
import Home from "../src/views/Home/Home";
import Envios from "../src/views/Envios/Envios";
const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/detail/:id" element={<CardDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
