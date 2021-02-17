import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 34px;
    color: #000000;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        width: 60px;
        margin-right: 20px;
    }
`; 
export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 484px;
    margin: auto;
`; 
export const Item = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    align-items: baseline; 
    justify-content: space-between;
    background: #0F0E17;
    cursor: pointer;
    padding: 16px;
    width: 200px;
    white-space: nowrap;
`; 
export const Img = styled.img`
    width: 20px;
    margin-right: 20px;
`; 
export const Text = styled.span`
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
`; 