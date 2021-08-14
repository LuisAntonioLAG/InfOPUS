import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SubjectIcon from '@material-ui/icons/Subject';
import FileBase from 'react-file-base64';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



import { useStyles } from './Formulario.styles.js'
import { createContato, updateContato } from '../../../../actions/contatos.js';





const Formulario = ({open, setOpen, currentId}) => {


    const [infoContato, setInfoContato] = useState({ empresa: '', cargo: '', nome: '', foto: '', mensagem: '', numero: ''});

    const contato = useSelector((state) => 'currentId' ? state.contatos.find((p) => p._id === currentId) : null);
  
    const dispatch = useDispatch();
  
    const classes = useStyles();


    const clear = () => {
      setInfoContato({ empresa: '', cargo: '', nome: '', foto: '', mensagem: '', numero: ''});
    };

    const handleClose = () => {
        setOpen(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
          dispatch(updateContato( currentId,infoContato));
        } else{
          dispatch(createContato(infoContato));
        }

        setOpen(false);
        clear();
   
    };

    useEffect(() => {
      if(contato) setInfoContato(contato);
    }, [contato])
    


    return(
        
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">{ currentId ? 'EDITANDO' : 'NOVO'} CONTATO</DialogTitle>
   
 
        <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
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
                <TextValidator name="nome"  label="Nome*" value={infoContato.nome} onChange={(e) => setInfoContato({ ...infoContato, nome: e.target.value })} 
                  variant="outlined"
                  fullWidth
                  autoFocus
                  validators={['required']}
                  errorMessages={['Esse campo é obrigatório.']}
                  /> 
                </Grid>
              </Grid>
            </div>

            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <BusinessIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextField name="empresa" variant="outlined" label="Empresa" fullWidth value={infoContato.empresa} onChange={(e) => setInfoContato({ ...infoContato, empresa: e.target.value })} /> 
                    </Grid>
                  </Grid>
            </div>

            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <PhoneIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextValidator name="numero"  label="Telefone*" value={infoContato.numero} onChange={(e) => setInfoContato({ ...infoContato, numero: e.target.value })} 
                      variant="outlined"
                      fullWidth
                      validators={['required', 'isNumber', 'minStringLength:8', 'maxStringLength:13']}
                      errorMessages={['Esse campo é obrigatório.','Preencha apenas com os números.','São necessários, no mínimo, 8 dígitos.','São permitidos, no máximo, 13 dígitos.']}
                    />
                    </Grid>
                  </Grid>
            </div>
            
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <AssignmentIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextField name="cargo" variant="outlined" label="Cargo" fullWidth value={infoContato.cargo} onChange={(e) => setInfoContato({ ...infoContato, cargo: e.target.value })} />
                    </Grid>
                  </Grid>
            </div>
            
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                      <SubjectIcon/>
                    </Grid>
                    <Grid style={{flexGrow:1, }} item>
                    <TextField name="mensagem" variant="outlined" label="Informações Adicionais" multiline fullWidth value={infoContato.mensagem} onChange={(e) => setInfoContato({ ...infoContato, mensagem: e.target.value })} />
                    </Grid>
                  </Grid>
            </div>
            
            
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setInfoContato({ ...infoContato, foto: base64 })} /></div> 
        </DialogContent>    
        <DialogActions>
         <Button color="secondary" className={classes.margin} variant='contained' onClick={handleClose}>
            Cancelar
          </Button>
          <Button className={classes.margin} variant="contained" type="submit" color="primary">
          { currentId ? 'Salvar' : 'Adicionar' }
          </Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
      
    );
}

export default Formulario;