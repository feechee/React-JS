import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import axios from "axios";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/productos").then((res) => setDatos(res.data));
  }, []);

  return (
    <div>
      <ItemList productos={datos} />
    </div>
  );
};

export default ItemListContainer;
