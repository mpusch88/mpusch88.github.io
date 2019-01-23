import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (

    <div id="appMain">
        <Provider store={store}>
            <HashRouter>
                <AppRouter/>
            </HashRouter>
        </Provider>
    </div>
);

const appRoot = document.getElementById('app');

// Re-add this for webpack warning
// document.getElementById('no-webpack').style.display = 'none'; // hide the
// webpack error if webpack is running

ReactDOM.render(jsx, appRoot);
