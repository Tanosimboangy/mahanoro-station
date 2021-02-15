import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        max-width: 474px;
        margin: auto;
        li {
            background: #0F0E17;
            padding: 16px;
            font-weight: normal;
            font-size: 24px;
            text-align: center;
            text-transform: uppercase;
            width: 205px;
            box-sizing: border-box;
            a {
                color: #FFFFFF;
            }
        }
    }
`; 

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 34px;
    color: #000000;
    margin-bottom: 100px;
`; 