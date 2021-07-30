import React, {useState} from 'react';
import moment from 'moment';
import clsx from "clsx";
import { Card, Collapse, CardActions, CardContent, CardMedia, Grid, Hidden, Box, IconButton, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles} from './Contato.styles';

const Contato = ({ post }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (

        <Card variant="outlined">
        <div className={classes.card}> 
          <Hidden only="xs">
          <div className={classes.imageContainer}>
            {post.foto !== '' && 
            <CardMedia
              component="img"
              className={classes.image}
              image={post.foto}
              title={post.nome}
            />
            }
            </div>
          </Hidden>
          
          <div className={classes.details}>
              <CardContent>
                <Typography variant="h6">{post.nome}</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {post.cargo}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {post.empresa}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.numero}
                </Typography>
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
              <IconButton size="small" color="primary">
                <EditIcon />
              </IconButton>
              <IconButton
                disableRipple
                size="small"
                variant="contained"
                color="secondary"
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
              {post.mensagem}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
} 

export default Contato