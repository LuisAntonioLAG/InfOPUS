import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {Box, Grid, Card, CardMedia, Hidden, CardActions, Button, TextField,Typography, IconButton, InputAdornment,CardContent} from "@material-ui/core";
import FileBase from 'react-file-base64';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSnackbar } from 'notistack';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { cadastrar } from "../../../actions/auth";


import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'



import { useStyles } from "./Configuracoes.styles";
import { useTheme } from "@material-ui/styles";

import ContatoFotoPadrao from '../../../assets/images/ContatoFotoPadrao.png'




const Configuracoes = () => {

    const theme = useTheme()
    const classes = useStyles()
    const [user] = useState(JSON.parse(sessionStorage.getItem('profile')));


    const MeuPerfil = () => {

        const handleEditProfile = () => {
            setEditProfile((prevIsEditProfile) => !prevIsEditProfile)
        }
    
        const handleChange = (e) => 
        setInfoUser({ ...infoUser, [e.target.name]: e.target.value });
    
        const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword)

        const [isEditProfile, setEditProfile] = useState(false)
        const [showPassword, setShowPassword] = useState(false)
        const [infoUser, setInfoUser] = useState({nome: user?.result.nome ? user?.result.nome : "Nome", senha:'', confirmSenha:''});

    return(



        <Grid item xs={12} sm={6} md={12} lg={7} >

                <Card variant={theme.palette.type === 'dark' ? 'outlined' : 'elevation'} elevation={20}>

                        <Typography noWrap color='secondary' style={{marginTop: '10px'}} align='left' variant= 'h3'> 
                        <FontAwesomeIcon className={classes.titleIcon} fixedWidth icon={faUserAlt} style={{margin: '0 15px'}}/>
                            Meu Perfil  
                        </Typography>


                    <CardContent>

                        <Grid container spacing={4}>

                            <Grid item xs={12} md={5} lg={4}>
                                <div className={classes.imageContainer}>
                                <CardMedia   
                                component={'img'} 
                                className={classes.image}
                                src={user.result.foto ? user.result.foto : ContatoFotoPadrao}
                                title={user?.result.nome}
                                />
                                </div>

                            </Grid>

                        
                           
                            <Grid item xs={12} md={7} lg={8}>

                                
                                    <Typography variant='body1'>Nome</Typography>
                                    <TextField name='nome' fullWidth disabled={!isEditProfile} value={infoUser.nome} onChange={handleChange} />
                               
                               

                               
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

                        

                        <Grid container spacing = {4} justifyContent='space-between'>


                                <Grid item xs={12} md={6}>

                                {isEditProfile &&
                                        <>
                                        <Typography  variant='body1'> Senha </Typography>
                                        <TextField color='primary' name='senha' type={showPassword ? "text" : "password"} helperText={'Preencha para mudar sua senha'} fullWidth disabled={!isEditProfile} value={infoUser.senha} onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="end" >
                                                    <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                        />
                                        </>
                                    } 

                                </Grid> 
        

                                <Grid item xs={12} md={6}>
                                    {isEditProfile &&
                                        <>
                                        <Typography variant='body1'> Confirmar senha </Typography>
                                        <TextField color='primary' name='confirmSenha' type={showPassword ? "text" : "password"} helperText={'Sua senha deve conter 8 dígitos'} fullWidth disabled={!isEditProfile} value={infoUser.confirmSenha} onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="end" >
                                                    <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                        />
                                        </>
                                    }   
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
                        
                        <Button style={{minWidth:110}} variant='contained' onClick = {handleEditProfile} color='secondary'> {!isEditProfile ? 'Editar' : 'Cancelar'}</Button>
                        <Button variant='contained' color='primary' disabled={!isEditProfile}>Salvar</Button>
                                       

                    </CardActions>


                </Card>
 
        </Grid>
    )};


const FormularioCadastro = () => {

    const authData = useSelector((state) => state.auth)
    const errorMessage = useSelector((state) => state.auth.errorMessage)

    const [infoUser, setInfoUser] = useState({nome: '', diretoria: user?.result.diretoria !== 'Presidente' ? user?.result.diretoria : '', cargo: user?.result.cargo !== 'Presidente' ? 'Gerente' : '', email: "", senha:'', confirmSenha:''});
    const dispatch = useDispatch();
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();


    const [showPassword, setShowPassword] = useState(false);


    const handleChange = (e) => 
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });

    const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = (e) => {
        e.preventDefault();
  
          dispatch(cadastrar(infoUser))
      };

      useEffect(() => {
        errorMessage &&
        enqueueSnackbar(errorMessage);
      }, [authData, errorMessage, enqueueSnackbar])


      return (
        <Grid item xs={12} sm={6} md={12} lg={5} >

            <Card variant={theme.palette.type === 'dark' ? 'outlined' : 'elevation'} elevation={20}>

                <Typography noWrap color='secondary' style={{marginTop: '10px'}} align='left' variant= 'h3'> 
                    <FontAwesomeIcon className={classes.titleIcon} fixedWidth icon={faUserPlus} style={{margin: '0 15px'}}/>
                     Cadastrar Usuário  
                </Typography>

                <CardContent>

                <ValidatorForm className={classes.form} autoComplete="off" onSubmit={handleSubmit}>

                <Typography  variant='body1'>Nome</Typography>
                    <TextValidator fullWidth name='nome' color='primary' onChange={handleChange} value={infoUser.nome} validators={['required']} errorMessages={['Esse campo é obrigatório.']}/>

                <Box my={2}>
                <Typography variant='body1'>Diretoria</Typography>
                    <TextValidator fullWidth name='diretoria' color='primary'  disabled={user?.result.diretoria !== 'Presidente' } onChange={handleChange} value={infoUser.diretoria} validators={['required']} errorMessages={['Esse campo é obrigatório.']}/>
                </Box>

                <Box my={2}>
                <Typography  variant='body1'>Cargo</Typography>
                    <TextValidator fullWidth name='cargo' color='primary'   disabled={user?.result.diretoria !== 'Presidente'} onChange={handleChange} value={infoUser.cargo} validators={['required']} errorMessages={['Esse campo é obrigatório.']} />
                </Box>

                <Box my={2}>
                <Typography  variant='body1'>E-mail</Typography>
                    <TextValidator fullWidth name='email'  color='primary' error = {errorMessage === 'E-mail já cadastrado'} validators={['isEmail']} errorMessages={['Escreva um e-mail válido.']} value={infoUser.email} onChange={handleChange} />
                </Box>

                <Box my={2}>
                <Typography  variant='body1'>Senha</Typography>
                    <TextValidator
                        fullWidth
                        name='senha'
                        color='primary'
                        type={showPassword ? "text" : "password"}
                        error={errorMessage === 'As senhas devem ser iguais'}
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
                        error={errorMessage === 'As senhas devem ser iguais'}
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

                                
                    <Box my={2}>
                    <Typography  variant='body1'>Foto</Typography>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setInfoUser({ ...infoUser, foto: base64 })} /></Box>

                    

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











    return (

        <Box mx = {2} mt = {5} >
        <Grid direction='row' container spacing={3}>

        <MeuPerfil/>
        <FormularioCadastro/>
    
        </Grid>
        </Box>
    )

};

export default Configuracoes