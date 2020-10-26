import React from 'react';

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import NotFound from './components/NotFound/index';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/" component={NotFound}></Route>
            </Switch>
        </Router>
    );
}
