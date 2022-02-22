import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {db} from "../../FireBase/FireBase"
import { collection, query, getDocs } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const getProducts = async ()=>{
      const q = query(collection(db, "Productos"));
      const docs = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id: doc.id})
        
      })
      setDatos(docs);
      setIsloading(false)
    }
    getProducts()
  }, []);

  return (
    <div>
      {isLoading ? <Spinner /> : <ItemList productos={datos} />}
      
    </div>
  );
};

export default ItemListContainer;
