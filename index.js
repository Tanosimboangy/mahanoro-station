import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyles } from './globalStyles';
import store from './store';
import App from './app';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"));