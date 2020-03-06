import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import loginBg from '../images/loginBg.jpg';

const Login = () => {
  return (
    <>
    <App>
    <Card>
    <Title>Login</Title>
        <form>
          <p>Email</p>
          <input type="email" />
          <p>password</p>
          <input type="password" />
          <Link to='/mypage'>
            <input type="submit" value="LOGIN" />
          </Link>
        </form>
    </Card>
    </App>
    </>
  );
}

const Title = styled.div`
  color: #333;
  font-size: 32px;
  letter-spacing: 1.5px;
  margin: 32px auto;
  text-align: center;
`
const App = styled.div`
  background: #eef5ee;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${loginBg});
  background-size: cover;
  height: 100vh;
`
const Card = styled.div`
  min-width: 400px;
  min-height: 400px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background: #eef5ee;
  box-shadow: 20px 20px 60px #cad0ca, -20px -20px 60px #ffffff;
`

export default Login;