export function gettingData() {
    return async (dispatch) => {
        const res = await fetch("https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json");
        const dataTrips = await res.json();
        dispatch({
            type: 'GETTING_DATA',
            payload: dataTrips
        })
    }
}
export function setNextTrip(item) {
    return {
        type: "SET_NEXT_TRIPS",
        payload: item,
    }
}

export function bookingSeat(item) {
    return {
        type: "BOOKING_SEATS",
        payload: item
    }
}