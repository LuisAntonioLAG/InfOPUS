import React, {useState} from "react";
import { Typography, Box , Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core";
import {Link} from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FeedbackIcon from '@material-ui/icons/Feedback';


import { useStyles} from './Sobre.styles.js';


const Infos = () => {
    const classes = useStyles();

    //states
    const [expanded, setExpanded] = useState(false);


    //handlers
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };




return(
<>

<div>
<Box p={5} style={{display:'flex'}} alignItems='center'>
<InfoIcon className={classes.titleIcon} color='secondary' style={{ fontSize: 50 }}/>
<Typography color='secondary' align='left' variant='h2'>
  Sobre
</Typography>
</Box>
</div>

<div>
<Box  mx={13}>
<Typography align='justify' variant='h6'>
Surgiu alguma dúvida sobre o InfOPUS? Então confere o nosso <Box component="span" fontWeight='fontWeightBold'>FAQ</Box>!
</Typography>
</Box>
</div>

<div className={classes.root}>
    <Box  mx={13} mt={5} >  
      <Box mb={2}>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            id="panel1bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography align='justify' variant='subtitle1'> O QUE É O INFOPUS? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align='justify' variant='body1'>
            O InfOPUS é um repositório onde os membros da OPUS podem arquivar e consultar, de forma fácil e centralizada, informações variadas que sejam relevantes 
            para todos na empresa. 
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Box>

        <Box mb={2}>
        <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
                 id="panel2bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography align='justify' variant='subtitle1'> QUAL É O OBJETIVO DO INFOPUS? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align='justify' variant='body1'>
            O principal objetivo desse portal é facilitar a transmissão de conhecimento dentro da empresa, auxiliando, principalmente, os processos de mudança de gestão e                   acolhimento de novos membros. 
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Box>


        <Box mb={2}>
        <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
                 id="panel3bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography align='justify' variant='subtitle1'> COMO POSSO CONTRIBUIR COM O INFOPUS? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align='justify' variant='body1'>
            A maioria das páginas do site possuem botões para acrescentar, editar e deletar dados. Ainda assim, caso você queira alterar um conteúdo que não
            apresenta essas opções, entre em contato com o atual moderador do portal. Você também pode utilizar a aba <Link className={classes.link} to={'/feedback/'}>
            <Box component="span" fontWeight='fontWeightBold'>FEEDBACK <FeedbackIcon fontSize='inherit'/></Box> </Link> para compartilhar com o moderador sugestões ou 
            outros pedidos relacionados ao InfOPUS.
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Box>

        
        <Box>
        <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
                 id="panel4bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography align='justify' variant='subtitle1'> COMO CADASTRAR UM EMAIL E SENHA PARA LOGIN? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align='justify' variant='body1'>
            O membrOPUS interessado em fazer seu cadastro deve pedir ao diretor da sua diretoria para que entre em contato com o moderador do portal. Então, espere até que este             entre em contato com você para a coleta de dados e cadastro efetivo no portal.
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Box>
    </Box>







    
</div>



</>

)};

export default Infos