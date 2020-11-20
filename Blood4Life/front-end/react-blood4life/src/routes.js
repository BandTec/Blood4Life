import React from 'react';

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import CadastroAdm from './pages/CadastroAdm';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import TesteBraian from './pages/ApiGoogle';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/cadastroAdm" component={CadastroAdm} />
                <Route path="/apiTeste" component={TesteBraian} />
                <Route path="/" component={NotFound} />
            </Switch>
        </Router>
    );
}
