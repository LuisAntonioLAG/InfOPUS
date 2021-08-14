import React, {useState} from 'react';
import { Hidden, List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


import { useStyles } from './Formulario.styles.js'

import CustomTextField from './ListItem.js';


const Formulario = ({open, setOpen}) => {

    const [IDs, setIDs] = useState({ zip: '', pdf: '', word: '', excel: '', ppt: '',imagem: '', video: '', audio: '', cad: '', revit: '', sketch: ''})
    const idValues = Object.values(IDs).filter(Boolean)


    const [step, setStep] = useState(1);

    const classes = useStyles();


    const clear = () => {
        }

        

    const handleClose = () => {
        setOpen(false);
        setStep(1);
        clear()
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    const handleNextStep = (e) => {
        setStep((prevStep) => !prevStep)
    }

    const handlePrevStep = (e) => {
        console.log(step)
        setStep(1)
    }


    return(
        
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">EDITANDO CARTÃO</DialogTitle>
   
        
        <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
          Selecione os formatos de arquivos para este cartão:
          </DialogContentText>


          <div className={classes.root}>

        <Hidden xsDown>
          <List className={classes.listRoot}>
            <CustomTextField format={'ZIP'} IDs={IDs} value={IDs.zip} onChange={(e) => setIDs({...IDs, zip: e.target.value })}/>
            <CustomTextField format={'PDF'} value={IDs.pdf} onChange={(e) => setIDs({...IDs, pdf: e.target.value })}/>
            <CustomTextField format={'Word'} value={IDs.word} onChange={(e) => setIDs({...IDs, word: e.target.value })}/>
            <CustomTextField format={'Excel'} value={IDs.excel} onChange={(e) => setIDs({...IDs, excel: e.target.value })}/>
            <CustomTextField format={'PPT'} value={IDs.ppt} onChange={(e) => setIDs({...IDs, ppt: e.target.value })}/>
            <CustomTextField format={'Imagem'} value={IDs.imagem} onChange={(e) => setIDs({...IDs, imagem: e.target.value })}/>
            <CustomTextField format={'Vídeo'} value={IDs.video} onChange={(e) => setIDs({...IDs, video: e.target.value })}/>
            <CustomTextField format={'Áudio'} value={IDs.audio} onChange={(e) => setIDs({...IDs, audio: e.target.value })}/>
            <CustomTextField format={'CAD'} value={IDs.cad} onChange={(e) => setIDs({...IDs, cad: e.target.value })}/>
            <CustomTextField format={'Revit'} value={IDs.revit} onChange={(e) => setIDs({...IDs, revit: e.target.value })}/>
            <CustomTextField format={'Sketch'} value={IDs.sketch} onChange={(e) => setIDs({...IDs, sketch: e.target.value })}/>
        </List>
        </Hidden>

        <Hidden smUp>
          <List className={classes.listRoot}>
            <CustomTextField step={step} isMobile format={'ZIP'} IDs={IDs} value={IDs.zip} onChange={(e) => setIDs({...IDs, zip: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'PDF'} value={IDs.pdf} onChange={(e) => setIDs({...IDs, pdf: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'Word'} value={IDs.word} onChange={(e) => setIDs({...IDs, word: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'Excel'} value={IDs.excel} onChange={(e) => setIDs({...IDs, excel: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'PPT'} value={IDs.ppt} onChange={(e) => setIDs({...IDs, ppt: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'Imagem'} value={IDs.imagem} onChange={(e) => setIDs({...IDs, imagem: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'Vídeo'} value={IDs.video} onChange={(e) => setIDs({...IDs, video: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'Áudio'} value={IDs.audio} onChange={(e) => setIDs({...IDs, audio: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'CAD'} value={IDs.cad} onChange={(e) => setIDs({...IDs, cad: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'Revit'} value={IDs.revit} onChange={(e) => setIDs({...IDs, revit: e.target.value })}/>
            <CustomTextField step={step} isMobile format={'Sketch'} value={IDs.sketch} onChange={(e) => setIDs({...IDs, sketch: e.target.value })}/>
        </List>
        </Hidden>
    </div>

    
        </DialogContent>    

        <DialogActions>
        
        
        {step === 1 ?
            (<Button color="secondary" className={classes.margin} variant='contained' onClick={handleClose}>
                Cancelar
            </Button>)
          
          :

          (
            (<Button color="secondary" className={classes.margin} variant='contained' onClick={handlePrevStep}>
                Voltar
          </Button>)
          )
          }



          <Hidden xsDown>
          <Button className={classes.margin} variant="contained" type="submit" color="primary" disabled={idValues.length === 0}>
            Salvar
          </Button>
          </Hidden>

          <Hidden smUp>
          <Button className={classes.margin} variant="contained" color="primary" onClick={handleNextStep} >
            {step === 1 ? 'Próximo' : 'Salvar'}
          </Button>
          </Hidden>

        </DialogActions>
        </ValidatorForm>
      </Dialog>
      
    );
}

export default Formulario;