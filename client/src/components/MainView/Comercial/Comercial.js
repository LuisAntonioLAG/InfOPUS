import React, {useState} from "react";
import {Button, Card, CardActions, CardContent, Box, Grid, Typography, Zoom} from "@material-ui/core";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GetAppIcon from '@material-ui/icons/GetApp';

import { useStyles} from './Comercial.styles.js';

import { Checklist_de_Entrega } from "../../../assets/pdfs/urls.js";
import Checklist from "./Checklist.js";

const Comercial = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `Checklist_de_Entrega.pdf`;
        link.href = Checklist_de_Entrega;
        link.click();
      };

    const handlePDF = () => {
    setOpen(true);
    }



    return(
        <>

        <Checklist open={open} setOpen={setOpen} />

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

            <Grid className={classes.root} container spacing={2}>

                <Grid item xs={12} md={6} lg={4}>
                    <Zoom in>
                    <Card elevation={20}>
                        <Typography align='center' variant='h5'>CHECKLIST</Typography>
                        <CardContent style={{display: 'flex', flexDirection:'column'}}>
                            <AssignmentTurnedInIcon className={classes.cardIcon} color='secondary'/>
                            <Typography align='center' variant='subtitle1' color='textSecondary'>Etapas necessárias para entrega de um projeto</Typography>
                            <Typography align='center' variant='subtitle1' color='textSecondary'>Formato: <Box component="span" fontStyle='italic'>.pdf</Box></Typography>
                        </CardContent>
                        <CardActions style={{display: 'flex'}}>
                            <Grid container justifyContent='center' spacing={1}>
                                <Grid item xs={6}>
                                    <Button onClick={onDownload} fullWidth className={classes.button} startIcon={<GetAppIcon/>} variant='contained' color='secondary'  disableRipple> Baixar </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button fullWidth className={classes.button} disableRipple variant='contained' color='primary' onClick={handlePDF}>Visualizar</Button>
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