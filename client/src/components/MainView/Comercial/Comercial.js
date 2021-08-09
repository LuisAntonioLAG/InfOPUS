import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHandHoldingUsd, faFilePdf} from '@fortawesome/free-solid-svg-icons'

import { useStyles} from './Comercial.styles.js';



import  Cartao from '../../Interface/Components/Cartao/Cartao.js'
import Painel from '../../Interface/Components/Painel/Painel.js'

const Comercial = () => {

    const classes = useStyles();

    const dataManuais = {
        id: 'root',
        name: 'Manuais',
        format: 'folder',
        children: [
          {
            id: '1',
            name: 'Manual 01 - O time comercial',
            to: 'https://drive.google.com/file/d/1dMFWeIRr_QuCQ4QlBVILva7RkS2k-afI/view',
            format: 'pdf',
          },
          {
            id: '2',
            name: 'Manual 02 - Cliente na área!',
            format: 'pdf',
          },
          {
            id: '3',
            name: 'Manual 03 - Sales Kanbam',
            format: 'pdf',
          },
          {
            id: '4',
            name: 'Manual 04 - 5 dicas para uma reunião de negócios',
            format: 'pdf',
          },
          {
            id: '5',
            name: 'Manual 05 - Missão Opus no Verde',
            format: 'pdf',
          },
          {
            id: '6',
            name: 'Manual 06 - Cold Calling',
            format: 'pdf',
          },
          {
            id: '7',
            name: 'Diagnóstico e Spin Selling',
            format: 'pdf',
          },
          {
            id: '8',
            name: 'Apresentação de Proposta',
            format: 'pdf',
          },
          {
            id: '9',
            name: 'Manual 07 - Roteiro de Cold Calling',
            format: 'pdf',
          },
          {
            id: '10',
            name: 'Manual 08 - Proposta',
            format: 'pdf',
          },
          {
            id: '11',
            name: 'Manual 09 - Visita Diagnóstica e Spin Selling',
            format: 'pdf',
          },
        ],
      };



    return(
        <>

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
        <Typography align='justify' variant='h6'>
        Bem-vindo à página da diretoria <Box component="span" fontWeight='fontWeightBold'>COMERCIAL</Box>! 
        </Typography>
        </Box>
        </div>

        <Box className={classes.container} mx={2} mt={5} >

            <Grid className={classes.root} container spacing={3}>



        <Cartao pdf={'1Qo8uAnTZZl-sh9gYTWXY8lo3FgNx5yUN'} titulo='PORTFÓLIO' descricao='Atual portfólio de serviços da empresa' icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/>  

        <Cartao pdf={'18AhEI13ZVHK0BCF86fJLXF7qM5yfQBm_'} titulo='CHECKLIST' descricao='Etapas necessárias para entrega de um projeto' icone={<AssignmentTurnedInIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao pdf={'1HYP4uI7g-qF3OZb2CrdYKDZQHPAqg0qT'} titulo='PESQUISA DE SATISFAÇÃO' descricao='Questionário para coleta do NPS com os clientes' icone={<EmojiEmotionsIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao word={'12OxwwVw1M6WZe14k_j0SeYhX0jlnDI_G'} ppt={'1_n2oUGtqFw_GsBJ4OzGudzOy718EF3tO'} acess={'https://www.canva.com/design/DAEWTelGz1k/share/preview?token=rdRHETW6KjR5QcOaWVqAQw&role=EDITOR&utm_content=DAEWTelGz1k&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'} titulo='MODELO DE PROPOSTA' descricao='Modelos da apresentação e do documento impresso para propostas de serviço' icone={<ChromeReaderModeIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao ppt={'1typf8BzFVoJatblexzXAQ8_WLuiDXERg'} acess={'https://www.canva.com/design/DAEUcPiLze8/RrMFcBTz4DYkI-PgvoBCdQ/edit'} titulo='CARTA DE AGRADECIMENTO' descricao='Modelo de carta personalizada que deve ser entregue a cada cliente ao final dos projetos' icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/> 

        <Cartao acess={'dsfds'} revit={'fsfsdfds'} sketch={'sfsdfdssf'} cad={'fdsfsd'} zip={'232'} pdf={'weeqwe'} word={'dsdas'} excel={'sdsada'} ppt={'sdasdsa'} imagem={'dadsa'} video={'sdasd'} audio={'dfdfsd'} titulo='EXEMPLO DE CARTÃO' descricao='Exemplo do modelo e funcionalidade do cartão' icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/> 

        <Painel data={dataManuais} zip={'fdfsd'} download={true} titulo={'MANUAIS'} descricao={'Arquivo com os manuais produzidos pela Diretoria Comercial'} icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/>
    
        <Painel data={dataManuais} zip={'fdfsd'} acess='dsdsa' download={true} titulo={'EXEMPLO DE PAINEL'} descricao={'Exemplo do modelo e funcionalidade do painel'} icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/>

        

            </Grid>


        </Box>

        </>

)};

export default Comercial