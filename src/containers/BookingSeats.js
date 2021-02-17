import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeat, getSeats} from '../actions';
import availableSeat from '../../design/available_seat.png';
import bookedSeat from '../../design/booked_seat.png';
import Container from '../components/BookingSeat';
const Url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU";

 
function BookingSeats() {
    const dispatch = useDispatch();
    const {seatId} = useParams();
    const nextTrips = useSelector(state => state.nextTrips);
    const bookingSeat = useSelector(state => state.bookingSeat);
    const pickSeats = useSelector((state) => state.pickSeats);
    const bookingSeatDetails = nextTrips.filter(item => item.id == seatId);

    useEffect(() => {
        dispatch(setBookingSeat(bookingSeatDetails));
    }, [nextTrips])

    function handleSeat(e) {
        console.log(bookingSeat);
        const chosenSeats = bookingSeat.map(item =>
            item.map(seat => seat)
            // return .seats(seat => seat.id == e.target.id
        );
        console.log(chosenSeats);
        // const seatItem = bookingSeat.map(item => 
        //     item.seats.map(seat => 
        //         console.log(seat.id)
        //         // seat.isAvailable =  "false",
        //     ),
        // );
    }

    return (
        <Container>
            {bookingSeatDetails.map(item => {
                return (
                    <Container.Wrapper key={item.id}>
                        <Container.Frame>
                            <Container.Img src={Url} alt="buss_image"/>
                            <Container.InfoHeading>
                                <Container.SubTitle>
                                    Book a seat to: 
                                </Container.SubTitle>
                                <Container.SubText>
                                    {item.destination}
                                </Container.SubText>
                            </Container.InfoHeading>
                        </Container.Frame>
                        <Container.SubContainer>
                            <Container.Frame>
                                <p>PICK A SEAT</p>
                                <p>TRIP INFORMATION</p>
                            </Container.Frame>
                            <Container.Base key={item.id}>
                                <div>
                                    {item.seats.map(seat => seat.isAvailable ? 
                                    <img key={seat.id} onClick={handleSeat} src={availableSeat} id={seat.id} alt="seat"/> : 
                                    <img key={seat.id} src={bookedSeat} alt="cars"/>)}
                                </div>
                                <div>
                                    <p>Departure time:  {item.departureTime}</p>
                                    <p>Driver:  {item.driverName}</p>
                                    <p>Driver's contact:  {item.driverContact}</p>
                                    <p>Estimated duration: :  {item.estimatedDuration}</p>
                                    <p>Break:  {item.breaks}</p>
                                    <p><span>{item.price}</span> Ar/seat</p>
                                </div>
                            </Container.Base>
                            <Container.Button>
                                <button>Book {`${pickSeats.length < 2}` ? `${pickSeats.length}  seat` : `${pickSeats.length} seats`}</button>
                                <button>Book seat</button>
                                <p>TOTAL: Ar</p>
                            </Container.Button>
                        </Container.SubContainer>
                    </Container.Wrapper>
                )})}
        </Container>
    )
}
export default BookingSeats;
