import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './containers/HomePage';
import Header from './containers/Header';

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/myAccount">
                    <h1>My Account</h1>
                </Route>
                <Route path={`/destination/:destination`}>
                    <h1>Destination</h1>
                </Route>
            </Switch>
        </div>
    )
}
