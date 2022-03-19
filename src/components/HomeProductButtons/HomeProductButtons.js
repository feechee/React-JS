import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

//Botones de la seccion Home
const images = [
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FPedulas.png?alt=media&token=7cec6500-af70-41f6-853f-0b27e2ce117a",
    title: "Pedulas",
    width: "33%",
    link: "categorias/Pedula",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FArneses.png?alt=media&token=9ec199c9-b327-4631-aa7e-b1c8092fff47",
    title: "Arneses",
    width: "33%",
    link: "categorias/Arnés",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FAseguradores.png?alt=media&token=50457818-7cb6-45b7-a13b-0727edd9a7a5",
    title: "Aseguradores",
    width: "33%",
    link: "categorias/Asegurador",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FCuerdas.png?alt=media&token=961e869c-1c0c-4e09-9de4-46ae9b4c89aa",
    title: "Cuerdas",
    width: "33%",
    link: "categorias/Cuerda",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FMosquetones.png?alt=media&token=f9808d71-b1e6-4768-af17-52acdf52a4d9",
    title: "Mosquetones",
    width: "33%",
    link: "categorias/Mosquetón",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/trep-ar.appspot.com/o/Imagenes%2FCascos.png?alt=media&token=367a0513-bbed-45c8-973d-77ac1dded8f0",
    title: "Cascos",
    width: "33%",
    link: "categorias/Casco",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const HomeProductButtons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
        justifyContent: "center",
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <Link to={image.link}>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </Link>
        </ImageButton>
      ))}
    </Box>
  );
};

export default HomeProductButtons;
