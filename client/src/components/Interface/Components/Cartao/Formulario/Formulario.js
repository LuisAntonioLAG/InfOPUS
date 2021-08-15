import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hidden, List, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';


import { useStyles } from './Formulario.styles.js'

import { createCartao, updateCartao } from '../../../../../actions/cartoes.js';

import CustomTextField from './ListItem.js';


const FormularioCartao = ({open, setOpen, currentId, optionsDownload}) => {

    const dispatch = useDispatch();

    const cartao = useSelector((state) => 'currentId' ? state.cartoes.cards.find((p) => p._id === currentId) : null);

    const [IDs, setIDs] = useState({ zip: '', pdf: '', word: '', excel: '', ppt: '',imagem: '', video: '', audio: '', cad: '', revit: '', sketch: ''})
    const idValues = Object.values(IDs).filter(Boolean)

    const [mainData, setMainData] = useState({ titulo: '', descricao: '', acess: ''});

    const cardInfo = {...mainData, ...IDs}

    const [step, setStep] = useState(1);

    const classes = useStyles();

    const [checked, setChecked] = useState([]);

    useEffect(() => {
      if(currentId){
      setChecked(optionsDownload)
      }
    },[optionsDownload])


    useEffect(() => {
      if(cartao) {
        setMainData({titulo: cartao.titulo, descricao: cartao.descricao, acess: cartao.acess})
        setIDs({ zip: cartao.zip, pdf: cartao.pdf, word: cartao.word, excel: cartao.excel, ppt: cartao.ppt, imagem: cartao.imagem, video: cartao.video, audio: cartao.audio, cad: cartao.cad, revit: cartao.revit, sketch: cartao.sketch})
      }
      ;
    }, [cartao])

    const clear = () => {
        setChecked([]);
        setMainData({titulo: '', descricao: '', acess: ''})
        setIDs({ zip: '', pdf: '', word: '', excel: '', ppt: '',imagem: '', video: '', audio: '', cad: '', revit: '', sketch: ''})
        }

      

    const handleClose = () => {
        setOpen(false);
        setStep(1);
      };

      const handleSubmit = (e) => {

        e.preventDefault();

        if(currentId) {
          dispatch(updateCartao( currentId, cardInfo));
        } else{
          dispatch(createCartao(cardInfo));
        }

        handleClose();
        clear()
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
        <DialogTitle id="form-dialog-title">{currentId ? 'EDITANDO' : 'CRIANDO'} CARTÃO</DialogTitle>
   
        
        <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
          Preencha com as informações deste cartão:
          </DialogContentText>


          <div className={classes.root}>

        <Hidden xsDown>
          <List className={classes.listRoot}>
            
            <TextValidator className={classes.margin} fullWidth name="titulo" label='Título*' value={mainData.titulo} onChange={(e) => setMainData({ ...mainData, titulo: e.target.value })}  variant="outlined" validators={['required']} errorMessages={['Esse campo é obrigatório.']}/>
            <TextValidator className={classes.margin} multiline fullWidth name="titulo" label='Descrição*' value={mainData.descricao} onChange={(e) => setMainData({ ...mainData, descricao: e.target.value })}  variant="outlined" validators={['required']} errorMessages={['Esse campo é obrigatório.']}/> 
            <CustomTextField format={'ZIP'} IDs={IDs} value={IDs.zip} onChange={(e) => setIDs({...IDs, zip: e.target.value})} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'PDF'} value={IDs.pdf} onChange={(e) => setIDs({...IDs, pdf: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'Word'} value={IDs.word} onChange={(e) => setIDs({...IDs, word: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'Excel'} value={IDs.excel} onChange={(e) => setIDs({...IDs, excel: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'PPT'} value={IDs.ppt} onChange={(e) => setIDs({...IDs, ppt: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'Imagem'} value={IDs.imagem} onChange={(e) => setIDs({...IDs, imagem: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'Vídeo'} value={IDs.video} onChange={(e) => setIDs({...IDs, video: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'Áudio'} value={IDs.audio} onChange={(e) => setIDs({...IDs, audio: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'CAD'} value={IDs.cad} onChange={(e) => setIDs({...IDs, cad: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'Revit'} value={IDs.revit} onChange={(e) => setIDs({...IDs, revit: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField format={'Sketch'} value={IDs.sketch} onChange={(e) => setIDs({...IDs, sketch: e.target.value })} checked={checked} setChecked={setChecked}/>
            <TextValidator className={classes.margin} fullWidth name="acess" label='Link Externo' value={mainData.acess} onChange={(e) => setMainData({ ...mainData, acess: e.target.value })}  variant="outlined"/>
        </List>
        </Hidden>

        <Hidden smUp>
          <List className={classes.listRoot}>
             { step===1 && <>
            <TextValidator className={classes.margin} fullWidth name="titulo" label='Título*' value={mainData.titulo} onChange={(e) => setMainData({ ...mainData, titulo: e.target.value })}  variant="outlined" validators={['required']} errorMessages={['Esse campo é obrigatório.']}/>
            <TextValidator className={classes.margin} multiline fullWidth name="descricao" label='Descrição*' value={mainData.descricao} onChange={(e) => setMainData({ ...mainData, descricao: e.target.value })}  variant="outlined" validators={['required']} errorMessages={['Esse campo é obrigatório.']}/> 
            <TextValidator className={classes.margin} fullWidth name="acess" label='Link Externo' value={mainData.acess} onChange={(e) => setMainData({ ...mainData, acess: e.target.value })}  variant="outlined"/>
             </>
             }
            <CustomTextField step={step} isMobile format={'ZIP'} IDs={IDs} value={IDs.zip} onChange={(e) => setIDs({...IDs, zip: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'PDF'} value={IDs.pdf} onChange={(e) => setIDs({...IDs, pdf: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'Word'} value={IDs.word} onChange={(e) => setIDs({...IDs, word: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'Excel'} value={IDs.excel} onChange={(e) => setIDs({...IDs, excel: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'PPT'} value={IDs.ppt} onChange={(e) => setIDs({...IDs, ppt: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'Imagem'} value={IDs.imagem} onChange={(e) => setIDs({...IDs, imagem: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'Vídeo'} value={IDs.video} onChange={(e) => setIDs({...IDs, video: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'Áudio'} value={IDs.audio} onChange={(e) => setIDs({...IDs, audio: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'CAD'} value={IDs.cad} onChange={(e) => setIDs({...IDs, cad: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'Revit'} value={IDs.revit} onChange={(e) => setIDs({...IDs, revit: e.target.value })} checked={checked} setChecked={setChecked}/>
            <CustomTextField step={step} isMobile format={'Sketch'} value={IDs.sketch} onChange={(e) => setIDs({...IDs, sketch: e.target.value })} checked={checked} setChecked={setChecked}/>
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
          <Button className={classes.margin} variant="contained" type="submit" color="primary" disabled={idValues.length === 0 && !mainData.acess}>
            Salvar
          </Button>
          </Hidden>

          <Hidden smUp>
          {step === 1 ?
          <Button className={classes.margin} variant="contained" color="primary" onClick={handleNextStep} disabled={checked.length === 0 && !mainData.acess}>
             Próximo
          </Button>
            :
            <Button className={classes.margin} variant="contained" type="submit" color="primary" disabled={idValues.length === 0 && !mainData.acess}>
            Salvar
          </Button>
            }
          </Hidden>

        </DialogActions>
        </ValidatorForm>
      </Dialog>
      
    );
}

export default FormularioCartao;