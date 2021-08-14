import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { Box, Typography, Grid, Fab, CircularProgress } from "@material-ui/core";
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
<FontAwesomeIcon className={classes.titleIcon} icon={faAddressCard}/>
<Typography color='secondary' align='left' variant='h2'>
Contatos
</Typography>
</Box>
</div>

<div>
<Box  mx={13}>
<Typography align='justify' variant='h6'>
Atrás de alguém pra fazer um bench ou fechar uma parceria? Busque aqui na <Box component="span" fontWeight='fontWeightBold'>LISTA DE CONTATOS</Box>!
</Typography>
</Box>
</div>

<Fab color='primary' className={classes.fab} variant="extended" onClick={handleClickFab}>
  <AddIcon/>
  <Box component="span" fontWeight='fontWeightBold'> Contato </Box>
</Fab>

<Formulario open={open} setOpen={setOpen}/>




<Box className={classes.container} mt={5} >
  {!contatos.length ? (<div className={classes.center}><CircularProgress color="secondary"/> </div>)  : (
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