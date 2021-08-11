import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'

import { useStyles} from './Comercial.styles.js';



import  Cartao from '../../Interface/Components/Cartao/Cartao.js'
import Painel from '../../Interface/Components/Painel/Painel.js'

const Comercial = () => {

    const classes = useStyles();

    const dataManuais = {
      id: "root",
      name: "Manuais",
      format: "folder",
      children: [
        {
          id: "1",
          name: "Manual 01 - O time comercial",
          driveId: "1dMFWeIRr_QuCQ4QlBVILva7RkS2k-afI",
          format: "pdf",
        },
        {
          id: "2",
          name: "Manual 02 - Cliente na área!",
          driveId: "1J1_g3YgJEvmUXCHzpOFWIi8dOTnPeIAu",
          format: "pdf",
        },
        {
          id: "3",
          name: "Manual 03 - Sales Kanbam",
          driveId: "1fGCROYduw_LTe5tkuSYemqFfvNEl1Wm1",
          format: "pdf",
        },
        {
          id: "4",
          name: "Manual 04 - 5 dicas para uma reunião de negócios",
          driveId: '17OnImhfXC3Py82sepjVP9v8aYHyihcYX',
          format: "pdf",
        },
        {
          id: "5",
          name: "Manual 05 - Missão Opus no Verde",
          acess: "https://www.canva.com/design/DADjoB__wHE/d6mL7hwHLoSHXMqmIyUxDQ/view?utm_content=DADjoB__wHE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
          Download:false,
          View: false,
          format: "pdf"
        },
        {
          id: "6",
          name: "Manual 06 - Cold Calling",
          driveId: '1BzW1w4X8tleRR0gAUBVrSOLRzJKBlw1S',
          format: "pdf"
        },
        {
          id: "7",
          name: "Manual 07 - Roteiro de Cold Calling",
          driveId: '1xy0lhoXFaf6zv1fyhyit7pQ3eGJxYDc5',
          format: "pdf"
        },
        {
          id: "8",
          name: "Manual 08 - Proposta",
          driveId: '18dtEtYUgsxD4r3IAygJ88_l2vkP3SiDd',
          format: "pdf"
        },
        {
          id: "9",
          name: "Manual 09 - Visita Diagnóstica e Spin Selling",
          driveId: '1hlAI99CG4Ob4v-myCrN2D4LXr2pOxs4S',
          format: "pdf"
        },
        {
          id: "10",
          name: "Diagnóstico e Spin Selling", 
          acess: 'https://www.canva.com/design/DADzbvFOlB0/YLX3mrzIcIqqqfRSXSMmjg/view?_branch_match_id=756881309779819524#2',
          Download:false,
          View: false,
          format: "pdf"
        },
        {
          id: "11",
          name: "Apresentação de Proposta",
          driveId:'1PnQ89d_MoDFkJXFrleCVjN2dxYTa2ZP7',
          format: "pdf"
        }
      ]
    };


    const dataYoutube = {
      id: "root",
      name: "Treinamentos - Youtube",
      format: 'folder',
      children: [
        {id: 1,
        name: 'Treinamento de vendas Easy',
        format: 'folder',
        children: [
            {id: 1.1,
            name: '1° DIA DE CAPACITAÇÃO DE VENDAS EASY (22/06/2020)',
            format: 'video',
            acess: 'https://www.youtube.com/watch?v=ibXbqs4SP7c&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=1',
            Download: false,
            View: false,
            },
            {id: 1.2,
              name: '2° DIA DE CAPACITAÇÃO DE VENDAS EASY (23/06/2020)',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=M4OOcBoyzK0&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=2',
              Download: false,
              View: false,
              },
            {id: 1.3,
              name: '3° DIA DE CAPACITAÇÃO DE VENDAS EASY (24/06/2020)',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=NqN9uLs1Bk8&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=3',
              Download: false,
              View: false,
              },
            {id: 1.4,
              name: '4° DIA DE CAPACITAÇÃO DE VENDAS EASY (25/06/2020)',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=Lr_32XiGe6I&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=4',
              Download: false,
              View: false,
            },
            {id: 1.5,
              name: '1º DIA TREINAMENTO DE GESTORES COMERCIAIS',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=r4Wk7_k4iGg&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=5',
              Download: false,
              View: false,
            },
            {id: 1.6,
              name: '2º DIA TREINAMENTO DE GESTORES COMERCIAIS',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=1LCfiCDX7qQ&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=6',
              Download: false,
              View: false,
            },
            {id: 1.7,
              name: '3º DIA TREINAMENTO DE GESTORES COMERCIAIS',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=fpTCLOSp1Po&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=7',
              Download: false,
              View: false,
            },
            {id: 1.8,
              name: 'CURSO GESTORES COMERCIAIS EASY - DIA 1',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=TEOC92T40gE&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=8',
              Download: false,
              View: false,
            },
            {id: 1.9,
              name: 'CURSO GESTORES COMERCIAIS EASY - DIA 2',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=ZF9MzKHqiik&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=9',
              Download: false,
              View: false,
            },
            {id: 1.10,
              name: 'CURSO GESTORES COMERCIAIS EASY - DIA 3',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=Dx07GB2lC7s&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=10',
              Download: false,
              View: false,
            },
            {id: 1.11,
              name: 'CURSO GESTORES COMERCIAIS EASY - DIA 4',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=oKrzGhuCHbk&list=PLl-_Nb3LwlE4cUCCGZtcAabaT67M7folq&index=11',
              Download: false,
              View: false,
            },
        ]
        },
        {id: 2,
          name: 'Mentorias Easy (vendas)',
          format: 'folder',
          children: [
              {id: 2.1,
              name: 'Mentoria Easy 18/07/2020 - Parte 1',
              format: 'video',
              acess: 'https://www.youtube.com/watch?v=C5a_VfvHJK8&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=1',
              Download: false,
              View: false,
              },
              {id: 2.2,
                name: 'Mentoria Easy 18/07/2020 - Parte 2',
                format: 'video',
                acess: 'https://www.youtube.com/watch?v=y2qQ2Brr-lY&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=2',
                Download: false,
                View: false,
              },
              {id: 2.3,
                name: 'MENTORIA EASY (12/08/2020)',
                format: 'video',
                acess: 'https://www.youtube.com/watch?v=aLYrGRUkMCg&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=3',
                Download: false,
                View: false,
              },
              {id: 2.4,
                name: 'MENTORIA EASY (26/08) PARTE 1',
                format: 'video',
                acess: 'https://www.youtube.com/watch?v=FmF0ZKOFvFw&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=4',
                Download: false,
                View: false,
              },
              {id: 2.5,
                name: 'MENTORIA EASY (26/08) PARTE 2',
                format: 'video',
                acess: 'https://www.youtube.com/watch?v=GpCKsG_VZKw&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=5',
                Download: false,
                View: false,
              },
              {id: 2.6,
                name: 'MENTORIA EASY 04/11/2020',
                format: 'video',
                acess: 'https://www.youtube.com/watch?v=lzSYfXk7ykY&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=6',
                Download: false,
                View: false,
              },
              {id: 2.7,
                name: 'MENTORIA EASY 1/2 - 18/11/2020',
                format: 'video',
                acess: 'https://www.youtube.com/watch?v=H-PqsUecAEk&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=7',
                Download: false,
                View: false,
              },
              {id: 2.8,
                name: 'MENTORIA EASY 2/2 - 18/11/2020',
                format: 'video',
                acess: 'https://www.youtube.com/watch?v=SAonRrI_wfA&list=PLl-_Nb3LwlE7lMS4w4IgQ-msOmkvr6b93&index=8',
                Download: false,
                View: false,
              },
          ]
          },
      ]
    }

    const dataExemplo = {
      id: "root",
      name: "Pasta Principal",
      format: 'folder',
      children: [
        {id: 1,
        name: 'Subpasta 1',
        format: 'folder',
        children: [
            {id: 1.1,
            name: 'ZIP',
            format: 'zip',
            acess: 'true',
            },
            {id: 1.2,
              name: 'PDF',
              format: 'pdf',
              acess: 'true',
              },
            {id: 1.3,
              name: 'WORD',
              format: 'word',
              acess: 'true',
              },
            {id: 1.4,
              name: 'EXCEL',
              format: 'excel',
              acess: 'true',
            },
            {id: 1.5,
              name: 'POWERPOINT',
              format: 'ppt',
              acess: 'true',
            },
            {id: 1.6,
              name: 'IMAGEM',
              format: 'imagem',
              acess: 'true',
            },
            {id: 1.7,
              name: 'AUDIO',
              format: 'audio',
              acess: 'true',
            },
        ]
        },
        {id: 2,
          name: 'Subpasta 2',
          format: 'folder',
          children: [
              {id: 2.1,
              name: 'ZIP',
              format: 'zip',
              acess: 'true',
              },
              {id: 2.2,
                name: 'PDF',
                format: 'pdf',
                acess: 'true',
              },
              {id: 2.3,
                name: 'WORD',
                format: 'word',
                acess: 'true',
              },
              {id: 2.4,
                name: 'EXCEL',
                format: 'excel',
                acess: 'true',
              },
              {id: 2.5,
                name: 'POWERPOINT',
                format: 'ppt',
                acess: 'true',
              },
              {id: 2.6,
                name: 'IMAGEM',
                format: 'imagem',
                acess: 'true',
              },
              {id: 2.7,
                name: 'AUDIO',
                format: 'audio',
                acess: 'true',
              },
          ]
          },
        {id: 3,
          name: 'Arquivo Solto',
          format: 'zip',  
        },
      ]
    }



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



        <Cartao pdf={'1Qo8uAnTZZl-sh9gYTWXY8lo3FgNx5yUN'} titulo='PORTFÓLIO' descricao='Atual portfólio de serviços da empresa' icone={<BurstModeIcon className={classes.cardIcon} color='secondary'/>}/>  

        <Cartao pdf={'18AhEI13ZVHK0BCF86fJLXF7qM5yfQBm_'} titulo='CHECKLIST' descricao='Etapas necessárias para entrega de um projeto' icone={<AssignmentTurnedInIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao pdf={'1HYP4uI7g-qF3OZb2CrdYKDZQHPAqg0qT'} titulo='PESQUISA DE SATISFAÇÃO' descricao='Questionário para coleta do NPS com os clientes' icone={<EmojiEmotionsIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao word={'12OxwwVw1M6WZe14k_j0SeYhX0jlnDI_G'} ppt={'1_n2oUGtqFw_GsBJ4OzGudzOy718EF3tO'} acess={'https://www.canva.com/design/DAEWTelGz1k/share/preview?token=rdRHETW6KjR5QcOaWVqAQw&role=EDITOR&utm_content=DAEWTelGz1k&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'} titulo='MODELO DE PROPOSTA' descricao='Modelos da apresentação e do documento impresso para propostas de serviço' icone={<ChromeReaderModeIcon className={classes.cardIcon} color='secondary'/>}/>

        <Cartao ppt={'1typf8BzFVoJatblexzXAQ8_WLuiDXERg'} acess={'https://www.canva.com/design/DAEUcPiLze8/share/preview?token=XuwOR116MpEsO8YZrD1lYg&role=EDITOR&utm_content=DAEUcPiLze8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'} titulo='CARTA DE AGRADECIMENTO' descricao='Modelo de carta personalizada que deve ser entregue a cada cliente ao final dos projetos' icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/> 

        <Cartao acess={'dsfds'} revit={'fsfsdfds'} sketch={'sfsdfdssf'} cad={'fdsfsd'} zip={'232'} pdf={'weeqwe'} word={'dsdas'} excel={'sdsada'} ppt={'sdasdsa'} imagem={'dadsa'} video={'sdasd'} audio={'dfdfsd'} titulo='EXEMPLO DE CARTÃO' descricao='Exemplo do modelo e funcionalidade do cartão' icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/> 

        <Painel data={dataManuais} zip={'1R13kKlVTpPxXT4HM1rV5cDzmv4-xzEBp'} download={true} titulo={'MANUAIS'} descricao={'Arquivo com os manuais produzidos pela Diretoria Comercial'} icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/>

        <Painel data={dataYoutube} titulo={'TREINAMENTOS'} descricao={'Vídeos de treinamentos referentes à Diretoria Comercial'} icone={<YouTubeIcon className={classes.cardIcon} color='secondary'/>}/>

        <Painel data={dataExemplo} zip={'fdfsd'} acess='dsdsa' download={true} titulo={'EXEMPLO DE PAINEL'} descricao={'Exemplo do modelo e funcionalidade do painel'} icone={<ImportContactsIcon className={classes.cardIcon} color='secondary'/>}/>



        

            </Grid>


        </Box>

        </>

)};

export default Comercial