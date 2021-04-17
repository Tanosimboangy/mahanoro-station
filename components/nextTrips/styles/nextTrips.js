import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 30px;

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

const Frame = styled.div`
  margin-top: 20px;
`
const Image = styled.img`
  width: 70px;
  height: 70px;
`
const Day = styled.span`
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  color: #ff8906;
`

const Time = styled.span`
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  color: #ff8906;
`
const Date = styled.span`
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  color: #000000;
`

const SeatsInfo = styled.span`
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  color: #000000;
`
const ButtonContainer = styled.div`
  background: #e53170;
  margin-bottom: 32px;
`
const Button = styled.button`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  background: #e53170;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  color: #ffffff;
  border: none;
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
