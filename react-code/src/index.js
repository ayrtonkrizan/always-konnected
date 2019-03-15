import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';

import App from './App';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard'
import Administration from './pages/Administration'
import ItemMaster from './pages/ItemMaster'

import * as serviceWorker from './serviceWorker';

/* CSS */

import './css/reset.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/datatables/dataTables.bootstrap4.css'
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './css/googleFonts.css';
import './vendor/device-mockups/device-mockups.min.css';

import './css/new-age.css';
import './css/sb-admin.css';
import './css/ak.css';



ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Landing}/>
            <Route path="/login" component={Login}/>
            <Route path="/app" component={App}>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/admin" component={Administration}/>
                <Route path="/item" component={ItemMaster}/>
            </Route>
        </Router>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
