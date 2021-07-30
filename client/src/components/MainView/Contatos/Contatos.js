import React, {useState} from "react";
import { useSelector } from 'react-redux';

import { Box, Typography, Grid, Fab } from "@material-ui/core";
import ContactsIcon from '@material-ui/icons/Contacts';
import AddIcon from '@material-ui/icons/Add';



import { useStyles} from './Contatos.styles';
import Contato from './Contato/Contato.js';
import Formulario from "./Formulario/Formulario";


const Contatos = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts)

    const classes = useStyles();

    const [open, setOpen] = useState(false);


    const handleClickFab = () => {
      setOpen(true);
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






<Box mx={13} mt={5} >
<Typography>CONTATOS</Typography>
<Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
<Contato/>
<Contato/>
</Grid>
</Box>








</>

)};

export default Contatos