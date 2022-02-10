import React, { useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [dato, setDatos] = useState([]);
  const [isLoading, setIsloading] =useState(true);
  let id = useParams().id;
  console.log(id);
  useEffect(()=>{
    axios(`http://localhost:3000/productos/${id}`).then((res)=> setDatos(res.data))
    setTimeout(()=>{
      setIsloading(false)
    },2000)
  },[])



  return(
    <div key = {dato.id}>
      {isLoading ? <Spinner /> : <ItemDetail data ={dato} />}         
    </div>
  )


}

export default ItemDetailContainer;

