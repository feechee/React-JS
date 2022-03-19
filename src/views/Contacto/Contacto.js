import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "../Contacto/Contacto.css"

const Contacto = () => {
  return (
    <div className="contactContainer">
      <div>
        <h2 className="h2Contacto">Contacto</h2>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
