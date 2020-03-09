import React from 'react';
import styled from 'styled-components';
import MyPageTemplate from '../components/templates/MyPageTemplate';


const AddFriend = () => {
  return (
    <MyPageTemplate>
      <Text>Add Friend!</Text>
    </MyPageTemplate>
  );
}

const Text = styled.div`
  font-size: 100px;
  text-align: center;
  margin: 100px;
`

export default AddFriend;

