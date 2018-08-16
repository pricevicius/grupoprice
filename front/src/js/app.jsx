import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './modules/home'
import QuemSomos from './modules/quem-somos'

let App = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quem-somos" component={QuemSomos} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('app'));
