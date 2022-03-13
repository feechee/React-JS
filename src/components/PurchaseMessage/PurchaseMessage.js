import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const PurchaseMessage = ({orden})=> {
  const [open, setOpen] = useState(true);
  const {deleteAll}  = useContext(CartContext);


  const handleClose = () => {
    setOpen(false);
  };

  const finalziarCompra = () =>{
    return(
      handleClose(),
      deleteAll()
    )
  };
 
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Gracias por su compra!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Su codigo es: {orden}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/" className="link">
          <Button onClick={finalziarCompra}>Finalizar</Button>
          </Link>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PurchaseMessage;