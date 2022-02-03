import React from "react";
import "../ItemCounter/ItemCounter.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCounter = ({cant})=>{
    const [counter, setCounter] = React.useState(1);
    const handlerCounterUp = () => {
        if (counter < cant) {
            setCounter(counter +1);
        }
    }
    const handlerCounterDown = () => {
        if (counter > 1) {
            setCounter(counter -1)
        }
        
    }
    return(
        <div className="counter">

            <button className="boton" onClick={handlerCounterDown}>
                <RemoveIcon />
            </button>
            <p>
                {counter}
            </p>
            <button className="boton" onClick={handlerCounterUp}>
                <AddIcon />
            </button>
        </div>
    )
}

export default ItemCounter