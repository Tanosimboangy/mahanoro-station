import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeat } from '../actions';
import availableSeat from '../../design/available_seat.png';
import bookedSeat from '../../design/booked_seat.png';
import styled from "styled-components"

const Image = styled.div`
    max-width: 160px;
    margin: auto;
    img {
        width: 40px;
        height: auto;
    }
`; 
const Base = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 30px;
`; 
const Button = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80%;
    button {
        white-space: nowrap;
    }
`; 
const Container = styled.div`
    max-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    h2 {
        font-weight: bold;
        font-size: 34px;
        color: #000000;
        span {
            color: #E53170;
        }
    }
`; 


function BookingSeats() {
    const dispatch = useDispatch();
    const {seatId} = useParams();
    const data = useSelector(state => state.data);
    const bookingSeat = useSelector(state => state.bookingSeat);
    const bookingSeatDetails = data.filter(item => item.id == seatId);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        dispatch(setBookingSeat(bookingSeat));
    }, [data])

    function showModal() {
        
    }

    return (
        <Container>
            {bookingSeatDetails.map(item => {
                return (
                    <Fragment key={item.id}>
                        <h2>Book a seat to: <span>{item.destination}</span></h2>
                        <div>
                            <div>
                                <p>PICK A SEAT</p>
                                <p>TRIP INFORMATION</p>
                            </div>
                            <Base key={item.id}>
                                <Image>
                                    {item.seats.map(items => {
                                        return (
                                            <Fragment key={items.id}>
                                                {items.available = "true" ? <img src={availableSeat}/> : <img src={availableSeat}/>}
                                            </Fragment>
                                        )
                                    })}
                                </Image>
                                <div>
                                    <p>Departure time:  {item.departureTime}</p>
                                    <p>Driver:  {item.driverName}</p>
                                    <p>Driver's contact:  {item.driverContact}</p>
                                    <p>Estimated duration: :  {item.estimatedDuration}</p>
                                    <p>Break:  {item.breaks}</p>
                                    <p><span>{item.price}</span> Ar/seat</p>
                                </div>
                            </Base>
                            <Button>
                                <button onClick={showModal}>Book seats</button>
                                <p>TOTAL: Ar</p>
                            </Button>
                        </div>
                    </Fragment>
                )})}
        </Container>
    )
}
export default BookingSeats;
// new Date(1613397600).toLocaleDateString('en-US', { weekday: 'long' }) = day
// new Date(1504095567183).toLocaleDateString("en-US") = date
//  = time