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
  margin-bottom: 55px;
  img {
    width: 80px;
    height: 80px;
  }
`

const CityNameContainer = styled.div`
  display: flex;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 16px;
  padding: 16px 24px;
  @media (max-width: 420px) {
    padding: 10px 18px;
    flex-wrap: wrap;
  }
`

const Icon = styled.img`
  width: 34px;
  height: 36px;
  margin-top: 10px;
  margin-right: 31px;
`

const CityName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 420px) {
    font-size: 22px;
    line-height: 30px;
  }
`

export { Container, HeaderContainer, CityNameContainer, Icon, CityName }
