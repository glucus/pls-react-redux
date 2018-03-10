import 'babel-polyfill';   // for ES6 features that babel can't transpile
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';  
import './styles/styles.css';  // Webpack can import css 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// render (<Component />, on DOM node);

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);  

