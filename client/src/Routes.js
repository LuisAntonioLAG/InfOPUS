import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicio from './components/MainView/Inicio/Inicio';
import Presidencia from './components/MainView/Presidencia/Presidencia';
import AdmFinanceiro from './components/MainView/AdmFinanceiro/AdmFinanceiro';
import Comercial from './components/MainView/Comercial/Comercial';
import GenteGestao from './components/MainView/GenteGestao/GenteGestao';
import Marketing from './components/MainView/Marketing/Marketing';
import Projetos from './components/MainView/Projetos/Projetos';
import WebConferencia from './components/MainView/WebConferencia/WebConferencia';
import Atas from './components/MainView/Atas/Atas';
import Biblioteca from './components/MainView/Biblioteca/Biblioteca';
import Contatos from './components/MainView/Contatos/Contatos';
import Sobre from './components/MainView/Infos/Infos';
import Feedback from './components/MainView/Feedback/Feedback';


const Routes = () => {

    return (
        <Switch>
            <Route exact path='/inicio' component={Inicio}/>
            <Route exact path='/presidencia' component={Presidencia}/>
            <Route exact path='/admfin' component={AdmFinanceiro}/>
            <Route exact path='/comercial' component={Comercial}/>
            <Route exact path='/gg' component={GenteGestao}/>
            <Route exact path='/marketing' component={Marketing}/>
            <Route exact path='/projetos' component={Projetos}/>
            <Route exact path='/meet' component={WebConferencia}/>
            <Route exact path='/atas' component={Atas}/>
            <Route exact path='/biblioteca' component={Biblioteca}/>
            <Route exact path='/contatos' component={Contatos}/>
            <Route exact path='/sobre' component={Sobre}/>
            <Route exact path='/feedback' component={Feedback}/>
        </Switch>
)}

export default Routes