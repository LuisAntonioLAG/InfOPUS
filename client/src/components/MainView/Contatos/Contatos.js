import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { Box, Typography, Grid, Fab, CircularProgress } from "@material-ui/core";
import ContactsIcon from '@material-ui/icons/Contacts';
import AddIcon from '@material-ui/icons/Add';



import { useStyles} from './Contatos.styles';
import Contato from './Contato/Contato.js';
import Formulario from "./Formulario/Formulario";
import { getContatos } from "../../../actions/contatos";

const Contatos = () => {

    const [currentId, setCurrentId] = useState(null);

    const contatos = useSelector((state) => state.contatos);


    const classes = useStyles();

    const [open, setOpen] = useState(false);


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getContatos());
    }, [currentId, dispatch])



    const handleClickFab = () => {
      setOpen(true);
      setCurrentId(null)
    };


return(
<>

<div>
<Box p={5} style={{display:'flex'}} alignItems='center'>
<ContactsIcon className={classes.titleIcon} color='secondary' style={{ fontSize: 50 }}/>
<Typography color='secondary' align='left' variant='h2'>
Contatos
</Typography>
</Box>
</div>

<div>
<Box  mx={13}>
<Typography variant='h6'>
Quer falar com alguma outra EJs pra fazer um bench ou fechar uma parceria? Busque aqui na <Box component="span" fontWeight='fontWeightBold'>LISTA DE CONTATOS</Box>!
</Typography>
</Box>
</div>

<Fab color='primary' className={classes.fab} variant="extended" onClick={handleClickFab}>
  <AddIcon/>
  <Box component="span" fontWeight='fontWeightBold'> Novo Contato </Box>
</Fab>

<Formulario open={open} setOpen={setOpen}/>




<Box mt={5} >
  {!contatos.length ? <CircularProgress color="secondary" /> : (
      <Grid className={classes.root} container spacing={2}>
          {contatos.map((contato) => ( 
              <Grid  key={contato._id} item xs={12} md={6} lg={4}>
                  <Contato currentId={currentId} setCurrentId={setCurrentId} contato={contato} />
              </Grid>
          ))}
      </Grid>

  )}
</Box>








</>

)};

export default Contatos