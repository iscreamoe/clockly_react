import React from 'react';
import styled from 'styled-components';
import bgImg from '../../images/bgImg.jpg';

export default ({ children }) => {
  return (
  <Wrapper>
    <main>{children}</main>
  </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  height: 100vh;
` 

