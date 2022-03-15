import React, { useState, useContext } from "react";
import "../CheckOutForm/CheckOutForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../FireBase/FireBase"
import PurchaseMessage from "../PurchaseMessage/PurchaseMessage";


const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
};

const CheckOutForm = () => {
  const [values, setValues] = useState(initialState);
  const [compraID, setCompraID] = useState('')
  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Compras"), {
        values
      });
      setCompraID(docRef.id);
      setValues(initialState);
  };
  return (
    
    <div className="checkOutForm">
      <Box
        className="checkOutBox"
        component="form"
        onSubmit={onSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          value={values.nombre}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          label="Apellido"
          variant="outlined"
          name="apellido"
          value={values.apellido}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          name="telefono"
          value={values.telefono}
          onChange={onChange}
        />
        <Button sx={{m:5}} variant="outlined" type="submit" color="success">
          Comprar
        </Button>
      </Box>
      {compraID && <PurchaseMessage orden={compraID} />}
    </div>
  );
};

export default CheckOutForm;
