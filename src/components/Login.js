import React from 'react'
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <ContentBox>
        <CntBxlogoOne src='images/cta-logo-one.svg' />
        <SignUpBtn>
          GET ALL THERE
        </SignUpBtn>
        <Discription>
          Get Premier Access to Raa and the Last Drogon for an additional fee with a Disney+ subscription. As of 03/26/2024, the price of Disney+ and The Disney Bundle will increase by $1.
        </Discription>
        <CntBxlogoTwo src='images/cta-logo-two.png' />
      </ContentBox>
    </Container>
  )
}

export default Login

const Discription = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`

const SignUpBtn = styled.a`
width: 100%;
background: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transiton: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
  background: #0483ee;
}
`

const CntBxlogoOne = styled.img`
`
const CntBxlogoTwo = styled.img`
width: 90%;

`

const ContentBox = styled.div`
display: flex;
flex-direction: column;
max-width: 650px;
padding: 90px 40px;
width: 80%;
margin-top: 100px;
align-items: center;
`

const Container = styled.div`
display: flex;
align-items: top;
justify-content: center;
positon: relative;
height: calc(100vh - 70px);

&:before {
  background-position: top;
  backgkround-size: cover;
  background: url("images/login-background.jpg") no-repeat fixed;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0; 
  left: 0;
  right: 0;
  opacity: 0.7;
  z-index: -1;
}
`
