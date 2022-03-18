import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import "../Carrousel/Carrousel.css"

const Carrousel = ()=>{
    let items = [
        {
            name: "Trep.ar",
            img: "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FInicio%2Fpetzl-Inicio.png?alt=media&token=67e1dd33-986d-4d15-b3c3-19d500d4ae38"
        },
        {
            name: "Trep.ar",
            img: "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FInicio%2FlaSportiva-inicio.png?alt=media&token=49562476-25e0-4801-949d-c1e3b04e7c6f"
        },
        {
            name: "Trep.ar",
            img: "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FInicio%2Fpetzl-Inicio-2.png?alt=media&token=8d7cb53a-4b53-492a-ab51-ac12c33c501e"
        }
    ]

    return (
        <Carousel className="carrousel">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className="carrouselPaper">
            <img className="carrouselImg" src={props.item.img} alt={props.item.name}></img>
            <h2>{props.item.name}</h2>
            
        </Paper>
    )
}

export default Carrousel;