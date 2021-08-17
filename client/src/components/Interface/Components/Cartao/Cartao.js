import React, {useState} from 'react'
import { Card, Box, CardActions, CardContent, IconButton, Grid, Typography, Icon, Zoom} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from 'moment';

import { useStyles} from './Cartao.styles.js';
import { useTheme } from '@material-ui/styles';

import iconAutocad from '../../../../assets/icons/iconAutocad.svg'
import iconRevit from '../../../../assets/icons/iconRevit.svg'
import iconSketch from '../../../../assets/icons/iconSketch.svg'

import BotaoOpcoes from '../BotaoOpcoes/BotaoOpcoes.js';
import Formulario from './Formulario/Formulario.js';
import ConfirmarDelete from './ConfirmarDelete.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFilePdf, faFileWord, faFileExcel, faFilePowerpoint, faFileArchive, faFileImage, faFileVideo, faFileAudio,} from '@fortawesome/free-solid-svg-icons'

const Cartao = ( {cartao, currentId, setCurrentId} ) => {


    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [confirmacao, setConfirmacao] = useState(false);

      const handleClickEdit = () => {
        setCurrentId(cartao._id);
        setOpen(true);
      };

      const handleClickDelete = () => {
        setCurrentId(cartao._id);
        setConfirmacao(true);
      };


    const formatos = (
        <>
        {cartao.zip ?
        (
         <FontAwesomeIcon className={classes.zipIcon} icon={faFileArchive}/> 
        ) : ''} 
        {cartao.pdf ?
        (
         <FontAwesomeIcon className={classes.pdfIcon} icon={faFilePdf}/> 
        ) : ''}  

        {cartao.word ?
        (
        <FontAwesomeIcon className={classes.wordIcon} icon={faFileWord}/>
        ) : ''}  

        {cartao.excel ?
        (
        <FontAwesomeIcon className={classes.excelIcon} icon={faFileExcel}/>
        ) : ''}  

        {cartao.ppt ?
        (
        <FontAwesomeIcon className={classes.pptIcon} icon={faFilePowerpoint}/>
        ) : ''} 
        {cartao.imagem ?
        (
        <FontAwesomeIcon className={classes.imageIcon} icon={faFileImage}/>
        ) : ''}   
        {cartao.video ?
        (
        <FontAwesomeIcon className={classes.videoIcon} icon={faFileVideo}/>
        ) : ''}   
        {cartao.audio ?
        (
        <FontAwesomeIcon className={classes.audioIcon} icon={faFileAudio}/>
        ) : ''}  
        {cartao.cad ?
        (
            <Icon fontSize='small' classes={{root: classes.iconRoot}}>
            <img alt={'cad'} className={classes.cadIcon} src={iconAutocad}/>
            </Icon>
        ) : ''} 
        {cartao.revit ?
        (
            <Icon fontSize='small' classes={{root: classes.iconRoot}}>
            <img alt={'rvt'} className={classes.revitIcon} src={iconRevit}/>
            </Icon>
        ) : ''} 
        {cartao.sketch ?
        (
            <Icon fontSize='small' classes={{root: classes.iconRoot}}>
            <img alt={'skp'} className={classes.revitIcon} src={iconSketch}/>
            </Icon>
        ) : ''} 
        </>
    )

    //------------------------- BOTÃO COM OPÇÕES --------------------------------------------

        const IDsDownload = [cartao.zip, cartao.pdf, cartao.word, cartao.excel, cartao.ppt, cartao.imagem, cartao.video, cartao.audio, cartao.cad, cartao.revit, cartao.sketch];
        const IDsView = [cartao.pdf, cartao.word, cartao.excel, cartao.ppt, cartao.imagem, cartao.video, cartao.audio];
        const optionsDownload = [cartao.zip && 'ZIP', cartao.pdf && 'PDF', cartao.word && 'Word' , cartao.excel && 'Excel', cartao.ppt && 'PPT', cartao.imagem && 'Imagem', cartao.video && 'Vídeo', cartao.audio && 'Áudio', cartao.cad && 'CAD', cartao.revit && 'RVT', cartao.sketch && 'SKP'];
        const optionsView = [cartao.pdf && 'PDF', cartao.word && 'Word' , cartao.excel && 'Excel', cartao.ppt && 'PPT', cartao.imagem && 'Imagem', cartao.video && 'Vídeo', cartao.audio && 'Áudio'];
        

        const download = optionsDownload.length > 0 ? true : false;
        const view = optionsView.length > 0 ? true : false;
    //------------------------  ------------------------------------------------------------------------


return (
    

                <Grid item xs={12} md={6} lg={4} style={{transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp, 
                    duration: theme.transitions.duration.leavingScreen,
            })}}>
                <Zoom in>
                    <Card variant={theme.palette.type === 'dark' ? 'outlined' : 'elevation'} elevation={20} style= {{position:'relative'}}>
                        <Typography align='center' variant='h6'>{cartao.titulo}  </Typography>
                        <Typography variant='h2' align='center'><IconButton color='primary' size='small' className={classes.editIcon} onClick={handleClickEdit}> <EditIcon/> </IconButton> </Typography>
                        <Typography variant='h2' align='center'><IconButton color='secondary' size='small' className={classes.deleteIcon} onClick={handleClickDelete}> <DeleteIcon /> </IconButton> </Typography>

                        <Formulario optionsDownload={optionsDownload} currentId={currentId} open={open} setOpen={setOpen}/>
                        <ConfirmarDelete currentId={currentId} open={confirmacao} setOpen={setConfirmacao}/>

                        <Typography
                            display="block"
                            color="textSecondary"
                            variant="caption"
                            align="center"
                        >
                            <Box component="span" fontStyle="italic">
                            {`Atualizado em: ${moment(cartao.dataAtualizacao).format('DD [de] MMM [de] YYYY')}`}
                            {``}
                            </Box>
                        </Typography>

                        <Typography
                            display="block"
                            color="textSecondary"
                            variant="caption"
                            align="center"
                        >
                            <Box component="span" fontStyle="italic">
                            {`Criado em: ${moment(cartao.dataCriacao).format('DD [de] MMM [de] YYYY')}`}
                            {``}
                            </Box>
                        </Typography>

                        <CardContent style={{display: 'flex', flexDirection:'column'}}>
                            <Box mx={'auto'} mt={-1}>
                            {cartao.key}
                            </Box>
                            <Box my={1}>
                            <Typography align='center' variant='subtitle2' color='textSecondary'>{cartao.descricao}</Typography>
                            </Box>

                            {optionsDownload.length === 1  && <Typography align='center' variant='subtitle1' color='textSecondary'> Formato:{formatos} </Typography>}
                            {optionsDownload.length > 1 && <Typography align='center' variant='subtitle1' color='textSecondary'> Formatos:{formatos} </Typography>}
                           
                        </CardContent>
                        <CardActions style={{width:'100%', display: 'flex',}}> 
                            <Grid container justifyContent='center' spacing={1}>    
                            {download && <Grid item xs={12} sm={optionsView.filter(Boolean).length !== 0 ? 6 : 12}>
                                 <BotaoOpcoes titulo={cartao.titulo} IDsDownload={IDsDownload} IDsView={IDsView} options={optionsDownload.filter(Boolean)} type={'download'}/>
                                </Grid>
                            }
                            {view &&
                                <Grid item xs={12} sm={6}>
                                 <BotaoOpcoes IDsDownload={IDsDownload} IDsView={IDsView} options={optionsView.filter(Boolean)} type={'view'}/> 
                                </Grid>
                            }
                            {cartao.acess &&
                                <Grid item xs={12}>
                                 <BotaoOpcoes IDsDownload={IDsDownload} IDsView={IDsView} type={'acess'} acess={cartao.acess}/> 
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