import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeat, seatBookedSeats} from '../actions';
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
    margin-top: 30px;
    gap: 30px;
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
`; 
const Wrapper = styled.div`
    
`; 
const Frame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`; 
const Img = styled.img`
    width: 70px;
`; 
const InfoHeading = styled.div`
    margin-left: 20px;
    h2 {
        color: #000000;
        font-weight: bold;
        font-size: 34px;
    }
    p {
        color: #E53170;
        font-weight: bold;
        font-size: 34px;
    }
`; 

function BookingSeats() {
    const dispatch = useDispatch();
    const {seatId} = useParams();
    const data = useSelector(state => state.data);
    const bookingSeat = useSelector(state => state.bookingSeat);
    const bookingSeatDetails = data.filter(item => item.id == seatId);
    useEffect(() => {
        dispatch(setBookingSeat(bookingSeatDetails));
    }, [data])
    console.log(bookingSeatDetails);
    function handleSeat(e) {
        console.log(bookingSeat);
        // const seatItem = bookingSeat[1].map(item => 
        //     item.seats.map(seat => 
        //         seat.isAvailable =  "false",
        //     ),
        // );
    }

    return (
        <Container>
            {bookingSeatDetails.map(item => {
                return (
                    <Wrapper key={item.id}>
                        <Frame>
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU" alt="buss_image"/>
                            <InfoHeading>
                                <h2>Book a seat to: </h2>
                                <p>{item.destination}</p>
                            </InfoHeading>
                        </Frame>
                        <div>
                            <div>
                                <p>PICK A SEAT</p>
                                <p>TRIP INFORMATION</p>
                            </div>
                            <Base key={item.id}>
                                <Image>
                                    {item.seats.map(seat => {
                                        return seat.isAvailable 
                                        ? <img key={seat.id} onClick={handleSeat} src={availableSeat} id={seat.id} alt="cars"/>
                                        : <img key={seat.id} src={bookedSeat} alt="cars"/>
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
                                <button>Book seats</button>
                                <p>TOTAL: Ar</p>
                            </Button>
                        </div>
                    </Wrapper>
                )})}
        </Container>
    )
}
export default BookingSeats;
