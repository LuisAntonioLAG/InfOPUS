import React, {useState, useEffect} from "react";
import {Box, Grid, Card, CardMedia, Hidden, CardActions, Button, TextField,Typography, IconButton, InputAdornment,CardContent} from "@material-ui/core";
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons'



import { useStyles } from "./Configuracoes.styles";
import { useTheme } from "@material-ui/styles";

import ContatoFotoPadrao from '../../../assets/images/ContatoFotoPadrao.png'




const Configuracoes = () => {

    const theme = useTheme()
    const classes = useStyles()

    const [isEditProfile, setEditProfile] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [user] = useState(JSON.parse(sessionStorage.getItem('profile')));
    const [infoUser, setInfoUser] = useState({nome: user?.result.nome ? user?.result.nome : "Nome", senha:'', confirmSenha:''});

    const handleEditProfile = () => {
        setEditProfile((prevIsEditProfile) => !prevIsEditProfile)
    }

    const handleChange = (e) => 
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });

    const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword)

    return(

    <Grid direction='column' container>

    <Box mx = {2} mt = {5} >

        <Grid item xs={12} sm={6} md={12} lg={7} >

                <Card variant={theme.palette.type === 'dark' ? 'outlined' : 'elevation'} elevation={20}>

                        <Typography noWrap color='secondary' style={{marginTop: '10px'}} align='left' variant= 'h3'> 
                        <FontAwesomeIcon className={classes.titleIcon} icon={faUserAlt} style={{margin: '0 15px'}}/>
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

                                
                                    <Typography color='primary' variant='body1'>Nome</Typography>
                                    <TextField name='nome' fullWidth disabled={!isEditProfile} value={infoUser.nome} onChange={handleChange} />
                               
                               

                               
                                <Box my={2}>
                                    <Typography variant='body1'> Diretoria </Typography>
                                    <TextField fullWidth disabled defaultValue={'Diretoria'}/>
                                </Box>
                             

                                
                                <Box my={2}>
                                    <Typography variant='body1'> Cargo </Typography>
                                    <TextField fullWidth disabled defaultValue={'Cargo'}/>
                                </Box>
                              

                                
                                <Box  mt={2} mb={isEditProfile ? 2 : 0}>
                                    <Typography color='primary' variant='body1'>E-mail</Typography>
                                    <TextField fullWidth disabled defaultValue={user?.result.email}/>
                                </Box>
                            
                            </Grid>
                        </Grid>

                        

                        <Grid container spacing = {4} justifyContent='space-between'>


                                <Grid item xs={12} md={6}>

                                {isEditProfile &&
                                        <>
                                        <Typography color='primary' variant='body1'> Senha </Typography>
                                        <TextField name='senha' type={showPassword ? "text" : "password"} helperText={'Preencha para mudar sua senha'} fullWidth disabled={!isEditProfile} value={infoUser.senha} onChange={handleChange}
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
                                        <Typography color='primary' variant='body1'> Confirmar senha </Typography>
                                        <TextField name='confirmSenha' type={showPassword ? "text" : "password"} helperText={'Sua senha deve conter 8 dígitos'} fullWidth disabled={!isEditProfile} value={infoUser.confirmSenha} onChange={handleChange}
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


    </Box>

    </Grid>

    )
};

export default Configuracoes