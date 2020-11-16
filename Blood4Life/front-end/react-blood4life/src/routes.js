import React from 'react';

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

import Home from './pages/Home/index';
import Login from './pages/Login/index';
import LoginAdm from './pages/LoginAdm/index';
import Cadastro from './pages/Cadastro/index';
import NotFound from './components/NotFound/index';
import CadastroAdm from './pages/CadastroAdm/index';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/cadastroAdm" component={CadastroAdm}></Route>
                <Route path="/loginAdm" component={LoginAdm}></Route>
                <Route path="/" component={NotFound}></Route>
            </Switch>
        </Router>
    );
}
