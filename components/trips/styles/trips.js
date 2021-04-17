import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  justify-content: center;
  @media (min-width: 1114px) {
    grid-template-columns: auto auto;
    column-gap: 82px;
    row-gap: 38px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
  img {
    width: 80px;
    height: 80px;
  }
`

const CityNameContainer = styled.div`
  background-color: #000000;
  margin-bottom: 16px;
  padding: 16px 24px;
  @media (max-width: 420px) {
    padding: 10px 18px;
  }
`

const Base = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const Icon = styled.img`
  width: 34px;
  height: 36px;
  margin-top: 0;
  margin-right: 52px;
`

const CityName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 420px) {
    font-size: 22px;
    line-height: 30px;
  }
`

export { Container, HeaderContainer, CityNameContainer, Base, Icon, CityName }
