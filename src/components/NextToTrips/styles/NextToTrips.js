import styled from "styled-components";
export const Wrapper = styled.div`
    max-width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    /* font-family: Rubik; */
    font-style: normal;
    @media (min-width: 720px) {
        max-width: 60%;
        margin-left: 20%;
        margin-right: 20%;
    }
`;
export const Heading = styled.div`
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 60%;
    margin: auto;
    margin-bottom: 50px;
    img {
        width: 60px;
        margin-right: 20px;
    }
    div {
        h2 {
            font-weight: bold;
            font-size: 34px;
            color: #000000;
        }
        p {
            color: #E53170;
            font-weight: bold;
            font-size: 34px;
        }
    }
`;
export const Base = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Image = styled.img`
    width: 40px;
    height: auto;
`;
export const Day = styled.p`
    color: #FF8906;
`;
export const Time = styled.p`
    color: #FF8906;
`;
export const Date = styled.p`

`;
export const Seats = styled.p`
    div {
        span {
            color: #E53170;
        }
    }
`;
export const Button = styled.button`
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

    &:disabled {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #E53170;
        cursor: not-allowed;
    }
`;



// import styled from 'styled-components';

// const Container = styled.div`
//         display: grid;
//         justify-content: center;

//     @media(min-width: 1114px){
//         display: flex;
//         justify-content: space-between;
//     }
// `;

// const Frame = styled.div``;
// const Image = styled.img`
//     max-width: 100%;
// `;
// const Day = styled.span`
//     font-weight: normal;
//     font-size: 36px;
//     line-height: 43px;
//     color: #FF8906
// `;

// const Time = styled.span`${Day}`;
// const Date = styled.span`
//     ${Day};
//     color: #000000;
// `;

// const SeatsInfo = styled.span`${Date}`;
// const ButtonContainer = styled.div`
//     background: #E53170;
//     margin-bottom: 32px;
// `;

