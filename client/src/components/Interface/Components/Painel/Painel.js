import React, {useState} from 'react'
import clsx from 'clsx'
import {Card, Collapse, Box, CardActions, CardContent, IconButton, Grid, Typography, Zoom} from "@material-ui/core";
import PublishIcon from '@material-ui/icons/Publish';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';

import {useTheme} from '@material-ui/styles'

import { useStyles} from './Painel.styles';

import BotaoOpcoes from '../BotaoOpcoes/BotaoOpcoes.js';
import ArvoreArquivos from '../ArvoreArquivos/ArvoreArquivos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Painel = ( props ) => {
    const {
        titulo = '',
        icone = '',
        descricao = '',
        acess = '',
        zip = '',
        download = false,
        data = {},
} = props


const theme= useTheme();
const [expanded, setExpanded] = useState(false);


const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const classes = useStyles();

  const formatos = (
      <>
      {zip ?
      (
       <FontAwesomeIcon className={classes.zipIcon} icon={faFileArchive}/> 
      ) : ''} 
    </>
  )

  const IDs = [zip];
  const optionsDownload = [IDs[0] && 'ZIP'].filter(Boolean);


return (
    <Grid item xs={12} md={expanded ? 12 : 6} lg={expanded ? 12 : 4} style={{transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.sharp, 
        duration: theme.transitions.duration.leavingScreen,
})}}>
    <Zoom in>
        <Card elevation={20}  style= {{position:'relative'}}>
            <Typography align='center' variant='h6'>{titulo}  </Typography>
            <Typography variant='h2' align='center'><IconButton disableRipple className={classes.uploadIcon} > <PublishIcon fontSize='small' /> </IconButton> </Typography>
            <Typography align ='center' variant="subtitle2" color="textSecondary">
                <Box component="span" fontStyle="italic">
                Atualizado em: DATA QUALQUER
                </Box>
            </Typography>
            <CardContent style={{display: 'flex', flexDirection:'column'}}>
                <Box mx={'auto'} mt={-1}>
                {icone}
                </Box>
                <Box my={1}>
                <Typography align='center' variant='subtitle2' color='textSecondary'>{descricao}</Typography>
                </Box>
                {optionsDownload.length > 0 && <Typography align='center' variant='subtitle1' color='textSecondary'> Formato:{formatos} </Typography>}
            </CardContent>
            <CardActions style={{display: 'flex'}}> 
                <Grid container alignItems='center' justifyContent="flex-end" spacing={1}> 
               
                    
                    {download &&
                    (<Grid item>
                        <BotaoOpcoes titulo={titulo} IDs={IDs} options={optionsDownload} type={'download'}/>
                        </Grid>
                    )}

                    {(acess && <Grid item>
                        <BotaoOpcoes IDs={IDs} type={'acess'} acess={acess}/> 
                        </Grid>)
                    
                    }
                

                    <IconButton 
                        size='small'
                        disableRipple
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                    >
                    <ExpandMoreIcon />
                    </IconButton>

                </Grid>


            </CardActions>


            <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>    
              <ArvoreArquivos data={data}/>
          </CardContent>
        </Collapse>









        </Card>
    </Zoom>
    </Grid>
)







}

export default Painel