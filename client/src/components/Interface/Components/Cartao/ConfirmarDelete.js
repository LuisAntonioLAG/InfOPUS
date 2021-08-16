import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,} from '@material-ui/core'


import { deleteCartao } from '../../../../actions/cartoes';

const ConfirmarDelete = ({ currentId, open, setOpen}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCartao(currentId));
        handleClose()
      };

    const handleClose = () => {
      setOpen(false)
    }
  
    return(

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">Tem certeza que deseja excluir este card?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Essa ação é irreversível. Todos os dados do card serão perdidos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} 
            color="primary">
            Apagar card
          </Button>
        </DialogActions>
      </Dialog>
      )
  }


export default ConfirmarDelete