import React from 'react';

import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import Friend from '../Friend';
import MyPageTemplate from '../templates/MyPageTemplate';


const MyPage = () => {

  const friends = [
    { id: 1, image: "https://picsum.photos/id/237/150/150", name: "foobar", countryCity: "California", countryName: "United States", flag: "us flag" },
    { id: 2, image: "https://picsum.photos/id/666/150/150", name: "hoge", countryCity: "Kuala Lumpur", countryName: "Malaysia", flag: "my flag" },
    { id: 3, image: "https://picsum.photos/id/222/150/150", name: "fuga", countryCity: "Melbourne", countryName: "Australia", flag: "au flag" },
    { id: 4, image: "https://picsum.photos/id/555/150/150", name: "piyo", countryCity: "Paris", countryName: "France", flag: "fr flag" },
];

  return (
    <MyPageTemplate>
      <Wrapper>
        <MyPageTitle>- My Page -</MyPageTitle>
        <Container>
          <Grid relaxed columns={4}>
            {friends.map((friend, index) => {
              const { id, image, name, countryCity, countryName, flag } = friend;
              return (
                <Grid.Column key={index}>
                  <Friend 
                    id = {id}
                    image = {image}
                    name = {name}
                    countryCity = {countryCity}
                    countryName = {countryName}
                    flag = {flag}
                    />
                </Grid.Column>
              )
            })}
          </Grid>
        </Container>
      </Wrapper>
    </MyPageTemplate>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  height: 100vh;
` 
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