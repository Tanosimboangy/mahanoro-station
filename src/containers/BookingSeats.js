import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeat } from '../actions';
import availableSeat from '../../design/available_seat.png';
import bookedSeat from '../../design/booked_seat.png';


function BookingSeats() {
    const dispatch = useDispatch();
    const {seatId} = useParams();
    const data = useSelector(state => state.data);
    const bookingSeat = useSelector(state => state.bookingSeat);
    const bookingSeatDetails = data.filter(item => item.id == seatId);
    useEffect(() => {
        dispatch(setBookingSeat(bookingSeat));
    }, [data])
    console.log(bookingSeatDetails);

    return (
        <div>
            <h2>Book a seat to: </h2>
            <div>
                <div>
                    <p>PICK A SEAT</p>
                    <p>TRIP INFORMATION</p>
                </div>
                <div>
                    {bookingSeatDetails.map(item => 
                        <Fragment key={item.id}>
                            <div>
                                {item.seats.map(items => {
                                    return (
                                        <div key={items.id}>
                                            {items.available = "true" ? <img src={availableSeat} /> : <img src={bookedSeat} />}
                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                <p>Departure time:  {item.departureTime}</p>
                                <p>Driver:  {item.driverName}</p>
                                <p>Driver's contact:  {item.driverContact}</p>
                                <p>Estimated duration: :  {item.estimatedDuration}</p>
                                <p>Break:  {item.breaks}</p>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}
export default BookingSeats;