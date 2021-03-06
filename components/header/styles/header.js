import styled from 'styled-components'

const Container = styled.header`
  background: #0f0e17;
  padding-top: 28px;
  padding-bottom: 30px;
  padding-right: 20px;
  padding-left: 20px;
  @media (min-width: 1330px) {
    padding-right: 0;
    padding-left: 0;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 720px) {
    max-width: 1290px;
    margin: auto;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-weight: normal;
  font-style: normal;
  font-size: 36px;
  line-height: 43px;
  a {
    color: #fffffe;
  }
  @media (max-width: 540px) {
    font-size: 26px;
    line-height: 30px;
  }
`
const Logo = styled.img`
  width: 35px;
  height: 41px;
  margin-right: 30px;
`
const LinkContainer = styled.div`
  a {
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    color: #a7a9be;
  }
`
const Link = styled.a``

const PageTitle = styled.h2`
  font-size: 54px;
  line-height: 66px;
  font-style: normal;
  font-weight: bold;
  color: #000000;
  @media (max-width: 350px) {
    font-size: 35px;
    line-height: 42px;
  }
`

const Span = styled.span`
  font-weight: 300;
  font-size: 54px;
  line-height: 66px;
  color: #e53170;
  @media (max-width: 350px) {
    font-size: 35px;
    line-height: 42px;
  }
`

const PageTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 52px;
  }
`

export {
  Container,
  HeaderContainer,
  HeadingContainer,
  PageTitleContainer,
  Logo,
  Title,
  Span,
  LinkContainer,
  Link,
  PageTitle,
}
