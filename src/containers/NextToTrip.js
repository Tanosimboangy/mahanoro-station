import React, { useEffect } from 'react';
import {format} from 'date-fns';
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

    // Getting the next trip data and store them into the nextrips array
    useEffect(() => {
        dispatch(setNextTrip(nextDestination));
    }, [data])

    // Gettin the number of the seats by its length
    const totalSeatsLeft = (item) => {
        return item.filter(seat => seat.isAvailable).length
    }

    return (
        <NextToTrip>
            <NextToTrip.Heading>
                <NextToTrip.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUki2YIQSsl1Ktkh0oMVtv8xLg9-VvFfNuEQ&usqp=CAU" alt="clock_image"/>
                <NextToTrip.HeaderWrapper>
                    <NextToTrip.HeaderTitle>Next trips to:</NextToTrip.HeaderTitle>
                    <NextToTrip.HeaderText>{destination}</NextToTrip.HeaderText>
                </NextToTrip.HeaderWrapper>
            </NextToTrip.Heading>
                {nextTrips && nextTrips.map(trip => {
                    const getDate = new Date(trip.departureTime);
                    const weekday = { weekday: 'long'};
                    const departureDay = new Intl.DateTimeFormat('en-US', weekday).format(trip.departureTime);
                    const departureDate = format(getDate, 'MM/dd/yyyy');
                    const departureTime = format(getDate, "k':'m");
                    const totalSeatsAvailable = totalSeatsLeft(trip.seats);
                    return (
                        <NextToTrip.Base key={trip.id}>
                            <NextToTrip.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU" alt="car"/>
                            <NextToTrip.Item>
                                <NextToTrip.Day>{departureDay}</NextToTrip.Day>
                                <NextToTrip.Time>{departureTime}</NextToTrip.Time>
                            </NextToTrip.Item>
                            <NextToTrip.Item>
                                <NextToTrip.Date>{departureDate}</NextToTrip.Date>
                                <NextToTrip.Seats>
                                    { totalSeatsAvailable > 1 ? `${totalSeatsAvailable} seats`:`${totalSeatsAvailable} seat`} left.
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