import styled from 'styled-components';

export const BlockContainer = styled.div`
    max-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
`;

export const Wrapper = styled.div`
    display: block;
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: initial;
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
    align-items: baseline;
    margin-top: 30px;
    gap: 30px;
`;

export const Info = styled.p``;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80%;
    button {
        white-space: nowrap;
    }
`;
