import React, { useState } from "react";
import "../CheckOutForm/CheckOutForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/FireBase";
import PurchaseMessage from "../PurchaseMessage/PurchaseMessage";
import { Formik } from "formik";

//Formulario de la seccion CheckOut desarrollado con Formik

const CheckOutForm = () => {
  const [submitForm, setSubmitForm] = useState(false);
  const [compraID, setCompraID] = useState("");

  return (
    <div className="checkOutForm">
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
        }}
        validate={(valores) => {
          let errores = {};
          //errores
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un Nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El Nombre solo puede contener letras y espacios";
          }

          if (!valores.apellido) {
            errores.apellido = "Por favor ingresa un Apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.apellido =
              "El Apellido solo puede contener letras y espacios";
          }

          if (!valores.email) {
            errores.email = "Por favor ingresa un E-mail";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "El E-mail no tiene un formato válido";
          }

          if (!valores.telefono) {
            errores.telefono = "Por favor ingresa un Teléfono";
          } else if (
            !/^\(?\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}$/.test(valores.telefono)
          ) {
            errores.telefono = "Formato inválido ej: 1154544545";
          }

          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          const docRef = await addDoc(collection(db, "Compras"), {
            valores,
          });
          setSubmitForm(true);
          resetForm();
          setCompraID(docRef.id);
        }}
      >
        {({
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
        }) => (
          <Box
            className="checkOutBox"
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="on"
          >
            {touched.nombre && errors.nombre ? (
              <TextField
                id="outlined-error-helper-text"
                error
                label="Nombre"
                variant="outlined"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.nombre}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {touched.apellido && errors.apellido ? (
              <TextField
                id="outlined-error-helper-text"
                error
                label="Apellido"
                variant="outlined"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.apellido}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Apellido"
                variant="outlined"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {touched.email && errors.email ? (
              <TextField
                id="outlined-error-helper-text"
                error
                label="E-mail"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {touched.telefono && errors.telefono ? (
              <TextField
                id="outlined-error-helper-text"
                error
                label="Teléfono"
                variant="outlined"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.telefono}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Teléfono"
                variant="outlined"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            <Button
              sx={{ m: 5 }}
              variant="outlined"
              type="submit"
              color="success"
            >
              Comprar
            </Button>
          </Box>
        )}
      </Formik>
      {submitForm && <PurchaseMessage orden={compraID} />}
    </div>
  );
};

export default CheckOutForm;
