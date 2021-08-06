import React, {useState} from "react";
import {Button, Card, CardActions, CardContent, Box, Grid, Typography, Zoom} from "@material-ui/core";

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHandHoldingUsd, faFilePdf, faFileDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { useStyles} from './Comercial.styles.js';

import { Checklist_de_Entrega, Portfolio_OPUS, Pesquisa_Satisfacao } from "../../../assets/pdfs/comercial/urlsDownload.js";
import Checklist from "./Checklist.js";
import Portfolio from './Portfolio.js';
import Pesquisa from './Pesquisa.js';


import  Cartao from '../../Interface/Components/Card.js'

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
        <FontAwesomeIcon className={classes.titleIcon} icon={faHandHoldingUsd} />
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



        <Cartao pdf={[true, '1Qo8uAnTZZl-sh9gYTWXY8lo3FgNx5yUN']} titulo='PORTFÓLIO' descricao='Atual portfólio de serviços da empresa' icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/>  

        <Cartao pdf={[true, '18AhEI13ZVHK0BCF86fJLXF7qM5yfQBm_']} titulo='CHECKLIST' descricao='Etapas necessárias para entrega de um projeto' icone={<AssignmentTurnedInIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao pdf={[true, '1HYP4uI7g-qF3OZb2CrdYKDZQHPAqg0qT']} titulo='PESQUISA DE SATISFAÇÃO' descricao='Questionário para coleta do NPS com os clientes' icone={<EmojiEmotionsIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao pdf={[true, 'ewrewqq']} word={[true, '1Qo8uAnTZZl-sh9gYTWXY8lo3FgNx5yUN' ]} excel={[true, 'swdsd a']} ppt={[true, 'swdsd a']} titulo='PORTFÓLIO' descricao='Atual portfólio de serviços da empresa' icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/> 



            </Grid>


        </Box>

        </>

)};

export default Comercial