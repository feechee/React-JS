import React from "react";
import "../Envios/Envios.css"

const Envios = () => {
  return (
    <div className="enviosContainer">
      <h2 className="h2Envios">Envios</h2>
      <h4 className="h4Envios">
        Si tu compra es mayor a $10.000, enviamos tu pedido GRATIS a tu
        domicilio o sucursal de retiro por Correo Argentino.
      </h4>
      <p>
        Actualmente dada la situación actual del
        virus, los servicios de correo Argentino cuentan con demoras por el
        horario y personal reducido trabajando. Si bien nosotros despachamos en
        tiempo y forma, dependiendo de tu localidad o provincia podría haber
        alguna demora extra a la habitual.
      </p>

      <h4 className="h4Envios">
        Si tu compra es mayor a $8.000, enviamos tu pedido en moto GRATIS en
        CABA y en las siguientes zonas:
      </h4>
      <p>
        Vicente López, Florida, Olivos, La Lucila, Villa Martelli, Munro,
        Martínez, Acassuso, San Isidro, Beccar, Caseros, Santos lugares, San
        Martín, Villa Maipú
      </p>

      <h4 className="h4Envios">Correo Argentino</h4>

      <p>
        Realizamos envíos a todo el país. El pedido se puede retirar en la
        sucursal del correo acordada o se puede coordinar la entrega a
        domicilio. De corresponder (cuando no aplique envío gratuito) los envíos
        por Correo Argentino son con pago en origen, es decir se abona el envío
        junto con el pedido, y al recibir el paquete no se debe pagar nada. La
        demora del mismo suele ser entre dos y siete días hábiles dependiendo
        del destino.
      </p>

      <h4 className="h4Envios">Envíos por moto mensajería</h4>

      <p>
        (Solo zona de Capital Federal y los mensionados anteriormente) Este
        servicio se abona por separado al momento de recibir el pedido (en caso
        de no ser gratuito). En esta modalidad existe la posibilidad de pago
        contra reembolso. Las motos se piden con 24 hs de antelación. Los
        precios pueden cambiar sin previo aviso, los fija la mensajería, no Naka
        Outdoors - Consultar al momento de hacer el pedido.
      </p>

      <h4 className="h4Envios">Encomiendas</h4>

      <p>
        También podés optar por el envío por micro a la terminal. Por defecto,
        enviamos tu paquete en el transporté más próximo a salir, para que lo
        recibas lo antes posible. Si tenés una empresa de preferencia, por favor
        avisanos antes. En este caso el pago del costo de envío se realiza
        siempre usando la modalidad de pago en destino . Tener en cuenta que el
        costo de la compra debe abonarse por adelantado. Es decir se paga el
        transporte a la empresa de transportes al retirar y se paga la compra
        con aanterioridad.
      </p>
    </div>
  );
};

export default Envios;
