import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import HomeProductButtons from "../../components/HomeProductButtons/HomeProductButtons";
import "../Home/Home.css"

const Home = () => {
  return (
    <div>
      <div className="carrousel">
        <Carrousel />
      </div>
      <div className="homeTextContainer">
        <h2 className="homeText">
         ENCONTRA EL MEJOR MATERIAL DE ESCALADA
        </h2>
      </div>
      <div>
        <HomeProductButtons />
      </div>
      <div className="homeTextContainer">
        <p className="homeText">
          <b>Bienvenidos a Trepar</b>, tu tienda de montaña online preferida para
          comprar productos de Salomon, The North Face, Vaude, Salewa, Merrell,
          Trangoworld, Garmin, Columbia, Suunto y mucho más. En nuestra tienda
          online encontrarás más de 150.000 artículos de montaña perfectos para
          tus carreras de montaña y rutas de senderismo. Trepar propone modelos
          exclusivos de primeras marcas internacionales y te ofrece la
          posibilidad de conseguir material de montaña barato gracias a nuestra
          garantía del precio más bajo. Como distribuidor autorizado de todas
          las marcas que vendemos, los productos están respaldados por una
          garantía completa del fabricante, así como la asistencia de nuestro
          equipo de ventas después. Nuestras ofertas y ventas flash diarias te
          permitirán comprar botas de montaña, ropa de montaña y material de
          senderismo a precio outlet aprovechando de nuestro servicio de envíos
          rápidos a España peninsular, Baleares, Islas Canarias y América
          Latina. Nuestro equipo trabaja cuidadosamente para ofrecerte un amplio
          catálogo de artículos de trekking y material de escalada prestando
          especial atención a la relación calidad-precio. Encontrarás desde
          tiendas de campaña, mochilas, zapatillas de trekking, sacos de dormir,
          material de escalada para toda la familia, amantes de la montaña y
          incluso para los profesionales, siempre a precios minis. El objetivo
          de nuestra tienda de montaña online es que puedas disfrutar de un
          equipamiento en el que te sientas cómodo y seguro para disfrutar de
          tus actividades outdoor. La confianza de nuestros clientes es nuestra
          máxima absoluta. Si no estás 100 % satisfecho dentro de los 30 días,
          nos puedes devolver tu compra.
        </p>
      </div>
    </div>
  );
};

export default Home;
