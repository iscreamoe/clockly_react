import React from 'react';
import styled from 'styled-components';
import MyPageTemplate from '../components/templates/MyPageTemplate';

const Profile = () => {
  return (
    <MyPageTemplate>
      <Text>Profile!</Text>
    </MyPageTemplate>
  );
}

const Text = styled.div`
  font-size: 100px;
  text-align: center;
  margin: 100px;
`

export default Profile;