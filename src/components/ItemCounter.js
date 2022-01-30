import React from "react";
import "../components/ItemCounter.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCounter = ()=>{
    let stock = 5
    const [counter, setCounter] = React.useState(1);
    const handlerCounterUp = () => {
        if (counter < stock) {
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