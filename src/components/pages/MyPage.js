import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import Friend from '../Friend';
import MyPageTemplate from '../templates/MyPageTemplate';


const MyPage = () => {

  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    const addFriend = db.collection('friends').onSnapshot((querySnapshot) => {
      const friends = querySnapshot.docs.map(doc => {
        return {
          friendId: doc.id,
          ...doc.data()
        }
      });
      setFriends(friends);
      console.log(friends);
    });
    return () => {
      addFriend();
    }
  }, []);
  return (
    <MyPageTemplate>
        <MyPageTitle>- My Page -</MyPageTitle>
        <Container>
          <Grid relaxed columns={4}>
            {friends.map((friend, index) => {
              const { friendId, friendName, friendCountry } = friend;
              return (
                <Grid.Column key={index}>
                  <Friend 
                    friendId = {friendId}
                    // image = {image}
                    friendName = {friendName}
                    // countryCity = {countryCity}
                    friendCountry = {friendCountry}
                    // flag = {flag}
                  />
                </Grid.Column>
              )
            })}
          </Grid>
        </Container>
    </MyPageTemplate>
  );
}

const Container = styled.div`
  margin-top: 40px;
  text-align: center;
`
const MyPageTitle = styled.div`
  padding: 32px 0;
  font-size: 32px;
  text-align: center;
` 

export default MyPage;