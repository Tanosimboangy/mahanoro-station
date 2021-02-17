import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeat, availableSeats, getSeats, showModal} from '../actions';
import availableSeat from '../../design/available_seat.png';
import bookedSeat from '../../design/booked_seat.png';
import Container from '../components/BookingSeat';
import Modal from './Modal';
const Url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU";


function BookingSeats() {
    const {seatId} = useParams();
    const dispatch = useDispatch();
    const nextTrips = useSelector(state => state.nextTrips);
    const bookingSeat = useSelector(state => state.bookingSeat);
    const pickSeats = useSelector((state) => state.pickSeats);
    const modal = useSelector((state) => state.showModal);
    const bookingSeatDetails = nextTrips.filter(item => item.id == seatId);

    // Fetching the nextTrips data 
    useEffect(() => {
        dispatch(setBookingSeat(bookingSeatDetails));
    }, [nextTrips])

    // Finding the seat(s) which are/is booked and flip the available bollean into false
    function handleSeat(e) {
        const el = e.target.id;
        const chosenSeats = bookingSeat[0].seats.find(item => item.id = el);
        dispatch(getSeats(chosenSeats));
        dispatch(availableSeats(el));
        console.log(chosenSeats);
    }


    return (
        <Container>
            {bookingSeatDetails.map(item => {
                const getDate = new Date(item.departureTime);
                const departureTime = format(getDate, "k':'m");
                const departureDate = format(getDate, 'MM/dd/yyyy');
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
                            <Container.Inframe>
                                <p>PICK A SEAT</p>
                                <p>TRIP INFORMATION</p>
                            </Container.Inframe>
                            <Container.Base key={item.id}>
                                <div>
                                    {item.seats.map(seat => seat.isAvailable ? 
                                    <img key={seat.id} onClick={handleSeat} src={availableSeat} id={seat.id} alt="seat"/> : 
                                    <img key={seat.id} src={bookedSeat} alt="cars"/>)}
                                </div>
                                <div>
                                    <p>Departure time: <span>{departureTime}, {departureDate}</span></p>
                                    <p>Driver's name: <span>{item.driverName}</span></p>
                                    <p>Driver's contact: <span>{item.driverContact}</span></p>
                                    <p>Estimated duration <span>{item.estimatedDuration}</span></p>
                                    <p>Break: <span>{item.breaks}</span></p>
                                    <p><span>{item.price}</span> Ar/seat</p>
                                </div>
                            </Container.Base>
                            <Container.Button>
                                <button onClick={(e) => dispatch(showModal(true))}>Book {`${pickSeats.length > 1}` ? `${pickSeats.length}  seats` : `${pickSeats.length} seat`}</button>
                                <p>TOTAL: Ar</p>
                            </Container.Button>
                        </Container.SubContainer>
                        {modal && <Modal closeModal={() => dispatch(showModal(false))}/>}
                    </Container.Wrapper>
                )})}
        </Container>
    )
}
export default BookingSeats;
