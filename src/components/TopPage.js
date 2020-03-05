import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import bgImg from '../images/bgImg.jpg';

const Modal = ({ hideModal }) => {
  return (
    <ModalMask>
      <ModalContents>
      <form action="#">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="yourname" />
          </div>

          <div>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="your-email" />
          </div>

          <div>
            <label for="message">お名前</label>
            <textarea id="message" name="your-message"></textarea>
          </div>

            <input type="submit" class="button" value="Sign Up" /> 
          <ModalClose onClick={hideModal}>
            Sign Up
          </ModalClose>
        </form>
        
      </ModalContents>
    </ModalMask>
  );
};

const TopPage = () => {
  const [isShow, setIsShow] = useState(false);
  const showModal = () => setIsShow(true);
  const hideModal = () => setIsShow(false);
  return (
    <>
      {isShow && <Modal hideModal={hideModal} />}
      <Wrapper>
        <Header as='h2' icon textAlign='center' className="top_header">
          <Logo>
            <Icon name='clock outline' circular />
              <Title>CLOCKLY</Title>
          </Logo>
        </Header>
        <Container>
          <Button onClick={showModal}>Sign up</Button>
          <Button><Link to='/MyPage'>Log in</Link></Button>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
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
const ModalMask = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(45, 45, 45, 0.54);

  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContents = styled.div`
  position: relative;
  min-width: 500px;
  min-height: 450px;

  padding: 2rem;

  border-radius: 50px;
  background: #fff;

  text-align: center;
`
const ModalClose = styled.button`
  background: transparent;
  border-radius: 100px / 90px;
  border: 2px solid palevioletred;
  color: gray;
  margin: 16px auto;
  padding: 8px 24px;
  letter-spacing: 1px;
  display: block;
`
export default TopPage;