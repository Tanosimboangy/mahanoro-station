import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './containers/HomePage';
import Header from './containers/Header';
import NextToTrip from './containers/NextToTrip';
import BookingSeats from './containers/BookingSeats';

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
                    <NextToTrip />
                </Route>
                <Route path={`/trip/:seatId`}>
                    <BookingSeats />
                </Route>
            </Switch>
        </div>
    )
}
