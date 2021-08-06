import React from 'react'
import {Button, Card, CardActions, CardContent, ButtonGroup, Popper, MenuList, MenuItem, Grow, ClickAwayListener , Grid, Typography, Paper, Zoom} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { useStyles} from './Card.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFilePdf, faFileWord, faFileExcel, faFileDownload, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'

const Cartao = ( props ) => {
    const {
        titulo = '',
        icone = '',
        descricao = '',
        pdf = [false,''], 
        word = [false,''],
        excel = [false,''], 
        ppt = [false,''], 
        id = "",
    } = props

    const classes = useStyles();

    const formatos = (
        <>
        {pdf[0] ?
        (
         <FontAwesomeIcon className={classes.pdfIcon} icon={faFilePdf}/> 
        ) : ''}  

        {word[0] ?
        (
        <FontAwesomeIcon className={classes.wordIcon} icon={faFileWord}/>
        ) : ''}  

        {excel[0] ?
        (
        <FontAwesomeIcon className={classes.excelIcon} icon={faFileExcel}/>
        ) : ''}  

        {ppt[0] ?
        (
        <FontAwesomeIcon className={classes.pptIcon} icon={faFilePowerpoint}/>
        ) : ''}  
        </>
    )

    //------------------------- BOTÃO DE DOWNLOAD COM OPÇÕES --------------------------------------------

        const [openDownload, setOpenDownload] = React.useState(false); 
        const anchorRefDownload = React.useRef(null);
        const [selectedIndexDownload, setSelectedIndexDownload] = React.useState(0);

        const handleDownloadItemClick = (event, index) => {
            setSelectedIndexDownload(index);
            setOpenDownload(false);
          };
        
          const handleDownloadToggle = () => {
            setOpenDownload((prevOpenDownload) => !prevOpenDownload);
          };
        
          const handleCloseDownload = (event) => {
            if (anchorRefDownload.current && anchorRefDownload.current.contains(event.target)) {
              return;
            }
        
            setOpenDownload(false);
          };

          const handleDownload = () => {
            const link = document.createElement("a");
            link.download = `Portfolio_OPUS_Engenharia.pdf`;
            link.href = `https://drive.google.com/uc?export=download&id=${IDs.filter(Boolean)[selectedIndexDownload]}`;
            link.click();
          };

        const IDs = [pdf[1], word[1], excel[1], ppt[1]];
        const optionsDownload = [IDs[0] ? 'Baixar PDF': null, IDs[1] ? 'Baixar Word' : null, IDs[2] ? 'Baixar Excel' : null, IDs[3] ? 'Baixar PPT' : null].filter(Boolean);



          const DownloadOpcoes = (
            <Grid  container direction="row" alignItems="center">
            <Grid  item xs={12}>
              <ButtonGroup fullWidth variant="contained" color="secondary" ref={anchorRefDownload}>
                <Button startIcon={<FontAwesomeIcon icon={faFileDownload}/>} className={classes.fullWidth} onClick={handleDownload}>{optionsDownload[selectedIndexDownload]}</Button>
                <Button
                className={classes.dropOptions}
                  size="small"
                  onClick={handleDownloadToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper open={openDownload} anchorEl={anchorRefDownload.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper >
                      <ClickAwayListener onClickAway={handleCloseDownload}>
                        <MenuList id="split-button-menu" >
                          {optionsDownload.map((optionsDownload, index) => (
                            <MenuItem
                              key={optionsDownload}
                              selected={index === selectedIndexDownload}
                              onClick={(event) => handleDownloadItemClick(event, index)}
                            >
                              {optionsDownload}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </Grid>
          )

    //------------------------------------------------------------------------------------------------


    const onDownload = () => {
console.log(IDs)
      };



return (

                <Grid item xs={12} md={6} lg={4}>
                <Zoom in>
                    <Card elevation={20}>
                        <Typography align='center' variant='h5'>{titulo}</Typography>
                        <CardContent style={{display: 'flex', flexDirection:'column'}}>
                            {icone}
                            <Typography noWrap align='center' variant='subtitle1' color='textSecondary'>{descricao}</Typography>
                            <Typography align='center' variant='subtitle1' color='textSecondary'> Formatos:{formatos} </Typography>
                        </CardContent>
                        <CardActions style={{display: 'flex'}}>
                            <Grid container justifyContent='center' spacing={1}>
                                <Grid item xs={6}>
                                {DownloadOpcoes}
                                </Grid>
                            </Grid>

                        </CardActions>
                    </Card>
                </Zoom>
                </Grid>


);

}


export default Cartao