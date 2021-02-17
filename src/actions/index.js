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
export function setNextTrip(trip) {
    return {
        type: "SET_NEXT_TRIPS",
        payload: trip,
    }
}

export function setBookingSeat(seat) {
    return {
        type: "SET_BOOKING_SEATS",
        payload: seat
    }
}

export function seatBookedSeats(seat) {
    return {
        type: "SET_BOOKED_SEATS",
        payload: seat
    }
}
export function getSeats(seat) {
    return {
        type: "PICK_SEATS",
        payload: seat
    }
}

export function showModal(modal) {
    return {
        type: "SHOW_MODAL",
        payload: modal
    }
}

export function availableSeats(seat) {
    return {
        type: "AVAILABLE_SEAT",
        payload: seat,
    }
}