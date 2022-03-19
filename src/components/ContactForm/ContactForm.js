import React, { useState } from "react";
import "../ContactForm/ContactForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/FireBase";
import ContactMessage from "../ContactMessage/ContactMessage";
import { Formik } from "formik";

//Formulario de contacto, los mensajes son guardados en firebase
const ContactForm = () => {
  const [submitForm, setSubmitForm] = useState(false);

  return (
    <div className="checkOutForm">
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          mensaje: "",
        }}
        validate={(valores) => {
          let errores = {};

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

          if (!valores.mensaje) {
            errores.mensaje = "Por favor ingresa un Mensaje";
          }

          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          await addDoc(collection(db, "Mensajes"), {
            valores,
          });
          setSubmitForm(true);
          resetForm();
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

            {touched.mensaje && errors.mensaje ? (
              <TextField
                multiline
                rows={4}
                id="outlined-error-helper-text"
                error
                label="Mensaje"
                variant="outlined"
                name="mensaje"
                value={values.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.mensaje}
              />
            ) : (
              <TextField
                multiline
                id="outlined-basic"
                label="Mensaje"
                variant="outlined"
                name="mensaje"
                value={values.mensaje}
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
              Enviar Mensaje
            </Button>
          </Box>
        )}
      </Formik>
      {submitForm && <ContactMessage />}
    </div>
  );
};

export default ContactForm;
