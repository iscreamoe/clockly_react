import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';
import signUpBg from '../images/signUpBg.jpg';
import Button from '../components/01_atoms/Button'

const SignUp = () => {
  return (
    <>
    <App>
    <Card>
    <Title>Sign Up</Title>
        <form>
          <p>User Name</p>
          <input type="text" />

          <p>country</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <p>Email</p>
          <input type="email" />

          <p>password</p>
          <input type="password" />
          <Link to='/mypage'>
            <Button
              name = "SIGNUP"
            />
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

  background-image: url(${signUpBg});
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

export default SignUp;