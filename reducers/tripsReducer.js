function trips(state=[], action) {
    switch (action.type) {
        case "GET_TRIPS":
            return action.payload; 
        default:
            return state;
    }
}

export { trips };