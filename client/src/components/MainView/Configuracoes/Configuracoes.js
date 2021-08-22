import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Box, Grid, Card, CardMedia, Hidden, CardActions, Button, TextField,Typography, IconButton, Paper, InputAdornment,CardContent} from "@material-ui/core";
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import colors from '../../../assets/themes/colors.js'

import { cadastrar } from "../../../actions/auth";

import MyDropzone from "../../Interface/Components/File_Upload/File_Upload.js";
import UploadButton from "../../Interface/Components/File_Upload/Photo_UploadButton.js";

import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { useStyles } from "./Configuracoes.styles";
import { useTheme } from "@material-ui/styles";

import ContatoFotoPadrao from '../../../assets/images/ContatoFotoPadrao.png'

import {switchTheme} from '../../../actions/temas'
import { updateUsuario } from "../../../actions/auth";


const Configuracoes = () => {

    const theme = useTheme()
    const classes = useStyles()
    const [user] = useState(JSON.parse(sessionStorage.getItem('profile')));
    const dispatch = useDispatch()


    const MeuPerfil = () => {

        const clear = () => {
            setInfoUser({...infoUser, senha: '', confirmSenha:'', foto: ''})
        }

        const handleSubmit = () => {

            const id = user?.result._id
            dispatch(updateUsuario(id, infoUser, setInfoUser))
        }

        const handleCancelEdit = () => {
            setEditProfile(false)

            clear()
        }

        const handleEditProfile = () => {
            setEditProfile(true)
        }
    
        const handleChange = (e) => 
        setInfoUser({ ...infoUser, [e.target.name]: e.target.value });
    
        const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword)

        const [isEditProfile, setEditProfile] = useState(false)
        const [showPassword, setShowPassword] = useState(false)
        const [infoUser, setInfoUser] = useState({...user?.result, senha: '', confirmSenha:'', foto: ''});

    return(



        <Grid item xs={12} sm={6} md={6} lg={7} >

                <Card variant={theme.palette.type === 'dark' ? 'outlined' : 'elevation'} elevation={20}>

                        <Typography color='secondary' style={{margin: '10px 15px 0'}} align='left' variant= 'h3'> 
                        <FontAwesomeIcon className={classes.titleIcon} fixedWidth icon={faUserAlt} style={{marginRight: '15px'}}/>
                            Meu Perfil 
                        </Typography>

                <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>

                    <CardContent>

                        <Grid container spacing={4}>

                            <Grid item xs={12} md={5} lg={4}>
                                <div className={classes.imageContainer}>
                                <CardMedia   
                                component={'img'} 
                                className={classes.image}
                                src={infoUser.foto || user?.result.foto || ContatoFotoPadrao}
                                title={user?.result.nome}
                                />
                                <UploadButton multiple={false} onDone={({ base64 }) => setInfoUser({ ...infoUser, foto: base64 })}/> 
                                </div>

                            </Grid>

                        
                           
                            <Grid item xs={12} md={7} lg={8}>

                                
                                    <Typography variant='body1'>Nome</Typography>
                                    <TextField name='nome' fullWidth disabled value={infoUser.nome} onChange={handleChange} />
                               
                               

                               
                                <Box my={2}>
                                    <Typography variant='body1'> Diretoria </Typography>
                                    <TextField fullWidth disabled defaultValue={user?.result.diretoria}/>
                                </Box>
                             

                                
                                <Box my={2}>
                                    <Typography variant='body1'> Cargo </Typography>
                                    <TextField fullWidth disabled defaultValue={user?.result.cargo}/>
                                </Box>
                              

                                
                                <Box  mt={2} mb={isEditProfile ? 2 : 0}>
                                    <Typography variant='body1'>E-mail</Typography>
                                    <TextField fullWidth disabled defaultValue={user?.result.email}/>
                                </Box>
                            
                            </Grid>
                        </Grid>

                        

                    {isEditProfile &&
                        <Grid container spacing = {4} justifyContent='space-between'>

                                <Grid item xs={12} md={6}>

                               
                                       
                                        <Typography  variant='body1'> Senha </Typography>
                                        <TextValidator color='primary' name='senha' type={showPassword ? "text" : "password"} validators={[ isEditProfile && 'required']} errorMessages={['Preencha este campo']} fullWidth disabled={!isEditProfile} value={infoUser.senha} onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="end" >
                                                    <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                        />
                                       
                                    

                                </Grid> 
        

                                <Grid item xs={12} md={6}>

                                        <Typography variant='body1'> Confirmar senha </Typography>
                                        <TextValidator color='primary' name='confirmSenha' type={showPassword ? "text" : "password"} validators={['required']} errorMessages={['Preencha este campo']} fullWidth disabled={!isEditProfile} value={infoUser.confirmSenha} onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="end" >
                                                    <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                        />

                                       
                                </Grid>                               

                                <Grid item xs={12}>
                                    <Hidden mdUp>   
                                        <Box mt={3}>  
                                        <Typography color="textSecondary" variant='subtitle2' style={{flexGrow: 1}}>
                                            <Box component="span" fontStyle="italic">
                                            Atualizado em: {moment(user?.result.dataAtualizacao).format('lll')}
                                            </Box>
                                        </Typography>
                                        </Box>   
                                    </Hidden>
                                </Grid>

                                
                            
                        </Grid>
                    }

                    </CardContent>
                    
                    <CardActions >

                    <Hidden mdUp>                        
                    <div style={{flexGrow:1}}></div>
                    </Hidden> 
                        
                    <Hidden smDown>        
                        <Typography color="textSecondary" variant='subtitle2' style={{flexGrow: 1}}>
                        <Box component="span" fontStyle="italic">
                            Atualizado em: {moment(user?.result.dataAtualizacao).format('lll')}
                        </Box>
                        </Typography>
                    </Hidden>
                        
                    {(isEditProfile || infoUser.foto !== user?.result.foto) && <Button  variant='contained' onClick = {handleCancelEdit} color='secondary'> Cancelar </Button> }
                    {!isEditProfile  &&  <Button  variant='contained' onClick = {handleEditProfile} color='secondary'> Mudar Senha </Button> }
                        <Button variant='contained' color='primary' type="submit" disabled={!isEditProfile && infoUser.foto === user?.result.foto}>Salvar</Button>
                                       

                    </CardActions>

                    </ValidatorForm>

                </Card>
 
        </Grid>
    )};


