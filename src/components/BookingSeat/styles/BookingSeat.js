import styled from 'styled-components';

export const BlockContainer = styled.div`
    max-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    @media (min-width: 720px) {
        max-width: 60%;
        margin-left: 20%;
        margin-right: 20%;
    }
`;

export const Wrapper = styled.div`
    display: block;
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 330px;
    margin: auto;
    margin-bottom: 20px;
    
`;
export const Inframe = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const Image = styled.img`
    max-width: 160px;
    margin: auto;
`;
export const Img = styled.img`
    width: 65px;
    height: auto;
`;
export const InfoHeading = styled.div`
    margin-left: 20px;
`;
export const SubTitle = styled.h2`
    color: #000000;
    font-weight: bold;
    font-size: 34px;
`;
export const SubText = styled.p`
    color: #E53170;
    font-weight: bold;
    font-size: 34px;
`;

export const SubContainer = styled.div``;

export const Base = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-top: 30px;
    gap: 30px;
    div:first-of-type {
        max-width: 260px;
        margin-left: 0;
        margin-right: auto;
        display: block;
        img {
            width: 50px;
            margin-bottom: 10px;
            margin-right: 10px;
        }
    }
`;

export const Info = styled.p``;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 70%;
    button {
        white-space: nowrap;
    }
`;
