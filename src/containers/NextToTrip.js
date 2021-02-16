import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import  NextToTrip from '../components/NextToTrips';
import { setNextTrip } from '../actions';


function NextToTrips() {
    const { destination} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const nextTrips = useSelector(state => state.nextTrips);
    const nextDestination = data !== [] && data.filter(item => item.destination === destination);

    useEffect(() => {
        dispatch(setNextTrip(nextDestination));
    }, [data])

    const totalSeatsLeft = (item) => {
        return item.filter(seat => seat.isAvailable).length
    }

    // EEE => day
    // HH:mm => time
    // 

    return (
        <NextToTrip>
            <NextToTrip.Heading>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUki2YIQSsl1Ktkh0oMVtv8xLg9-VvFfNuEQ&usqp=CAU" alt="clock_image"/>
                <div>
                    <h2>Next trips to:</h2>
                    <p>{destination}</p>
                </div>
            </NextToTrip.Heading>
                {nextTrips && nextTrips.map(trip => {
                    return (
                        <NextToTrip.Base key={trip.id}>
                            <NextToTrip.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU" alt="car"/>
                            <NextToTrip.Item>
                                <NextToTrip.Day>{trip.departureTime}</NextToTrip.Day>
                                {/* <NextToTrip.Day>{new Date(trip.departureTime).toLocaleDateString('en-US', { weekday: 'long' })}</NextToTrip.Day> */}
                                <NextToTrip.Time>{new Date(trip.departureTime).getHours()}</NextToTrip.Time>
                            </NextToTrip.Item>
                            <NextToTrip.Item>
                                <NextToTrip.Date>{new Date(trip.departureTime).toLocaleDateString("en-US")}</NextToTrip.Date>
                                <NextToTrip.Seats>
                                    { totalSeatsLeft(trip.seats) < 2 ? `${totalSeatsLeft(trip.seats)} seat` : `${totalSeatsLeft(trip.seats)} seats`} left.
                                </NextToTrip.Seats>
                            </NextToTrip.Item>
                            <NextToTrip.Item>
                                <Link to={`/trip/${trip.id}`}>
                                    <NextToTrip.Button disabled={totalSeatsLeft(trip.seats) ? false : true}>Book a seat</NextToTrip.Button>
                                </Link>
                            </NextToTrip.Item>
                        </NextToTrip.Base>
                    )
                })}
            </NextToTrip>
    )
}
export default NextToTrips;