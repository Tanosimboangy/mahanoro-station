import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Img } from '../components/HomePage/styles/HomePage';
// import { setAccount, setFirstName, setLastName, setPhoneNumber, setBookings } from '../actions';
// import { Header, Account } from '../components';

export default function AccountContainer() {
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    // const updatedAccount = {
    //     firstName: account.firstName,
    //     lastName: account.lastName,
    //     phoneNumber: account.phoneNumber,
    //     bookings: account.bookings
    // }

    return (
        <>
            <header>
                <h2>My account</h2>
                {/* <span>{account.firstName} {account.lastName}</span> */}
            </header>
            <div>
                <div>
                    <h3>My personal information</h3>
                    <form>
                        <div>
                            <label htmlFor="name">First name</label>
                            <input type="text" id="name" onChange={(e) => dispatch(console.log(e.target))}/>
                        </div>
                        <div>
                            <label htmlFor="first_name">First name</label>
                            <input type="text" id="first_name" onChange={(e) => dispatch(console.log(e.target))}/>
                        </div>
                        <div>
                            <label htmlFor="phone_number">First name</label>
                            <input type="text" id="phone_number" onChange={(e) => dispatch(console.log(e.target))}/>
                        </div>
                        <button>Update</button>
                    </form>
                </div>
                <div>
                    <h3>MY BOOKINGS: </h3>
                    {/* {account.bookings?.map(booking =>  */}
                            <div>
                                <div><img src="jjk" alt="A photo of a car" /></div>
                                <div>
                                    {/* <p>{booking.destination}</p> */}
                                    {/* <p>{booking.departureTime}</p> */}
                                </div>
                                <div>
                                    {/* <p>{`${booking.numberOfSeats > 1} ? ${booking.numberOfSeats} seats : ${booking.numberOfSeats} seat`}</p> */}
                                    {/* <p>{booking.price} Ar</p> */}
                                </div>
                                <button>Cancel</button>
                            </div>
                        {/* )}) */}
                    {/* } */}
                </div>
            </div>
        </>
    )
}
