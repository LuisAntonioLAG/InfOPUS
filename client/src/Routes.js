import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicio from './components/MainView/Inicio/Inicio';
import Presidencia from './components/MainView/Presidencia/Presidencia';
import AdmFinanceiro from './components/MainView/AdmFinanceiro/AdmFinanceiro';
import Comercial from './components/MainView/Comercial/Comercial';
import GenteGestao from './components/MainView/GenteGestao/GenteGestao';
import Marketing from './components/MainView/Marketing/Marketing';
import Projetos from './components/MainView/Projetos/Projetos';
import Configuracoes from './components/MainView/Configuracoes/Configuracoes';
import Contatos from './components/MainView/Contatos/Contatos';
import Sobre from './components/MainView/Sobre/Sobre';
import Feedback from './components/MainView/Feedback/Feedback';


const Routes = (user) => {

    return (
        <Switch>
                <Route exact path='/' component={Inicio} user={user}/>
                <Route exact path='/presidencia' component={Presidencia}/>
                <Route exact path='/admfin' component={AdmFinanceiro}/>
                <Route exact path='/comercial' component={Comercial}/>
                <Route exact path='/gg' component={GenteGestao}/>
                <Route exact path='/marketing' component={Marketing}/>
                <Route exact path='/projetos' component={Projetos}/>
                <Route exact path='/configuracoes' component={Configuracoes}/>
                <Route exact path='/contatos' component={Contatos}/>
                <Route exact path='/sobre' component={Sobre}/>
                <Route exact path='/feedback' component={Feedback}/>    
        </Switch>  
)}

export default Routes