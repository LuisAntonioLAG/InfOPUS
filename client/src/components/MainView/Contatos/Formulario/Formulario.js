import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SubjectIcon from '@material-ui/icons/Subject';
import FileBase from 'react-file-base64';


import { useStyles } from './Formulario.styles.js'
import { createPost, updatePost } from '../../../../actions/posts.js';





const Formulario = ({open, setOpen, currentId}) => {


    const [postData, setPostData] = useState({ empresa: '', cargo: '', nome: '', foto: '', mensagem: '', numero: '' });

    const post = useSelector((state) => 'currentId' ? state.posts.find((p) => p._id === currentId) : null);
  
    const dispatch = useDispatch();
  
    const classes = useStyles();


    const clear = () => {
      setPostData({ empresa: '', cargo: '', nome: '', foto: '', mensagem: '', numero: ''});
    };

    const handleClose = () => {
        setOpen(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentId) {
          dispatch(updatePost( currentId,postData));
        } else{
          dispatch(createPost(postData));
        }

        setOpen(false);
        clear();
   
    };

    useEffect(() => {
      if(post) setPostData(post);
    }, [post])
    

    return(
        
        
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">{ currentId ? 'EDITANDO' : 'NOVO'} CONTATO</DialogTitle>
   
 
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
          { currentId ? 'Atualize os dados desse contato:' : 'Preencha os dados do novo contato:'}
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
        <Button className={classes.margin} disableRipple variant='contained' onClick={() => {setPostData({ empresa: '', cargo: '', nome: '', foto: '', mensagem: '', numero: ''})}} >
            Limpar
          </Button>
         <Button color="secondary" className={classes.margin} disableRipple variant='contained' onClick={handleClose}>
            Cancelar
          </Button>
          <Button className={classes.margin} disableRipple variant="contained" type="submit" color="primary">
          { currentId ? 'Salvar' : 'Adicionar' }
          </Button>
        </DialogActions>
        </form>
      </Dialog>
      
    );
}

export default Formulario;