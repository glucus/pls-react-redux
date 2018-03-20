import 'babel-polyfill';   // for ES6 features that babel can't transpile
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

// Webpack also imports css
import './styles/styles.css';   
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// let store = createStore(reducer)
const store = configureStore();  

// creates store with configurations
// pass initialState if have a server-side


// dispatch() is part of store
store.dispatch (loadCourses ());  
store.dispatch (loadAuthors ());


// render (<Component />, on DOM node);
// wrapping app in <Provider> component to connect react to redux
render (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
);  
