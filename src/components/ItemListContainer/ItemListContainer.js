import React, { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList"
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ()=>{
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsloading] =useState(true); 
  useEffect(()=>{
    axios("http://localhost:3000/productos").then((res) => setDatos(res.data))
    setTimeout(()=>{
      setIsloading(false)
    },2000)
  },[])

  return(
<div>
  
    {isLoading ? <Spinner /> : <ItemList productos = {datos} />}
</div>
  )


}

export default ItemListContainer