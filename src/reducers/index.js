import { combineReducers } from "redux";

function data(state = [], action) {
    switch (action.type) {
        case "GETTING_DATA":
            return action.payload
        default:
            return state
    }
}
function myAccount(state = [], action) {
    return state
}
function nextTrips(state = [], action) {
    return state
}

function bookingSeat(state=[], action) {
    switch (action.type) {
        case "BOOKING_SEATS":
            return [...state, action.payload]; 
        default:
            return state;
    }
}

export default combineReducers({
    data,
    nextTrips,
    bookingSeat,
    myAccount
})