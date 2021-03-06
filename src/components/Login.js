import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';
import HomeTemplate from '../components/templates/HomeTemplate';


const Login = () => {
  return (
    <HomeTemplate>
      <BgMask>
        <Card>
          <Container>
            <Link to='/'><Close>Close</Close></Link>
            <Title>LOGIN</Title>
              <form action="#">
                <Label htmlFor="email">
                  Email
                </Label>
                <Input>
                  <input type="email" name="email" id="email" />
                </Input>

                <Label htmlFor="password">
                  password
                </Label>
                <Input>
                  <input type="password" name="password" id="password" />
                </Input>

                <Link to='/mypage'>
                  <Button>LOGIN</Button> 
                </Link>
              </form>
          </Container>
        </Card>
      </BgMask>
    </HomeTemplate>
  );
}

const BgMask = styled.div`
  background-color: rgba(45, 45, 45, 0.54);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Close =styled.div`
  position: absolute;
  right: 40rem;
  color: #333;
  font-size: 16px;
`
const Title = styled.div`
  color: #333;
  font-size: 32px;
  letter-spacing: 1.5px;
  margin: 32px auto;
  text-align: center;
`
const Container = styled.div`
  margin-top: 50px;
  text-align: center;
  margin: 0 auto 10px;
`
const Card = styled.div`
  min-width: 400px;
  min-height: 450px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background: #eef5ee;
  box-shadow: 20px 20px 60px #cad0ca, -20px -20px 60px #ffffff;
`
const Label = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`
const Input = styled.div`
  border-radius: 5px;
  padding:10px;
  font-size:16px;
`
const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 14px;
  background: transparent;
  border-radius: 40px;
  border: 2px solid palevioletred;
  color: #333;
  margin: 16px auto 0;
  padding: 16px 24px;
  letter-spacing: 1.5px;
  display: block;
  &:focus {
    outline:0
  };
  &:hover {
    background-color: pink;
    border: none;
  };
`

export default Login;