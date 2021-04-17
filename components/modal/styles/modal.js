import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  position: fixed;
  padding-top: 231px;
  top: -20%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
`

const OuterModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InnerModal = styled.div`
  position: relative;
  display: grid;
  width: 65%;
  background: #ffffff;
  box-sizing: border-box;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 5px;
`

const CancelButton = styled.button`
  font-size: 28px;
  align-self: right;
  background: none;
  border: none;
  outline: none;
  padding-top: 48px;
  position: absolute;
  top: -44px;
  right: 16px;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
`

const Icon = styled.img`
  align-self: center;
  width: 50px;
  margin-top: 8px;
  margin-right: 16px;
`

const Heading = styled.h2`
  font-weight: bold;
  margin-top: 50px;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`

const Button = styled.button`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  background-color: #e53170;
  color: #ffffff;
  padding: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  border: none;
`

export {
  Container,
  OuterModal,
  InnerModal,
  CancelButton,
  HeadingContainer,
  Icon,
  Heading,
  Text,
  Button,
}
