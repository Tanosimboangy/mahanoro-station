import { combineReducers } from "redux";

function data(state = [], action) {
    switch (action.type) {
        case "GETTING_DATA":
            return action.payload
        default:
            return state
    }
}
function nextTrips(state = [], action) {
    switch (action.type) {
        case "SET_NEXT_TRIPS":
            return action.payload
        default:
            return state
    }
}
function bookingSeat(state=[], action) {
    switch (action.type) {
        case "SET_BOOKING_SEATS":
            return [...state, action.payload]
        default:
            return state
    }
}

function seatAvailable(state=[], action) {
    switch (action.type) {
        case "SET_BOOKED_SEATS":
            return [...state, action.payload]
        default:
            return state
    }
}

export default combineReducers({
    data,
    nextTrips,
    bookingSeat,
    seatAvailable,
})