import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from 'react';
import { ContextData } from "../context/ContextProvider";
import { Button } from '@mui/material';

function Dilog({open,onClose,content,title}) {

   
  return (
    <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    sx={{ width: '90%' }} // Adjust the width here
  >
    <DialogTitle id="alert-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
       {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="text" background="none" onClick={onClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default Dilog