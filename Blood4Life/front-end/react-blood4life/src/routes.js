import React from 'react';

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import CadastroHospital from './pages/CadastroHospital';
import Dashboard from './pages/Dashboard';
import HomeDashboard from './pages/HomeDashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import TesteBraian from './pages/ApiGoogle';
import AlterarDoador from './pages/AlterarDoador';
import AlterarHospital from './pages/AlterarHospital';
import AlterarQtdSangue from './pages/AlterarBancoDeSangue';
import Localizar from './pages/LocalizarHospitais';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/cadastroHospital" component={CadastroHospital} />
                <Route path="/dashboard/hospitais/:id" exact component={Dashboard}/>
                <Route path="/menu" exact component={HomeDashboard} />
                <Route path="/apiTeste" component={TesteBraian} />
                <Route path="/alterarDoador" component={AlterarDoador} />
                <Route path="/alterarHospital" component={AlterarHospital} />
                <Route path="/alterarQtdSangue" component={AlterarQtdSangue} />
                <Route path="/localizar" component={Localizar} />
                <Route path="/" component={NotFound} />
            </Switch>
        </Router>
    );
}
