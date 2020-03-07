import React from 'react';
import { Link } from "react-router-dom";

import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import bgImg from '../images/bgImg.jpg';
import Button from '../components/01_atoms/Button'

const TopPage = () => {
  return (
      <Wrapper>
        <Header as='h2' icon textAlign='center' className="top_header">
          <Logo>
            <Icon name='clock outline' />
            <Title>CLOCKLY</Title>
          </Logo>
        </Header>
        <Container>
          <Link to='/signup'><Button
              name = "SIGNUP"
            />
          </Link>
          <Link to='/login'><Button
              name = "LOGIN"
            />
          </Link>
        </Container>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  height: 100vh;
` 
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

export default TopPage;