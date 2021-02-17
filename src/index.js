import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';
import {GlobalStyles} from './GlobalStyles';

// Here where I render the app
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <GlobalStyles />
            <App /> 
        </Router>
    </Provider>
    , document.getElementById("root"))