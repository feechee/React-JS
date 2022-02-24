import React, {useState, useEffect} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import {db} from "../../FireBase/FireBase"
import ItemList from "../../components/ItemList/ItemList"
import Spinner from "../../components/Spinner/Spinner"
const Categorias = () => {
    const [categoriasData, setCategoriasData] = useState([])
    const [isLoading, setIsloading] = useState(true);
    let categoria = useParams().categoria;
    
    useEffect(()=>{
       const getCategoriasData = async ()=>{
            const q = query(collection(db, 'Productos'), where('Categoria', '==', categoria)
            );
            const docs =[];
            const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id: doc.id})
        
      })
      setCategoriasData(docs);
      setIsloading(false)
            
        }
        getCategoriasData()
    },[categoria]);


  return (
    <div>
      <h2>Categorias</h2>
      {isLoading ? <Spinner /> : <ItemList productos={categoriasData} />}
      
    </div>
  );
};

export default Categorias;
