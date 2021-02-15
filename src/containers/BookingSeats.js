import React, { useEffect } from 'react';
import {  } from '../actions';
import { bookingSeats } from '../actions';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function BookingSeats() {
    const dispatch = useDispatch();

    const { destination, seatsId} = useParams();
    console.log(destination);

    const data = useSelector(state => state.data);
    console.log(data);
    const bookingSeat = useSelector(state => state.bookingSeat);
    console.log(bookingSeat);

    // const bookingSeatDetails = bookingSeats.filter((item) => item.id === seatId);
    // console.log(bookingSeatDetails);

    // useEffect(() => {
    //     dispatch(bookingSeats(bookingSeatDetails));
    // }, [])

    // const bookingSeat = useSelector((state) => state.bookingSeat);
    // console.log(bookingSeats);
    // console.log(bookingSeatDetails);
    // useEffect(() => {
    //     dispatch(setBookingSeats(bookingSeatDetails))
    // }, [])

    return (
        <div>
            <h2>Book a seat to: {destination}</h2>
            <div>
                <div>
                    <p>PICK A SEAT</p>
                    <p>TRIP INFORMATION</p>
                </div>
                <div>
                    <div>seats images</div>
                    <div>seats details</div>
                </div>
            </div>
        </div>
    )
}
export default BookingSeats;