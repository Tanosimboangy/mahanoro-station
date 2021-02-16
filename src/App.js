import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './containers/HomePage';
import Header from './containers/Header';
import NextToTrip from './containers/NextToTrip';
import BookingSeats from './containers/BookingSeats'; 
import MyAccount from './containers/MyAccount'; 

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/myAccount">
                    <MyAccount/>
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
