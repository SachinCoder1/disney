import React from 'react'
import styled from 'styled-components'
import backImg from '../images/login-background.jpg'
import logoOne from '../images/cta-logo-one.svg'
import logoTwo from '../images/cta-logo-two.png'


function Login() {
    return (
       <Container>
           <LoginCont>
               <img src={logoOne} alt="" />
               <Btn>
                  Get all there
               </Btn>
               <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur consequuntur labore vero in a, incidunt necessitatibus.
               </p>
               <img src={logoTwo} alt="" />

           </LoginCont>
       </Container>
    )
}

export default Login

const Container = styled.div`

min-height: calc(100vh - 70px);
background-image: url(${backImg});
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
`

const LoginCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

img{
    width: 40%;
}
p{
    width: 40%;
    color: white;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 1.5px;
    margin-bottom: 20px;

}

`

const Btn = styled.div`
    background-color: rgb(71, 71, 245);
  color: white;
  width: 30%;
  padding: 10px 10px;
  text-align: center;
  cursor: pointer;
  margin: 20px 0px;
  &:hover{
  background-color: rgb(94, 94, 241);
  }
`
