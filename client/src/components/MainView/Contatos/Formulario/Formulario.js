import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SubjectIcon from '@material-ui/icons/Subject';
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


            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item >
                  <AccountCircleIcon/>
                </Grid>
                <Grid style={{flexGrow:1, }} item>
                <TextField  name="nome" variant="outlined" fullWidth label="Nome" value={postData.nome} onChange={(e) => setPostData({ ...postData, nome: e.target.value })} /> 
                </Grid>
              </Grid>
            </div>

            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <BusinessIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextField name="empresa" variant="outlined" label="Empresa" fullWidth value={postData.empresa} onChange={(e) => setPostData({ ...postData, empresa: e.target.value })} /> 
                    </Grid>
                  </Grid>
            </div>

            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <PhoneIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextField name="numero" variant="outlined" label="Telefone" multiline fullWidth value={postData.numero} onChange={(e) => setPostData({ ...postData, numero: e.target.value })} />
                    </Grid>
                  </Grid>
            </div>
            
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <AssignmentIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextField name="cargo" variant="outlined" label="Cargo" fullWidth value={postData.cargo} onChange={(e) => setPostData({ ...postData, cargo: e.target.value })} />
                    </Grid>
                  </Grid>
            </div>
            
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <SubjectIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextField name="mensagem" variant="outlined" label="Informações Adicionais" multiline fullWidth value={postData.mensagem} onChange={(e) => setPostData({ ...postData, mensagem: e.target.value })} />
                    </Grid>
                  </Grid>
            </div>
            
            
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