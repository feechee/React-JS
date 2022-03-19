import React from "react";
import "../ItemCounter/ItemCounter.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

//Calcula la cantidad de productos que se agregaran al carrito
const ItemCounter = ({ cant, change }) => {
  const [counter, setCounter] = React.useState(1);
  const handlerCounterUp = () => {
    if (counter < cant) {
      setCounter(counter + 1);
    }
  };
  const handlerCounterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div className="counter">
        <RemoveIcon onClick={handlerCounterDown} />
        <p>{counter}</p>
        <AddIcon onClick={handlerCounterUp} />
      </div>
      <div>
        <Button
          value={counter}
          onClick={change}
          variant="outlined"
          color="success"
        >
          Seleccionar
        </Button>
      </div>
    </div>
  );
};

export default ItemCounter;
