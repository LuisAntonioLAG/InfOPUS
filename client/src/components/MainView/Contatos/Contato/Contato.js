import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import clsx from "clsx";
import {Zoom, Button, Divider, Card, Collapse, CardActions, CardContent, CardMedia, Grid, Hidden, Box, IconButton, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle  } from "@material-ui/core";
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
    const [confirmacao, setConfirmacao] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const handleClickEdit = () => {
       setCurrentId(contato._id);
       setOpen(true);
     };

    const handleClickDelete = () => {
      setConfirmacao(true);
    };

    const handleDelete = () => {
      dispatch(deleteContato(contato._id))
      setConfirmacao(false);
      window.location.reload()
    };


    const ConfirmarDelete = () => {
      return(
        <Dialog
          open={confirmacao}
          onClose={() => setConfirmacao(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Tem certeza que deseja excluir este contato?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Essa ação é irreversível. Todos os dados do contato serão perdidos.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmacao(false)} color="secondary">
              Cancelar
            </Button>
            <Button onClick={handleDelete} 
              color="primary">
              Apagar contato
            </Button>
          </DialogActions>
        </Dialog>
        )
    }


    return (

      <Zoom in>
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

              <ConfirmarDelete/>

            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <Box component="span" fontStyle="italic">
                  Atualizado em: {moment(contato.dataAtualizacao).format('MMM [de] YYYY')}
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
    </Zoom>
    )
} 

export default Contato