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
            return action.payload
        case "AVAILABLE_SEAT":
            return state.map(state => {
                return {
                    ...state,
                    seats: state.seats.map(seat => {
                        return {
                            ...seat,
                            isAvailable: !seat.isAvailable
                        }
                        return { ...seat }
                    })
                }
            })
        default:
            return state
    }
}
function pickSeats(state=[], action) {
    switch (action.type) {
        case "PICK_SEATS":
            return [...state, action.payload];
        default:
            return state;
    }
}

function showModal(state = false, action) {
    switch (action.type) {
        case "SHOW_MODAL":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    data,
    nextTrips,
    bookingSeat,
    pickSeats,
    showModal,
})