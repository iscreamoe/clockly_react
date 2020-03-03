import React from 'react';
import { Link } from "react-router-dom";
import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import images from '../images/toppage.jpg';

const TopPage = () => (
  <>
    <Wrapper>
      <Header as='h2' icon textAlign='center' className="top_header">
        <Logo>
          <Icon name='clock outline' circular />
            <Title>CLOCKLY</Title>
        </Logo>
      </Header>
      <Container>
        <Button>Sign up</Button>
        <Button><Link to='/MyPage'>Log in</Link></Button>
      </Container>
    </Wrapper>
  </>
)

const Wrapper = styled.div`
  background-image: url(${images});
  background-size: cover;
  height: 100vh;
` 
const Logo = styled.div`
  padding-top: 32px;
` 

const Title = styled.div`
  color: #fff;
  font-size: 32px;
  letter-spacing: 1.5px;
  margin-top: 32px;
`
const Container = styled.div`
  margin-top: 50px;
  text-align: center;
`
const Button = styled.button`
  background: transparent;
  border-radius: 40px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: 24px;
  padding: 16px 24px;
  letter-spacing: 1px;
`

export default TopPage;