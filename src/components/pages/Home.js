import React from 'react';
import { Link } from "react-router-dom";

import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import HomeTemplate from '../templates/HomeTemplate';

const Home = () => {
  return (
    <HomeTemplate>
      <Header as='h2' icon textAlign='center' className="top_header">
          <Logo>
            <Icon name='clock outline' />
            <Title>CLOCKLY</Title>
          </Logo>
        </Header>
        <Container>
          <Link to='/signup'>
            <Button>SIGNUP</Button>
          </Link>
          <Link to='/login'>
            <Button>LOGIN</Button>
          </Link>
        </Container>
    </HomeTemplate>
  )
}

const Logo = styled.div`
  padding-top: 32px;
  color: #fff;
` 
const Title = styled.div`
  font-size: 32px;
  letter-spacing: 1.5px;
  margin-top: 32px;
`
const Container = styled.div`
  margin-top: 50px;
  text-align: center;
  color: #fff;
`
const Button = styled.button`
  width: 150px;
  height: 60px;
  font-size: 16px;
  background: transparent;
  border-radius: 40px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: 24px;
  padding: 16px 24px;
  letter-spacing: 1.5px;
  display: inline-block;
  &:focus {
    outline:0
  };
  &:hover {
    background-color: rgb(197, 171, 172);
    border: none;
  };
`
export default Home;