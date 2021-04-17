import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1000px) {
    max-width: 100%;
    margin-left: 10%;
    margin-right: 10%;
  }
`

const Frame = styled.div``
const Image = styled.img`
  width: 70px;
  height: 70px;
`
const Day = styled.span`
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  color: #ff8906;
`

const Time = styled.span`
  ${Day}
`
const Date = styled.span`
  ${Day};
  color: #000000;
`

const SeatsInfo = styled.span`
  ${Date}
`
const ButtonContainer = styled.div`
  background: #e53170;
  margin-bottom: 32px;
`
const Button = styled.button`
  ${Day};
  background: #e53170;
  margin-bottom: 32px;
  padding-top: 31px;
  padding-bottom: 31px;
  padding-left: 25px;
  padding-right: 25px;
  color: #ffffff;
  border: transparent;
`

export {
  Container,
  Frame,
  Image,
  Day,
  Time,
  Date,
  SeatsInfo,
  ButtonContainer,
  Button,
}
