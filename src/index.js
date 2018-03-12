import 'babel-polyfill';   // for ES6 features that babel can't transpile
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';  
import './styles/styles.css';  // Webpack can import css 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();  // pass initialState if have a server-side

// render (<Component />, on DOM node);
// wrapping app in <Provider> component to connect react to redux

render (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
);  
