import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { db } from "../../FireBase/FireBase";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

//Funcion que trae info de los productos desde firebase, para la descripcion.
const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  let id = useParams().id;
  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "Productos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDato(docs);
      setIsloading(false);
    };
    getProduct();
  }, [id]);

  return (
    <div key={dato.id}>
      {isLoading ? <Spinner /> : <ItemDetail data={dato} />}
    </div>
  );
};

export default ItemDetailContainer;
