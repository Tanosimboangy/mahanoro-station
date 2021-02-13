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
function destination(state = [], action) {
    return state
}

export default combineReducers({
    data,
    destination,
    myAccount
})