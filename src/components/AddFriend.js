import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as firebase from 'firebase';

import styled from 'styled-components';
import MyPageTemplate from '../components/templates/MyPageTemplate';
const db = firebase.firestore();

const AddFriend = () => {
  const [friendName, setFriendName] = useState("");
  const [friendCountry, setFriendCountry] = useState("");
  
  const handleClickAddButton = async () => {
    if (!friendName || !friendCountry) {
      alert('"friendName" or "friendCountry" が空です！');
      return;
    }

    await db.collection('friends').add({
        friendName: friendName,
        friendCountry: friendCountry
      });
      setFriendName("");
      setFriendCountry("");
  };

  const handleChangeFriendName = e => {setFriendName(e.target.value)}

  const handleChangeFriendCountry = e => {setFriendCountry(e.target.value)}

  return (
    <MyPageTemplate>
      <BgMask>
        <Card>
          <Container>
            <Link to='/mypage'><Close>Close</Close></Link>
            <Title>Add Friend</Title>
              <form action="#">
                <Label htmlFor="name">
                  Friend Name
                </Label>
                <Input>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={friendName}
                    onChange={handleChangeFriendName}
                  />
                </Input>

                <Label htmlFor="country">
                  country
                </Label>
                <Input
                  type="select"
                  value={friendCountry}
                  onChange={handleChangeFriendCountry}
                >
                  <select name="country">
                    <option>Select Country</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </Input>

                <Link to='./mypage'>
                  <Button onClick={handleClickAddButton}>Add Friend</Button>
                </Link>
              </form>
          </Container>
        </Card>
      </BgMask>
    </MyPageTemplate>
  );
}

const BgMask = styled.div`
  background-color: rgba(45, 45, 45, 0.54);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Close =styled.div`
  position: absolute;
  right: 40rem;
  color: #333;
  font-size: 16px;
`
const Title = styled.div`
  color: #333;
  font-size: 32px;
  letter-spacing: 1.5px;
  margin: 32px auto;
  text-align: center;
`
const Container = styled.div`
  margin-top: 50px;
  text-align: center;
  margin: 0 auto 10px;
`
const Card = styled.div`
  min-width: 400px;
  min-height: 450px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background: #eef5ee;
  box-shadow: 20px 20px 60px #cad0ca, -20px -20px 60px #ffffff;
`
const Label = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`
const Input = styled.div`
  border-radius: 5px;
  padding:10px;
  font-size:16px;
`
const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 14px;
  background: transparent;
  border-radius: 40px;
  border: 2px solid palevioletred;
  color: #333;
  margin: 8px auto 0;
  padding: 16px 24px;
  letter-spacing: 1.5px;
  display: block;
  &:focus {
    outline:0
  };
  &:hover {
    background-color: pink;
    border: none;
  };
`

export default AddFriend;
