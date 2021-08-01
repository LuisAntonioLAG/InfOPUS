import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import clsx from "clsx";
import { Divider, Card, Collapse, CardActions, CardContent, CardMedia, Grid, Hidden, Box, IconButton, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles} from './Contato.styles.js';
import Formulario from '../Formulario/Formulario.js'; 
import { deleteContato } from '../../../../actions/contatos.js'
import ContatoFotoPadrao from '../../../../assets/images/ContatoFotoPadrao.png'

const Contato = ({ contato, currentId, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const handleClickEdit = () => {
       setCurrentId(contato._id);
       setOpen(true);
     };

    const handleClickDelete = () => {
      dispatch(deleteContato(contato._id))
      window.location.reload();
    };


    return (

        <Card variant="outlined">
        <div className={classes.card}> 
          <Hidden only="xs">
          <div className={classes.imageContainer}>
            <CardMedia
              component="img"
              className={classes.image}
              image={contato.foto !== '' ? contato.foto : ContatoFotoPadrao}
              title={contato.nome}
            />
            </div>
          </Hidden>
          
          <div className={classes.details}>
              <CardContent>
                <Typography variant="h5">{contato.nome}</Typography>
                <Divider/>
                <Typography variant="subtitle2" color="textSecondary">
                  {contato.empresa}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {contato.cargo}
                </Typography>
                <Box my={3}>
                <Typography variant="h6" >
                  {contato.numero}
                </Typography>
                </Box>
              </CardContent>
          </div>
        </div>
        <CardActions className={classes.content}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Grid item>
              <IconButton size="small" color="primary" onClick={handleClickEdit}>
                <EditIcon />
              </IconButton>

              <Formulario currentId={currentId} setCurrentId={setCurrentId} open={open} setOpen={setOpen}/>

              <IconButton
                disableRipple
                size="small"
                variant="contained"
                color="secondary"
                onClick = {handleClickDelete}
              >
                <DeleteIcon />
              </IconButton>


            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <Box component="span" fontStyle="italic">
                  Atualizado em: {moment().format('MMM [de] YYYY')}
                </Box>
              </Typography>
            </Grid>
          </Grid>

          <IconButton
            disableRipple
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="h6">
              Informações Adicionais:
            </Typography>
            <Typography align="justify" paragraph variant="body1">
              {contato.mensagem}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
} 

export default Contato