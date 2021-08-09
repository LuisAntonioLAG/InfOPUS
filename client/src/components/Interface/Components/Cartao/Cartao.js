import React, {useState, useEffect} from 'react'
import {Card, Box, CardActions, CardContent, IconButton, Grid, Typography, Icon, Zoom} from "@material-ui/core";
import PublishIcon from '@material-ui/icons/Publish';

import { useStyles} from './Cartao.styles.js';
import { useTheme } from '@material-ui/styles';

import iconAutocad from '../../../../assets/icons/iconAutocad.svg'
import iconRevit from '../../../../assets/icons/iconRevit.svg'
import iconSketch from '../../../../assets/icons/iconSketch.svg'

import BotaoOpcoes from '../BotaoOpcoes/BotaoOpcoes.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFilePdf, faFileWord, faFileExcel, faFilePowerpoint, faFileArchive, faFileImage, faFileVideo, faFileAudio,} from '@fortawesome/free-solid-svg-icons'

const Cartao = ( props ) => {
    const {
        titulo = '',
        icone = '',
        descricao = '',
        zip = '',
        pdf = '', 
        word = '',
        excel = '', 
        ppt = '', 
        imagem = '',
        video = '',
        audio = '',
        cad = '',
        revit = '',
        sketch = '',
        acess = '',
        download = true,
        view = true,
    } = props

    const theme = useTheme();
    const classes = useStyles();
    const [espessura, setEspessura] = useState(window.outerWidth)

    useEffect(() => {
        const updateWindowWidth = () => {
          setEspessura(window.outerWidth)
        }
    
        window.addEventListener('resize', updateWindowWidth);
    
        return () => window.removeEventListener('resize', updateWindowWidth);
      }, []);

    const formatos = (
        <>
        {zip ?
        (
         <FontAwesomeIcon className={classes.zipIcon} icon={faFileArchive}/> 
        ) : ''} 
        {pdf ?
        (
         <FontAwesomeIcon className={classes.pdfIcon} icon={faFilePdf}/> 
        ) : ''}  

        {word ?
        (
        <FontAwesomeIcon className={classes.wordIcon} icon={faFileWord}/>
        ) : ''}  

        {excel ?
        (
        <FontAwesomeIcon className={classes.excelIcon} icon={faFileExcel}/>
        ) : ''}  

        {ppt ?
        (
        <FontAwesomeIcon className={classes.pptIcon} icon={faFilePowerpoint}/>
        ) : ''} 
        {imagem ?
        (
        <FontAwesomeIcon className={classes.imageIcon} icon={faFileImage}/>
        ) : ''}   
        {video ?
        (
        <FontAwesomeIcon className={classes.videoIcon} icon={faFileVideo}/>
        ) : ''}   
        {audio ?
        (
        <FontAwesomeIcon className={classes.audioIcon} icon={faFileAudio}/>
        ) : ''}  
        {cad ?
        (
            <Icon fontSize='small' classes={{root: classes.iconRoot}}>
            <img className={classes.cadIcon} src={iconAutocad}/>
            </Icon>
        ) : ''} 
        {revit ?
        (
            <Icon fontSize='small' classes={{root: classes.iconRoot}}>
            <img className={classes.revitIcon} src={iconRevit}/>
            </Icon>
        ) : ''} 
        {sketch ?
        (
            <Icon fontSize='small' classes={{root: classes.iconRoot}}>
            <img className={classes.revitIcon} src={iconSketch}/>
            </Icon>
        ) : ''} 
        </>
    )

    //------------------------- BOTÃO COM OPÇÕES --------------------------------------------

        const IDs = [zip, pdf, word, excel, ppt, imagem, video, audio, cad, revit, sketch];
        const optionsDownload = [IDs[0] && 'ZIP', IDs[1] && 'PDF', IDs[2] && 'Word' , IDs[3] && 'Excel', IDs[4] && 'PPT', IDs[5] && 'Imagem', IDs[6] && 'Video', IDs[7] && 'Audio', IDs[8] && 'CAD', IDs[9] && 'RVT', IDs[10] && 'SKP'].filter(Boolean);
        const optionsView = [IDs[1] && 'PDF', IDs[2] && 'Word' , IDs[3] && 'Excel', IDs[4] && 'PPT', IDs[5] && 'Imagem', IDs[6] && 'Video', IDs[7] && 'Audio'].filter(Boolean);
        
    //------------------------  ------------------------------------------------------------------------


return (

                <Grid item xs={12} md={6} lg={4} style={{transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp, 
                    duration: theme.transitions.duration.leavingScreen,
            })}}>
                <Zoom in>
                    <Card elevation={20}  style= {{position:'relative', height:'100%'}}>
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
                            <Box mb={espessura>600 ? 10 : 15}>
                            {optionsDownload.length === 1  && <Typography align='center' variant='subtitle1' color='textSecondary'> Formato:{formatos} </Typography>}
                            {optionsDownload.length > 1 && <Typography align='center' variant='subtitle1' color='textSecondary'> Formatos:{formatos} </Typography>}
                            </Box>
                        </CardContent>
                        <CardActions style={{width:'100%', display: 'flex', position:'absolute', bottom: 0}}> 
                            <Grid container justifyContent='center' spacing={1}>    
                            {download && <Grid item xs={12} sm={6}>
                                 <BotaoOpcoes titulo={titulo} IDs={IDs} options={optionsDownload} type={'download'}/>
                                </Grid>
                            }
                            {view &&
                                <Grid item xs={12} sm={6}>
                                 <BotaoOpcoes IDs={IDs} options={optionsView} type={'view'}/> 
                                </Grid>
                            }
                            {acess &&
                                <Grid item xs={12}>
                                 <BotaoOpcoes IDs={IDs} type={'acess'} acess={acess}/> 
                                </Grid>
                            }

                            </Grid>
                        </CardActions>
                    </Card>
                </Zoom>
                </Grid>


);

}


export default Cartao