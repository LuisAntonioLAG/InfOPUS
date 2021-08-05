import React, {useState} from "react";
import {Button, Hidden, Card, CardActions, CardContent, Box, Grid, Typography, Zoom, IconButton} from "@material-ui/core";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GetAppIcon from '@material-ui/icons/GetApp';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import { useStyles} from './Comercial.styles.js';

import { Checklist_de_Entrega, Portfolio_OPUS, Pesquisa_Satisfacao } from "../../../assets/pdfs/urls.js";
import Checklist from "./Checklist.js";
import Portfolio from './Portfolio.js';
import Pesquisa from './Pesquisa.js';


const Comercial = () => {

    const classes = useStyles();
    const [openChecklist, setOpenChecklist] = useState(false);
    const [openPortfolio, setOpenPortfolio] = useState(false);
    const [openPesquisa, setOpenPesquisa] = useState(false);

    const onDownloadChecklist = () => {
        const link = document.createElement("a");
        link.download = `Checklist_de_Entrega.pdf`;
        link.href = Checklist_de_Entrega;
        link.click();
      };

      const onDownloadPortfolio = () => {
        const link = document.createElement("a");
        link.download = `Portfolio_OPUS_Engenharia.pdf`;
        link.href = Portfolio_OPUS;
        link.click();
      };

      const onDownloadPesquisa = () => {
        const link = document.createElement("a");
        link.download = `Pesquisa_de_Satisfação.pdf`;
        link.href = Pesquisa_Satisfacao;
        link.click();
      };


    const handlePDFChecklist = () => {
    setOpenChecklist(true);
    }

    const handlePDFPortfolio = () => {
        setOpenPortfolio(true);
        }

    const handlePDFPesquisa = () => {
       setOpenPesquisa(true);
    }

    



    return(
        <>


        <Portfolio open={openPortfolio} setOpen={setOpenPortfolio} />
        <Checklist open={openChecklist} setOpen={setOpenChecklist} />
        <Pesquisa open={openPesquisa} setOpen={setOpenPesquisa} />

        <div>
        <Box p={5} style={{display:'flex'}} alignItems='center'>
        <MonetizationOnIcon className={classes.titleIcon} color='secondary' style={{ fontSize: 50 }}/>
        <Typography color='secondary' align='left' variant='h2'>
          Comercial
        </Typography>
        </Box>
        </div>
        
        <div>
        <Box  mx={13}>
        <Typography variant='h6'>
        Bem-vindo à página da diretoria <Box component="span" fontWeight='fontWeightBold'>COMERCIAL</Box>! 
        </Typography>
        </Box>
        </div>

        <Box className={classes.container} mx={13} mt={5} >

            <Grid className={classes.root} container spacing={3}>


                <Grid item xs={12} md={6} lg={4}>
                    <Zoom in>
                    <Card elevation={20}>
                        <Typography align='center' variant='h5'>PORTFÓLIO</Typography>
                        <CardContent style={{display: 'flex', flexDirection:'column'}}>
                            <ImportContactsIcon className={classes.cardIcon} color='secondary'/>
                            <Typography noWrap align='center' variant='subtitle1' color='textSecondary'>Atual portfólio de serviços da empresa</Typography>
                            <Typography align='center' variant='subtitle1' color='textSecondary'>Formato: <Box component="span" fontStyle='italic'>.pdf</Box></Typography>
                        </CardContent>
                        <CardActions style={{display: 'flex'}}>
                            <Grid container justifyContent='center' spacing={1}>
                                <Grid item xs={6}>
                                    <Hidden smDown>
                                    <Button onClick={onDownloadPortfolio} fullWidth startIcon={<GetAppIcon/>} variant='contained' color='secondary'  disableRipple> Baixar </Button>
                                    </Hidden>
                                    <Hidden mdUp>
                                    <IconButton  onClick={onDownloadPortfolio} color="secondary" >
                                        <GetAppIcon />
                                    </IconButton>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={6}>
                                     <Hidden smDown>
                                    <Button fullWidth disableRipple startIcon={<FindInPageOutlinedIcon/>} variant='contained' color='primary' onClick={handlePDFPortfolio}>Visualizar</Button>
                                    </Hidden>
                                    <Hidden mdUp>
                                    <IconButton onClick={handlePDFPortfolio} color="primary" >
                                        <FindInPageOutlinedIcon />
                                    </IconButton>
                                    </Hidden>
                                </Grid>
                            </Grid>

                        </CardActions>
                    </Card>
                    </Zoom>
                </Grid>
            
                <Grid item xs={12} md={6} lg={4}>
                    <Zoom in>
                    <Card elevation={20}>
                        <Typography align='center' variant='h5'>CHECKLIST</Typography>
                        <CardContent style={{display: 'flex', flexDirection:'column'}}>
                            <AssignmentTurnedInIcon className={classes.cardIcon} color='secondary'/>
                            <Typography noWrap align='center' variant='subtitle1' color='textSecondary'>Etapas necessárias para entrega de um projeto</Typography>
                            <Typography align='center' variant='subtitle1' color='textSecondary'>Formato: <Box component="span" fontStyle='italic'>.pdf</Box></Typography>
                        </CardContent>
                        <CardActions style={{display: 'flex'}}>
                            <Grid container justifyContent='center' spacing={1}>
                                <Grid item xs={6}>
                                     <Hidden smDown>
                                    <Button onClick={onDownloadChecklist} fullWidth startIcon={<GetAppIcon/>} variant='contained' color='secondary'  disableRipple> Baixar </Button>
                                    </Hidden>
                                    <Hidden mdUp>
                                    <IconButton  onClick={onDownloadChecklist} color="secondary" >
                                        <GetAppIcon />
                                    </IconButton>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={6}>
                                    <Hidden smDown>
                                    <Button fullWidth disableRipple startIcon={<FindInPageOutlinedIcon/>} variant='contained' color='primary' onClick={handlePDFChecklist}>Visualizar</Button>
                                    </Hidden>
                                    <Hidden mdUp>
                                    <IconButton  onClick={handlePDFChecklist} color="primary" >
                                        <FindInPageOutlinedIcon />
                                    </IconButton>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                    </Zoom>
                </Grid>



                <Grid item xs={12} md={6} lg={4}>
                    <Zoom in>
                    <Card elevation={20}>
                        <Typography align='center' variant='h5'>PESQUISA DE SATISFAÇÃO</Typography>
                        <CardContent style={{display: 'flex', flexDirection:'column'}}>
                            <EmojiEmotionsIcon className={classes.cardIcon} color='secondary'/>
                            <Typography noWrap align='center' variant='subtitle1' color='textSecondary'>Questionário para coleta do NPS com os clientes.</Typography>
                            <Typography align='center' variant='subtitle1' color='textSecondary'>Formato: <Box component="span" fontStyle='italic'>.pdf</Box></Typography>
                        </CardContent>
                        <CardActions style={{display: 'flex'}}>
                            <Grid container justifyContent='center' spacing={1}>
                                <Grid item xs={6}>
                                     <Hidden smDown>
                                    <Button onClick={onDownloadPesquisa} fullWidth startIcon={<GetAppIcon/>} variant='contained' color='secondary'  disableRipple> Baixar </Button>
                                    </Hidden>
                                    <Hidden mdUp>
                                    <IconButton  onClick={onDownloadPesquisa} color="secondary" >
                                        <GetAppIcon />
                                    </IconButton>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={6}>
                                    <Hidden smDown>
                                    <Button fullWidth disableRipple startIcon={<FindInPageOutlinedIcon/>} variant='contained' color='primary' onClick={handlePDFPesquisa}>Visualizar</Button>
                                    </Hidden>
                                    <Hidden mdUp>
                                    <IconButton  onClick={handlePDFPesquisa} color="primary" >
                                        <FindInPageOutlinedIcon />
                                    </IconButton>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                    </Zoom>
                </Grid>


            </Grid>


        </Box>

        </>

)};

export default Comercial