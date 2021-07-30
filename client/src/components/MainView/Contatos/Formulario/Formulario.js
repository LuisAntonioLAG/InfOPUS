import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import FileBase from 'react-file-base64';


import { useStyles } from './Formulario.styles.js'
import { createPost } from '../../../../actions/posts.js';


const Formulario = props => {
  const [postData, setPostData] = useState({ empresa: '', cargo: '', nome: '', foto: '', mensagem: '', numero: '' });
  
  const dispatch = useDispatch();


    const { 
        open, setOpen = [],
    } = props;

    const classes = useStyles();


    const clear = () => {
      setPostData({ empresa: '', cargo: '', nome: '', foto: '', mensagem: '', numero: ''});
    };

    const handleClose = () => {
        setOpen(false);
        clear();
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        clear();
        setOpen(false);
    };

    return(
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">NOVO CONTATO</DialogTitle>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Preencha os dados do novo contato:
          </DialogContentText>
            <TextField required={true} name="empresa" variant="outlined" label="Empresa" margin='dense' fullWidth value={postData.empresa} onChange={(e) => setPostData({ ...postData, empresa: e.target.value })} />
            <TextField name="cargo" variant="outlined" label="Cargo" margin='dense' fullWidth value={postData.cargo} onChange={(e) => setPostData({ ...postData, cargo: e.target.value })} />
            <TextField name="nome" variant="outlined" label="Nome" margin='dense' fullWidth value={postData.nome} onChange={(e) => setPostData({ ...postData, nome: e.target.value })} />
            <TextField name="numero" variant="outlined" label="Telefone" margin='dense' multiline fullWidth value={postData.numero} onChange={(e) => setPostData({ ...postData, numero: e.target.value })} />
            <TextField name="mensagem" variant="outlined" label="Informações Adicionais" margin='dense' multiline fullWidth value={postData.mensagem} onChange={(e) => setPostData({ ...postData, mensagem: e.target.value })} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, foto: base64 })} /></div> 
        </DialogContent>    
        <DialogActions>
         <Button disableRipple variant='contained' onClick={handleClose}>
            Cancelar
          </Button>
          <Button disableRipple variant='contained' onClick={clear} color="secondary">
            Limpar
          </Button>
          <Button disableRipple variant="contained" type="submit" color="primary">
            Adicionar
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    );
}

export default Formulario;