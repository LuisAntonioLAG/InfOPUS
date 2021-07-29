import React from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';


//import { useStyles } from './Formulario.styles.js'


const Formulario = props => {
    const {
        open, setOpen = [],
    } = props;

    //const classes = useStyles();



    const handleClose = () => {
        setOpen(false);
      };




      const handleSubmit = (e) => {
    };

    return(
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Novo Contato</DialogTitle>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Preencha os dados do novo contato.
          </DialogContentText>
                 <TextField margin='dense' name='empresa' variant='outlined' label='Empresa' fullWidth />
                 <TextField margin='dense' name='cargo' variant='outlined' label='Cargo' fullWidth />
                 <TextField margin='dense' name='nome' variant='outlined' label='Nome' fullWidth />
                 <TextField margin='dense' name='numero' variant='outlined' label='Numero' fullWidth />
        </DialogContent>    
        <DialogActions>
          <Button disableRipple variant='contained' onClick={handleClose} size='small' color="secondary">
            Cancelar
          </Button>
          <Button disableRipple variant='contained' color="primary" size='small' type="submit">
            Adicionar
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    );
}

export default Formulario;