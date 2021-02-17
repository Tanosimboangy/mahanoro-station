import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Modal = styled.div`
    position: fixed;
    background: rgba(255, 255, 255, 0.8);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const Wrapper = styled.div`
    background: #FFFFFF;
    border: 5px solid #E53170;
    box-sizing: border-box;
    padding: 40px;
    max-width: 550px;
    margin-top: 77px;
    margin-left: calc(50vw - 25%);
    margin-right: calc(50vw - 25%);
     /* font-family: Rubik; */
     font-style: normal;
     display: flex;
     flex-direction: column;
     align-items: center;
`;
const Header = styled.h2`
    padding-top: 20px;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
`;
const Text = styled.p`
    padding-top: 30px;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    max-width: 300px;
    margin: auto;
`;
const Button = styled.button`
    background: #E53170;
    padding: 10px 16px;
    color: #FFFFFF;
    border: transparent;
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
    box-sizing: border-box;
    border: none;
    outline: none;
    margin-top: 20px;
`;


// Dislaying the modal for confirmation of the booking seats
function ShowModal({closeModal}) {
    return (
        <Modal>
            <Wrapper>
                <div onClick={closeModal}>X</div>
                <Header>🧡 Booking comfirmed!</Header>
                <Text>Thank you for trusting our services. Your booking has been added to your account. You can review it there.</Text>
                <Link to="/myAccount">
                    <Button>Check your account</Button>
                </Link>
            </Wrapper>
        </Modal>
    )
}

export default ShowModal;