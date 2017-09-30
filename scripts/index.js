/**
 * Created by minooo on 2016/3/9.
 */
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { browserHistory , Router, Route, IndexRoute } from 'react-router';
// import { Route,browserHistory , Router,IndexRoute} from 'react-router';
import App from './components/App';
import Input from './components/InputCom';

console.log(Router);
render(
    (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/InputCom" component={Input}/>
        </div>
    </Router>
    ),

    document.getElementById('root')
);