const FormularioCadastro = () => {

    const [infoUser, setInfoUser] = useState({nome: '', diretoria: user?.result.diretoria !== 'Presidente' ? user?.result.diretoria : '', cargo: user?.result.cargo !== 'Presidente' ? 'Gerente' : '', email: "", senha:'', confirmSenha:'', foto: ''});
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);


    const handleChange = (e) => 
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });

    const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = (e) => {
        e.preventDefault();
  
          dispatch(cadastrar(infoUser, setInfoUser))
      };


      return (
        <Grid item xs={12} sm={6} md={6} lg={5} >

            <Card variant={theme.palette.type === 'dark' ? 'outlined' : 'elevation'} elevation={20}>

                <Typography color='secondary' style={{margin: '10px 15px 0'}} align='left' variant= 'h3'> 
                    <FontAwesomeIcon className={classes.titleIcon} fixedWidth icon={faUserPlus} style={{marginRight: '15px'}}/>
                     Cadastrar Usuário  
                </Typography>

                <CardContent>

                <ValidatorForm className={classes.form} autoComplete="off" onSubmit={handleSubmit}>

                <Typography  variant='body1'>Nome</Typography>
                    <TextField fullWidth name='nome' color='primary' onChange={handleChange} value={infoUser.nome} />

                <Box my={2}>
                <Typography variant='body1'>Diretoria</Typography>
                    <TextField fullWidth name='diretoria' color='primary'  disabled={user?.result.diretoria !== 'Presidente' } onChange={handleChange} value={infoUser.diretoria} />
                </Box>

                <Box my={2}>
                <Typography  variant='body1'>Cargo</Typography>
                    <TextField fullWidth name='cargo' color='primary' disabled={user?.result.diretoria !== 'Presidente'} onChange={handleChange} value={infoUser.cargo} />
                </Box>

                <Box my={2}>
                <Typography  variant='body1'>E-mail</Typography>
                    <TextValidator fullWidth name='email'  color='primary' validators={['isEmail']} errorMessages={['Escreva um e-mail válido.']} value={infoUser.email} onChange={handleChange} />
                </Box>

                <Box my={2}>
                <Typography  variant='body1'>Senha</Typography>
                    <TextValidator
                        fullWidth
                        name='senha'
                        color='primary'
                        type={showPassword ? "text" : "password"}
                        validators={['minStringLength:8']}
                        errorMessages={['Sua senha deve conter, no mínimo, 8 caracteres.']}
                        value={infoUser.senha}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end" >
                                <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                            </InputAdornment>
                        )}}
                    />
                </Box>

                <Box my={2}>
                <Typography variant='body1'>Confirmar senha</Typography>
                    <TextField
                        fullWidth
                        name='confirmSenha'
                        color='primary'
                        type={showPassword ? "text" : "password"}
                        value={infoUser.confirmSenha}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end" >
                                <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                            </InputAdornment>
                        )}}
                    />
                </Box>    

        
                    <Box my={2} style={{width:'100%'}}>
                        <Typography  variant='body1'>Foto</Typography>
                        <MyDropzone accept={'image/jpeg, image/png'} multiple={false} onDone={({ base64 }) => setInfoUser({ ...infoUser, foto: base64 })}/> 
                    </Box>



                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!infoUser.nome || !infoUser.diretoria || !infoUser.cargo || !infoUser.email || !infoUser.senha || !infoUser.confirmSenha }>
                        Cadastrar
                    </Button>

                </ValidatorForm>

                </CardContent>

            </Card>

        </Grid>
      )

}

const id = user?.result._id

const handleThemeClick = (event, item) => {
    
    dispatch(switchTheme(id, item))
}

    return (

        <Box mx = {2} mt = {5} >
        <Grid direction='row' container spacing={3}>

        <MeuPerfil/>
        <FormularioCadastro/>

        <Paper style={{display: 'flex', borderRadius: '20px'}} elevation={20} className={classes.fab}>
            {[{nome:'Verde', cor: colors.green3}, {nome: 'Azul', cor: colors.blue3}].map((item) => (
                <div key={item.nome} style={{padding: '5px'}}>
                <IconButton size='small'  onClick = {(event) => handleThemeClick(event, item)}> 
                    <FiberManualRecordTwoToneIcon style={{color: item.cor}} fontSize='large'/>
                </IconButton>  
                </div>
            ))}
        </Paper>
    
        </Grid>
        </Box>


    )

};

export default Configuracoes