import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {format} from "date-fns";
import { account, firstName, lastName, contact, myBooking } from '../actions';
const Url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU";
import styled from "styled-components";

const Container = styled.div`
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    /* font-family: Rubik; */
    font-style: normal;
    @media(min-width: 720px) {
        max-width: 60%;
        margin-right: 20%;
        margin-left: 20%;
    }
`;
const Header = styled.header`
    max-width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    img {
        width: 40px;
        margin-right: 20px;
    }
    div {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 24px;
        h2 {
            color: #000000;
        }
        span {
            color: #E53170;
        }
    }
`;
const Base = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;
const Info = styled.div`
    h3 {
        font-weight: 500;
        font-size: 20px;
        color: #0F0E17;
        margin-bottom: 20px;
    }
`;
const FORM = styled.form`
    div {
        margin-bottom: 16px; 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        label {
            font-weight: 500;
            font-size: 16px;
            color: #0F0E17;
            margin-bottom: 10px;
        }
        input {
            outline: none;
            padding: 16px;
            background-color: #000000;
            color:  #FF8906;
            border: none;
            cursor: pointer;
        }
    }
    button {
        background: #E53170;
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 10px 16px;
        margin-right: 0;
        margin-left: auto;
        align-self: right;
    }
`;
const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #0F0E17;
    h3 {
        font-weight: 500;
        font-size: 20px;
        color: #0F0E17;
        margin-bottom: 20px;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        img {
            width: 40px;
        }
    }
`;

export default function AccountContainer() {
    const account = useSelector(state => state.setAccount);
    const dispatch = useDispatch();
    const newAccount = {
        firstName: account.firstName,
        lastName: account.lastName,
        contact: account.contact,
        myBooking: account.myBooking,
    }

    return (
        <Container>
            <Header>
                <img src="kds" />
                <div>
                    <h2>My account</h2>
                    <span>{account.firstName} {account.lastName}</span>
                </div>
            </Header>
            <Base>
                <Info>
                    <h3>MY PERSONAL INFORMATION</h3>
                    <FORM onSubmit={(e) => {
                        e.preventDefault();
                        account(newAccount)
                        }}>
                        <div>
                            <label htmlFor="name">First name</label>
                            <input type="text" value={account.firstName} id="name" onChange={(e) => dispatch(firstName(e.target.value))}/>
                        </div>
                        <div>
                            <label htmlFor="first_name">First name</label>
                            <input type="text" value={account.lastName} id="first_name" onChange={(e) => dispatch(lastName(e.target.value))}/>
                        </div>
                        <div>
                            <label htmlFor="phone_number">Phone number</label>
                            <input type="phone" value={account.contact} id="phone_number" onChange={(e) => dispatch(contact(e.target.value))}/>
                        </div>
                        <button>Update</button>
                    </FORM>
                </Info>
                <Frame>
                    <h3>MY BOOKINGS: </h3>
                    {account.myBooking?.map(item => {
                        const getDate = new Date(item.departureTime);
                        const departureTime = format(getDate, "k':'m");
                        const departureDate = format(getDate, 'MM/dd/yyyy');
                        return (
                            <div key={Date.now()}>
                                <img src={Url} alt="car" />
                                <div>
                                    <p>{item.destination}</p>
                                    <span>{departureTime} {departureDate}</span>
                                </div>
                                <div>
                                    <p>{`${item.numberOfSeats > 1}` ? `${item.numberOfSeats} seats` : `${item.numberOfSeats} seat`}</p>
                                    <span>{item.price} Ar</span>
                                </div>
                                <button disabled={item.departureTime - Date.now() > 0 ? true : false}>Cancel</button>
                            </div>

                        )
                    })}
                </Frame>
            </Base>
        </Container>
    )
}
