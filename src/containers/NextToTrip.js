import React, { useEffect } from 'react';
import { setNextTrip } from '../actions';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import  NextToTrip from '../components/NextToTrips';


function NextToTrips() {
    const { destination} = useParams();
    const dispatch = useDispatch()
    const data = useSelector(state => state.data);
    const nextTrips = useSelector(state => state.nextTrips);
    const nextDestination = data !== [] && data.filter(item => item.destination === destination);

    useEffect(() => {
        dispatch(setNextTrip(nextDestination));
    }, [data])

    const totalSeatsLeft = (item) => {
        return item.filter(seat => seat.isAvailable).length
    }

    return (
        <NextToTrip>
            <NextToTrip.Heading>Next trips to: <span>{destination}</span></NextToTrip.Heading>
            {
                nextDestination.map(trip => {
                    return (
                        <NextToTrip.Base key={trip.id}>
                            <NextToTrip.Image src="dlkjlksdjfksd" alt=""/>
                            <NextToTrip.Item>
                                <NextToTrip.Day>{trip.departureTime}</NextToTrip.Day>
                                <NextToTrip.Time>{trip.departureTime}</NextToTrip.Time>
                            </NextToTrip.Item>
                            <NextToTrip.Item>
                                <NextToTrip.Date>{trip.departureTime}</NextToTrip.Date>
                                <NextToTrip.Seats>
                                    { totalSeatsLeft(trip.seats) < 2 ? `${totalSeatsLeft(trip.seats)} seat` : `${totalSeatsLeft(trip.seats)} seats`} left.
                                </NextToTrip.Seats>
                            </NextToTrip.Item>
                            <NextToTrip.Item>
                                <Link to={`/trip/${trip.id}`}>
                                    <NextToTrip.Button>Book a seat</NextToTrip.Button>
                                </Link>
                            </NextToTrip.Item>
                        </NextToTrip.Base>
                    )
                })
            }
        </NextToTrip>
    )
}
export default NextToTrips;