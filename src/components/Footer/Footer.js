import React from "react";
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerCategories">
        <div>
          <h4>SOBRE TREP.AR</h4>
          <h6>Quienes somos</h6>
          <h6>Nuestro equipo</h6>
          <h6>Nuestra tienda física</h6>
          <h6>Términos y Condiciones</h6>
        </div>
        <div>
        <h4>ATENCIÓN AL CLIENTE</h4>
        <h6>Seguimiento del pedido</h6>
        <h6>Contáctanos</h6>
        <h6>Preguntas frecuentes</h6>
        <h6>Devolución fácil</h6>
        </div>
        <div>
        <h4>TOP MARCAS</h4>
        <h6>Petzl</h6>
        <h6>La Sportiva</h6>
        <h6>The North Face</h6>
        <h6>Mammut</h6>
        <h6>Black Diamond</h6>
        </div>
        <div>
        <h4>CATEGORÍAS</h4>
        <h6>Pedulas</h6>
        <h6>Mosquetones</h6>
        <h6>Cuerdas</h6>
        <h6>Arneses</h6>
        <h6>Cascos</h6>
        <h6>Aseguradores</h6>
        </div>
      </div>
      <div className="footerCopyright">
          <p>
          Copyright 2009 - 2022 by trep.ar TRADEINN RETAIL SERVICES, S.L. CIF/VAT ES-B-17527524, C/ Pirineus, 9, 17460 Celrà (Girona), Spain. Términos y Condiciones | Programa de afiliación | Política de cookies | Política de privacidad | Aviso legal | Política de privacidad de redes sociales
          </p>
      </div>
    </div>
  );
};

export default Footer;
